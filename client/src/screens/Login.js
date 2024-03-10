import React, { useContext } from 'react'
import { useState } from 'react'
import image from '../assets/loginbg.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import ROUTES from '../routes';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { isLogin, setIsLogin,currRole,setCurrRole, setLoginUser } = useContext(AppContext)
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password :password
        }),
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Credentials':'true'
        }
      });
      const resp = await response.json();
      console.log(resp);
      if (resp.success) {
        setIsLogin(true)
        setCurrRole(resp.role);
        setLoginUser(resp.existingUser)
        localStorage.getItem("authToken",resp.token)
        navigate(`/dashboard/${resp.role}`)
      }
      else {
        alert("LOGIN Failed")
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-gray-900">
      <div className="px-8 py-6 bg-gray-900 rounded-xl shadow-md text-left">
        <h3 className="text-2xl font-bold text-center text-white">Welcome to Lingua-Connect!</h3>
        <p className="text-gray-200 text-center mt-4">
          Please sign-in to your account and start the adventure
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
              Username
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-200 text-sm font-bold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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
              <label htmlFor="remember-me" className="ml-2 text-gray-200 text-sm font-semibold">
                Remember me
              </label>
            </div>
            {/* <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a> */}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
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