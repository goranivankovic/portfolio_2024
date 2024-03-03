import React,{useState} from 'react'


import { FaBars } from 'react-icons/fa';

import { SlScreenDesktop } from "react-icons/sl";


import navStyles from '../../Styles/Nav/NavVertical.module.css'


import {  Link } from "react-router-dom";



import { useSelector, useDispatch } from 'react-redux'




import { motion } from "framer-motion"

const variants = {
  open: { rotate: 0 ,transition:{duration:2}},
    closed: { rotate: 360 ,transition:{duration:2}},
}


function NavBar() {

  const[laz,setLaz]=useState(false)
  const [isOpen, setIsOpen] = useState(false)

function toogle() {
  if (!laz) {
    let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(360deg)'

    setLaz(!laz)

  }else{
        let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(-360deg)'

    setLaz(!laz)

  }


 


  
}


  return (

    <div>

  <FaBars id='bars' className={navStyles.bars} onClick={toogle}
    
  />



 {laz ?   

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

                  <Link to={'/'}><SlScreenDesktop    className={navStyles.sun} /> </Link>      

        

             </motion.div>
         </div>  

  :""}


        




      
   </div>
  )
}

export default NavBar;










