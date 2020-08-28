import React, {useState, useEffect} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import Navbar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";


function App() {

  const [ shader, setShader ] = useState(false)
  const [ paintNavBar, setPaintNavbar ] = useState(false)

  const handleHoverNavBar = () => {
    setShader(!shader)
  }

  useEffect(() => {
    setTimeout(() => {
      setPaintNavbar(true)
    }, 5500);
  }, [])

  return (
    <>

      <HashRouter>

        <Switch>

          <div className="top-level-container">

            { shader && <div className="shader" onMouseOver={handleHoverNavBar}></div>}

            { paintNavBar && <Navbar onHover={handleHoverNavBar} /> }

            <Route exact path='/'>
              <Landing /> 
            </Route>

            <Route path='/about'>
              <About /> 
            </Route>

            <Route path='/projects'>
              <Projects /> 
            </Route>

            <Route path='/resume'>
              <Resume /> 
            </Route>

            <Route path='/contact'>
              <Contact /> 
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
