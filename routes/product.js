const express = require('express');

const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const productCtrl = require('../controllers/product');

//post
router.post('/', auth, multer,productCtrl.createProduct);  

router.get('/', auth, productCtrl.getProducts);
router.get('/:id', productCtrl.getOneProduct);  
router.put('/:id', auth, multer, productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteProduct);

module.exports = router;