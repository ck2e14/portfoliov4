import React, {useState, useEffect} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import Navbar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import DarkModeToggle from './Components/DarkModeToggle/DarkModeToggle'
import MobilePlaceholder from './Components/MobilePlaceholder/MobilePlaceholder'
import { isMobile } from "react-device-detect";
import { HashRouter, Route, Switch } from "react-router-dom";
// TODO: ADD COMPONENT LIBRARY TO PROJECTS

function App() {

  const [ shader, setShader ] = useState(false)
  const [ paintNavBar, setPaintNavbar ] = useState(false)
  const [ isDarkMode, setIsDarkMode ] = useState(false)

  const handleHoverNavBar = () => setShader(!shader)

  useEffect(() => {
    setTimeout(() => {
      setPaintNavbar(true)
    }, 300);
  }, [])

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  // if(isMobile) return <MobilePlaceholder />

  return (
    <>

      <HashRouter>

        <Switch>

          <div className="top-level-container" id="top-level-container">

            { shader && <div className="shader" onMouseOver={handleHoverNavBar}></div>}

            { paintNavBar && <Navbar onHover={handleHoverNavBar} isDarkMode={isDarkMode} /> }

            { paintNavBar && <DarkModeToggle handleToggle={handleDarkModeToggle} isCurrentlyDark={isDarkMode} /> }

            <Route exact path='/'>
              <Landing isDarkMode={isDarkMode} /> 
            </Route>

            <Route path='/about'>
              <About isDarkMode={isDarkMode}/> 
            </Route>

            <Route path='/portfolio'>
              <Projects isDarkMode={isDarkMode} /> 
            </Route>

            <Route path='/resume'>
              <Resume isDarkMode={isDarkMode} /> 
            </Route>

            <Route path='/contact'>
              <Contact isDarkMode={isDarkMode} /> 
            </Route>
          </div>

        </Switch>

      </HashRouter>

      <link href="https://fonts.googleapis.com/css2?family=Tinos&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>

    </>
  );
}

export default App;
