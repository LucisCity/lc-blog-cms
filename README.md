# Lucis Blog


## Development
```bash
cd docker
cp .env.tenplate .env

# Then set your .env content
vim .env

# prepare db
./modify-db-with-env.sh

# Apply .env
source .env

# Bring stack up
docker-compose down
docker-compose up --build
```

## Deployment
Same as development
