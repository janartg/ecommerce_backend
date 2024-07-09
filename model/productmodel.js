const mongoose=require('mongoose');


const productschema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    ratings:{
        type:String
    },
    images:[{
        type:String,
    }],
    category:{
        type:String
    },
    Seller:{
        type:String
    },
    Stock:{
        type:String
    },
    numOfreview:{
        type:String
    },
    createAt:{
        type:Date
    },

})
const productmodel=mongoose.model('product',productschema);
module.exports=productmodel;