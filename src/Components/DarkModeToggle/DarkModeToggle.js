import React, {useState} from 'react'
import './DarkModeToggle-style.css'

const DarkModeToggle = props => {

   const [ toggle, setToggle ] = useState('')
   // eslint-disable-next-line
   const { handleToggle, isCurrentlyDark } = props

   const toggleMode = () => {
      handleToggle() 
      const background = document.getElementById('top-level-container')
      // The rest of the night-mode classList adding is done in individual component's useEffects
      if(toggle === "") {
         setToggle('active')
         background.classList.add('night')
      }
      if(toggle === "active"){
         setToggle("")
         background.classList.remove('night')
      } 
   }

   return(
      <>
         <div className={'toggle '+ toggle} onClick={toggleMode} ></div>
         {toggle === 'active' ? 
            <div id="toggle-option-text" style={{color: 'white'}}>Night Mode</div> 
         : 
            <div id="toggle-option-text" style={{color: 'black'}}>Light Mode</div>}
      </>
   )
}

export default DarkModeToggle