# Ask for the app name
while ($true) {
    $APP_NAME = Read-Host "Enter the app name"

    # Check if the app name is 'landing'
    if ($APP_NAME -eq "landing") {
        Write-Host "Please run the ./runShell.ps1 script instead."
        exit
    }

    # Check if the app name is one of the folders in the ./apps directory
    if (Test-Path -Path "./apps/$APP_NAME" -PathType Container) {
        break
    } else {
        Write-Host "Invalid app name. Please try again."
    }
}

# Change directory to the app location
Set-Location "./apps/$APP_NAME"

# Run the yarn start command
yarn start