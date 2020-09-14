import React, { useEffect } from 'react'
import './Resume-style.css'
import { Document } from 'react-pdf'
import resumeFile from '../../Assets/Documents/ChrisKennedyAugustResume.pdf'
import { isMobile } from 'react-device-detect'

const Resume = props => {

   const { isDarkMode } = props

   useEffect(() => {
      const verticalTitles = document.getElementsByClassName('vert')
      if(isDarkMode) {
         verticalTitles[0].classList.add('night-titles')
      }
      if(!isDarkMode) {
         verticalTitles[0].classList.remove('night-titles')
      }
   }, [isDarkMode])

   // if(isMobile) {
   //    return(
   //       <Document file={resumeFile} />
   //    )
   // }
   if(isMobile) {
      return(
         <>
            <div className="content-container">

               <div className="content-border">

                  <div className="resume-container text">

                     <a href="https://drive.google.com/file/d/1woYe8QHyPm9TmgDGHCVYUGk0YnX4Y6zN/view?usp=sharing" className="direct-download-resume-link">View or Download Résumé</a>

                  </div>

               </div>

            </div>

            <div className="vertical-resume-title vert">r é s u m é</div>

         </>
      )
   }

   return(
      <>
         <div className="content-container">

            <div className="content-border">

               <div className="resume-container text">

               <embed src={resumeFile} width="100%" height="100%"/>

               </div>

            </div>

         </div>

         <div className="vertical-resume-title vert">r é s u m é</div>

      </>
   )
}

export default Resume