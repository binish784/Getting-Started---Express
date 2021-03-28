// require express and create express app

const express = require("express");
const app = express();          // express app

// specify port on which our server will run
const PORT = 5000;

// import routes
const routes = require("./routes/routes.js");

// use our routes

// here all our routes will begin with /

// to accept json data being sent, we have to use express.json before the routes are used
app.use(express.json())
    .use("/",routes);


// listen to the port
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("SERVER RUNNING ON PORT "+ PORT);
    }
})