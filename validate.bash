#!/bin/bash

command -v swagger-tools >/dev/null 2>&1 || { echo >&2 "The swagger-tools npm package is required, but it's not installed. Please install with `npm install -g swagger-tools`"; exit 1; }

node deref.js && swagger-tools validate -v v1/swaggerFull.json
