import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Navbar from './components/Navbar'
import Signupstudent from './screens/SignupStudent'
<<<<<<< HEAD
import TeacherDashboard from './screens/TutorDashboard'
=======
import StudentDashboard from './screens/StudentDashboard'
import Error from './screens/Error'
>>>>>>> 5997f167754413d9ac8fe51fcb792192081e230e

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard/student' element={<StudentDashboard/>}/>
      <Route path='/signup/student' element={<Signupstudent/>}/>
<<<<<<< HEAD
      <Route path='/teacherDashboard' element={<TeacherDashboard/>}/>
=======
      <Route path='*' element={<Error/>}/>
        {/* <Route path='/teacher'/> */}
>>>>>>> 5997f167754413d9ac8fe51fcb792192081e230e
    </Routes>
    </>
  )
}

export default App