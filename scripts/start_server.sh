#!/bin/bash

#sudo rm -f ./nohup.out
#export SPRING_REDIS_HOST="redis-for-test.vkjgaw.0001.apne1.cache.amazonaws.com"
#export SPRING_DATASOURCE_URL="jdbc:postgresql://database-6.cjrkfow6klcg.ap-northeast-1.rds.amazonaws.com:5432/weget_new_db"
#export SPRING_DATASOURCE_USERNAME="postgres"
#export SPRING_DATASOURCE_PASSWORD="password"
#nohup java -jar manageApiService-1.0.jar > /dev/null 2>&1 &
#

echo "start server"
cd /var/www/laravel_cms

# sudo chown -R apache:apache /var/www/laravel1
sudo chown -R ec2-user:ec2-user /var/www/laravel_cms

sudo chmod 775 /var/www/laravel_cms/storage
sudo chmod 775 /var/www/laravel_cms/bootstrap/cache

# 第一步  关闭docker 镜像
cd /var/www/laravel_cms
/usr/local/bin/docker-compose build
/usr/local/bin/docker-composer up -d
# docker start laravel_cms_php_1

# npm run dev
# composer update
# sudo service httpd restart
#php artisan serve --port 80
