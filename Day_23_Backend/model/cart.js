const {mongoose} = require("mongoose");


const cartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:["userId is required"]
    },
    productId:{
        type:String,
        required:["productId is required"]
    },
    quantity:{
        type:Number,
        required:["quantity is required"]
    }
})
const Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart