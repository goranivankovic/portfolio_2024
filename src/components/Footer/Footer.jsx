import React from 'react'

import footerStyle from '../../Styles/Footer/Footer.module.css'
import { FaBars,FaLinkedin,FaYoutube,FaGithub,FaFacebook } from 'react-icons/fa'

import { useSelector  } from 'react-redux'



function Footer() {
    const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)
  
	const particleColor = useSelector((state) => state.color.particleColor)





  return (

         
         <div className={footerStyle.main} style={{background:bgColor}}>

        

             <div className={footerStyle.firstDiv}>

              

               <a href='https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/' target='_blank'style={{color:textColor}} 
                className={footerStyle.firstDiv_items}><FaLinkedin    /></a> 

               <a href='https://github.com/goranivankovic' target='_blank'  className={footerStyle.firstDiv_items} style={{color:textColor}}><FaGithub/></a> 
               <a href='https://www.youtube.com/' target='_blank'  className={footerStyle.firstDiv_items} style={{color:textColor}}><FaYoutube /></a>
               <a href='https://www.facebook.com/' target='_blank'  className={footerStyle.firstDiv_items} style={{color:textColor}}><FaFacebook /></a>
               
           

             </div>

  
           


         </div>





  )
}

export default Footer