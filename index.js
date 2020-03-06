const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello wolrd");
});

//Server listen
app.listen(5000, function() {
  console.log("IOT app listening on port 5000!");
});
