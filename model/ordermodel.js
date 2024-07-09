const mongoose=require('mongoose');

const orderschema=new mongoose.Schema({
    cartItems:{
        type:Array
    },
    Amount:{
        type:String
    },
    status:{
        type:String
    },
    createdAt:{
        type:Date
    }
})
const ordermodel=mongoose.model('order',orderschema);
module.exports=ordermodel;