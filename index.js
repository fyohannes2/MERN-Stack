const express = require("express");
const app = express();
const cors =  require("cors");
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
require("dotenv").config();


/// DATABASE CONNECTION
mongoose.connect(
    "mongodb+srv://admin:abc1234@clusterb.t5btr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  app.get("/insert", async (req, res) => {
    const friend = new FriendModel({ name: "Jessic", age: 38 });
    await friend.save();
    res.send("Inserted DATA");
  });
  
  app.get("/read", async (req, res) => {
    FriendModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.listen(process.env.PORT || 3001, () => {
    console.log("You are connected!");
  });