# MongoDB Setup
Documentation on how to install MongoDB and set up for application. 
 - Please replace *ADMIN_USER* with a admin username of your choosing.
 - Please replace *SECURE_PASSWORD* with secure passwords of your
   choosing (make sure the admin and standard user passwords are
   unique).

## Install MongoDB
### Download, install, and start the service
`$ sudo apt-get install mongodb-org`
`$ sudo service mongodb start`

## Securing MongoDB
### Adding an Administrative User
    $ mongo
    
    > use admin
    > db.createUser({
    >     user: "ADMIN_USER",
    >     pwd: "SECURE_PASSWORD",
    >     roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    > })
    >
    > ^C

### Enabling Authentication    
    $ sudo nano /etc/mongod.conf
    
    # Turn on/off security.  Off is currently the default
    #noauth = true
    auth = true
	
	$ sudo service mongodb restart

## Setting Up MongoDB
### Create Standard User and Database

    $ mongo -u ADMIN_USER -p --authenticationDatabase admin
    
    > use mcsb
    > db.createUser({
    > 	user: "mcsbDefault",
    > 	pwd: "Y^nDxaQkrZshj8wz7M#MRpdM@5RFaw",
    > 	roles: [{ role: "readWrite", db: "mcsb" }]
    > })
    >
    > ^C
