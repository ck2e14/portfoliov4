import React from 'react'
import './NavBar-style.css'
import { Link } from 'react-router-dom'

const NavBar = props => {

   const { onHover } = props

   return(
      // TODO: Make the 'e x p l o r e' the active item?
      <div className="navbar-container" 
         onMouseEnter={() => onHover()} 
         onMouseLeave={() => onHover()}
         >

         <div className="not-expanded">
            M E N U
         </div>

         <div className="navbar-flex-container">
            
            <Link to='/about' className="nav-item">
               <div>ABOUT</div>
            </Link>

            <Link to='/projects' className="nav-item">
               <div>PROJECTS</div>  
            </Link>

            <div className="nav-item">RESUME</div>

            <div className="nav-item">CONTACT</div>

         </div>
         
      </div>
   )
}

export default NavBar 