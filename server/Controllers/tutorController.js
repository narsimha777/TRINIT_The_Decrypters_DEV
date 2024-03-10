const courseModel = require("../models/courses");
const tutorModel = require("../models/tutor");

async function gettut(req, res) {

    try {
        const language = req.body.language;
        
        const trailPrice={ $lte: req.body.high,
            $gte: req.body.low};
        const level = req.body.level;
        // if (req.query.pricing_low && req.query.pricing_high) {
           
        //    trailPrice = {
        //         $gte: req.query.pricing_low,
        //         $lte: req.query.pricing_high
        //     };
        // } else if (req.query.pricing_low) {
            
        //     trailPrice = { $gte: req.query.pricing_low };
        // } else if (req.query.pricing_high) {
          
        //    trailPrice = { $lte: req.query.pricing_high };
        // }
        console.log(trailPrice);
        const tutors = await tutorModel.find({
          "languages_known": {
            $elemMatch: {
              "name": language,
              "level": level,
              "trial_price": trailPrice
            }
          }
        });
        

        return res.status(200).json({success:true,tutors});

    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error");
    }
}
async function getall(req,res){
    try {
       const tutor=await tutorModel.find({});
       return res.status(200).json({success:true,tutor});

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

async function postcourse(req,res){
    try {
        console.log(req.user.id)
        req.body.tutor = req.user.id; // Ensure that tutorId is set correctly

        const { course_name, pricing, course_desc, Time_span, valid_upto, Course_level, maximum_students } = req.body;

        if (!course_name || !pricing || !Time_span || !valid_upto || !Course_level) {
            return res.status(400).json({ "message": "Missing fields", "success": false });
        }

        const newCourse = new courseModel({
            tutor: req.user.id, // Use req.user.id directly
            course_name,
            pricing,
            course_desc,
            Time_span,
            valid_upto,
            Course_level,
           
        });

        await newCourse.save();
        console.log(newCourse);
        // const course = await courseModel.findOne({ course_name: course_name });
        const tutor = await tutorModel.findById(req.user.id);
        // console.log(course)
        if (!tutor) {
            return res.status(404).json({ message: 'Tutor not found', success: false });
        }
        // console.log(course._id);
        // tutor.courses_taking=[]
        if(!tutor.courses_taking){
            tutor.courses_taking = []
        }
        tutor.courses_taking.push(newCourse.id);
        await tutor.save();

        return res.status(200).json({ message: 'Course created successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}

async function getlang(req,res){
   try {
    tutorId=req.user.id;
    const tutor=await tutorModel.findById(tutorId);
    return res.status(200).json({ message: 'languages taught', success: True,language:tutor.languages_known });
   } catch (error) {
        return res.status(400).json({ message: 'Internal server error', success: false });
   }
}
async function getcourses(req,res){
    try {
     tutorId=req.user.id;
     const tutor=await tutorModel.findById(tutorId);
     const tutorCourses=[]
        for (const courseId of tutor.courses_taking) {
            console.log(courseId);
            const courseDetails = await courseModel.findById(courseId);
            console.log(courseDetails);
            tutorCourses.push(courseDetails);
        }
     return res.status(200).json({ message: 'courses taught', success: true,tutorCourses });
    } catch (error) {
        console.log(error);
         return res.status(400).json({ message: 'Internal server error', success: false });
    }
 }

module.exports = { gettut,postcourse,getlang,getall,getcourses};
