import React from 'react';
import './MobileBurgerBtn-style.css'

const MobileBurgerBtn = props => {
   
   const { handleClick, paintBtn } = props

   if(paintBtn === 'exitMenu') {
      return(
         <div className="exit-btn-container" onClick={handleClick}>
            &times;
         </div>
      )
   } else {
      return(
         <div className="btn-container" onClick={handleClick}>
            
            <div className="btn-line"></div>

            <div className="btn-line"></div>

            <div className="btn-line"></div>

         </div>
      )
   }
}

export default MobileBurgerBtn