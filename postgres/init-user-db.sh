#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER docker;
    CREATE DATABASE docker-prod;
    CREATE DATABASE docker-dev;
    CREATE DATABASE docker-test;
    GRANT ALL PRIVILEGES ON DATABASE docker TO docker-prod;
    GRANT ALL PRIVILEGES ON DATABASE docker TO docker-dev;
    GRANT ALL PRIVILEGES ON DATABASE docker TO docker-test;
EOSQL
