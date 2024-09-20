#include <WiFi.h>
#include <PubSubClient.h>
#include <M5Unified.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <RTClib.h>


// --設定値--

const char* ssid = "SGP200W-17A6-bg";     // Wi-FiのSSID
const char* password = "6fJN2mZa";        // Wi-Fiのパスワード

const char* mqtt_server = "192.168.1.18"; // MQTTブローカーのIPアドレス
const int mqtt_port = 1883;               // MQTTブローカーのデフォルトポート

const int sensor_id = 1;                    //センサーID

const unsigned long sleepTime = 5000;     // データ取得間隔[ms]

// -------


#define MQTT_CLIENT_NAME  "abms_sensor"

#define ONE_WIRE_BUS 1 // for M5ATOMS3 port number G1 and Pull_up
#define TEMPERATURE_PRECISION 12 // sensor resolution: 9 - 12bit

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
DeviceAddress tempDeviceAddress;

WiFiClient espClient;
PubSubClient client(espClient);

RTC_DS3231 rtc;

unsigned long sleepStartTime = 0;


void setup() {
  Serial.begin(38400);
  
  sensors.getAddress(tempDeviceAddress, 0); // get device0 address
  sensors.setResolution(tempDeviceAddress, TEMPERATURE_PRECISION); // set resolution

  sensors.begin();
  pinMode(ONE_WIRE_BUS, INPUT_PULLUP); // Wired-OR input mode Pull-up (to Vcc), otherwise input level is always the minimum value (e.g. -127)

  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  sleepStartTime = millis();

  rtc.begin();
  if(!rtc.lostPower()){
    rtc.adjust(DateTime(F(__DATE__),F(__TIME__)));
  }
}


void setup_wifi() {
  delay(10);
  // WiFi接続を開始
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}


void loop(void) {
  client.loop();

  while(!client.connected() ){
    Serial.println("Mqtt Reconnecting");
    if( client.connect(MQTT_CLIENT_NAME) ){
      Serial.println("Mqtt Connected");
      break;
    } else {
      Serial.println("Fail");
    }
    delay(1000);
  }

  // String sensor_id_str = String(sensor_id);

  if(millis() - sleepStartTime >= sleepTime){

    // 水温の取得
    sensors.requestTemperatures();

    //この行移行をあとで関数にする
    const float water_temperatures = sensors.getTempCByIndex(0);
    // String water_temperatures_str = String(sensors.getTempCByIndex(0)); 

    // メッセージの作成
    String message_water_temperatures = "";
    message_water_temperatures += sensor_id;
    message_water_temperatures += "/";
    message_water_temperatures += water_temperatures;

    // brokerへ送信
    const char* message_water_temperatures_pointer = message_water_temperatures.c_str();
    client.publish("water_temperatures", message_water_temperatures_pointer);

    // ログを表示
    Serial.print(millis());
    Serial.print(water_temperatures);
    Serial.println(F("°C"));

    sleepStartTime = millis();

  }
}
