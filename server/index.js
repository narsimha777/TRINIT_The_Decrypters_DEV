const express = require('express')
const authRoutes = require("./routes/auth");
const tutorRoutes = require("./routes/tutor");

const dbconn = require('./config/db')
const app = express()
const cors = require("cors");
const cookieparser=require('cookie-parser')
const port = 3000
dbconn()
app.use(express.json());  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cookieparser())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use("/auth",authRoutes)
app.use("/tutor",tutorRoutes)

