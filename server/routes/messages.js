// const router = express.Router();
// const MessageSchema = require("../models/message.model");

// router.post("/profile", (req, res) => {
//   Message.find()
//     .then((message) => res.json(message))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/send").post((req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;

//   const newMessage = new Message({
//     name,
//     email,
//     message,
//   });

//   newMessage
//     .save()
//     .then(() => res.json("Message sent!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;
