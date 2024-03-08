const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const tutorSchema= new Schema({
    username:{
        type: String,
        unique:true,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
      email:{
        type: String,
        unique: true,
        required:true
      },
      languages: [{
        name: { type: String }
    }],
    role:{
        type:String,
        enum:["student","tutor"]
    },
    age:{type:Number},
    experience:{type:Number,required:true},
    courses_taking:[{type:mongoose.Schema.ObjectId,ref:"course"}],
    rating:{type:Number,default:0},
    description:{type:String},
    noofcourses:{type:Number,default:0},
    country:{type:String}
})

const tutorModel=mongoose.model('tutor',tutorSchema);
module.exports=tutorModel;