const User = require("../model/userModel.js");
const bycrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const Cart = require("../model/cart.js");

const verifyPassword = async (password, hashedPassword)=>{
    return await bycrypt.compare(password, hashedPassword);
}

const generateJWTToken =(user)=>{
    const token = jwt.sign({
        exp: 300,
        data: {
            userId : user._id,
            email: user.email
        }
    },
    process.env.JWT_SECRET_KEY
    );
    return token;
}

const signUp = async (req, res)=>{
    console.log(req.body);

    try {

        const {name, email, password} = req.body;
        // console.log(name, email, password);

        if(!name || !email || !password){
            return res.status(400).json({message:"Please provide all the details"})
        }

        // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // if(!email.match(EMAIL_REGEX)){
        //     return res.status(400).json({message:"Please provide valid email"})
        // }



        const user =await User.findOne({email});
      
        if(user){
            return res.status(400).json({message:"User already exist"})
        }


        if(!email.includes("@")){
            return res.status(400).json({message:"Please provide valid email"})
        }

    
        if(password.length < 8){
            return res.status(400).json({message:"Password length should be greater than 8"})
        }


        const hashedPassword = await bycrypt.hash(password, 10);
    
        const newUser =await User.create({
            name,
            email,
            password : hashedPassword
        })
    
    
        res.status(201).json({'message':"Sign up successfull"})
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
   
}


const login = async (req, res)=>{
    console.log(req.body);

    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({status: "fail",message:"Please provide all the details"})
        }
        
        const user =await User.findOne({email});
        
        if(!user){
            return res.status(400).json({status:"fail",
                message:"User not exist"})
        }

        const hashedPassword = user.password;

        const isPasswordCorrect = await verifyPassword(password, hashedPassword);

        if(!isPasswordCorrect){
            return res.status(400).json({message:"Incorrect password"})
        }
        
        
    
        res.status(200).json({
            status:"success",
            message:"Login successfull",
            data:{
                user: {
                    name: user.name,
                    email: user.email
                },
                token:generateJWTToken(user),
            }
        })

    }catch(error){
        res.status(500).json({
            status:"fail",
            message:error.message})
    }

}

const cart = async (req, res)=>{
    const {userId, productId, quantity} = req.body;
    console.log(req.body);
    const newCart = await Cart.create({
        userId,
        productId,
        quantity
    })
}

module.exports={signUp, login, cart};   