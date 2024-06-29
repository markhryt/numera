#!/usr/bin/env bash

# Stop the script if any command fails
set -e

echo "Installing new dependencies (if any)..."
npm install

echo "Uninstalling existing bcrypt module..."
npm uninstall bcrypt

echo "Reinstalling bcrypt for the current platform..."
npm install bcrypt

echo "Starting API server..."
npm start
