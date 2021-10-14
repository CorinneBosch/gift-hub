const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4: uuidv4 } = require("uuid");

router.post("/payment", (req, res) => {
  console.log(req.body.token);
  const {token, amount} = req.body;
  const idempotencyKey = uuidv4();
  
  return stripe.customers.create({
    email :token.email,
    source :token
  }).then(customer=>{
       stripe.charges.create(
        {
         amount: amount * 100,
         currency : "gbp",
         customer: customer.id,
         reciept_email: token.email
    }, {idempotencyKey})
  }).then(result =>{
      res.status(200).json(result)
  }).catch(err => {
      console.log(err);
  });   
});

module.exports = router;
