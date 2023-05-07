import React, {useContext, useState, useLayoutEffect} from 'react'


const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext();

const darkTheme = [
  '--bg-grey: #202C36',
  '--bg-white: #2B3844',
  '--shadow: none',
  '--text: #fff',
  '--hover: #111517'
];

const lightTheme = [
  '--bg-grey: #F2F2F2',
  '--bg-white: #fff',
  '--shadow: 0 0 5px #979797',
  '--text: #111517',
  '--hover: #d3d3d3'
];

export function useTheme(){
  return useContext(ThemeContext)
}

export function useThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
  const [dark, setDark] = useState(window.localStorage.getItem('darkTheme'))

  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }
  
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');
    
    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === 'false') {
      setDark(false);
      applyTheme(lightTheme);
    } 
  // if state changes, repaints the app
  }, [dark]);

  function toggleTheme(){
    setDark(!dark)
    window.localStorage.setItem('darkTheme', !dark);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}