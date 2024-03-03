import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// Components
import App from './App.jsx'
import Not from '../src/components/NotFound/NontFound.jsx'

import HomeRoute from '../src/router/Home/Home.jsx'
import About from '../src/router/About/about.jsx'
import PortfolioRoute from '../src/router/Portfolio/Portfolio.jsx'
import SkillRoute from '../src/router/Skills/Skills.jsx'
import ContactRoute from '../src/router/Contact/Contact.jsx'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  
    {
    path: "*",
    element: <Not />,
  },

{
    path: "/",
    element: <App />,
  },

  {
    path: "/dev",
    element: <HomeRoute />,
  },

  {
    path: "/dev/about",
    element: <About />,
  },
    {
    path: "/dev/portfolio",
    element: <PortfolioRoute />,
  },
   {
    path: "/dev/skills",
    element: <SkillRoute />,
  },

  ,
   {
    path: "/dev/contact",
    element: <ContactRoute />,
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} /> 

  </React.StrictMode>,
)
