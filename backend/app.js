const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("we are on home");
});

//listen to the server at entered location
app.listen(4000);
