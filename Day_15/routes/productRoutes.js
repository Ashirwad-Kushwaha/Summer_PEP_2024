const express = require("express");
const{getProducts, createProduct, replaceProduct, deleteProduct, updateProduct, checkId} = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/:id").put(checkId ,replaceProduct).delete(checkId, deleteProduct).patch(checkId, updateProduct);

module.exports = productRouter;
