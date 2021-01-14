#!/bin/bash
#pkill -U $USER -f "java .*-jar manage.*\.jar"
echo "stop server 停止服务"
sudo service httpd stop
sudo rm -rf /var/www/laravel_cms/*

# kill -s 9 8001

