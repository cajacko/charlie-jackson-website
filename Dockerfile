FROM php:7.0-apache

MAINTAINER Charlie Jackson <contact@charliejackson.com>

RUN docker-php-source extract
RUN docker-php-ext-install mysqli
RUN docker-php-source delete
COPY . /var/www/html/
