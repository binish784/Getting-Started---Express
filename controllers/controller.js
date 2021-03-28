// this will contain all the controllers that will handle our routes

// import our data
var data = require("../data/data.js");      // since we will add, delete, update our data

class Controller{

    // each function will have a request and a response


    //get route - returns all the data
    static get(req,res){
        return res.json({"message":"Data Listed",data});
    }

    // post route - add a new data to our list
    static post(req,res){
        
        // get the request data
        let newData  = req.body;        /// recieve data sent using POST req

        // add it to our list
        data.push(newData);

        // return the list
        return res.json({"message":"Data has been added",data});
    }

    // update route   
    static update(req,res){

        // get name 
        let name = req.params.name;

        // get update body
        let body = req.body;

        // update the person data
        data.forEach((person)=>{
            if(person.name == name) person.age = body.age;      // if the persons name matches the name sent, update the age
        })


        // return the list
        return res.json({"message":"Data updated",data});

    }


    // delete route
    static delete(req,res){

        // get name
        let name = req.params.name;

        // remove target person from the list
        data = data.filter((person)=>{
            return person.name!=name;           /// filter out only those person whos name doesnot match the name givenm
        })

        // return data
        return res.json({"message":"Data removed",data});

    }


}

// export our controller
module.exports = Controller;