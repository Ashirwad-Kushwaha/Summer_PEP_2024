require("dotenv").config();
require("./database/db.js");


const express = require("express");


const app = express();


app.listen(process.env.PORT, () => {
  console.log(`Server is runnig at http://localhost:${process.env.PORT}`);
});

