import React, { useState } from 'react';
import './MobileNavBar-style.css'
import BurgerBtn from './MobileBurgerBtn/MobileBurgerBtn'
import { Link } from 'react-router-dom'


const MobileNavBar = props => {

   const [ expandNavBar, setExpandNavBar ] = useState(false)

   const handleBtnClick = () => setExpandNavBar(!expandNavBar)

   return(
      <>
         <div className="mobile-nav-container">

            <BurgerBtn handleClick={handleBtnClick} />

            {/* { expandNavBar && <div className="mobile-shader-layer" onClick={handleBtnClick}></div> } */}

            { expandNavBar && 
               <div className="mobile-nav-expanded">

                  <div className="mobile-nav-expanded-flex-container">

                     <Link to="/about" className="mobile-nav-expanded-flex-item" onClick={handleBtnClick}>
                        <div className="mobile-nav-expanded-flex-item">
                           A B O U T
                        </div>
                     </Link>

                     <Link to="/portfolio" className="mobile-nav-expanded-flex-item" onClick={handleBtnClick}>
                        <div className="mobile-nav-expanded-flex-item">
                           P O R T F O L I O
                        </div>
                     </Link>

                     <Link to="/resume" className="mobile-nav-expanded-flex-item" onClick={handleBtnClick}>
                        <div className="mobile-nav-expanded-flex-item">
                           R E S U M E
                        </div>
                     </Link>

                     <Link to="/contact" className="mobile-nav-expanded-flex-item" onClick={handleBtnClick}>
                        <div className="mobile-nav-expanded-flex-item">
                           C O N T A C T
                        </div>
                     </Link>

                  </div>

               </div>
            }

         </div>
      </>
   )
}

export default MobileNavBar
