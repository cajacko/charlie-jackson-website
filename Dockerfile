FROM php:7.0-apache
RUN docker-php-source extract
RUN docker-php-ext-install mysqli
RUN docker-php-source delete
COPY . /var/www/html/
RUN rm /var/www/html/local-config.php
