#!/bin/bash

# Ask for the app name
read -p "Enter the app name: " APP_NAME

# Change directory to the app location
cd "./apps/$APP_NAME"

# Run the yarn start command
yarn start
