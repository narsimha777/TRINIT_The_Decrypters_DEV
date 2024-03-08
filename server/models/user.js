const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const userSchema=new Schema({
     username:{
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        unique: true,
      },
      isVerified:{
        type: Boolean,
        required:true,
        deafult:false
      },
      role:{
        type: String,
        enum: ["student","tutor"],
        required:true
      }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
