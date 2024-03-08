const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const studentSchema=new Schema({
    userId:{type:mongoose.Schema.ObjectId,ref:"user"},
    age:{type:Number,required:true},
    country:{type:String,required:true},
    languages: [{
        name: { type: String },
        fluency_rate: { type: String }
    }]
})