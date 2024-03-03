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


function NavBar() {
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

    setLaz2(!laz2)

  }else{
        let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(-360deg)'

    setLaz2(!laz2)

  }

}


  return (

    <div>

  

  


    <div className={navStyles.main} style={{background:bgColor}}>

       <motion.div className={navStyles.first}
       animate={{y:[-300,100,0],rotate:[10,0]}}
       transition={{duration:2.5,delay:1,ease:'anticipate'}}
       >

                 <a  className={navStyles.firstItem} href="/#home">Home </a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="/#about">  About</a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="/#portfolio"> Portfolio</a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="/#skills"> Skills / Tech </a>
                 <a  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   href="/#contact">Contact</a>

            <Link to={'/dev'}><SlScreenDesktop  style={{color:textColor}}  className={navStyles.sun} /> </Link>      

              {laz  ? <HiOutlineSun onClick={()=>dispatch(whiteBgColor())} style={{color:textColor}} 
         
              className={navStyles.sun} />


              : <HiMoon  style={{color:textColor}} onClick={()=>dispatch(blackBgColor())} 
            
               className={navStyles.sun}  />  }
        

             </motion.div>
         </div>  




    
  <FaBars id='bars' className={navStyles.bars} onClick={toogle}/>



 {laz2 ?   

    <div className={navStyles.main768}>

                  <motion.div className={navStyles.first}
                   animate={{x:[300,0],rotate:[10,0],opacity:[0,1]}}
                   transition={{duration:1.5,delay:.5,ease:'easeOut'}}
                 >

                  <Link to={'/dev'}>Home</Link>
                  <Link to={'/dev/about'}>About</Link>
                  <Link to={'/dev/portfolio'}>Portfolio</Link>  
                  <Link to={'/dev/skills'}>Skills</Link> 
                  <Link to={'/dev/contact'}>Contact</Link> 

                  <Link to={'/dev'}><SlScreenDesktop    className={navStyles.sun} /> </Link>      

        

             </motion.div>
         </div>  

  :""}    




      
   </div>
  )
}

export default NavBar;










