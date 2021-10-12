const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const usersRouter = require('./routes/users');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.use('/users', usersRouter);

module.exports = app;
