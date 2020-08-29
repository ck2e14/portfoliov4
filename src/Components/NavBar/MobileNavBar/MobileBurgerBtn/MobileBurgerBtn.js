import React from 'react';
import './MobileBurgerBtn-style.css'

const MobileBurgerBtn = props => {
   
   const { handleClick } = props

   return(
      <div className="btn-container" onClick={handleClick}>
         
         <div className="btn-line"></div>

         <div className="btn-line"></div>

         <div className="btn-line"></div>

      </div>
   )
}

export default MobileBurgerBtn