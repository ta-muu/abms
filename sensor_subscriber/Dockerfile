FROM python:3.12.4-bullseye
USER root

ENV BROKER_IP_ADRESS 192.168.1.18
ENV BROKER_PORT 8000

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9

RUN apt-get install libcap2 libcjson1 libdlt2 libev4 libmosquitto1 libuv1 libwebsockets16 libwrap0
RUN apt-get install mosquitto
RUN apt-get install mosquitto-clients

RUN pip install paho-mqtt
RUN pip install requests

RUN mkdir -p /opt/sensor_subscriber
COPY ./src/ /opt/sensor_subscriber/

WORKDIR /opt/sensor_subscriber
CMD python subscribe.py