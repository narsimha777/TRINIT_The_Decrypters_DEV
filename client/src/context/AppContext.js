import React, { createContext, useState } from 'react'
const AppContext = createContext();
const AppProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(localStorage.getItem("authToken"))

  return (
  <AppContext.Provider value={{isLogin,setIsLogin}}>
    {children}
  </AppContext.Provider>)
}

export { AppContext, AppProvider }