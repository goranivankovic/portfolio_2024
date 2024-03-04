





import protfolioStyles from '../../Styles/Portfolio/Portfolio.module.css'


import NavBar from '../Nav/NavBar'




import { projects } from "./Data";


import { useEffect } from 'react'

import { motion } from "framer-motion"


const divHeight = {
	minHeight: "100vh"

}


import React from 'react'

function Portfolio() {


useEffect(() => {
  

  return () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [])


  return (


	<div>
 
  <NavBar />


    <motion.div style={divHeight}  className={protfolioStyles.main}
	 animate={{x:[1000,0],opacity:[0,1],rotate:[-10,0],borderRadius:['10%','20%','0%']}}
	 transition={{duration:2,ease:"circIn"}}
	  >
		 

		        

							{/* Component Headline */}


	
							<div className={protfolioStyles.firstDiv}>

							   
								  <span>Portfolio</span>  
							
                            
                            </div>



			{projects.map((e)=>

			       <div key={e.id} className={protfolioStyles.secondDiv}>
								<img className={protfolioStyles.secondDivItem1} src={e.img} alt="image" />

							    <div className={protfolioStyles.secondDivItem2}>
									<div className={protfolioStyles.secondDivItem2Headline}>{e.name}</div>

									<div>{e.textHeadline}</div>
								
									<div>{e.text} </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href={e.live}  target='_blank'>Live</a> <a href={e.code}  target='_blank'>Code</a> </div>

								</div>

							</div>
		
			)}				
</motion.div>


 </div>

  )
}

export default Portfolio