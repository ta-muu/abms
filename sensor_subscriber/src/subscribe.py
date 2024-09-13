import paho.mqtt.client as mqtt
import requests
from abc import ABC, abstractmethod
from logging import getLogger, basicConfig,StreamHandler, Formatter,DEBUG

broker_ip = "192.168.1.18"
broker_port = 1883
backend_ip = "backend"
backend_port = 8000
measured_value_list = ["water_temperatures"]
tank_id = 1

basicConfig(level=DEBUG)
logger = getLogger(__name__)
logger.setLevel(DEBUG)

def on_connect(client, userdata, flags, respons_code):
    print("status {0}".format(respons_code))
    for measured_value in measured_value_list:
        client.subscribe(measured_value)
        logger.info(f"Start subscribing -- topic:{measured_value}")


def on_message(client, userdata, msg):
    url = f"http://{backend_ip}:{backend_port}/api/{msg.topic}/"    # POST先のURLを指定
    tank_id, measured_value = str(msg.payload)[2:-1].split('/')     # msg.payload = b"1/20" => tank_id = 1, measured_value = 20
    logger.debug(f"Received message -- topic: {msg.topic}, tank id:{tank_id}, value: {measured_value}")
    data = {"tank_id": tank_id, "water_temperature": measured_value}
    response = requests.post(url, data=data)


if __name__ == "__main__":
    client = mqtt.Client(protocol=mqtt.MQTTv311)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(broker_ip, port=broker_port, keepalive=60)
    client.loop_forever()
