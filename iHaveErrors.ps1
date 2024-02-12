# Run yarn clean
yarn clean

# Delete yarn.lock and node_modules folder
Remove-Item yarn.lock
Remove-Item -Recurse -Force node_modules

# Run git pull and git reset --hard
git pull --force
git reset --hard

# Run yarn
yarn

# Echo "DONE"
Write-Host "Should be fixed now"