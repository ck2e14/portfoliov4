import React, {useState} from 'react'
import './SkillCard-style.css'

const SkillCard = props => {

   const [ front, setFront ] = useState(true)

   const { title, listArray } = props

   const buildList = () => {
      if(!listArray) return
      listArray.forEach(skill => {
         return(
            <li>{skill}</li>
         )
      })
   }

   return(
      <div className="skillcard-container" onMouseLeave={() => setFront(true)}>

         { front && 
            <div className="skillcard-front" 
               onMouseOver={() => setFront(false)} 
               onMouseLeave={() => setFront(true)} 
               >
               <p>{title}</p>
            </div>
         }

         { !front &&
            <div className="skillcard-back">
               <div className="skills-list">
                  <ul>
                     {buildList}
                  </ul>
               </div>
            </div>
         }

      </div>
   )
}

export default SkillCard