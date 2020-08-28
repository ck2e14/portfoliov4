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
            M E N U
         </div>

         <div className="navbar-flex-container">
            
            <Link to='/about' className="nav-item">
               <div>ABOUT</div>
            </Link>

            <Link to='/projects' className="nav-item">
               <div>PROJECTS</div>  
            </Link>

            <Link to='/resume' className="nav-item">
               <div>RESUME</div>
            </Link>
            
            <Link to='/contact' className="nav-item">
               <div>CONTACT</div>
            </Link>


         </div>
         
      </div>
   )
}

export default NavBar 