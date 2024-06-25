var express = require("express");

const fsPromises = require("fs/promises");

const {getProducts, postProducts, putProducts, deleteProducts, patchProducts} = require("./controllers/productControllers");


const app = express();
app.use(express.json());


// app.get("/products", getProducts);
// app.post("/products", postProducts);
app.route("/products").get(getProducts).post(postProducts);


// app.put("/products/:id", putProducts);
// app.delete("/products/:id", deleteProducts);
// app.patch("/products/:id", patchProducts);
app.route("/products/:id").put(putProducts).delete(deleteProducts).patch(patchProducts);


app.listen(2000);