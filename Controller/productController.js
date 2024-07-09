const productmodel=require('../model/productmodel')
const getproduct=async(req, res, next)=>{
    const product=await productmodel.find({});
     res.status(200).json(product);

}
const getsingleproduct=async(req, res, next)=>{
    try {
        const product=await productmodel.findById(req.params.id);
        res.json({
            success:'true',
            product,
        });
        
    } catch (error) {
        res.json({
            success:'false',
            message:error.message
        });
        
    }
   
}

module.exports={getproduct,getsingleproduct};