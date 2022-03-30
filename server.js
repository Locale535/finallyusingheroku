const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("HEllo, finally using heroku properly and this is using automatic deploys from Github");
});
