FROM eclipse-mosquitto:2.0.18
USER root

RUN mkdir -p /opt/broker
COPY ./src/ /opt/backend/

WORKDIR /opt/broker
CMD mosquitto -c /opt/broker/mosquitto.conf