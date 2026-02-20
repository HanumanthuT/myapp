**Launch EC2 with Ubuntu OS**

Choose Ubuntu Server (20.04 LTS or latest)
Assign a public IP
Configure security group:
SSH (port 22)
HTTP (port 80)
Custom TCP (port 3000) — for Node testing
(Later restrict 3000 if using Nginx proxy)

**Connect via SSH**
ssh -i your-key.pem ubuntu@<your-ec2-public-ip>

**Update Ubuntu Packages**
sudo apt update -y && sudo apt upgrade -y

**Install Node.js and npm**

sudo apt install nodejs npm -y

node -v
npm -v

**Install Nginx**
sudo apt install nginx -y

sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx

**Install MySQL Client (to connect to RDS/MySQL server)**
sudo apt install mysql-client -y

mysql --version

**Clone Your Project Repository**

git clone <your-github-repo-url>
cd <repo-folder-name>

**Install Project Dependencies**
npm install

**Start Your Node.js App (for testing)**
npm start

**Install PM2 (Keep App Running After Logout)**

sudo npm install -g pm2

pm2 start app.js --name myapp
pm2 save
pm2 startup
