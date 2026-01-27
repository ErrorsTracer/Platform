#!/bin/bash

# Exit immediately if a command fails
set -e

INPUT=$1

if [ -z "$INPUT" ]; then
  echo "Usage: ./build.sh [backend|dashboard]"
  exit 1
fi

case "$INPUT" in
  backend)
    echo "Building backend..."
    cp -r ./backend-src/* ./backend/
    cd backend
    docker build -t tracer-backend .
    ;;
  
  dashboard)
    echo "Building dashboard..."
    cp -r ./dashboard-src/* ./dashboard/
    cd dashboard
    docker build -t tracer-dashboard .
    ;;
  
  *)
    echo "Invalid option: $INPUT"
    echo "Allowed values: backend, dashboard"
    exit 1
    ;;
esac
