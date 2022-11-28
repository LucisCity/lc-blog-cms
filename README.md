# Lucis Blog


## Development
```bash
cd docker
cp .env.tenplate .env

# Then set your .env content
vim .env

# prepare db
./modify-db-with-env.sh

# change frontity/.env and frontity.setting.js
vim ...
vim ...

# Apply .env
source .env

# Bring stack up
docker-compose down
docker-compose up --build
```

# db config
WP will notice a wrong message "db connection error" if you don't set the `wp_options`.`site_url` and `home_url`
Plz connect mysql client and modify it manually (at this time)

## Deployment
Same as development
