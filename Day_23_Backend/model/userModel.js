const {mongoose} = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:["Name is required"]
    },
    email:{
        type:String,
        required:["Email is required"]
    },
    password:{
        type:String,
        required:["Password is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
}
// {
//     timestamps:true
// }
)

const User = mongoose.model("User",userSchema);
module.exports = User