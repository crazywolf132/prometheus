# Function to kill all child processes
function kill-child-processes {
    Get-WmiObject Win32_Process -Filter "ParentProcessId=$PID" | ForEach-Object { Stop-Process -Id $_.ProcessId -Force }
}

# Function to start a node server
function start-node-server {
    $job = Start-Job -ScriptBlock { param($cmd) iex $cmd } -ArgumentList $args[0]
    Register-ObjectEvent -InputObject $job -EventName StateChanged -Action { kill-child-processes } | Out-Null
}

# Start the node servers
start-node-server "yarn dev"
start-node-server "cd ./apps/landing; yarn start"
yarn out # This will create the out for all the apps.

# Wait for the script to be killed
while ($true) {
    Start-Sleep -Seconds 1
}