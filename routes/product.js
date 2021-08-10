const express = require('express');

const router = express.Router();
const productCtrl = require('../controllers/product');

//post
router.post('/', productCtrl.createProduct);  

router.get('/', productCtrl.getProducts);
router.get('/:id', productCtrl.getOneProduct);  
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;