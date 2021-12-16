const Cart = require('../models/Cart')

module.exports = {
  create: async (req, res) => {
    const newCart = new Cart(req.body)
    try {
      const savedCart = await newCart.save()
      res.status(200).json(savedCart)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  update: async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedCart)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  delete: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: 'Cart has been deleted' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  getUserCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId })

      res.status(200).json(cart)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  getAll: async (req, res) => {
    try {
      const carts = await Cart.find()

      res.status(200).json(carts)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}
