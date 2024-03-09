import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Navbar from './components/Navbar'
import Signupstudent from './screens/SignupStudent'
import TeacherDashboard from './screens/TutorDashboard'
import StudentDashboard from './screens/StudentDashboard'
import Error from './screens/Error'
import Signuptutor from './screens/SignupTeacher'
import Flashcard from './screens/flashcard'

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
      <Route path='/signup/tutor' element={<Signuptutor/>}/>
      <Route path='/student/flashcard' element={<Flashcard/>}/>
      <Route path='/dashboard/tutor' element={<TeacherDashboard/>}/>
      <Route path='*' element={<Error/>}/>
        {/* <Route path='/teacher'/> */}
    </Routes>
    </>
  )
}

export default App