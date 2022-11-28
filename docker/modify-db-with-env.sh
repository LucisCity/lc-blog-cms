#!/bin/bash
source .env

OLD_API_URL="https://api.insight.lucis.network"
sed -i.bak "s|${OLD_API_URL}|${API_URL}|g" db/initial-db.sql
echo "Finish replace WP url to ${API_URL}"
