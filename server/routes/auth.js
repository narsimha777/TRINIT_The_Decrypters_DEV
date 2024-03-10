const express = require("express");
const route = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const studentModel = require("../models/student");
const tutorModel = require("../models/tutor");
// studentModel


route.post('/createstudent',
    body('email').isEmail(),
    body('password', 'Password should be greater than 5 characters').isLength({ min: 6 }),
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ message: errors.array()[0].msg });
            }

            const existingUser = await studentModel.findOne({ username: req.body.username });
            const existingUser1 = await tutorModel.findOne({ username: req.body.username });

            if (existingUser || existingUser1) {
                return res.status(400).json({ message: "Username already exists",success:false });
            }

            const { username, password, email, age, country } = req.body;
            if (!username || !password || !email || !age || !country) {
                return res.status(400).json({ message: "Required fields are missing",success:false });
            }

            const userData = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(userData.password, salt);
            userData.password = hash;

            const newUser = new studentModel(userData);
            await newUser.save();

            const student = await studentModel.findOne({ username: req.body.username });
            const payload = {
                "id": student.id.toString(),
                "role": "student"
            };

            const token = jwt.sign(
                payload,
                process.env.SECRET_TOKEN,
                {
                    expiresIn: "2d",
                }
            );

            res.cookie("authcookie", token, {
                httpOnly: true,
                sameSite: "strict",

            });

            console.log("Cookie set successfully");

            res.status(200).json({ message: "Account created", token,success:true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" ,success:false});
        }
    });



route.post('/createtutor',
    body('email').isEmail(),
    body('password', 'Password should be greater than 5 characters').isLength({ min: 6 }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            console.log(req.body);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: errors.array()[0].msg });
            }

            const existingUser1 = await studentModel.findOne({ username: req.body.username });
            const existingUser = await tutorModel.findOne({ username: req.body.username });

            if (existingUser || existingUser1) {
                return res.status(400).json({ message: "Username already exists",success:false});
            }

            const { username, password, email, age, country } = req.body;
            if (!username || !password || !email) {
                return res.status(400).json({ message: "Required fields are missing",success:false });
            }

            const userData = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(userData.password, salt);
            userData.password = hash;

            const newUser = new tutorModel(userData);
            await newUser.save();

            const tutor = await tutorModel.findOne({ username: req.body.username });
            const payload = {
                "id": tutor.id.toString(),
                "role": "tutor"
            };

            const token = jwt.sign(
                payload,
                process.env.SECRET_TOKEN,
                {
                    expiresIn: "2d",
                }
            );

            res.cookie("authcookie", token, {
                httpOnly: true,
                sameSite: "strict",

            });

            console.log("Cookie set successfully");

            res.status(200).json({ message: "Account created", token:token,success:true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" ,success:false});
        }
    });



    route.post('/login', async (req, res) => {
        try {
            const { username, password } = req.body;
            console.log(req.body);
            // console.log(req.headers.authorization);
            if (req.headers.authorization || req.cookies.authcookie) {
                return res.status(200).json({ message: "Already logged in", success: true });
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            console.log(hash);
            const existingTutor = await tutorModel.findOne({ username });
            const existingStudent = await studentModel.findOne({ username });
    
            if (!existingTutor && !existingStudent) {
                return res.status(200).json({ message: "Username doesn't exist", success: false });
            }
    
            const existingUser = existingTutor || existingStudent;
    
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Password doesn't match", success: false });
            }
    
            const role = existingTutor ? "tutor" : "student";
    
            const payload = {
                "id": existingUser.id.toString(),
                "role": role
            };
    
            const token = jwt.sign(
                payload,
                process.env.SECRET_TOKEN,
                {
                    expiresIn: "2d",
                }
            );
    
            res.cookie("authcookie", token, {
                httpOnly: true,
                sameSite: "strict",
            });
    
            console.log("Cookie set successfully");
    
            return res.status(200).json({ message: "Login successful",role:role,token:token,existingUser,success: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error", success: false });
        }
    });
    
    module.exports = route;
    