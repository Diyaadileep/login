import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

export const ThemeProvider = ({children}) => {

  const [theme,settheme]=useState(false)

  let toggleTheme=()=>{
    settheme(!theme)
  }
  return (
    <>
<ThemeContext.Provider value={{theme,toggleTheme}}>
  {children}
  </ThemeContext.Provider>
    </>


  )
}