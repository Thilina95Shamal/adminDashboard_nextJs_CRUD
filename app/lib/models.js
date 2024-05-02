import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20,
    },
    email:{
        type:String,
        reuqired:true,
        unique:true,
    },
    password:{
        type:String,
        reuqired:true,
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,   
    }


},
{timestamps:true}
);


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        reuqired:true,
    },
    price:{
        type:Number,
        reuqired:true,
        min:0
    },
    stock:{
        type:Boolean,
        default:false,
        min:0
    },
    img:{
        type:String,
    },
    color:{
        type:String,
    },
    size:{
        type:String,
    },
},
{timestamps:true}
);

//check if already exists
export const User = mongoose.models.User || mongoose.model("User",userSchema)
export const Product = mongoose.models.Product || mongoose.model("Product",productSchema)