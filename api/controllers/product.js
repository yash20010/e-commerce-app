const Product = require('../models/Product')

module.exports = {
  create: async (req, res) => {
    const newProduct = new Product(req.body)
    try {
      const product = await newProduct.save()
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  update: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  delete: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: 'Product has been deleted' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  getProductById: async (req, res) => {
    try {
      const products = await Product.findById(req.params.id)

      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  getAllProducts: async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
      let products

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1)
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        })
      } else {
        products = await Product.find()
      }

      res.status(200).json(products)
    } catch (err) {
      res.status(500).json(err)
    }
  },
}
