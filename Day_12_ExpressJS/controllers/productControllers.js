const fsPromises = require("fs/promises");

const validateForTitleAndPrice = (req, res, next)=>{
    const body = req.body;
    if(!body.title || !body.price){
        res.json({
            status: "fail",
            message: "Title and Price is required",
        }
        );
        return;
    }
    next();
}

const getDataMiddleware = async (req, res, next) => {
    const text = await fsPromises.readFile("./data.json", {encoding: "utf8"});
    let products;
    try{
        products = JSON.parse(text);
    } catch{
        products = [];
    }
    req.products=products;
    next();
}

const validateId = (req, res, next)=>{
    const products = req.products;
    const params = req.params;
    const prIdx = products.findIndex((elem)=>{
        if(elem.id == params.id)return true
        return false;
    });

    if(prIdx === -1){
        res.status(404);
        res.json({
            status: "fail",
            message: "Invalid Id",
        });
        return;
    }
    req.productId=prIdx;
    next();
}

const getProducts = async (req, res) => {
    let products = req.products;

    res.json({
        status: "success",
        data:{
            "products": products,
        },
        })
}


const postProducts = async (req, res)=>{
    const body = req.body;
    const products = req.products;

    let lastId = 0;
    if(products.length!= 0) lastId = products[products.length - 1].id;
    body.id = lastId+1;

    products.push(body);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));
    res.status(201);
    res.json({
        status: "success",
        data: {
            "product": body,
        },
    })

}

const putProducts = async(req, res)=>{
    const body = req.body;

    const products = req.products;
    const prIdx = req.productId;

    body.id = products[prIdx].id;
    products[prIdx] = body;

    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.json(
        {
            status: "success",
            data: {
                "product": products[prIdx],
            },
        });
}

const deleteProducts = async(req, res)=>{
    const products = req.products;
    const prIdx = req.productId;

    products.splice(prIdx, 1);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.status(204);
    res.send({
        status: "success",
        data:{
            product: null,
        },
    });
}

const patchProducts = async(req, res)=>{
    const params = req.params;
    console.log(params)
    const body = req.body;

    const products = req.products;
    const prIdx = req.productId;

    const newOBJ = {
        ...products[prIdx], 
        ...body,
    }

    products[prIdx] = newOBJ;

    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.send(
        {
            status: "success",
            data: {
                "product": products[prIdx],
            },
        });
}


module.exports = {getProducts, postProducts, putProducts, deleteProducts, patchProducts, validateForTitleAndPrice, getDataMiddleware, validateId};