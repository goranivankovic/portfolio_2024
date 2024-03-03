


import contactStyles from '../../Styles/Contact/Contact.module.css'


import { AiOutlineArrowRight ,AiOutlineCheckCircle} from 'react-icons/ai'



import { useSelector  } from 'react-redux'
import { useState } from 'react';
import { HiTrendingUp } from 'react-icons/hi';

import axios from 'axios';


function Contact() {
	const[email,setEmail]=useState('')
	const[text,setText]=useState('')
	const[laz,setLaz]=useState(false)

	  const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)
	    


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

	<div style={{background:bgColor}} id='contact' className={contactStyles.main}>




		 
                       <div className={contactStyles.firstDiv}>
							 <span>Contact me</span>	

						</div>


						<div className={contactStyles.secondDiv}>

                            <form className={contactStyles.secondDivForm}  style={{color:textColor}} onSubmit={sendData}>

									

								<div > Email	 
									<input type="email" placeholder='Enter a Email ...' 
									className= "data"
								
                                  
									 required={true}
									 style={{boxShadow:'2px 1px 10px',textColor}}
									
									onChange={a=>setEmail(a.target.value)}/> 
								</div>

									<div>
									  Message <textarea  placeholder='Enter a Message ...' rows="4" cols="50"
									   required={true}
									   className= "data"
									   style={{boxShadow:'2px 1px 10px',textColor}}
									         
									    onChange={b=>setText(b.target.value)}>
										</textarea>
									</div>
								{ !laz ?	<button  className={contactStyles.submitButton} style={{color:textColor}}  type="submit">Send</button> : <div style={{color:textColor}} className={contactStyles.submitMessage}><span>Success</span>  <AiOutlineCheckCircle style={{color:'green'}} /> </div> }

								</form>


								<div className={contactStyles.secondivTextItems}  style={{background:bgColor,color:textColor}}>
									<div>I am always energetic and eager to learn. <AiOutlineCheckCircle  className={contactStyles.check} /> </div>

									<div> You want a broadly communicative co-worker. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>My working hours are customizable. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>Concentrated and easy to collaborate with. <AiOutlineCheckCircle  className={contactStyles.check} /></div>

									<div>I am a goal-driven, super motivated. <AiOutlineCheckCircle  className={contactStyles.check} /> </div>

									 <div>I meet deadlines and can work under pressure. <AiOutlineCheckCircle  className={contactStyles.check} /> </div> 

								</div>



						</div>

								


</div>


        



  )
}

export default Contact