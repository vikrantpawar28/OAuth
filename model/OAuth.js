const mongoose = require ("mongoose");
const Oauthschema = new mongoose.Schema({
    profile:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
     },
     googleId:{
        type:String
     }
}) ; 
module.exports = mongoose.model("user",Oauthschema)