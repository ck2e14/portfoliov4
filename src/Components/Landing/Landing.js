import React, {useState, useEffect} from 'react';
import './Landing.css'
import Typical from 'react-typical'
// import gitLogo from '../../Assets/Media/git-image.png'
import brushStroke from '../../Assets/Media/brushStroke.png'

const Landing = props => {

   const [ renderTypewriter, setRenderTypewriter ] = useState(false)
   const { isDarkMode } = props

   useEffect(() => {
      setTimeout(() => {
         setRenderTypewriter(true)
      }, 1300);
   }, [])

   useEffect(() => {
      const textToChange = document.getElementsByClassName('watercolor-bg') 
      if(isDarkMode) {
         textToChange[0].classList.add('hide-watercolor-bg')
      }
      if(!isDarkMode) {
         textToChange[0].classList.remove('hide-watercolor-bg')
      }
   }, [isDarkMode])

   return (
      
      <div className="landing-container">

         <div className="border-box" style={{backgroundImage: `url:${brushStroke}`}}></div>

         { renderTypewriter && 
            <Typical
            steps={["I design and develop web apps to make people's lives easier."]}
            loop={1}
            // wrapper="p"
            className='tagline'
            />
         }

         <div className="my-name watercolor-bg">
            Hi<span>,</span> I<span>'</span>m Chris<span>.</span>
         </div>

      </div>

   )
}

export default Landing