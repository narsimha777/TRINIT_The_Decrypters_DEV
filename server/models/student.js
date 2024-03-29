const {Schema}=require("mongoose");
const mongoose=require("mongoose");

const studentSchema=new Schema({
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
    role:{
        type:String,
        enum:["student","tutor"]
    },
    age:{type:Number,required:true},
    country:{type:String,required:true},
    languages: [{
        name: { type: String },
        fluency_rate: { type: Number}
    }],
    aimtolearn: [
         { type: String }],
    "courses_taken": [
        {
            "course": { "type": mongoose.Schema.ObjectId, "ref": "course" },
            "percentage_completed": { "type": Number }
        },
    ]
})
const studentModel=mongoose.model('student',studentSchema);
module.exports=studentModel;
