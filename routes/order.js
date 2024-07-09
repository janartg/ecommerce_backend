const express=require('express');
const { CreateOrder } = require('../Controller/orderController');
const router = require('./product');
const app=express();
router.route('/order').post(CreateOrder);
 module.exports=router;