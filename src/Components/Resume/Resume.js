import React from 'react'
import './Resume-style.css'
import resumeFile from '../../Assets/Documents/Chris Kennedy CV July 2020.pdf'

const Resume = () => {
   return(
      <>
         <div className="content-container">

            <div className="content-border">

               <div className="resume-container">

               <embed src={resumeFile} width="100%" height="100%"/>

               </div>

            </div>

         </div>

         <div className="vertical-resume-title">R E S U M E</div>

      </>
   )
}

export default Resume