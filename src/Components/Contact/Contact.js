import React from 'react'
import './Contact-style.css'
import gitIcon from '../../Assets/Media/git2.svg'
import linkedInIcon from '../../Assets/Media/linkedinIconUSE.png'
import emailIcon from '../../Assets/Media/email2.png'
import mobileIcon from '../../Assets/Media/mobileIconUse.png'

const Contact = () => {
   return(
      <>
         <div className="content-container">

            <div className="content-border">

               <div className="contact-contents">
                  <p>I am looking for <span>full-time opportunities in web development</span>, particularly frontend. Whilst I love working primarily with <span>JavaScript</span>, and especially <span>React</span>, I am always looking to learn new stacks and technologies.<br/><br/><span>I work hard, learn quickly, and I'm always available</span> to debug or refactor! I'm also not afraid of irregular working hours, nor do I clock-off from high-priority work just because a working day has ended.<br/>
                  I am available immediately, able to drive and willing to relocate from my current base in Surrey.</p>
               </div>

               <div className="contact-links">

                  <a href="https://linkedin.com/in'/christopher-w-kennedy" target="_blank" rel="noopener noreferrer" className="contact-link">
                     <img src={linkedInIcon} alt="facebookIcon" className="icon"/>
                  </a>

                  <a href="mailto:chriswkennedy@icloud.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                     <img src={emailIcon} alt="facebookIcon" className="icon"/>
                  </a>

                  <a href="tel:+447717201509" target="_blank" rel="noopener noreferrer" className="contact-link">
                     <img src={mobileIcon} alt="facebookIcon" className="icon"/>
                  </a>

                  <a href="https://github.com/ck2e14" target="_blank" rel="noopener noreferrer" className="contact-link">
                     <img src={gitIcon} alt="facebookIcon" className="icon"/>
                  </a>


               </div>

            </div>

         </div>

         <div className="vertical-contact-title">C O N T A C T</div>

      </>
   )
}

export default Contact