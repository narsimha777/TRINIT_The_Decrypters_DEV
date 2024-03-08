import React from 'react'
import { useState } from 'react'
import image from '../assets/loginbg.jpg';
import { NavLink } from 'react-router-dom';
import ROUTES from '../routes';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Add your form submission logic here
    console.log('Email:', email)
    console.log('Password:', password)
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-gray-200">
      <div className="px-8 py-6 bg-white rounded-xl shadow-md text-left">
        <h3 className="text-2xl font-bold text-center">Welcome to Lingua-Connect!</h3>
        <p className="text-gray-700 text-center mt-4">
          Please sign-in to your account and start the adventure
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-none focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-700 text-sm font-semibold">
                Remember me
              </label>
            </div>
            {/* <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a> */}
          </div>
          <button
            type="submit"
            className="btn-indigo w-full py-2 px-4 rounded shadow-sm focus:outline-none focus:ring focus:ring-offset-indigo-200 focus:ring-indigo-500"
          >
            SIGN IN
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <NavLink to={ROUTES.signup()} className="text-indigo-600 hover:underline">
              Create an account
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login