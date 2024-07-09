const express = require('express');
const app=express();
const product=require('./routes/product');
const order=require('./routes/order');
const mongoose=require('mongoose');
app.use(express.json());
app.use('/api/v1/',product);
app.use('/api/v1/',order);
  
const connectDatabase=async()=>{
    await mongoose.connect("mongodb+srv://jana:jana123@cluster0.vyvtto8.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0")
        
    app.listen(8000,()=>{
            console.log('server listening to port 8000');
        })
}
connectDatabase();
//mongodb+srv://jana:jana123@cluster0.vyvtto8.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0


