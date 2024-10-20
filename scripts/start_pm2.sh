#!/bin/bash
echo "Starting application with PM2"
pm2 start /home/ubuntu/Nodes/index.js --name my-nodejs-app
pm2 save
