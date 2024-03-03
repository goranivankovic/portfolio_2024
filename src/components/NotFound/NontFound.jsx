import React from 'react'

import notfoundStyles from '../../Styles/Not/Not.module.css'

import {  Link } from "react-router-dom";

function NontFound() {
  return (
    <div className={notfoundStyles.main}>

         <div>Not Found !</div>

         <Link to={"/dev"}>Back</Link>

    </div>
  )
}

export default NontFound