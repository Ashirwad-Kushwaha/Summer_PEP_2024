var express = require("express");

const fsPromises = require("fs/promises");

const app = express();

app.use(express.json());
app.get("/products", async(req, res)=>{
    
})