import React,{useState} from 'react'


import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im' 
import { HiOutlineSun ,HiMoon} from 'react-icons/hi'
import { SlScreenDesktop } from "react-icons/sl";


import navStyles from '../../Styles/Nav/Navbar.module.css'


import {  Link } from "react-router-dom";



import { useSelector, useDispatch } from 'react-redux'

import {whiteBgColor,blackBgColor} from '../../redux/Redux-Actions/changeBgColor'


import { motion } from "framer-motion"


const variants = {
  open: { opacity: .4,background:['#f0ad4e'], width:["0%","100%","0%"],transition:{duration:1.5,delay:1.5}},
  closed: { opacity: 0,background:['#f0ad4e'], width:["100%","0%"],transition:{duration:1.5,delay:1}},
}



const barVariants = {
    open: {
        opacity: 1,
        transition: {
            duration: 3,
            delay:1.5,
        
        },
        pathLength: 1
      },
    closed: {
        opacity: 1,
           
        transition: {
            duration: 3
        },
         pathLength: 0
    }
}








function NavBar() {
    const [showBars, setShowBars] = useState("closed")

 const [isOpen, setIsOpen] = useState(false)

 const laz = useSelector((state) => state.color.laz)
  const[close,setClose]=useState(true)
   const[laz2,setLaz2]=useState(false)


  const dispatch = useDispatch()

  const bgColor = useSelector((state) => state.color.bgColor)
  const textColor = useSelector((state) => state.color.textColor)
    const headlineColor = useSelector((state) => state.color.headlineColor)




  


   const orangeColor=(a)=>{
    a.target.style.color=headlineColor
    a.target.transition='600ms'

   }

    const defaultColor=(b)=>{
    b.target.style.color=textColor
    b.target.transition='600ms'

   }






function toogle() {
  if (!laz2) {
    let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(360deg)'
bars.style.transformOrigin='center'

    setLaz2(!laz2)
    setIsOpen(isOpen => !isOpen)
     setShowBars(!showBars)  

  }else{
        let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(-360deg)'
bars.style.transformOrigin='center'

    setLaz2(!laz2)
    setIsOpen(isOpen => !isOpen)
     setShowBars(!showBars) 

  }

}


  return (

    <div>

  
    <motion.div className={navStyles.orangeBack}
       animate={isOpen ? "open" : "closed"}
      variants={variants}
    ></motion.div>


  


    <div className={navStyles.main} style={{background:bgColor}}>

       <motion.div className={navStyles.first}
         animate={{y:[-300,100,0],rotate:[10,0]}}
       transition={{duration:1.5,delay:1,ease:'easeOut'}}
       >

                 <a  className={navStyles.firstItem} href="#home">Home </a>
                 <a style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}  href="#about">About </a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#portfolio"> Portfolio</a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#skills"> Skills / Tech </a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#contact">Contact</a>

            <Link to={'/'}><SlScreenDesktop  style={{color:textColor}}  className={navStyles.sun} /> </Link>      

              {laz  ? <HiOutlineSun onClick={()=>dispatch(whiteBgColor())} style={{color:textColor}} 
         
              className={navStyles.sun} />


              : <HiMoon  style={{color:textColor}} onClick={()=>dispatch(blackBgColor())} 
            
               className={navStyles.sun}  />  }
        

             </motion.div>
         </div>  



            <svg id="bars" className={navStyles.bars} onClick={toogle} width="114" height="59" viewBox="0 0 114 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                      <motion.rect
                      variants={barVariants}
                       initial="closed"
                        animate={showBars ? "open" : "closed"}
                       id="rec8" x="26" y="8" width="58" height="9" fill="none" stroke="#f0ad4e" strokeWidth="2"/>
                     <rect id="line2" x="51" y="23" width="58" height="9" fill="none" stroke="#f0ad4e" strokeWidth="2"/>
                     <motion.rect
                      variants={barVariants}
                       initial="closed"
                        animate={showBars ? "open" : "closed"}
                      id="rec10" x="26" y="39" width="58" height="9" fill="none" stroke="#f0ad4e" strokeWidth="2"/>
                   </g>
             </svg>


    
  {/* <FaBars id='bars' className={navStyles.bars} onClick={toogle}/> */}



 {laz2 ?   

    <div className={navStyles.main768}>

                 <motion.div className={navStyles.first}
       animate={{x:[300,0],rotate:[10,0],opacity:[0,1]}}
          transition={{duration:1.5,delay:.5,ease:'easeOut'}}
       >

                 <a onClick={toogle}  className={navStyles.firstItem} href="#home">Home </a>
                 <a onClick={toogle}   style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#about">  About</a>
                 <a onClick={toogle}   style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#portfolio"> Portfolio</a>
                 <a onClick={toogle}   style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#skills"> Skills / Tech </a>
                 <a onClick={toogle}  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="#contact">Contact</a>

            <Link to={'/'}><SlScreenDesktop  style={{color:textColor}}  className={navStyles.sun} /> </Link>      

      
        

             </motion.div>
         </div>  

  :""}    




      
   </div>
  )
}

export default NavBar;










