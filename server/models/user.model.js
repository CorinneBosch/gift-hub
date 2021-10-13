const mongoose = require('mongoose');
const isValidEmail = require('validator').isEmail;

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "first name required"],
      minlength: 1,
    },
    lastname: {
      type: String,
      required: [true, "last name required"],
      minlength: 1,
    },
    username: {
      type: String,
      required: [true, 'user name required'],
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      trim: true,
      validate: [isValidEmail, 'Invalid email.'],
    },
    password: {
      type: String,
      required: [true, 'password required'],
      trim: true,
      minlength: [8, 'minimum 8 characters'],
    },
    profilePicture: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      maxlength: 250,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Messages',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
