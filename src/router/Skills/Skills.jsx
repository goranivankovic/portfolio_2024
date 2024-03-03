








import skillsStyles from '../../Styles/Skills/Skills.module.css'

import { useEffect, useState } from 'react';




import htmlImg from '../../assets/html.png' 
import cssImg from '../../assets/css.png' 
import jsImg from '../../assets/js.png'
import boot from '../../assets/boot.png'  

import sassImg from '../../assets/sass.png' 
import photoImg from '../../assets/photoshop.png' 
import reduxImg from '../../assets/redux.png'
import reactImage from '../../assets/react.png'

import mongoDB from '../../assets/mongo.png' 
import nodeJsImage from '../../assets/nodejs.png' 
import githubImage from '../../assets/github.png'
import pythonImg from '../../assets/python.png'
 

import NavBar from '../Nav/NavBar'

import { motion } from "framer-motion"

const divHeight = {
	minHeight: "100vh"

}

function Skills() {
	const[ar,setAr]=useState({})





	useEffect(() => {
	  
	
	  return () => {

		setAr({})

		
	  }
	}, [])
	
	
  return (
  <div>

	<NavBar />


	<motion.div style={divHeight}  className={skillsStyles.main}
		          animate={{x:[1000,0],opacity:[0,1],rotate:[-10,0],borderRadius:['10%','20%','0%']}}
	              transition={{duration:2,ease:"circIn"}}
	>

	



		 
		
	
							<div className={skillsStyles.firstDiv}>

							   
								<span>Skills / Tech</span>   
							


                            </div>	




	 <div className={skillsStyles.threedDiv}>

				<img src={htmlImg} alt="" />
				<img src={cssImg} alt="" />
				<img src={boot} alt="" />
				<img src={jsImg} alt="" />

				<img src={sassImg} alt="" />
				<img src={photoImg} alt="" />
				<img src={reduxImg} alt="" />
				<img src={reactImage} alt="" />

				
				<img src={mongoDB} alt="" />
				<img src={nodeJsImage} alt="" />
				<img src={githubImage} alt="" />
				<img src={pythonImg} alt="" />


			  </div>









						<div className={skillsStyles.secondDiv}>

							<div className={skillsStyles.secondDivItem1}>

								<div> HTML </div>	
								<div>CSS </div>
								<div>RESPONSIVE DESIGN </div>
								<div>BOOTSTRAP</div>
								<div>FIGMA</div>


							 </div>


								<div className={skillsStyles.secondDivItem2}>

									
							     	<div>REACT / NEXT.JS </div>
									<div>VSCODE / ATOM / GITHUB </div>
								    <div>NODE.JS / EXPRESS.JS </div>
									<div>MONGO.DB / MYSQ </div>
									<div>CPANEL  </div>
								   
								   
								   
									
								</div>


							</div>


			  </motion.div>


	</div> 
  )
}

export default Skills