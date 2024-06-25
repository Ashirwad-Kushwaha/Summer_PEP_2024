var express = require("express");

const fsPromises = require("fs/promises");

const productRouter = require("./routes/productRoutes");
const morgan = require("morgan");

const app = express();

//INTERNAL MIDDLEWARE
app.use(express.json());


//custom middleware
app.use((req, res, next) => {
    console.log("req: ", req.url, req.method);
    next();
});

//EXTERNAL MIDDLEWARE
app.use(morgan("dev"));

app.use("/products",productRouter);


app.listen(2000);