import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes'

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("tutor")
  const handleChange = (e) => {
    setRole(e.target.value)
    navigate(ROUTES.student());
  }
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
        <div className='sm:mx-auto sm:w-full sm:max-w-sm p-6 rounded'>
        <div>
        <h3 className="text-2xl font-bold text-center text-white">Welcome to Lingua-Connect!</h3>
          <h2 className="text-center text-xl font-medium leading-9 tracking-tight text-white">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10">
          <form className="space-y-6" action="#" method="POST">
            <div className='m-0'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="current-username"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="cpassword"
                  autoComplete="current-cpassword"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4 text-white font-medium">
              <p>Register as </p> 
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-4 w-4"
                  value="tutor"
                  checked={role === 'tutor'}
                  onChange={handleChange}
                />
                <span className="ml-2">Tutor</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-4 w-4"
                  value="student"
                  checked={role === 'student'}
                  onChange={handleChange}
                />
                <span className="ml-2">Student</span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

        </div>
        </div>
      </div>
    </>
  )
}

export default Signup
