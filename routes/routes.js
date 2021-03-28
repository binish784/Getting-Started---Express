// this file will contain routes for our api

const express = require("express");

// create a express router
const router = express.Router();

// import our controller
const Controller = require("../controllers/controller.js");


//define routes 


// get route
router.get("/",Controller.get);

// post route
router.post("/create",Controller.post);

// update route - here the :name portion is a dynamic value to identify which person is to be updated

router.put("/update/:name",Controller.update);


// delete route
router.delete("/delete/:name",Controller.delete);

// export our router
module.exports = router;