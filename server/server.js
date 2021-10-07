const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://team-work-social:1234@cluster0.cfu7c.mongodb.net/work-social?retryWrites=true&w=majority";

mongoose.connect(uri);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
