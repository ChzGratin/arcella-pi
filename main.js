// import package
const express = require("express");
const page = require("./lib/page.js");

// configuration
const PORT = 3000; // port number

// web application
const app = express();

app.set("views", __dirname + "/view");
app.set("view engine", "ejs");
// app.use(express.static("./public"));

// routing
app.get("/", function(req, res) {
    console.log("index page requested");
    page.index(req, res);
});

app.get("/temp", function(req, res) {
    console.log("temp page requested");
    page.temp(req, res);
});

// start listening
app.listen(PORT);
console.log("Server is listening...");

// Ctrl+C
process.on("SIGINT", function() {
    console.log("Server terminated");
    process.exit();
});