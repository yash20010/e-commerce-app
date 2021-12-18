const stripe = require('stripe')

module.exports = {
  payment: (req, res) => {
    stripe(process.env.STRIPE_KEY).charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd',
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          console.log(stripeErr)
          res.status(500).json({ message: stripeErr })
        } else {
          res.status(200).json(stripeRes)
        }
      }
    )
  },
}
