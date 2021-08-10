const Product = require('../models/product');

exports.createProduct =  (req, res, next) => {
    console.log(req.body);
    delete req.body._id;
    const product = new Product({
      ...req.body
    });
    product.save()
      .then((product) => res.status(201).json({product}))
      .catch(error => res.status(400).json({ error }));
  }

exports.getProducts = (req, res, next) => {
    Product.find()
      .then(products => res.status(200).json({ products}))
      .catch(error => res.status(400).json({ error }));
  }

exports.getOneProduct =   (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.status(200).json({product}))
        .catch(error => res.status(404).json({ error }));
}

exports.updateProduct = (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Modified!'}))
      .catch(error => res.status(400).json({ error }));
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Deleted!'}))
      .catch(error => res.status(400).json({ error }));
}