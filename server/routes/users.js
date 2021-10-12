const bcrypt = require('bcryptjs');
const userRouter = require('express').Router();
const JWT = require('jsonwebtoken');
const passport = require('passport');

let User = require('../models/user.model');

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'GiftHub',
      sub: userID,
    },
    'GiftHub',
    { expiresIn: '1h' }
  );
};

userRouter.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

userRouter.route('/register').post((req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 12).then((hashpw) => {
    User.findOne({ username: username }).then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ username: 'usermname already exists' });
      }
      const newUser = new User({
        username,
        password: hashpw,
        email,
      });

      newUser
        .save()
        .then((newUser) => {
          res.json('User registered!');
          console.log(newUser.email);
        })
        .catch((err) => {
          res.status(400).json('Error: ' + err);
        });
    });
  });
});

module.exports = userRouter;
