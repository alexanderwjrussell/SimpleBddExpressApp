#!/bin/bash

echo
echo ===========================================================
echo Building container
echo ===========================================================
echo

docker -v

docker build -t app-dev ./app

echo
echo ===========================================================
echo Spinning up test environment
echo ===========================================================
echo

docker network create -d bridge app-dev.network

docker run -d --net=app-dev.network -p 8084:8084 --name app-dev app-dev