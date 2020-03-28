
//Store ROUTES// Route get route
var express = require("express");
var router = express.Router();
const path = require("path");

//get route for index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));

});
//get route for exercise.html
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));

});
//get route for stats.html:
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));

});

// Export routes for server.js to use.
module.exports = router;