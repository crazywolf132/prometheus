#!/bin/bash

# Ask for the app name
while true; do
    read -p "Enter the app name: " APP_NAME

    # Check if the app name is 'landing'
    if [ "$APP_NAME" = "landing" ]; then
        echo "Please run the ./runShell.sh script instead."
        exit 1
    fi

    # Check if the app name is one of the folders in the ./apps directory
    if [ -d "./apps/$APP_NAME" ]; then
        break
    else
        echo "Invalid app name. Please try again."
    fi
done

# Change directory to the app location
cd "./apps/$APP_NAME"

# Run the yarn start command
yarn start
