require("dotenv").config();
require("./config/db.js");

const authRouter = require("./router/authRouter.js")
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors({origin: true}))

app.use("/api/v1/auth" ,authRouter);


app.get('/', (req, res)=>{res.send("App is running")})


app.listen(process.env.PORT, () => {
    console.log(`Server is runnig at http://localhost:${process.env.PORT}`);
});