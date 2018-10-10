# Favolista

## Environment variables for Development stage

Before running `npm start-dev` (replace "password" with your own):

    set POSTGRESQL_URI=postgres://postgres:password@localhost/favolista_dev

## Environment variables for Production stage

In Azure App Service, add to "Application settings"

    WEBSITE_NODE_DEFAULT_VERSION=8.11.1
    NODE_ENV=production
    POSTGRESQL_URI=postgresql://webcert%40SERVERNAME:PASSWORD@SERVERNAME.postgres.database.azure.com/favolista_prd?sslmode=require
