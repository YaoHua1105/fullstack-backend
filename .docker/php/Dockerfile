FROM php:7.3-apache
#FROM php:7.4-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd mysqli


# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer





COPY ./000-default.conf /etc/apache2/sites-enabled/000-default.conf

RUN a2enmod rewrite

CMD ["apache2-foreground"]
