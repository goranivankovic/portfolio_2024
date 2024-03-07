

import { AiOutlineArrowRight} from 'react-icons/ai'

import { useEffect, useState } from 'react';

import { useSelector  } from 'react-redux'

import homeStyles from '../../Styles/Home/Home.module.css'



import NavBar from '../Nav/NavBar'









import { motion } from "framer-motion"
import { Link } from 'react-router-dom';






function Home() {

	const[ar,setAr]=useState({})



	useEffect(() => {
		    window.scrollTo(0, 0);
	  
	
	  return () => {
		setAr({})
		
	  }
	}, [])
		
  return (
   <div>
	
     <NavBar /> 

	<motion.div className={homeStyles.main}
    animate={{x:[1000,0],opacity:[0,1],rotate:[-10,0],borderRadius:['10%','20%','0%']}}
	 transition={{duration:2,ease:"circIn"}}
	>

		      

		
							      <div className={homeStyles.firstDiv}>

                                     <motion.div className={homeStyles.firstdivHeadline}
									 animate={{y:[-300,0],opacity:[0,1]}}
									 transition={{duration:1.5,delay:1,ease:'anticipate'}}
									 >GORAN IVANKOVIĆ</motion.div>
							       <motion.div  className={homeStyles.firstdivText} 
								   animate={{y:[300,0],opacity:[0,1]}}
									 transition={{duration:2,delay:1.5,ease:'anticipate'}}
									 >Frontend Developer, Designer, Coder, Debugger</motion.div>

						           </div>



	
							
							<div className={homeStyles.buttonLinkDiv}>

								 <Link to={"/about"} >
							<motion.button
							animate={{borderRadius: ['.7rem','1rem','2rem','.7rem'],scale:[1,1.2,1]}}

							transition={{duration:3,delay:1,ease:'anticipate',repeat:Infinity}}
								   className={homeStyles.button} > Next   <AiOutlineArrowRight className={homeStyles.arrow} /></motion.button>
								   
								</Link>

							</div>						











   </motion.div>

</div>
  )
}

export default Home