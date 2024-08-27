FROM python:3.12.4-bullseye
USER root

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9

RUN apt-get install -y vim less
RUN apt-get install libcjson1 libmosquitto1 mosquitto-clients
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools

RUN python -m pip install "fastapi[all]"
RUN python -m pip install grove.py


RUN mkdir -p /opt/sensor