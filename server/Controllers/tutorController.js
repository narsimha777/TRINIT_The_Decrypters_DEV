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
        

        return res.status(200).json(tutors);

    } catch (error){
        console.error(error);
        res.status(500).send("Internal server error");
    }
}

async function postcourse(req,res){
    try {
        req.body.tutor = req.user.id; // Ensure that tutorId is set correctly
        const { course_name, pricing, course_desc, Time_span, valid_upto, Course_level, maximum_students } = req.body;

        if (!course_name || !pricing || !Time_span || !valid_upto || !Course_level || !maximum_students) {
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
            maximum_students
        });

        // await newCourse.save();

        const course = await courseModel.findOne({ course_name: course_name });
        const tutor = await tutorModel.findById(req.user.id);

        if (!tutor) {
            return res.status(404).json({ message: 'Tutor not found', success: false });
        }
        console.log(course.id);
        tutor.courses_taking=[]
        tutor.courses_taking.push(course.id);
        await tutor.save();

        return res.status(200).json({ message: 'Course created successfully', success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}

module.exports = { gettut,postcourse};
