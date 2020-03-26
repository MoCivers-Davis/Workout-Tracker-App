//This Routes file is for all of the HTML Routes.  I will need to create another js file for my HTTP routes, i.e, Post, Put
//Store ROUTES// Route get route
var express = require("express");
var router = express.Router();
const path = require("path");

//////////Routes for express can go here
//get route for index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
    ///Dave said to post to Heroku that we don't need the ../ before public
});
//get route for exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    ///Dave said to post to Heroku that we don't need the ../ before public
});
//get route for stats.html:
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
    ///Dave said to post to Heroku that we don't need the ../ before public
});

// Export routes for server.js to use.
module.exports = router;