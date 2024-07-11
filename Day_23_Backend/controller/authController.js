const User = require("../model/userModel.js");


const signUp = async (req, res)=>{
    console.log(req.body);

    try {

        const {name, email, password} = req.body;
        // console.log(name, email, password);

        if(!name || !email || !password){
            return res.status(400).json({message:"Please provide all the details"})
        }

        const userExist =await User.findOne({email});
      
        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }


        if(!email.includes("@")){
            return res.status(400).json({message:"Please provide valid email"})
        }

    
        if(password.length < 8){
            return res.status(400).json({message:"Password length should be greater than 8"})
        }
    
        const newUser =await new User({
            name,
            email,
            password
        })
    
        newUser.save();
    
    
        res.status(200).json({message:"Sign up successfull"})
        
    } catch (error) {

        res.status(500).json({message:error.message})
        
    }
   
}


const login = async (req, res)=>{
    console.log(req.body);

    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"Please provide all the details"})
    }

    const userExist =await User.findOne({email});
  
    if(!userExist){
        return res.status(400).json({message:"User not exist"})
    }


    res.status(200).json({message:"Login successfull"})

}

module.exports={signUp, login};