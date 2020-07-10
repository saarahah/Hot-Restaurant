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

const reservation = []
const waitlist = []

//Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page
// (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).



app.post("/tables", (req, res) => {
  const chosen = req.body;
console.log(req.body);

  if (reservation.length > 5) {
    waitlist.push(chosen);
    res.json(waitlist)
    console.log("We are currently at full capacity, you have been added to the wait list!");
  }
  else {
    reservation.push(chosen)
    res.json(reservation);
    console.log("Looks like we have your reservation on file!");
  }
})

// Basic route that sends the user to the homepage
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
// Route that sends users to the available tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// This route will take users to the reservation list
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"))
  return res.json(reservation)
});


//This route displays capacity, or returns to waiting list. 




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
