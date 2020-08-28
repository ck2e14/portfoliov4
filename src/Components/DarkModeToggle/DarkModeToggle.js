import React, {useState} from 'react'
import './DarkModeToggle-style.css'

const DarkModeToggle = props => {

   // const [ classNames, setClassNames ] = useState(["toggle"])
   const [ toggle, setToggle ] = useState('')

   const toggleMode = () => {
      props.handleToggle(!props.isCurrentlyDark)
      const background = document.getElementById('top-level-container')
      const logoElem = document.getElementById('logo')
      const toggleTextElem = document.getElementById('toggle-option-text')

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