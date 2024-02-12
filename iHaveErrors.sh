#!/bin/bash

# Run yarn clean
yarn clean

# Delete yarn.lock and node_modules folder
rm yarn.lock
rm -rf node_modules

# Run git pull and git reset --hard
git pull --force
git reset --hard

# Run yarn
yarn

# Echo "DONE"
echo "Should be fixed now"