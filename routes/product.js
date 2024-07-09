const express=require('express');
const { getproduct, getsingleproduct } = require('../Controller/productController');
const router=express.Router();
router.route('/product').get(getproduct);
router.route('/product/:id').get(getsingleproduct);


module.exports=router;