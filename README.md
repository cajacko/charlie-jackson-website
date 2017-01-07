# charlie-jackson-website
Wodpress site for charliejackson.com

Make sure docker and docker compose are both installed on the system you wish to use this site with.

Run the site with:
```
docker-compose up -d --force-recreate --build
```

To dump the database to the local machine run:
```
docker exec db sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /path/on/local/machine/data-dump.sql
```
