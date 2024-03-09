const courseModel = require("../models/courses");
const tutorModel = require("../models/tutor");
const studentModel = require("../models/student");

async function recommend(req, res) {
try {
    const studId = req.user.id;
    const stud = await studentModel.findById(studId);
    const languagesArray = stud.aimtolearn;
    const languageNames = languagesArray.map(language => language.name);
    console.log(languageNames);

    const tutors = await tutorModel.find({
        "languages_known.name": { $in: languageNames }
    });

    return res.status(200).json(tutors);
} catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
}}

module.exports={recommend}