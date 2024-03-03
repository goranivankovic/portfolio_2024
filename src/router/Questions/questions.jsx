import React from 'react'
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWrench } from "react-icons/fa";






import creative from '../../assets/creative.jpg'
import desk from '../../assets/desk.jpg'





import questStyles from '../../Styles/Quest/Quest.module.css'

import { useEffect ,useState } from 'react';
import { useSelector  } from 'react-redux'


function questions() {

   const[laz1,setLaz1]=useState(true)
  const[laz2,setLaz2]=useState(true)
  const[laz3,setLaz3]=useState(true)
  const[laz4,setLaz4]=useState(true)  
  const[laz5,setLaz5]=useState(true)  
		


  function item1() {
    setLaz1(!laz1)
    setLaz2(true)
    setLaz3(true)
    setLaz4(true) 
    setLaz5(true)
    
  }

    function item2() {
    setLaz2(!laz2)
    setLaz1(true)
    setLaz3(true)
    setLaz4(true) 
    setLaz5(true)
    
  }


    function item3() {
    setLaz3(!laz3)
    setLaz1(true)
    setLaz2(true)
    setLaz4(true) 
    setLaz5(true)
    
  }

    function item4() {
    setLaz4(!laz4)
     setLaz1(true)
    setLaz2(true)
    setLaz3(true) 
    setLaz5(true)
    
  }


   function item5() {
    setLaz5(!laz5)
     setLaz1(true)
    setLaz2(true)
    setLaz3(true) 
    setLaz4(true)
    
  }

  return (
  
<div id='about' className={questStyles.main}>
                     
         <div className={questStyles.fourDiv}>


                       {/* First Qustion */}
                     <div className={questStyles.fourDivItems} >
                           API integration in to your projects?  {laz1 ? <span onClick={item1}>+</span> : <span onClick={item1}>-</span> }
 
                               {!laz1  ? 
                               <div>

                                APIs are sets of definitions, protocols, and commands that applications use to exchange data with each other. Each API exposes a number of services (or endpoints) for the application or service that sits behind it.
                      

                               </div>
                                :""}

                      </div>

       
                           {/* Second Qustion */}
                  <div className={questStyles.fourDivItems}>
                          Prioritize Security  for API projects?  {laz2 ? <span onClick={item2}>+</span> : <span onClick={item2}>-</span> }
 
                               {!laz2  ? 
                               <div>

                            Security should be a top priority when integrating APIs. Ensure that all data transfers are encrypted and that access to the API is protected, often through token-based authentication.
                      

                               </div>
                                :""}

                      </div>


               

               
                           {/* Threed Qustion */}
                  <div className={questStyles.fourDivItems} >
                          Design  Scalability for API projects?  {laz3 ? <span onClick={item3}>+</span> : <span onClick={item3}>-</span> }
 
                               {!laz3  ? 
                               <div>

                        Consider how your integration may need to scale in the future. As your business grows, your API integration needs will likely change. Design your APIs with this in mind, allowing for flexibility and scalability as your needs evolve.
                      

                               </div>
                                :""}

                      </div>











             {/* Four Qustion */}
                  <div className={questStyles.fourDivItems}>
                          Best Practices for API Integration ?  {laz4 ? <span onClick={item4}>+</span> : <span onClick={item4}>-</span> }
 
                               {!laz4  ? 
                               <div>

                     Successful API integration is more than just connecting two systems; it requires strategic planning, careful execution, and ongoing management. To help ensure your API integration projects are successful, here are some best practices to consider.
                      

                               </div>
                                :""}

                      </div>












   {/* Five Qustion */}
                  <div className={questStyles.fourDivItems}>
                          Regular Testing ?  {laz5 ? <span onClick={item5}>+</span> : <span onClick={item5}>-</span> }
 
                               {!laz5  ? 
                               <div>

                   Regular testing is crucial to ensure your API integrations are functioning correctly. This includes performance testing, functional testing, and security testing. Automated testing can help ensure that this is done consistently and thoroughly.
                      

                               </div>
                                :""}

                      </div>




        </div>


        <div className={questStyles.fiveDiv} >
          
            {/* Item1 */}
             <div className={questStyles.fiveDivItems}>
               <img src={creative} alt="" />
                <div>Creative</div>
                  <div>Innovative, intuitive, and imaginative.</div>
                  <div>Building digital bridges between businesses and their customers- fast and reliable.</div>
                  <div>Transforming ideas into stunning digital realities.</div>
                  <span><HiOutlineColorSwatch /></span>

             </div>





 


  {/* Item2 */}
             <div className={questStyles.fiveDivItems}>
               <img src={desk} alt="" />
                <div>Practical</div>
                  <div>My extensive knowledge of technical standards helps me manage projects efficiently.</div>
                  <div>My approach to development is equal parts technical expertise and artistic creativity.</div>
                  <div>Less is more.</div>
                 <span><FaWrench /></span>

             </div>

        </div>




</div>
  
  )
}

export default questions