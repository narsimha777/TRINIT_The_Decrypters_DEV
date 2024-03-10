import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(localStorage.getItem("authToken"))
  const [signEmail, setSignEmail] = useState('')
  const [signUsername, setSignUsername] = useState('')
  const [role, setRole] = useState("tutor")
  const [signPassword, setSignPassword] = useState('')
  const [currRole, setCurrRole] = useState(role)
  const [loginUser, setLoginUser] = useState([])
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    setIsLogin(false)
    setLoginUser([])
    navigate("/")
  }
  const getUserDetails = async (token)=>{
    try {
      const response = await fetch(`${backendUrl}/student/getuser`, {
        method: 'GET',
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Credentials':'true',
          'authorization':token
        }
      });
      const resp = await response.json();
      if(resp.success){
        setLoginUser(resp.tutor)
        return resp;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin, signEmail, setSignEmail, signUsername, setSignUsername, setSignPassword, signPassword, handleLogout, role, setRole, currRole, setCurrRole,getUserDetails,loginUser, setLoginUser }}>
      {children}
    </AppContext.Provider>)
}

export { AppContext, AppProvider }