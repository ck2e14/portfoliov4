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
            <h5 className="">M E N U</h5>
         </div>

         <div className="navbar-flex-container">
            
            <Link to='/about' className="nav-item">
               <div>ABOUT</div>
            </Link>

            <Link to='/portfolio' className="nav-item">
               <div>PORTFOLIO</div>  
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