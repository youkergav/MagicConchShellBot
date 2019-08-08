How to install and setup an instance of the database.
 - Please replace *ADMIN_USER* with an admin username of your choosing.
 - Please replace *SECURE_PASSWORD* with secure passwords of your
   choosing (make sure the admin and standard user passwords are
   unique).

## Installing
### Download, install, and start the service
`$ sudo apt-get install mongodb-org`
`$ sudo service mongodb start`

## Securing
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

## Configuration
### Create Standard User and Database

    $ mongo -u ADMIN_USER -p --authenticationDatabase admin
    
    > use mcsb
    > db.createUser({
    > 	user: "mcsbDefault",
    > 	pwd: "SECURE_PASSWORD",
    > 	roles: [{ role: "readWrite", db: "mcsb" }]
    > })
    >
    > ^C