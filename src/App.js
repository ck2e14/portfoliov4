import React, {useState} from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import Navbar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  const [ shader, setShader ] = useState(false)

  const handleHoverNavBar = () => {
    setShader(!shader)
  }

  return (
    <>

      <BrowserRouter>

        <Switch>

          <div className="top-level-container">

            { shader && <div className="shader" onMouseOver={handleHoverNavBar}></div>}

            <Navbar onHover={handleHoverNavBar} />

            <Route exact path='/'>
              <Landing /> 
            </Route>

            <Route path='/about'>
              <About /> 
            </Route>

          </div>

        </Switch>

      </BrowserRouter>

      <link href="https://fonts.googleapis.com/css2?family=Tinos&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"/>

    </>
  );
}

export default App;
