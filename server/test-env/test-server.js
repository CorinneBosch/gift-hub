const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI_TEST);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error: '));
connection.once('open', () => {
  console.log('MongoDB TEST database connection successfull');
});

const usersRouter = require('../routes/users');

app.use('/users', usersRouter);

const port = 4444;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
