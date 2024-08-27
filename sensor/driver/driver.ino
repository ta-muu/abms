#include <WiFi.h>
#include <PubSubClient.h>
#include <M5Unified.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <RTClib.h>

#define MQTT_CLIENT_NAME  "abms_sensor"

#define ONE_WIRE_BUS 1 // for M5ATOMS3 port number G1 and Pull_up
#define TEMPERATURE_PRECISION 12 // sensor resolution: 9 - 12bit

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
DeviceAddress tempDeviceAddress;

// Wi-FiのSSIDとパスワードを設定
const char* ssid = "SGP200W-17A6-bg";
const char* password = "6fJN2mZa";

// MQTTブローカーの情報を設定
const char* mqtt_server = "192.168.1.18";
const int mqtt_port = 1883; // デフォルトのポート

unsigned long sleepStartTime = 0;
const unsigned long sleepTime = 5000; // 5sec

WiFiClient espClient;
PubSubClient client(espClient);

RTC_DS3231 rtc;

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
    }
    delay(1000);
  }

  if(millis() - sleepStartTime >= sleepTime){

    sensors.requestTemperatures(); // request temp.
    String str = String(sensors.getTempCByIndex(0));
    Serial.print(millis());
    Serial.print(str);
    Serial.println(F("°C"));
    const char* cString = str.c_str();
    client.publish("kame/temp", cString);
    sleepStartTime = millis();

  }
}
