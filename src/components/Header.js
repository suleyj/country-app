import React from 'react';
import {useThemeUpdate} from '../context/ThemeContext'

const Header = () => {
  //const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
   
  return <header className='header'>
    <div className='header-container'>
      <h1>Where in the world?</h1>
      <button className='header-button' onClick={toggleTheme}>
        <ion-icon name="moon-outline"></ion-icon><span>Dark Mode</span>
      </button>
    </div>
  </header>;
};

export default Header;
