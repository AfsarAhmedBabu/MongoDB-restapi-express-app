# MongoDB-restapi-express-app

Steps to Configure MongoDB database: 

Go to https://account.mongodb.com/account/login (register and/or login)

Create a database (Free Shared Cluster)

Choose username and the password

Fill in your IP Address

Finish and Close.

From Cluster Home page, click the connect button

Choose MongoDB campass

Copy the connection string 

Replace username and password in the string

Paste the string in .env file as:

DATABASE_URL = your_connection_string
