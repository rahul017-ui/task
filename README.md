### NodeAPI
$Restful API with help of express and other basic packages. 


### Project Setup (Intallation): 
```sh
$ npm install --save express
$ npm install --save-dev nodemon
$ npm install --save mongoose


### Project Baseline:

* Routes and API Calls (get post patch  put delete ) 
* Integration MongoDB and Mongoose
* CRUD Operation (Create Read Update Delete)
* GET API
 # api/v1/users - get all users with task
 # api/v1/user?id=<userID>?status=<Active> 
 # api/v1/gettasklist?id - get task by user ID
 # api/v1/gettasklist?id=<userID>?status=<Taskstatus>- get task by user ID and task status in order of task created date
* Post API
# api/v1/adduser/ - add user but don't allow duplicate email
# api/v1/addtask/:<userID> - add task in todotask
* PUT API
# api/v1/updateuser/:<id> - updateUser
# api/v1/updatetask/:<userID> - Update user task 


* Patch API
 
# api/v1/updateuser/:<id> - updateUser
# api/v1/updatetask/:<userID> - Update user task 

* DELETE API 

# api/v1/deleteUser/:<id>  - delete the user and task
