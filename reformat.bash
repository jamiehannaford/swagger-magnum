#!/bin/bash

command -v json >/dev/null 2>&1 || { echo >&2 "The json npm package is required, but it's not installed. Please install with `npm install -g json`"; exit 1; }

find v1 -type f -name "*.json" -exec sh -c "json -f {} -Iq > /dev/null" \;
echo "Everything has been reformatted";
