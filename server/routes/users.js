const bcrypt = require("bcryptjs");
const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const { firstname, lastname, username, email, password } = req.body;
  bcrypt.hash(password, 12).then((hashpw) => {
    User.findOne({ username: username }).then((savedUser) => {
      if (savedUser) {
        return res.status(400).json({ username: "usermname already exists" });
      }
      const newUser = new User({
        firstname,
        lastname,
        username,
        password: hashpw,
        email,
      });

      newUser
        .save()
        .then((newUser) => {
          res.json("User registered!");
          console.log(newUser.email);
        })
        .catch((err) => {
          res.status(400).json("Error: " + err);
        });
    });
  });
});

module.exports = router;
