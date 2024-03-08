const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const tutorSchema= new Schema({
    userId:{type:mongoose.Schema.ObjectId,ref:"user"},
    age:{type:Number,required:true},
    experience:{type:Number,required:true},
    courses_taking:[{type:mongoose.Schema.ObjectId,ref:"course"}],
    rating:{type:Number,default:0},
    description:{type:String},
    noofcourses:{type:Number,default:0},
    country:{type:String}
})

const tutorModel=mongoose.model('tutor',tutorSchema);
module.exports=tutorModel;