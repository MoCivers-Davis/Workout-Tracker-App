////external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000; //Setting the PORT




const app = express();

app.use(logger("dev")); //see external npm's above.  Morgan is used for loggig request detials.
//This is also telling express "app" to "use" morgan as "logger" and morgan to log in the combined
//"combined" predefined format

/////middleware  express framework that have access to "req" object and "res" object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
//workout is the name of the database
//When we deploy homework to Heroku we want be able to use localhost.  So we have to use "mongoose.connect(process.env.MONGODB_URI" as illustrated above 

app.use(require("./routes/view.js"));///requiring the view.js in the routes folder as this is where my routes are located

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
