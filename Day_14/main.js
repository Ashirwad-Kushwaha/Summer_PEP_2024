require("dotenv").config();
const {productsCollection}=require("./database/db.js");

const express = require("express");

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await productsCollection.find().toArray();
  console.log(products);
  res.json({ status: "success", data: { products } });
})

app.post("/products", async (req, res) => {
  const body = req.body;
  if(!body.title || !body.price){
    res.json({ status: "failed", message: "title and price are required" });
    return;
  }
  const result = await productsCollection.insertOne(body);
  console.log(result);
  res.json({ status: "success", data: { result } });
})

app.listen(process.env.PORT, () => {
  console.log(`Server is runnig at http://localhost:${process.env.PORT}`);
});

