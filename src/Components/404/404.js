import React from 'react'
import './404-style.css'

const NotFound = () => {
   return(
      <>
         <h1>ERROR: 404</h1>
         <p class="zoom-area">
         I'm not sure how you made it here!<br />I'm sorry you haven't found what
         you're looking for. Why not head back to the site?
         </p>
         <section class="error-container">
         <span>4</span>
         <span><span class="screen-reader-text">0</span></span>
         <span>4</span>
         </section>
         <div class="link-container">
         <a href="http://chriskennedy.live" class="more-link"
            >Return to chriskennedy.live Homepage</a
         >
         </div>
      </>
   )
}

export default NotFound