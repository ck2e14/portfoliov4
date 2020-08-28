import React, { useEffect } from 'react'
import './Resume-style.css'
import resumeFile from '../../Assets/Documents/Chris Kennedy CV July 2020.pdf'

const Resume = props => {

   const { isDarkMode } = props

   useEffect(() => {
      const verticalTitles = document.getElementsByClassName('vert')
      // const textToChange = document.getElementsByClassName('text') 
      if(isDarkMode) {
         verticalTitles[0].classList.add('night-titles')
         // textToChange[0].classList.add('night-text')
      }
      if(!isDarkMode) {
         verticalTitles[0].classList.remove('night-titles')
         // textToChange[0].classList.remove('night-text')
      }
   }, [isDarkMode])

   return(
      <>
         <div className="content-container">

            <div className="content-border">

               <div className="resume-container text">

               <embed src={resumeFile} width="100%" height="100%"/>

               </div>

            </div>

         </div>

         <div className="vertical-resume-title vert">R E S U M E</div>

      </>
   )
}

export default Resume