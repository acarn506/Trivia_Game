const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config"); //secure env connection

//parse all incoming json
app.use(bodyParser.json());
//share resources across other domains
app.use(cors());

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
app.listen(5000);
