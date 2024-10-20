#!/bin/bash
echo "Installing system dependencies"
sudo apt update && sudo apt upgrade -y
sudo apt install git -y
sudo apt-get install ruby -y

echo "Installing CodeDeploy agent"
wget https://aws-codedeploy-ap-south-1.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start
sudo service codedeploy-agent status

echo "Installing Node.js"
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v

# Install PM2 globally
echo "Installing PM2 globally"
sudo npm install pm2@latest -g

# Check if the 'Nodes' directory exists and remove it if it does
if [ -d "/home/ubuntu/Nodes" ]; then
  echo "Removing existing Nodes directory"
  rm -rf /home/ubuntu/Nodes
fi

echo "Cloning the GitHub repository"
cd /home/ubuntu/
git clone https://github.com/AbhishekAbhisharma/Nodes.git
cd Nodes/
echo "Installing Node.js dependencies"
npm install

# Start the application with PM2
echo "Starting application with PM2"
pm2 start index.js --name my-nodejs-app  # Replace index.js with your main application file
pm2 save  # Save the PM2 process list so it restarts on reboot
