import React from 'react';
import './App.css';
import useLocalStorage from 'use-local-storage'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
    return (
    <div className="App" data-theme={theme}>
      <div className='changeTheme'>
        <span>Toggle Mode</span>
        <button onClick={switchTheme} className='changeTheme__button'>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <Header/>
      <Main/>

    </div>
  );
}

export default App;
