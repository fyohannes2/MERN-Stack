const express = require("express");
const app = express();
const mongoose = require("mongoose");


/// DATABASE CONNECTION
mongoose.connect(
    " mongodb+srv://admin:abc1234@clusterb.t5btr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );



app.listen(3001, () => {
    console.log("You are connected!");
  });

  