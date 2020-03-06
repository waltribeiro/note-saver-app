// deploy to heroku
// refer to Star Wars App 2
// start express first
// make sure to use "npm i"
// defaults on localhost:3000

// Dependencies
// ===========================================================

const path = require("path");
const express = require("express");
var app = express();
const PORT = 3000;
// const PORT = process.env.PORT || 3000;


// Data Start
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
  }];

// Data End

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
    // res.end("welcome to my Note taking app!")
});

const db = require("./db/db.json");

// Routes
// ===========================================================
app.get("/notes", function(req, res) {
    res.send(path.join(__dirname, "/public/notes.html"));
  });
  
app.get("/api/notes/:id", function(req, res) {
    var chosen = req.params.note;
});
// going to need 5 routes total
// going to need a delete route
// going to need a post route
// going to need a req.body
// going to need a "req . params id"

// great resource = https://expressjs.com/en/starter/basic-routing.html

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });