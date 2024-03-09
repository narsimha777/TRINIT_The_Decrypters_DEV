import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Progress } from '@material-tailwind/react';

const StudentDashboard = () => {
  const classes = [{
    "tutor": "611f1675c2b78c47d86d4a1a", // Replace with a valid ObjectId for the tutor
    "course_name": "English 101",
    "pricing": [
      {
        "30min": 50,
        "60min": 80,
        "90min": 120
      }
    ],
    "course_desc": "An introductory course to basic english concepts.",
    "Time_span": [
      {
        "start_time": "2024-03-10T09:00:00.000Z",
        "duration": 60
      },
      {
        "start_time": "2024-03-12T14:00:00.000Z",
        "duration": 90
      }
    ],
    "valid_upto": 20241231,
    "Course_level": "Beginner",
    "maximum_students": 20
  },{
    "tutor": "611f1675c2b78c47d86d4a1b", // Replace with a valid ObjectId for the tutor
    "course_name": "Spanish Literature Seminar",
    "pricing": [
        {
            "30min": 40,
            "60min": 70,
            "90min": 100
        }
    ],
    "course_desc": "A deep dive into classic and contemporary Spanish literature.",
    "Time_span": [
        {
            "start_time": "2024-03-09T07:00:00.000Z",
            "duration": 60
        },
        {
            "start_time": "2024-03-17T16:00:00.000Z",
            "duration": 90
        },
        {
            "start_time": "2024-03-17T16:00:00.000Z",
            "duration": 90
        }
    ],
    "valid_upto": 20241231,
    "Course_level": "Intermediate",
    "maximum_students": 15
}]

  const isJoinButtonEnabled = (startTime, duration) => {
    const currentTime = new Date().getTime();
    const classStartTime = new Date(startTime).getTime();
    const classEndTime = classStartTime + duration * 60000; // Convert duration to milliseconds

    return currentTime >= classStartTime && currentTime <= classEndTime;
  };
  // Function to handle filter changes
  

  // Placeholder function to handle search based on filters
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2  bg-gray-100">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Language Learning Dashboard</h1>


          {/* Display upcoming lessons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Lessons</h2>
            {/* Placeholder for upcoming lessons */}
            <div className="flex flex-col justify-between items-center bg-gray-200 p-4 rounded-lg">
              {classes.length===0 && <p className="text-lg text-gray-700">No upcoming lessons scheduled.</p>}
              {classes.map((c, index) => (
                <div className="container mx-auto py-3">
                  <h2 className="text-3xl font-bold mb-4">{c.course_name}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-wrap">
                    {c.Time_span.map((span, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-lg font-semibold mb-2">Class {index + 1}</p>
                        <p className="text-gray-600 mb-2">Start Time: {new Date(span.start_time).toLocaleString()}</p>
                        <p className="text-gray-600 mb-2">Duration: {span.duration} minutes</p>
                        <p className="text-gray-600 mb-2">Maximum Students: {c.maximum_students}</p>
                        {/* <button disabled={!isJoinButtonEnabled(span.start_time,span.duration)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
                        <button  className={`${isJoinButtonEnabled(span.start_time,span.duration)?'bg-blue-500 hover:bg-blue-700':'cursor-not-allowed bg-gray-400'} text-white font-bold py-2 px-4 rounded`}>
                          Join Class
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-600 mt-4">
                    <p>Taught by: {c.tutor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Display language progress */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Language Progress</h2>
            {/* Placeholder for language progress */}
            <div className="flex flex-col justify-between items-center bg-gray-100 p-4 rounded-lg">
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>English</p>
                <Progress value={70} size='sm' label={'completed'} className='w-full md:w-1/2 bg-gray-400' />
              </div>
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>Spanish</p>
                <Progress value={60} size='sm' label={'completed'} className='w-full md:w-1/2 bg-gray-400' />
              </div>
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>German</p>
                <Progress value={80} size='sm' label={'completed'} className='w-full md:w-1/2 bg-gray-400' />
              </div>
            </div>
          </div>

          {/* Display recommended tutors */}

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Tutors</h2>
          <div
            className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 md:max-w-xl md:flex-row">
            <div
              className=" justify-center items-center flex w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            // src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            >
              <img src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg" className='max-h-60 object-contain rounded-full m-4 rounded' alt="" />
            </div>
            <div className="flex flex-col justify-start p-6">
              <h5
                className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                K Narsimha Rao
              </h5>
              <div className='flex items-center'>
                <ReactStars value={4} count={5} size={24} edit={false} />
                <h5 className='text-gray-100 ml-5'>Telugu</h5>
              </div>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                <button></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentDashboard