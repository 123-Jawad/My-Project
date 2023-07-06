const mongoose = require("mongoose");
const UserData = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Phone:{
        type:Number,
        required:true,
    },
    Checkin:{
        type:String,
        required:true,
    },
    Checkout:{
        type:String,
        required:true,
    },
    // Roomtype:{
    //     type:String,
    //     required:true,
    // },
    Howmanyroom:{
        type:String,
        required:true,
    },
});
module.exports = mongoose.model("User",UserData);