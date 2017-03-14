### Async / Await Brown bag

This is a super simple / average repo for demonstrating async / await vs directly using promises. Probably little value outside of the presentation itself but you could use it if desired. Note that this relies on some mysql db because that had a lot of setup and nice functions to use for this demo

#### Setup

As mentioned above, you need mysql running and it actually expects some insecure default logon info so just jam out a docker container with:

`docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql`

Connect to the container and create the `test` database with the folllowing

`docker exec -i mysql mysql -uroot -proot -e 'create database test;'`

Install the npm deps with

`npm i`

Test out the codez with

`npm start`
