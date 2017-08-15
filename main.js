const express = require("express");
const mustache = require('mustache-express');
const dataJS = require('./data.js');
const bodyParser = require('body-parser');

const application =  express();

application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());
application.use("/public", express.static("./public"));

application.get('/', function(request, response) {
    response.render('index', dataJS)
});

application.get('/users/:id', function(request, response) {
    //console logging the route paramters
    console.log(request.params)
    //storing the id parameter value into a variable
    var parameterId = request.params.id;
        //using find() method to loop through users array of user data objets.
        // for(var i = 0; i < dataJS.users.length; i++){
        //   var singleUser = dataJS.users[i];
        //   if(singleUser.id === parameterID){
        //     return;
        //   }
        // }
        var singleUser = dataJS.users.find(function(user){
          //find method takes in a callback function
          //this callback function executes through the length of the array
          //user is our single user object from our users array
          //our if statement is checking to see if our parameter ID matches any of our
          //user IDs.
  
         if (user.id == parameterId) {
           //if the user Id matches our parameter ID we return true in our callback
           //find will return that user object 
            return true
        } 
      })
  
   response.render('detail', singleUser);
  });
application.listen(3000);