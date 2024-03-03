








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
 



import { useSelector  } from 'react-redux'


function Skills() {
	const[ar,setAr]=useState({})



		
  const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)


	useEffect(() => {
	  
	
	  return () => {

		setAr({})

		
	  }
	}, [])
	
	
  return (

	<div style={{background:bgColor}} id='skills' className={skillsStyles.main}>

	



		 
		
	
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

							<div className={skillsStyles.secondDivItem1} style={{color:textColor}}>

								<div> HTML </div>	
								<div>CSS </div>
								<div>RESPONSIVE DESIGN </div>
								<div>BOOTSTRAP</div>
								<div>FIGMA</div>


							 </div>


								<div className={skillsStyles.secondDivItem2} style={{color:textColor}}>

									
							     	<div>REACT / NEXT.JS </div>
									<div>VSCODE / ATOM / GITHUB </div>
								    <div>NODE.JS / EXPRESS.JS </div>
									<div>MONGO.DB / MYSQ </div>
									<div>CPANEL  </div>
								   
								   
								   
									
								</div>


							</div>


			


	</div> 
  )
}

export default Skills