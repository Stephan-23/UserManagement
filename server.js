const express = require('express');//allow all the express required function.
const app = express();//create the app

app.listen(5000,function() {
    console.log(`Server is running on http://localhost:${5000}`)});//ceate the default get.

app.get('/', function(req,res){
    res.send("UserManagement");
})