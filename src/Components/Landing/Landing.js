import React, {useState, useEffect} from 'react';
import './Landing.css'
import Typical from 'react-typical'
import gitLogo from '../../Assets/Media/git-image.png'
import brushStroke from '../../Assets/Media/brushStroke.png'

const Landing = () => {

   const [ renderTypewriter, setRenderTypewriter ] = useState(false)
   const [ render2ndTypewriter, setRender2ndTypewriter ] = useState(false)

   useEffect(() => {
      setTimeout(() => {
         setRenderTypewriter(true)
      }, 1300);
      // setTimeout(() => {
      //    setRenderTypewriter(false)
      //    setRender2ndTypewriter(true)
      // }, 7000);
   }, [])

   return (
      <div className="landing-container">

         

         <div className="border-box" style={{backgroundImage: `url:${brushStroke}`}}></div>

         {/* <img src={brushStroke} alt="" className="brushStroke"/> */}
         {/* <img src={gitLogo} alt="" className="logo"/> */}

         { renderTypewriter && 
            <Typical
            steps={["I design and develop apps to  help make people's lives easier."]}
            loop={1}
            // wrapper="p"
            className='tagline'
            />
         }

         {/* { render2ndTypewriter && 
            <Typical
            steps={["I design and develop web apps that help make people's lives easier."]}
            loop={Infinity}
            wrapper="p"
            className='my-name'
            />
         } */}

         <div className="my-name">
            Hi<span>,</span> I<span>'</span>m Chris<span>.</span>
         </div>

         {/* <div className="tagline">
            I design <span>&</span> develop web apps to help make people's lives easier<span>.</span>
         </div> */}

      </div>

   )
}

export default Landing