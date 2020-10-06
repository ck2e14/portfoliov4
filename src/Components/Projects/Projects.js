import React, { useState, useEffect } from "react";
import "./Projects-style.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = props => {
   // TODO: based on activeCard, keep that ProjectCard highlighted

   const [activeCard, setActiveCard] = useState(false);
   const { isDarkMode } = props;

   useEffect(() => {
      const verticalTitles = document.getElementsByClassName("vert");
      if (isDarkMode) {
         verticalTitles[0].classList.add("night-titles");
      }
      if (!isDarkMode) {
         verticalTitles[0].classList.remove("night-titles");
      }
   }, [isDarkMode]);

   const handleCardClick = cardObj => {
      setActiveCard(cardObj);
      document.getElementsByClassName("text")[0].classList.add("night-text");
   };

   const pebble = {
      title: "Pebble Solutions Ltd",
      content:
         'Commercial project. Designed and developed a mobile-responsive "brochure" style frontend for Pebble Solutions Ltd. Site maintained and updated via FTP. JavaScript React (hooks, router), HTML, vanilla CSS3. N.B Code authorised to be open-sourced by client.',
      link: "https://pebblesolutions.com",
      codeLink: "https://github.com/ck2e14/PebbleSolutions",
   };

   const hygenik = {
      title: "Hygenik",
      content:
         "Plots Government's FSA hygiene ratings data for food-serving premises on a map and side-panel. Uses current location or search term. Users can blacklist sites. React.js (hooks, router), JavaScript (ES6, Async), CSS3, HTML, JWT-Authentication, Rails API.",
      link: "https://hygenik.herokuapp.com",
      codeLink: "https://github.com/ck2e14/frontend5",
   };

   const eXchange = {
      title: "eXchange",
      content:
         "Currency exchange rate calculator. Rates pulled live from exchangeratesapi.io. React.js (hooks), JavaScript (ES6, fetch), vanilla CSS3, HTML.",
      link: "https://exchange-cwk.netlify.app",
      codeLink: "https://github.com/ck2e14/eXchange",
   };

   const mapStar = {
      title: "MapStar",
      content:
         "Google API-led route manager and directions service. JavaScript (ES6) React.js (hooks, router), JWT-Authentication, CSS3, HTML, Rails API.",
      codeLink: "https://github.com/ck2e14/Mod4Project",
   };

   const vatCalc = {
      title: "VAT Calculator",
      content:
         "Dynamic VAT calculator, with adjustable VAT rates. Can enter multiple values for summed-/single-value VAT. Rounds upwards appropriately rather than truncating, i.e. not .toFixed(), and formats toLocaleString(). Features toggle-able dark theme. Built in React.js (hooks, controlled forms), vanilla CSS3 and HTML.",
      link: "https://vat-calc.netlify.app/",
      codeLink: "https://github.com/ck2e14/cook-test",
   };

   const coronahvirus = {
      title: "Coro-nah-virus",
      content:
         "Google Chrome extension. Recursively searches through a website's HTML elements and black-box censors 'coronavirus' and 'COVID-19'. Because why not! Written in JavaScript, RegEx HTML and CSS.",
      codeLink: "https://github.com/ck2e14/Coro-nah-virus",
   };

   const rps = {
      title: "RockPaperScissors",
      content:
         "My take on the classic Rock Paper Scissors game. User plays vs. computer, and must select option before round timer elapses. Computer player randomly selects choice. Scoreboard tracks session's score. JavaScript (ES6) React (using hooks), vanilla CSS.",
      link: "https://rock-paper-scissors-cwk.netlify.app",
      codeLink: "https://github.com/ck2e14/rock-paper-scissors",
   };

   const spaceX = {
      title: "SpaceX Info",
      content:
         "Uses JavaScript Fetch API to display SpaceX's various rockets and dragon vehicles (technical data and gallery). JavaScript (ES6, Async) React (hooks), animated vanilla CSS.",
      link: "https://spacex-cwk.netlify.app",
      codeLink: "https://github.com/ck2e14/spaceX-vehicles",
   };

   const match_stat ={
      title: "Match_Stat",
      content: "Utilises a variety of different APIs and endpoints to collate a whole load of useful information about a range of European countries' football leagues and domestic cup competitions, as well as team info, transfer news and more. Currently in development and not deployed.",
      codeLink: "https://github.com/ck2e14/match_stat/"
   }

   const portfolio = {
      title: "Portfolio Website",
      content:
         "This site is built in JavaScript React, HTML and CSS to showcase my interests, projects and motivations and is itself intended to demonstrate them. If you would like a bespoke site like this one or totally different, please get in touch!",
      codeLink: "https://github.com/ck2e14/portfoliov4/tree/master/src/Components",
   };

   return (
      <>
         <div className='content-container text'>
            <div className='vertical-projects-title vert'>P O R T F O L I O</div>

            <div className='content-border'>
               <div className='projects-top-flex'>
                  <div className='projectCards-container-flex'>
                     <ProjectCard project={hygenik} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={pebble} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={eXchange} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={mapStar} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={vatCalc} isDarkMode={isDarkMode} handleClick={handleCardClick} />
                     
                     <ProjectCard project={match_stat} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard
                        project={coronahvirus}
                        isDarkMode={isDarkMode}
                        handleClick={handleCardClick}
                     />

                     <ProjectCard project={rps} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={spaceX} isDarkMode={isDarkMode} handleClick={handleCardClick} />

                     <ProjectCard project={portfolio} isDarkMode={isDarkMode} handleClick={handleCardClick} />
                  </div>

                  <div className='projects-expandedCards-container'>
                     {activeCard ? (
                        <div className='expandedCards-content'>
                           <div className='expanded-title'>{activeCard.title}</div>

                           <div className='expandedCard-blurb text'>
                              {activeCard.content}

                              <br />
                              <br />
                              <br />

                              <div className='expandedCard-links'>
                                 {activeCard.link && (
                                    <a
                                       href={activeCard.link}
                                       className='live-link'
                                       target='_blank'
                                       rel='noopener noreferrer'>
                                       Visit {activeCard.title}
                                    </a>
                                 )}

                                 <a
                                    href={activeCard.codeLink}
                                    className='live-link'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    View {activeCard.title} code
                                 </a>
                              </div>
                           </div>
                        </div>
                     ) : (
                        <div className='no-card-selected expanded-title'>Select a Project.</div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Projects;
