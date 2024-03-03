


import contactStyles from '../../Styles/Contact/Contact.module.css'


import { AiOutlineArrowRight ,AiOutlineCheckCircle} from 'react-icons/ai'




import { useState } from 'react';
import { HiTrendingUp } from 'react-icons/hi';

import { motion } from "framer-motion"

import NavBar from '../Nav/NavBar'

const divHeight = {
	minHeight: "100vh"

}



function Contact() {
	const[email,setEmail]=useState('')
	const[text,setText]=useState('')
	const[laz,setLaz]=useState(false)





async	function sendData(c){
		c.preventDefault()
		

		try{

		

			const res = await axios.post(process.env.REACT_APP_POST_LINK,{email,text}) 

			console.log(res);
			


			const inputData =document.querySelectorAll('.data')
		     inputData.forEach((el)=>
			 el.value=''
			 )

			 setLaz(true)



			 setTimeout(() => {
				 setLaz(false)
			 }, 6000);
			




		}catch(err){
			console.log('Eror is :' + err)

		}


	
	}

	
  return (

<div>
 
  <NavBar />


	<motion.div style={divHeight}  className={contactStyles.main}
         animate={{x:[1000,0],opacity:[0,1],rotate:[-10,0],borderRadius:['10%','20%','0%']}}
	     transition={{duration:2,ease:"circIn"}}
	>




		 
                       <div className={contactStyles.firstDiv}>
							 <span>Contact me</span>	

						</div>


						<div className={contactStyles.secondDiv}>

                            <form className={contactStyles.secondDivForm}   onSubmit={sendData}>

									

								<div > Email	 
									<input type="email" placeholder='Enter a Email ...' 
									className= "data"
								
                                  
									 required={true}
									
									onChange={a=>setEmail(a.target.value)}/> 
								</div>

									<div>
									  Message <textarea  placeholder='Enter a Message ...' rows="4" cols="50"
									   required={true}
									   className= "data"
									
									         
									    onChange={b=>setText(b.target.value)}>
										</textarea>
									</div>
								{ !laz ?	<button  className={contactStyles.submitButton}  type="submit">Send</button> : <div  className={contactStyles.submitMessage}><span>Success</span>  <AiOutlineCheckCircle style={{color:'green'}} /> </div> }

								</form>


								<div className={contactStyles.secondivTextItems}>
									<div>I am always energetic and eager to learn. <AiOutlineCheckCircle  className={contactStyles.check} /> </div>

									<div> You want a broadly communicative co-worker. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>My working hours are customizable. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>Concentrated and easy to collaborate with. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>I am a goal-driven, super motivated. <AiOutlineCheckCircle  className={contactStyles.check} /> </div>

									 <div>I meet deadlines and can work under pressure. <AiOutlineCheckCircle  className={contactStyles.check} /> </div> 

								</div>



						</div>
                  </motion.div>





</div>
  )
}

export default Contact