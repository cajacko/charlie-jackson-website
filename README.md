# charlie-jackson-website
Wodpress site for charliejackson.com

To dump the database to the local machine run:
```
docker exec db sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /path/on/local/machine/data-dump.sql
```
