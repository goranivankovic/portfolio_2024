

import { AiOutlineArrowDown } from 'react-icons/ai'

import { useEffect, useState } from 'react';

import { useSelector  } from 'react-redux'

import homeStyles from '../../Styles/Home/Home.module.css'














import { motion } from "framer-motion"






function Home() {

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


	<div style={{background:bgColor}} id='home' className={homeStyles.main}>

		      

		
							      <div className={homeStyles.firstDiv}>

                                     <motion.div className={homeStyles.firstdivHeadline}
									 animate={{y:[-300,0],opacity:[0,1]}}
									 transition={{duration:1.5,delay:1,ease:'anticipate'}}
									 >GORAN IVANKOVIĆ</motion.div>
							       <motion.div  className={homeStyles.firstdivText} style={{color:textColor}}
								   animate={{y:[300,0],opacity:[0,1]}}
									 transition={{duration:2,delay:1.5,ease:'anticipate'}}
									 >Frontend Developer, Designer, Coder, Debugger</motion.div>

						           </div>



	
							
							<div className={homeStyles.buttonLinkDiv}>

								 <a href="/#about" style={{textDecoration:"none"}}>
							<motion.button
							animate={{borderRadius: ['.7rem','1rem','2rem','.7rem'],scale:[1,1.2,1]}}

							transition={{duration:3,delay:1,ease:'anticipate',repeat:Infinity}}
								   className={homeStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowDown className={homeStyles.arrow} /></motion.button></a>

							</div>						











   </div>


  )
}

export default Home