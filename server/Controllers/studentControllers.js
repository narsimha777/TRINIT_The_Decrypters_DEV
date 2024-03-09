const courseModel = require("../models/courses");
const tutorModel = require("../models/tutor");
const studentModel = require("../models/student");
const jwt = require('jsonwebtoken');
const FlashModel = require("../models/flashcard");

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



async function subscribe(req, res) {
    try {
        const courseId = req.body.courseId;
        const course = await courseModel.findById(req.body.courseId);
        console.log(course);
        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }
            const payload = {
                "id": req.user.id,
                "role": "student"
            };

            
            const token = jwt.sign(
                payload,
                process.env.SECRET_TOKEN,
                {
                    expiresIn: `${course.valid_upto}m`,
                }
            );

          
            const decode = jwt.verify(token, process.env.SECRET_TOKEN);
            console.log(decode.body);

           
            course.students.push(token);
            await course.save();
            console.log(req.user.id);    
            const student = await studentModel.findById(req.user.id);
            console.log(student);    
            
            student.courses_taken.push({ course: courseId, percentage_completed: 0 });
            await student.save()    
            return res.status(200).json({ success: true, token });
      
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

async function joinclass(req,res){
    try {
        const courseId = req.body.courseId;
        const course = await courseModel.findById(courseId);
        const students = course.students;
    
        // Get the user ID from the request object
        const userId = req.user.id;
    
        for (const studentToken of students) {
            try {
                const decode = jwt.verify(studentToken, process.env.SECRET_TOKEN);
    
                if (decode.id === userId) {
                    if (decode.exp < Date.now() / 1000) {
                        return res.status(400).json({ success: false, message: 'Your subscription is expired' });
                    } else {
                        return res.status(200).json({ success: true, message: 'You can join the class' });
                    }
                }
            } catch (error) {
                // Handle token verification errors (e.g., expired tokens)
                console.error(error);
                return res.status(500).json({ success: false, message: 'Token verification error' });
            }
        }
    
        // User is not found in the students array
        return res.status(400).json({ success: false, message: 'You have no access' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }}
async function processPayment(paymentDetails) {
   
    return true; 
}

async function flashs(req,res){
    try {
        userId=req.user.id;
        
        const {word1,word2,language1,language2}=req.body;
        if(!word1 || !word2 || !language1 || !language2){
            return res.status(400).json({ "message": "Missing fields", "success": false });
        }
        const flash=new FlashModel({
            "user": userId,
        "flashcards": 
            {
                "word1": req.body.word1,
                "language1":req.body.language1,
                "word2":req.body.word2,
                "language2": req.body.language2
            }}
        );
        await flash.save();
        return res.status(200).json({ "message": "Flash card created", "success": true });
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });   
    }
}

async function flashd(req,res){
    try {
        flashid=req.body.id,
        await FlashModel.deleteOne({ _id: flashid });
        return res.status(200).json({ "message": "Flash card deleted", "success": true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });    
    }
}


async function flashget(req,res){
    try {
        userId=req.user.id;
        const flashes= await FlashModel.find({ _id: userId });
        return res.status(200).json({ "message": "Flash card displayes", "success": true ,flashcards:flashes.flashcards});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });    
    }
}

async function courseget(req,res){
    try {
       const courses=await courseModel.find({});
       return res.status(200).json({ "message": "course displays", "success": true ,flashcards:courses});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });    
    }
}


async function mycourseget(req,res){
    try {
        const userId = req.user.id; // Assuming you have the user ID in your request

        const user = await studentModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const courseIds= user.courses_taken.map(course => course.course);
        // const studentCourses = await courseModel.find({
        //     _id: coursesTaken[1]
        // });
        const studentCourses=[]
        for (const courseId of courseIds) {
            console.log(courseId);
            const courseDetails = await courseModel.findById(courseId);
            console.log(courseDetails);
            studentCourses.push(courseDetails);
        }

        return res.status(200).json({ success: true, studentCourses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });    
    }
}



module.exports={recommend,subscribe,joinclass,flashs,flashd,flashget,courseget,mycourseget}