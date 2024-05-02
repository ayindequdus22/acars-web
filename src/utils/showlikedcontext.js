import React, { createContext,useState } from 'react'
export const showLikedContext = createContext()
const ShowlikedcontextProvider = ({children}) => {
    const [show, setShow] = useState(false);
  return (
<showLikedContext.Provider value={{ show, setShow }}>
    {children}
</showLikedContext.Provider>
  )
}

export default ShowlikedcontextProvider;