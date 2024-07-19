const generateOtp = async (req, res) => {
    try {
        const { email } = req.query;
        
        res.status(201);
        res.json({
            status: "success",
            message: `OTP sent to ${email}`,
            data: {},
        });
    } catch (error) {
        console.log("-------------------------------");
        console.log(error);
        console.log("-------------------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal server error",
            data: {},
        });
    }
};

module.exports = { generateOtp }