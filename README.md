# Favolista

## Environment variables for Development stage

Before running `npm run start-dev` (replace "password" with your own):

    set DATABASE_URL=postgres://postgres:password@localhost/favolista_dev

## Environment variables for Production stage on Heroku

Add to Settings > Config Vars

    NODE_ENV=production
    DATABASE_URL=postgres://USERNAME:PASSWORD@YOURHOST.compute-1.amazonaws.com:5432/DATABASE

## Environment variables for Production stage on Azure

In Azure App Service, add to "Application settings"

    WEBSITE_NODE_DEFAULT_VERSION=8.11.1
    NODE_ENV=production
    DATABASE_URL=postgres://webcert%40SERVERNAME:PASSWORD@SERVERNAME.postgres.database.azure.com/favolista_prd?sslmode=require

## Full Text Search Index

This was created before:

    CREATE INDEX list_item_body_text_idx ON list_item USING GIN (to_tsvector('english', body_text));

Sample query:

    SELECT *
    FROM list_item
    WHERE to_tsvector('english', body_text) @@ to_tsquery('english', 'azab & Allah')
    ORDER BY list_head_id, position
    LIMIT 100;

Using `plainto_tsquery` :

    SELECT *
    FROM list_item
    WHERE to_tsvector('english', body_text) @@ plainto_tsquery('english', 'azab Allah')
    ORDER BY list_head_id, position
    LIMIT 100;

Query with join:

    SELECT li.*, lh.name list_head_name
    FROM list_item li
    LEFT JOIN list_head lh ON li.list_head_id=lh.id
    WHERE to_tsvector('english', body_text) @@ plainto_tsquery('english', 'azab Allah')
    ORDER BY list_head_id, position
    LIMIT 100;
