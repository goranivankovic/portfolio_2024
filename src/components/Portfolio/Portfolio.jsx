





import protfolioStyles from '../../Styles/Portfolio/Portfolio.module.css'





//Images
import { motion } from 'framer-motion'

import { projects } from "./Data";


import { useEffect } from 'react'


import { useSelector   } from 'react-redux'


import React from 'react'

function Portfolio() {

    const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)


useEffect(() => {
  

  return () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [])


  return (



    <div id='portfolio' style={{background:bgColor,color:textColor}}  className={protfolioStyles.main}  >
		 

		        

							{/* Component Headline */}


	
							<div className={protfolioStyles.firstDiv}>

							   
								  <span>Portfolio</span>  
							
                            
                            </div>





			{projects.map((e)=>

			   <div key={e.id} className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={e.img} alt="image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}>{e.name}</div>

									<div>{e.textHeadline}</div>
								
									<div style={{color:textColor}}>{e.text} </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href={e.live} style={{color:textColor}}  target='_blank'>Live</a> <a href={e.code} style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>
		
			)}		





 </div>

  )
}

export default Portfolio