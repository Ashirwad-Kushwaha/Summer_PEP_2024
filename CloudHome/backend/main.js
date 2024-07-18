require('dotenv').config();
require("./config/db.js");

const authRouter = require('./routes/authRoutes');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({origin: true}));

app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
    res.send("App is running.........");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})