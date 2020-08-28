import React, {useState, useEffect} from 'react';
import './Landing.css'
import Typical from 'react-typical'
// import gitLogo from '../../Assets/Media/git-image.png'
import brushStroke from '../../Assets/Media/brushStroke.png'

const Landing = () => {

   const [ renderTypewriter, setRenderTypewriter ] = useState(false)

   useEffect(() => {
      setTimeout(() => {
         setRenderTypewriter(true)
      }, 1900);
   }, [])

   return (
      
      <div className="landing-container">

         <div className="border-box" style={{backgroundImage: `url:${brushStroke}`}}></div>

         { renderTypewriter && 
            <Typical
            steps={["I design and develop web apps to help make people's lives easier. :)"]}
            loop={1}
            // wrapper="p"
            className='tagline'
            />
         }

         <div className="my-name">
            Hi<span>,</span> I<span>'</span>m Chris<span>.</span>
         </div>

      </div>

   )
}

export default Landing