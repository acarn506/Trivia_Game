const express = require("express");
const mongoose = require("mongoose");
//secure env connection
require("dotenv/config");
const bodyParser = require("body-parser");

const app = express();

//parse all incoming json
app.use(bodyParser.json());

//import routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to Database!");
  }
);

//listen to the server at entered location
app.listen(4000);
