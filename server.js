////external npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000; //Setting the PORT

const db = require("./models");


const app = express();



app.use(logger("dev")); 

/////middleware  express framework that have access to "req" object and "res" object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



mongoose.connect(process.env.MONGODB_URI || "MoCiversDavis://1Checksix@ds027409.mlab.com:27409/heroku_w4x4kjln", { useNewUrlParser: true });


app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));


// Listen on port 3000
app.listen(PORT, () => {
    console.log("App running on port 3000!");
  });
