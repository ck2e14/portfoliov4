import React, { useState } from 'react';
import './Projects-style.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
   // TODO: based on activeCard, keep that ProjectCard highlighted 

   const [ activeCard, setActiveCard ] = useState()

   const handleCardClick = cardObj => {
      setActiveCard(cardObj)
   }

   const pebble = {
      title: 'Pebble Solutions Ltd',
      content: 'Commercial project. Designed and developed a mobile-responsive "brochure" style frontend for Pebble Solutions Ltd. Site maintained and updated via FTP. JavaScript React (hooks, router), HTML, vanilla CSS3. N.B Code authorised to be open-sourced by client.',
      link: 'https://pebblesolutions.com',
      codeLink: 'https://github.com/ck2e14/PebbleSolutions'
   }

   const hygenik = { 
      title: 'Hygenik',
      content: "Plots Government's FSA hygiene ratings data for food-serving premises on a map and side-panel. Uses current location or search term. Users can blacklist sites. React.js (hooks, router), JavaScript (ES6, Async), CSS3, HTNL, JWT-Authentication, Rails API.",
      link: 'https://mod5-frontend.herokuapp.com/',
      codeLink: 'https://github.com/ck2e14/Mod5ProjectBackend'
   }

   const eXchange = {
      title: 'eXchange',
      content: 'Currency exchange rate calculator. Rates pulled live from exchangeratesapi.io. React.js (hooks), JavaScript (ES6, fetch), vanilla CSS3, HTML.',
      link: 'https://practical-goldstine-fa44e5.netlify.app',
      codeLink: 'https://github.com/ck2e14/eXchange'
   }

   const mapStar = {
      title: 'MapStar',
      content: 'Google API-led route manager and directions service. JavaScript (ES6) React.js (hooks, router), JWT-Authentication, CSS3, HTML, Rails API.',
      codeLink: 'https://github.com/ck2e14/Mod4Project',
   }

   const vatCalc = {
      title: 'VAT Calculator',
      content: 'Dynamic VAT calculator, with adjustable VAT rates. Can enter multiple values for summed-/single-value VAT. Rounds upwards appropriately rather than truncating, i.e. not .toFixed(), and formats toLocaleString(). Features toggle-able dark theme. Built in React.js (hooks, controlled forms), vanilla CSS3 and HTML.',
      link: 'https://cook-dev-test.netlify.app/',
      codeLink: 'https://github.com/ck2e14/cook-test'
   }

   const coronahvirus = {
      title: 'Coro-nah-virus',
      content: "Google Chrome extension. Recursively searches through a website's HTML elements and black-box censors 'coronavirus' and 'COVID-19'. Because why not! Written in JavaScript, RegEx HTML and CSS.",
      codeLink: "https://github.com/ck2e14/Coro-nah-virus"
   }

   const rps = {
      title: 'RockPaperScissors',
      content: "My take on the classic Rock Paper Scissors game. User plays vs. computer, and must select option before round timer elapses. Computer player randomly selects choice. Scoreboard tracks session's score. JavaScript (ES6) React (using hooks), vanilla CSS.",
      link: 'https://rock-paper-scissors-cwk.netlify.app',
      codeLink: 'https://github.com/ck2e14/rock-paper-scissors'
   }

   const spaceX = {
      title: 'SpaceX Info',
      content: "Uses JavaScript Fetch API to display SpaceX's various rockets and dragon vehicles (technical data and gallery). JavaScript (ES6, Async) React (hooks), animated vanilla CSS.",
      link: 'https://spacex-cwk.netlify.app',
      codeLin: 'https://github.com/ck2e14/spaceX-vehicles'
   }

   return(
      <>
         <div className="content-container">

         <div className="vertical-projects-title">P R O J E C T S</div>

            <div className="content-border">

               <div className="projects-top-flex">

                  <div className="projectCards-container-flex">

                     <ProjectCard project={pebble} handleClick={handleCardClick}/>

                     <ProjectCard project={hygenik} handleClick={handleCardClick}/>

                     <ProjectCard project={eXchange} handleClick={handleCardClick}/>

                     <ProjectCard project={mapStar} handleClick={handleCardClick}/>

                     <ProjectCard project={vatCalc} handleClick={handleCardClick}/>

                     <ProjectCard project={coronahvirus} handleClick={handleCardClick}/>

                     <ProjectCard project={rps} handleClick={handleCardClick}/>

                     <ProjectCard project={spaceX} handleClick={handleCardClick}/>

                     </div>

                  <div className="projects-expandedCards-container">

                     {activeCard ? 

                        <div className="expandedCards-content">

                           <div className="expanded-title">
                              {activeCard.title}
                           </div>

                           <div className="expandedCard-blurb">
                              {activeCard.content}

                              <br/><br/><br/>

                              <div className="expandedCard-links">
                                 <a href={activeCard.link} 
                                    className="live-link" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                       Visit {activeCard.title}
                                 </a> 
                                 <a href={activeCard.codeLink} 
                                    className="live-link" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                       View {activeCard.title} code
                                 </a> 
                              </div>

                           </div>

                        </div>
                     : 
                        <div className="no-card-selected expanded-title">
                           Select a project.
                        </div>
                     }

                  </div>

               </div>

            </div>

         </div>

      </>
   )
}

export default Projects