const { productModel } = require("../models/productModels");

const checkId = async (req, res, next) => {
    try{
        const {id} = req.params;
        const product = await productModel.findById(id);
        if(!product){
            res.status(404);
            res.json({ status: "fail", message: "Product not found!!" });
            return;
        }
        next();
    } catch(err){
        if(err.name === "CastError"){
            res.status(400);
            res.json({ status: "fail", message: "Invalid product ID" });
            return;
        }
        res.status(500);
        res.json({ status: "fail", message: "Internal Server Error" });
    }
}

const getProducts = async (req, res) => {
    const products = await productModel.find().limit(10);
    res.send({ status: "success", data: { products } });
};

const createProduct = async (req, res) => {
    try{
        const body = req.body;
        if(!body.title || !body.price){
            res.json({ status: "failed", message: "title and price are required" });
            return;
        }
        const newProduct = await productModel.create(body);
        res.json({
            status: "success",
            data: {
                product : newProduct,
            }
        });
    }
    catch (err){
        console.log(err);
        res.status(500).json({ status: "failed", message: "Internal Server Error", info: err, });
    }
};

const replaceProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndReplace({_id: id}, body);

        res.json({ status: "success", data: { newProduct } });
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "failed", message: "Internal Server Error", info: err, });
    }
};

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        await productModel.findOneAndDelete({_id: id});
        res.json({ status: "success", data: { product: null, } });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "failed", message: "Internal Server Error", info: err, });
    }
};

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const body = req.body;
        const updatedProduct = await productModel.findOneAndUpdate({_id: id}, {body}, {new: true});
        res.status(200);
        res.json({ status: "success", data: { updatedProduct } });
    }
    catch(err){
        console.log(err);
        res.status(500).json({ status: "failed", message: "Internal Server Error", info: err, });
    }
};

const listProducts = async (req, res) => {
    const {limit = 10, ...filters} = req.query;
    

    const pizzasQuery = productModel.find(filters);
    const limitedPizzas = await pizzasQuery.limit(limit);

    res.json({ status: "success", data: { pizza: limitedPizzas, } });
}


module.exports = {
    getProducts, createProduct, replaceProduct, deleteProduct, updateProduct, checkId, listProducts
} 

