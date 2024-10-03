import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Pages/Layout';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Casestudy from './Pages/CaseStudy';
import Carrier from './Pages/Carrier';
import Nopage from './Pages/Nopage';
import Contact from './Pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { MenuStateContext } from './Components/Usecontext/UseContext';
import { useEffect, useState } from 'react';
import ScrollToTop from './Components/Scroll';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins


// ..
AOS.init();

function App() {
  const [MenuState,SetMenuState] = useState(false);

  function HandleMenuState(){
    SetMenuState(!MenuState)
  }
  gsap.registerPlugin(ScrollTrigger, Draggable,MotionPathPlugin);

  return (
    <>  
    <MenuStateContext.Provider value={{MenuState,SetMenuState,HandleMenuState}}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/casestudy' element={<Casestudy/>}/>
          <Route path='/carrier' element={<Carrier/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
    </MenuStateContext.Provider>
    </>
  )
}

export default App
