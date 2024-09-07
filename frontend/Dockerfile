FROM python:3.12.4-bullseye
USER root

ENV FRONTEND_IP_ADDRESS 0.0.0.0
ENV FRONTEND_PORT 8000

RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9

RUN mkdir -p /opt/frontend/
COPY ./src/ /opt/frontend/

WORKDIR /opt/frontend
# CMD python3 manage.py runserver $BACKEND_IP_ADDRESS:$BACKEND_PORT