require('dotenv').config();
require("./config/db.js");

const authRouter = require('./routes/authRoutes');
const express = require('express');
const cors = require('cors');
const { generateOtp } = require('./controllers/otpControllers.js');
const otpRouter = require('./routes/otpRoutes.js');
const verifyToken = require('./middlewares/verifyToken.js');

const app = express();

app.use(express.json());

app.use(cors({origin: true}));

app.use("/api/v1/auth", authRouter);

app.use(verifyToken);

app.use("/api/v1/otp", otpRouter)

app.get("/", (req, res) => {
    res.send("App is running.........");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})