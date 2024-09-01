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
        logger.info(f"Start subscribing a topic \"{measured_value}\"")


def on_message(client, userdata, msg):
    url = f"http://{backend_ip}:{backend_port}/api/{msg.topic}/"
    measured_value = str(msg.payload)[2:-1]
    print(measured_value)
    # tank_idも同時にsubscribeする形にする
    data = {"tank_id": tank_id, "water_temperature": measured_value}
    response = requests.post(url, data=data)


if __name__ == "__main__":
    client = mqtt.Client(protocol=mqtt.MQTTv311)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(broker_ip, port=broker_port, keepalive=60)
    client.loop_forever()
