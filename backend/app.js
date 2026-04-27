
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/testdb");

const User = mongoose.model("User", { name: String });

app.post("/add", async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.send("saved");
});

app.get("/users", async (req, res) => {
  res.json(await User.find());
});

app.listen(3000);
