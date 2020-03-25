////external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3000;

const db = require("./models");


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

//////////Routes for express can go here
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "exercise.html"));
});

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
