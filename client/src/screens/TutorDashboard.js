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
    const [duration, setDuration] = useState([]);
    const [selectedDate30, setSelectedDate30] = useState(null);
    const [selectedDate60, setSelectedDate60] = useState(null);
    const [selectedDate90, setSelectedDate90] = useState(null);
    const [validity, setValidity] = useState();
    const [description, setDescription] = useState();
    const [coursename, setCoursename] = useState('');
    const [prices, setPrice] = useState({});
    const durations = [{"value":30},{"value":60},{"value":90}] 
    const handleDateChange30 = (event) => {
      setSelectedDate30(event.value);
    };  
    const handleDateChange60 = (event) => {
      setSelectedDate60(event.value);
    };  
    const handleDateChange90 = (event) => {
      setSelectedDate90(event.value);
    };  
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

  const handleSubmit =(e)=>{
    e.preventDefault();
    const Timespan = duration.map((ele) => {
      if (ele.value === 30) {
        return { "start_time": selectedDate30, "duration": ele.value };
      }
      if (ele.value === 60) {
        return { "start_time": selectedDate60, "duration": ele.value };
      }
      if (ele.value === 90) {
        return { "start_time": selectedDate90, "duration": ele.value };
      }
    });
    const finalobject = {
      "course_name":coursename,
      "pricing":[
        {
          "30min":prices["30min"],
          "60min":prices["60min"],
          "90min":prices["90min"]
        }
      ],
      "course_desc":description,
      "Time_span":Timespan,
      "valid_upto":validity,
      "Course_level":selectedValue,
    }
    // console.log(finalobject);
  }
  // function generateRandomColor() {
  //   // Generate random hexadecimal color code
  //   const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  //   return color;
  // }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log('Selected option value:', event.target.value);
  };

  const [selectedValue, setSelectedValue] = useState('');
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
      color: '#FF0000'
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
              <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Course Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e)=>setCoursename(e.target.value)}required />
                </div>
                <label className="block text-gray-700 text-sm font-bold mb-2" for="selectOption">Enter Course-level:</label>
                <select id="selectOption" name="selectOption" value={selectedValue} onChange={handleChange}>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </select>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Course Validity period in Days
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" onChange={(e)=>setValidity(e.target.value)}required />
                </div>
                <div className="mb-4">
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Enter Price for 30 minutes session
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={prices[0]} onChange={(e) => { setPrice({"30min":e.target.value,"60min": prices["60min"], "90min":prices["90min"]}) }} required />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Enter Price for 60 minutes session
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={prices[1]} onChange={(e) => {setPrice({"30min":prices["30min"],"60min": e.target.value, "90min":prices["90min"]})}} required />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Enter Price for 90 minutes session
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={prices[2]} onChange={(e) => { setPrice({"30min":prices["30min"],"60min": prices["60min"], "90min":e.target.value})}} required />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    {/* {description} */}
                    Enter Course Description
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={description} type="text" onChange={(e)=>{setDescription(e.target.value)}}required />
                </div>
                <div className="mb-4">
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Enter Course Duration
                  </label>
                  {/* {JSON.stringify(duration)} */}
                  <Select
                                defaultValue={[]}
                                isMulti
                                id='langs'
                                name="colors"
                                options={durations}
                                value={duration}
                                onChange={setDuration}
                                // isOptionDisabled={() => selectedLang.length >= 3}
                                getOptionLabel={(option) => option.value}
                                className="basic-multi-select mt-2"
                                placeholder="Select Languages"
                                classNamePrefix="select"
                            />
                    {/* {duration.map((ele)=>(<><p>Enter Time-Slot for {ele.value} minute duration session</p><Datepicker
                    controls={['datetime']}
                    value={selectedDate}
                    onChange={handleDateChange}
                    touchUi={true}
                  /></>))} */}
                  {duration.some(item => item.value === 30)&&<><p>Enter Time-Slot for 30 minute duration session</p><Datepicker
                    controls={['datetime']}
                    value={selectedDate30}
                    onChange={handleDateChange30}
                    touchUi={true}
                  /></>}
                  {duration.some(item => item.value === 60)&&<><p>Enter Time-Slot for 60 minute duration session</p><Datepicker
                    controls={['datetime']}
                    value={selectedDate60}
                    onChange={handleDateChange60}
                    touchUi={true}
                  /></>}
                  {duration.some(item => item.value === 90)&&<><p>Enter Time-Slot for 90 minute duration session</p><Datepicker
                    controls={['datetime']}
                    value={selectedDate90}
                    onChange={handleDateChange90}
                    touchUi={true}
                  /></>}
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                  </button>
                </div>
              </form>

                      </div>}

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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Languages Known</h2>
          <div className="flex flex-col sm:flex-row items-center justify-around mb-8">
            {/* Language filter */}
            {profile.languages_known.map((ele)=>(<div className="p-5 rounded-lg bg-gray-100"><div><b>{ele.name}</b></div><div><em>Course-level:</em> {ele.level}</div></div>))}
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Courses Taking ]</h2>
          <div className="flex flex-col sm:flex-row items-center justify-around mb-8">
            
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
