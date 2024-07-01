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
    const{limit , page}= req.query;
    const products = await productModel.find().limit(10).skip((page - 1) * limit).limit(limit);

    const countDocuments = await productModel.countDocuments();
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
    console.log(req.query);
    try {
    const {limit = 10, q="",fields="", sort="",page= 1, ...filters} = req.query;
    
    const selection_fields=fields.split("_").join(" ")
    console.log(selection_fields)
    const sort_fields=sort.split("_").join(" ")

    let pizzasQuery = productModel.find(filters);
    pizzasQuery = pizzasQuery.where("title").regex(q);
    pizzasQuery = pizzasQuery.select(selection_fields);


    const countQuery = pizzasQuery.clone();
    const totalData = await countQuery.countDocuments();


    pizzasQuery = pizzasQuery.sort(sort_fields);



    pizzasQuery = pizzasQuery.skip((page-1)*limit);
    pizzasQuery =await pizzasQuery.limit(limit);




    // const pizzasQuery = productModel.find({
    //     title:{$regex:q}
    // });

    res.json({ status: "success",
        results: pizzasQuery.length,
        totalData: totalData,
        data: { pizza: pizzasQuery, }, });
    } catch (error) {
        res.status(500).json({ status: "failed", message: "Internal Server Error", info: error, });
    }
}


module.exports = {
    getProducts, createProduct, replaceProduct, deleteProduct, updateProduct, checkId, listProducts
} 

