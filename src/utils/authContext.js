import React,{createContext, useState} from 'react'
export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {

    const [currentUser,setCurentUser] = useState(
JSON.parse(localStorage.getItem("user")  || null)
    )
  return (
<AuthContext.Provider value={currentUser}>
    {children}
</AuthContext.Provider>
  )
}

export default AuthContextProvider