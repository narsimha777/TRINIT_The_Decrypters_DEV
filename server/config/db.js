const mongoose=require("mongoose");
require('dotenv').config();
const dbconn=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")     
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconn