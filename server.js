// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data

var reservation = []
var waitlist = []

//Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page
// (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).







app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"))
});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
