import React, { useEffect } from "react";
import "./About-style.css";
import SkillCard from "../SkillCard/SkillCard";
import { isMobile } from "react-device-detect";

const About = props => {
   const { isDarkMode } = props;

   useEffect(() => {
      const verticalTitles = document.getElementsByClassName("vert");
      const textToChange = document.getElementsByClassName("text");
      if (isDarkMode) {
         verticalTitles[0].classList.add("night-titles");
         textToChange[0].classList.add("night-text");
      }
      if (!isDarkMode) {
         verticalTitles[0].classList.remove("night-titles");
         textToChange[0].classList.remove("night-text");
      }
   }, [isDarkMode]);

   return (
      <>
         <div className='content-container'>
            <div className='content-border'>
               {isMobile && (
                  <div className='about-blurb text'>
                     <div className='blurb-contents-mobile'>
                        I trained as a full-stack web developer before joining Cimar UK as a Cloud Application
                        Configuration & Support Engineer. Cimar provides secure cloud-based medical PACS
                        solutions for NHS and private healthcare.
                        <br />
                        <br />I am quietly confident, naturally curious, and always learning new skills and
                        technologies.
                     </div>
                  </div>
               )}

               {!isMobile && (
                  <div className='about-blurb text'>
                     I trained as a full-stack web developer before joining Cimar UK as a Cloud Application
                     Configuration & Support Engineer. Cimar provides high-quality, secure cloud-based medical
                     imaging solutions for NHS and private healthcare.
                     <br />
                     <br />
                     I love to spend my spare time dreaming-up and developing performant, powerful &
                     attractive user experiences, particularly in React.js, supported by Rails RESTful APIs.
                     <br />
                     <br />I am quietly confident, naturally curious, and always learning new skills and
                     technologies.
                  </div>
               )}

               <div className='about-skillcards'>
                  <SkillCard
                     title={"Development Skills"}
                     listArray={[
                        "JavaScript, React.js",
                        "Python",
                        "HTML",
                        "CSS",
                        "Ruby, Rails RESTful APIs",
                        "RegEx",
                        "SQL",
                        "PostgreSQL & SQLite",
                     ]}
                  />

                  <SkillCard
                     title={"Support & Soft Skills"}
                     listArray={[
                        "Git versioning & GitHub",
                        "Excellent communicator",
                        "Customer service",
                        "Team player",
                        "Self-teacher & independent worker",
                        "FTP (FileZilla)",
                        "100WPM Typist",
                        "Mavic Pro Cinematic Drone Pilot",
                     ]}
                  />

                  <SkillCard
                     title={"Design Skills & Tools"}
                     listArray={["Balsamiq", "Sketch", "Adobe Lightroom", "DaVinci Resolve", "Pen & Paper!"]}
                  />
               </div>
            </div>
         </div>

         <div className='vertical-title vert'>A B O U T</div>
      </>
   );
};

export default About;
