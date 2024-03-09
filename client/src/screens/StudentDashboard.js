import React, { useState } from 'react'
import lang from '../constants/languages';
import ReactStars from "react-rating-stars-component";
import experience from '../constants/experience';
import Select from 'react-select';
import { Progress } from '@material-tailwind/react';

const StudentDashboard = () => {
  const [languageFilter, setLanguageFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [pricingFilter, setPricingFilter] = useState('');

  const pricing = [
    { "price": "<500" },
    { "price": "500-2500" },
    { "price": "2500-5000" },
    { "price": ">5000" },
  ]

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'language':
        setLanguageFilter(value);
        break;
      case 'experience':
        setExperienceFilter(value);
        break;
      case 'pricing':
        setPricingFilter(value);
        break;
      default:
        break;
    }
  };

  // Placeholder function to handle search based on filters
  const handleSearch = () => {
    // Implement search functionality based on filters
    console.log('Search based on filters:', { languageFilter, experienceFilter, pricingFilter });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2  bg-gray-100">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Your Language Learning Dashboard</h1>


          {/* Display upcoming lessons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Lessons</h2>
            {/* Placeholder for upcoming lessons */}
            <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg">
              <p className="text-lg text-gray-700">No upcoming lessons scheduled.</p>
            </div>
          </div>

          {/* Display language progress */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Language Progress</h2>
            {/* Placeholder for language progress */}
            <div className="flex flex-col justify-between items-center bg-gray-100 p-4 rounded-lg">
              <div className='flex flex-col md:flex-row my-3 w-full justify-between items-center'>
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
              </div>
            </div>
          </div>

          {/* Filter component */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter Tutors</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            {/* Language filter */}
            <Select
              className="basic-single md:w-1/3 w-full mx-3 my-1 "
              classNamePrefix="select"
              defaultValue={lang[0]}
              isSearchable={true}
              name="color"
              options={lang}
              value={languageFilter}
              onChange={setLanguageFilter}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.code}
            />

            {/* Experience filter */}
            <Select
              className="basic-single md:w-1/3 w-full mx-3 my-1"
              classNamePrefix="select"
              defaultValue={experience[0]}
              isSearchable={true}
              name="color"
              options={experience}
              value={experienceFilter}
              onChange={setExperienceFilter}
              getOptionLabel={(option) => option.level}
              getOptionValue={(option) => option.level}
            />

            {/* Pricing filter */}
            <Select
              className="basic-single md:w-1/3 w-full mx-3 my-1"
              classNamePrefix="select"
              defaultValue={pricing[0]}
              isSearchable={true}
              name="color"
              options={pricing}
              value={pricingFilter}
              onChange={setPricingFilter}
              getOptionLabel={(option) => option.price}
              getOptionValue={(option) => option.price}
            />

            <button onClick={handleSearch} className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Apply Filters</button>
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