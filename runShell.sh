#!/bin/bash

# Function to kill all child processes
function kill_child_processes {
    pkill -P $$  # Kill all child processes of the current process
}

# Function to start a node server
function start_node_server {
    $1 &  # Start the command in the background
    child_pid=$!  # Get the PID of the child process
    trap "kill_child_processes" EXIT  # Set up a trap to kill child processes when the script is exited
}

# Start the node servers
start_node_server "yarn dev"
start_node_server "cd ./apps/landing && yarn start"
yarn out # This will create the out for all the apps.

# Wait for the script to be killed
while true; do
    sleep 1
done
