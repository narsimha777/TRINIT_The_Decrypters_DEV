const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const courseSchema=new Schema({
    tutor:{type:mongoose.Schema.ObjectId,ref:"student"},
    course_name:{type:String,required:true,unique:true},
    pricing:[{type:{
        "30min":Number,
        "60min":Number,
        "90min":Number,
    },required:true}],
    course_desc:{type:String,required:true},
    Time_span:[{
        start_time:{type:Date,required:true},
        duration:{type:Number,enum:[30,60,90],required:true}
    }],
    valid_upto:{type:Number,required:true},
    Course_level:{
        type:String,
        required:true
    },
    maximum_students:{
        type:Number,
        required:true
    }
})

const courseModel=mongoose.model('course',courseSchema);
module.exports=courseModel;
