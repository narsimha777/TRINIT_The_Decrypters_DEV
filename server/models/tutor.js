const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const tutorSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    languages_known: [{
        name: { type: String, required: true },
        level: { type: String, enum: ["A1", "A2", "B1", "B2", "C1", "C2"], required: true },
        trial_price: { type: Number }
    }],
    role: {
        type: String,
        enum: ["student", "tutor"]
    },
    availability: [
        {
            start_time: { type: Date, required: true },
            duration: { type: Number, enum: [30, 60, 90], required: true }
        }
    ],
    age: { type: Number },
    experience: { type: String, enum: ["Beginner", "Intermediate", "Advanced"] },
    courses_taking: [{ type: mongoose.Schema.ObjectId, ref: "course" }],
    rating: { type: Number, default: 0 },
    description: { type: String },
    noofcourses: { type: Number, default: 0 },
    country: { type: String }
});

const tutorModel = mongoose.model('Tutor', tutorSchema);
module.exports = tutorModel;




// [
//     {
//         "username": "TutorJohn",
//         "password": "hashedPassword123",
//         "email": "tutor.john@example.com",
//         "languages_known": [
//             { "name": "English", "level": "C2", "trial_price": 100 },
//             { "name": "French", "level": "B1", "trial_price": 80 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-08T12:00:00.000Z", "duration": 60 },
//             { "start_time": "2024-03-08T15:00:00.000Z", "duration": 90 }
//         ],
//         "age": 30,
//         "experience": "Intermediate",
//         "courses_taking": ["course1", "course2"],
//         "rating": 4.5,
//         "description": "Experienced tutor in English and French languages.",
//         "noofcourses": 2,
//         "country": "United States"
//     },
//     {
//         "username": "TutorJane",
//         "password": "hashedPassword456",
//         "email": "tutor.jane@example.com",
//         "languages_known": [
//             { "name": "Spanish", "level": "B2", "trial_price": 90 },
//             { "name": "German", "level": "A2", "trial_price": 75 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-09T10:00:00.000Z", "duration": 60 },
//             { "start_time": "2024-03-09T14:00:00.000Z", "duration": 90 }
//         ],
//         "age": 28,
//         "experience": "Intermediate",
//         "courses_taking": ["course3", "course4"],
//         "rating": 4.2,
//         "description": "Passionate tutor in Spanish and German languages.",
//         "noofcourses": 2,
//         "country": "Canada"
//     },
//     {
//         "username": "TutorMike",
//         "password": "hashedPassword789",
//         "email": "tutor.mike@example.com",
//         "languages_known": [
//             { "name": "Chinese", "level": "C1", "trial_price": 120 },
//             { "name": "Japanese", "level": "B1", "trial_price": 85 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-10T09:00:00.000Z", "duration": 60 },
//             { "start_time": "2024-03-10T13:00:00.000Z", "duration": 90 }
//         ],
//         "age": 35,
//         "experience": "Advanced",
//         "courses_taking": ["course5", "course6"],
//         "rating": 4.8,
//         "description": "Specialized tutor in Chinese and Japanese languages.",
//         "noofcourses": 2,
//         "country": "China"
//     },
//     {
//         "username": "TutorEmily",
//         "password": "hashedPasswordABC",
//         "email": "tutor.emily@example.com",
//         "languages_known": [
//             { "name": "Italian", "level": "B1", "trial_price": 95 },
//             { "name": "Russian", "level": "A2", "trial_price": 70 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-11T11:00:00.000Z", "duration": 60 },
//             { "start_time": "2024-03-11T16:00:00.000Z", "duration": 90 }
//         ],
//         "age": 32,
//         "experience": "Intermediate",
//         "courses_taking": ["course7", "course8"],
//         "rating": 4.4,
//         "description": "Passionate tutor in Italian and Russian languages.",
//         "noofcourses": 2,
//         "country": "Italy"
//     },
//     {
//         "username": "TutorAlex",
//         "password": "hashedPasswordXYZ",
//         "email": "tutor.alex@example.com",
//         "languages_known": [
//             { "name": "Arabic", "level": "B2", "trial_price": 110 },
//             { "name": "Hindi", "level": "A1", "trial_price": 65 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-12T08:00:00.000Z", "duration": 60 },
//             { "start_time": "2024-03-12T12:00:00.000Z", "duration": 90 }
//         ],
//         "age": 29,
//         "experience": "Intermediate",
//         "courses_taking": ["course9", "course10"],
//         "rating": 4.6,
//         "description": "Experienced tutor in Arabic and Hindi languages.",
//         "noofcourses": 2,
//         "country": "United Arab Emirates"
//     },
//     {
//         "username": "TutorOlivia",
//         "password": "hashedPassword123",
//         "email": "tutor.olivia@example.com",
//         "languages_known": [
//             { "name": "Portuguese", "level": "B1", "trial_price": 85 },
//             { "name": "Swedish", "level": "A2", "trial_price": 60 }
//         ],
//         "role": "tutor",
//         "availability": [
//             { "start_time": "2024-03-13T10:00:00.000Z", "duration": 60]
