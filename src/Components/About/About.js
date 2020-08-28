import React from 'react'
import './About-style.css'
import SkillCard from '../SkillCard/SkillCard'

const About = () => {
   return(
      <>
      <div className="content-container">

         <div className="content-border">

            <div className="about-blurb">
                  I am a junior <span> full-stack web developer.</span> I love to dream-up and develop <span>performant,</span> <span>powerful</span> & <span>attractive user experiences</span>, particularly in React.js, supported by Rails backends.<br/><br/><br/>
                  
                  Since graduating from FlatIron's immersive software engineering course in January, I've <span>levelled-up</span> my full-stack and UX skillset through personal & commercial projects, online tutorials, forum chats and algorithm challenge websites like <a href="http://edabit.com" target="_blank" rel="noopener noreferrer" className="link">edabit.com.</a> <br/><br/><br/>
                  I am quietly <span>confident,</span> naturally <span>curious,</span> and <span>always learning</span> new skills and new technologies.
            </div>

            <div className="about-skillcards">

               <SkillCard  
                  title={'Design Skills & Tools'} 
                  listArray={['Balsamiq', 'Sketch', 'Adobe Lightroom', 'DaVinci Resolve', "Pen & Paper!"]}
                  />

               <SkillCard 
                  title={'Development Skills & Tools'} 
                  listArray={['JavaScript (ES6, Async & Promises, OOP)', 'React.js (Hooks, Router, Redux)', 'Ruby on Rails (REST API, JWT auth, OOP)', 'SQL (PostgreSQL, SQLite)', 'HTML', 'CSS']}
                  />

               <SkillCard  
                  title={'Support & Soft Skills'}
                  listArray={['Git & GitHub versioning', 'Excellent Communicator', 'Teamworker', 'Self-teacher & independent worker', 'FTP Server Management (FileZilla)', '100WPM Typist', 'DJI Mavic Pro Drone Pilot']}
                  />

            </div>

         </div>

      </div>

      <div className="vertical-title">A B O U T</div>

      </>
   )
}

export default About