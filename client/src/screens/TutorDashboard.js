import React from "react";
import Select from 'react-select';
import { Datepicker } from "@mobiscroll/react";
import { Progress } from '@material-tailwind/react';
import TeacherProfile from "./Teacherprofile"; // Assuming TeacherProfile component is implemented separately
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, setOptions } from '@mobiscroll/react';
import { useEffect, useMemo, useState } from 'react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
  });

const TeacherDashboard = () => {
    const role = 'tutor';
    function calculateEndTime(startTime, duration) {
        const start = new Date(startTime);
        const end = new Date(start.getTime() + duration * 60000); // Convert minutes to milliseconds
        return end.toISOString(); // Convert to ISO string format
      }
  const profile = {
    username: "TutorJane",
    password: "hashedPassword456",
    email: "tutor.jane@example.com",
    languages_known: [
      { name: "Spanish", level: "B2", trial_price: 90 },
      { name: "German", level: "A2", trial_price: 75 },
    ],
    role: "tutor",
    availability: [
      { start: "2024-03-09T10:00:00.000Z",  "duration": 60 ,title:"GermanClass"},
      { start: "2024-03-09T14:00:00.000Z",  "duration": 45 ,title:""},
    ],
    age: 28,
    experience: "Intermediate",
    courses_taking: ["course3", "course4"],
    rating: 4.2,
    description: "Passionate tutor in Spanish and German languages.",
    noofcourses: 2,
    country: "Canada",
  };

  const lang = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "German", code: "de" }
  ];

  const experience = [
    { level: "Beginner" },
    { level: "Intermediate" },
    { level: "Advanced" }
  ];

  const pricing = [
    { price: "$50" },
    { price: "$100" },
    { price: "$150" }
  ];

  function generateRandomColor() {
    // Generate random hexadecimal color code
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  const [languageFilter, setLanguageFilter] = useState(null);
  const [experienceFilter, setExperienceFilter] = useState(null);
  const [pricingFilter, setPricingFilter] = useState(null);

  const handleSearch = () => {
    // Implement search functionality based on filters
  };

  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(
    () => ({
      timeline: {
        type: 'day',
      },
    }),
    [],
  );
  const myResources = useMemo(() => {
    return profile.languages_known.map((ele, ind) => ({
      id: ind,
      name: ele.name,
      color: generateRandomColor()
    }));
  }, [profile.languages_known]);

  useEffect(() => {
    const e = profile.availability.map((ele,ind)=>({
        id:ind,
        resource:ind,
        start:ele.start,
        end:calculateEndTime(ele.start, ele.duration),
        title:ele.title
    }));
    setEvents(e);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 bg-gray-100">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Tutor Dashboard</h1>

          {/* Display upcoming lessons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">My Schedule</h2>
            {/* Placeholder for upcoming lessons */}
            
                <Eventcalendar
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            view={myView}
            data={myEvents}
            resources={myResources}
            
            />
                      {role === 'tutor' && <div className="pt-5"><h1><b>Update new Course</b></h1>
                          <Datepicker
                              controls={['datetime']}
                              touchUi={true}
                          /></div>}

            {!profile.availability&&<div className="flex justify-between mt-4 items-center bg-gray-200 p-4 rounded-lg">
              <p className="text-lg text-gray-700">No upcoming lessons scheduled.</p>
            </div>}
          </div>

          {/* Display language progress */}
          {/* <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Language Progress</h2>
            {/* Placeholder for language progress */}
            {/* <div className="flex flex-col justify-between items-center bg-gray-100 p-4 rounded-lg"> */}
              {/* <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>English</p>
                <Progress value={70} size='sm' label={'completed'} className='w-1/2 bg-gray-400' />
              </div>
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>Spanish</p>
                <Progress value={60} size='sm' label={'completed'} className='w-1/2 bg-gray-400' />
              </div>
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
                <p>German</p>
                <Progress value={80} size='sm' label={'completed'} className='w-1/2 bg-gray-400' />
              </div> */}
            {/* </div> */}
          {/* </div> */}

          {/* Filter component */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Languages Available</h2>
          <div className="flex flex-col sm:flex-row items-center justify-around mb-8">
            {/* Language filter */}
            {profile.languages_known.map((ele)=>(<div className="p-5 rounded-lg bg-gray-100"><div><b>{ele.name}</b></div><div><em>Rating:</em> {ele.level}</div></div>))}
          </div>

          {/* Display Teacher Profile */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Teacher Profile</h2>
          <TeacherProfile profile={profile} />
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
