// the parent of public is our backend
// server should always be in the root folder
// deploy to heroku
// refer to Star Wars App 2
// start express first
// make sure to use "npm i"
// defaults on localhost:3000

// Dependencies
// ===========================================================
const express = require("express");
const fs = require("fs")
const path = require("path");
let app = express();
let PORT = 3000;
let db = require("./db/db.json");
// const PORT = process.env.PORT || 3000;


// Data End - this is the middleware that allows us to talk in JSON
// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// makes localhost "look" in the piublic folder on the client side
// this is the /public shortener
// allows app to look in the public folder for /assets folder


// HTML Routes
// ===========================================================
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
  // res.end("welcome to my Note taking app!")
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
  // res.send(path.join(__dirname, "index.html"));
  // the public shorthand above is what allows me to not write /public
});

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname), "public/index.html");
// });

// API Routes
app.get("/api/notes", function(req, res) {
  res.json(db);
});

app.get("/api/notes/:id", function(req, res) {
    var chosen = req.params.note;
});

app.post("/api/notes", function (req, res) {
  var newdb = req.body;
  // console.log(db);
  db.push(newdb);
  req.body.id = db.length;
  let storeDb = JSON.stringify(db);
  fs.writeFile(("./db/db.json"), storeDb, function (err, data) {
    if (err) throw err;
  })
});


// delete new note:
app.delete("/api/notes/:id", function (req, res) {
  var chosen = parseInt(req.params.id);
  //console.log(chosen);
  for (var i = 0; i < db.length; i++) {
    if (chosen === db[i].id) {
      db.splice(i, 1);
    }
    for (let i = 0; i < db.length; i++) {
      db[i].id = 1 + i;

    }
  }
});
// ERROR HERE - ON LINE 87
fs.writeFile(".db/db.json", JSON.stringify(db), "utf8", function (err) {
  fs.writeFile((".db/db.json"), JSON.stringify(db), function (err) {
    if (err) {
      throw err; // i'm getting an error on this line
    } return res.json(false);
  });
});

// going to need 5 routes total
// going to need a delete route
// going to need a post route
// going to need a req.body
// going to need a "req . params id"

// great resource = https://expressjs.com/en/starter/basic-routing.html

// API Routes
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.post('api/notes', function (req, res) {
  var newNote = req.body;
  res.json(newNote);
});
