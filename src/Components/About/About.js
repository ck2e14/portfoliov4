import React from 'react'
import './About-style.css'
import SkillCard from '../SkillCard/SkillCard'

const About = () => {
   return(
      <>
      <div className="about-container">

         <div className="about-border">

         <div className="about-blurb">
               I am a junior <span> full-stack web developer.</span> I love creating and delivering <span>performant,</span> <span>powerful</span> & <span>attractive</span> user experiences, particularly in React.js, supported by Rails backends.<br/><br/><br/>
               
               Since graduating from FlatIron's immersive software engineering course in January, I've <span>levelled-up</span> my full-stack and UX skillset through personal & commercial projects. <br/><br/><br/>
               I am quietly <span>confident,</span> naturally <span>curious,</span> and <span>always learning</span> new skills and new technologies.
         </div>

         <div className="about-skillcards">

            <SkillCard  title={'Design Skills & Tools'} listArray={['Balsamiq', 'Sketch', 'Adobe Lightroom', "Pen & Paper!"]}/>

            <SkillCard  />

            <SkillCard  />

         </div>

         </div>

      </div>

      <div className="vertical-title">A B O U T</div>

      </>
   )
}

export default About