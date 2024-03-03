import { useState } from 'react'




import { store } from './redux/Store/store'
import { Provider } from 'react-redux'

import { motion } from "framer-motion"


//Componets
import Nav from './components/Nav/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
 <Provider store={store}>
  <motion.div

          animate={{x:[1000,0],opacity:[0,.5,1],rotate:[-10,0]}}
	       transition={{duration:1.5,ease:"circIn"}}

  >
       <Nav />
       <Home />  
       <About />
      <Portfolio />
      <Skills />   
      <Contact /> 
      <Footer />  
</motion.div>
    </Provider>
  )
}

export default App
