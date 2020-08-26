import React from 'react'
import './NavBar-style.css'
import { Link } from 'react-router-dom'

const NavBar = props => {

   const { onHover } = props

   return(
      <div className="navbar-container" 
         onMouseEnter={() => onHover()} 
         onMouseLeave={() => onHover()}
         >

         <div className="not-expanded">
            E X P L O R E
         </div>

         <div className="navbar-flex-container">
            
            <Link to='about' className="nav-item">
               <div>ABOUT</div>
            </Link>

            <div className="nav-item">PROJECTS</div>

            <div className="nav-item">RESUME</div>

            <div className="nav-item">CONTACT</div>

         </div>
         
      </div>
   )
}

export default NavBar 