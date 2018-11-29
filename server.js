const express = require("express");
const mongoose = require("mongoose");
const databaseConfig = require("./database.config.js");
const user = require("./controllers/user.js");

const app = express();
const port = 3000;

mongoose
  .connect(
    databaseConfig.url,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connect to database successfully");
  })
  .catch(err => {
    console.log("connect to database failed");
    exit();
  });

app.get("/", (req, res) => {
  res.send("server is running!!");
});

app.post("/user", user.create);
app.get("/user", user.listAll);
// app.get("user/:userId", user.listOne);
// app.delete("user/:userId", user.delete);

app.listen(port, () => {
  console.log("server is listening port 300");
});
