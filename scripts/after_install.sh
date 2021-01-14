#!/bin/bash
echo "after install"
# sudo rm -rf /var/www/laravel_cms/appapec.yml

sudo chown -R apache:apache /var/www/laravel_cms
sudo chmod 775 /var/www/laravel_cms/storage
sudo chmod 775 /var/www/laravel_cms/bootstrap/cache
