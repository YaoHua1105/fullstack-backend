# PHP服务器 要运行composer 或者 batch适合选择 cli-alpine  这个可能需要执行yum  报错apt-get找不到
# 要运行apache适合选php:7.3-apache
# 要运行nginx 或者 fastCGI 适合选php:7.4-fpm
FROM php:7.3-apache
#FROM php:7.3-fpm
#FROM php:7.3-cli-alpine

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    vim \
    curl \
    node \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
	unzip


# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd mysqli zip sockets


# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN mv /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini
RUN sed -i "s/128M/-1/g" /usr/local/etc/php/php.ini
RUN cd /var/www/html && composer install && node install
#RUN php artisan serve --host 0.0.0.0 --port 80
#RUN php -S 127.0.0.1:80 -t ./public

COPY ./000-default.conf /etc/apache2/sites-enabled/000-default.conf
RUN a2enmod rewrite
CMD ["apache2-foreground"]
