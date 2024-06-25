const express = require("express");



const {getProducts, postProducts, putProducts, deleteProducts, patchProducts, validateForTitleAndPrice, getDataMiddleware, validateId} = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/").get(getProducts).post(validateForTitleAndPrice, postProducts );

productRouter.route("/:id").put(validateId, validateForTitleAndPrice, putProducts).delete( validateId, deleteProducts).patch(validateId, patchProducts);

module.exports = productRouter;