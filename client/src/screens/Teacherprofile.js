import React from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'

const TeacherProfile = ({ profile }) => {
  return (
    // <div className="bg-gray-100 p-6 rounded-lg">
    //   <h2 className="text-xl font-semibold mb-4">{profile.username}</h2>
    //   <div className="grid grid-cols-2 gap-4">
    //     <div>
    //       <p className="text-gray-600 font-semibold">Username:</p>
    //       <p className="text-gray-800">{profile.username}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Email:</p>
    //       <p className="text-gray-800">{profile.email}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Age:</p>
    //       <p className="text-gray-800">{profile.age}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Experience:</p>
    //       <p className="text-gray-800">{profile.experience}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Rating:</p>
    //       <p className="text-gray-800">{profile.rating} </p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Description:</p>
    //       <p className="text-gray-800">{profile.description}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Number of Courses Taking:</p>
    //       <p className="text-gray-800">{profile.courses_taking.length} </p>
    //     </div>
    //     <div>
    //       <p className="text-gray-600 font-semibold">Country:</p>
    //       <p className="text-gray-800">{profile.country}</p>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-gray-100 p-5 rounded-xl'>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">{profile.username}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details...</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.username}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.age}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Experience</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.experience}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {profile.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Country</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {profile.country}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Rating</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {profile.rating} ✨
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TeacherProfile;
