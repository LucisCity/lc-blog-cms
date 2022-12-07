FROM wordpress:php7.4-apache
# COPY . /var/www/html

# Enable write permission for auto update plugin or install plugin by web UI
COPY --chown=www-data:www-data . /var/www/html
