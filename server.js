const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db defined here:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/houses")

// Define API routes here
app.use(routes)


app.post("/submit", function(req, res) {
  User.create(req.body)
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
