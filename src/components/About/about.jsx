import React from 'react'
import { useEffect, useState } from 'react';

import aboutStyles from '../../Styles/About/About.module.css'

import { useSelector  } from 'react-redux'

import img  from '../../assets/goran.jpg'

import { FaLaptop , FaUser ,FaMobileAlt ,FaLock ,FaChartBar   } from 'react-icons/fa'

import { IoLocationSharp } from "react-icons/io5";
import { CgArrowsExpandRight } from "react-icons/cg";


import Quest from '../Questions/questions'

import { motion } from "framer-motion"

function about() {
	const[ar,setAr]=useState({})

    const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)




	useEffect(() => {
		    window.scrollTo(0, 0);
	  
	
	  return () => {
		setAr({})
		
	  }
	}, [])
	



  return (
 <div>


    <div style={{background:bgColor,color:textColor}}  id='about' className={aboutStyles.main}>

        
                     
				<div className={aboutStyles.firstDiv}> <span>About me</span> </div>

						



          
  
  		


								<div className={aboutStyles.secondDiv} >

                     

                      <motion.img src={img} alt="" 
                          animate={{
                              scale: [1, 1.1, 1],
                          
                            borderRadius: ['10%','20%','30%','20%','10%'],
                             }}
                             transition={{duration:5,repeat:Infinity}}

                      />





                            <div className={aboutStyles.secondDivText}>

                              <div><FaUser />  Goran Ivankovic </div>

                              <div><IoLocationSharp /> Novi Sad / Serbia</div>


                              {/* <div> Hello, my name is Goran Ivankovic, and I am a self-taught Programmer and Designer. </div> */}

                              <div> I enjoy creating fully responsive websites with user-friendly web experiences and deliver highly accurate products that meet the quality standard.</div>
                                
                                <div> I love to learn new technologies and make unique UI/UX designs.</div>
                             
                              <div>	I can work closely with designers, helping them create beautiful designs, code pixel-perfect layouts, and bring the website to life with nice animations.</div>

                              <div> Also, I enjoy problem-solving and creating fast and dynamic React applications.</div>
                              
                              
                                   

                                                         
							             	
                                



                            </div>
                         
                         

                                </div>
					

							

        <div className={aboutStyles.threedDiv}>

                  <div className={aboutStyles.threedDivItems}>
                        
                     
                          <div>- User friendly interface</div>
                          <div>- Pixel-perfect websites</div>
                          <div>- Eye for design</div>
                          <div>- UI/UX design</div> 
                             
                          
                         

                         <span><FaUser /></span> 
                         
                    
                     </div>   


                  <div className={aboutStyles.threedDivItems}> 
                  <div>- Latest Technology</div>
                  <div>- Fast loading</div>
                  <div>- Latest frameworks</div>
                  <div>- Best solutions</div>
                   <div></div>
                  
                  <span><FaLaptop  /></span> 
                   </div>


                     <div className={aboutStyles.threedDivItems}> 
                     <div>- Responsive design</div>
                     <div>- Native experience</div>
                     <div>- Fast reliable</div>
                  
                  <span><FaMobileAlt /></span> 
                   </div>

           


                  <div className={aboutStyles.threedDivItems}>
                        
                     
                          <div>- Secure solution</div>
                          <div>- Admin dashboard</div>
                           <div>- Best tech</div> 
                           <div>- Scaled agile </div>

                         <span><FaLock  /></span> 
                         
                    
                     </div>   


                  <div className={aboutStyles.threedDivItems}> 
                    <div>- Scaled charts</div>
                    <div>- Business agility</div>
                    <div>- Highly customizable</div>
                   
                  
                  <span><FaChartBar  /></span> 
                   </div>


                     <div className={aboutStyles.threedDivItems}> 
                     <div>- Team working</div>
                     <div>- Problem solving</div>
                     <div>- Highly accurate</div>
                      <div>- Quality standards</div>
                  
                  <span><CgArrowsExpandRight /></span> 
                   </div>

              
            </div>  
      </div>


    <Quest /> 


</div>

  )
}

export default about;