const ordermodel=require('../model/ordermodel')
exports.CreateOrder=(req, res, next)=>{
    res.json({
        success:'true',
        Message:'Welcome',
    });
}