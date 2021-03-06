const mongoose = require("mongoose");

const isValidEmail = require("validator").isEmail;

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: {
    type: String,
    required: [true, "cannot send empty message"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email required"],
    trim: true,
    // match: [/\S+@\S+\.\S+/, 'is invalid'],
    validate: [isValidEmail, "Invalid email."],
  },
  message: {
    type: String,
    required: [true, "cannot send empty message"],
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
