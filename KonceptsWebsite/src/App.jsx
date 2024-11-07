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
import Lenis from "lenis";
import PortfolioProject from './Pages/PortfolioProject';
import GetaquotePage from './Pages/GetaqoutePage';
import Meta from './Components/meta/meta';
import ServiceWebDevelopment from './Pages/ServiceWebDevelopment';
import MobileAppDevelopment from './Pages/MobileAppDevelopment';
import NativeMobileApp from './Pages/NativeMobileApp';
import CrossPlatformApp from './Pages/CrossPlatfromApp';
import MobileAppConversion from './Pages/MobileAppConversion';
import MobileAppReEng from './Pages/MobileAppReEng';
import EcommerceDev from './Pages/EcommerceDev';
import AppIntegration from './Pages/AppIntegration';
import RequirementEngineering from './Pages/RequirementEngineering';
// don't forget to register plugins
// ..
  AOS.init({
    once:true
  });

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
     <Meta/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/portfolio/:id' element={<PortfolioProject/>}/>
          <Route path='/casestudy' element={<Casestudy/>}/>
          <Route path='/carrier' element={<Carrier/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/getaquote' element={<GetaquotePage/>}/>
          <Route path='/web_development' element={<ServiceWebDevelopment/>}/>
          <Route path='/mobile_app_development' element={<MobileAppDevelopment/>}/>
          <Route path='/native_apps' element={<NativeMobileApp/>}/>
          <Route path='/cross_platform_application' element={<CrossPlatformApp/>}/>
          <Route path='/mobile_app_conversion' element={<MobileAppConversion/>}/>
          <Route path='/mobile_app_re_engineering' element={<MobileAppReEng/>}/>
          <Route path='/e_commerce_development' element={<EcommerceDev/>}/>
          <Route path='/app.integration_webServices' element={<AppIntegration/>}/>
          <Route path='/requirement_engineering' element={<RequirementEngineering/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
    </MenuStateContext.Provider>
    </>
  )
}

export default App;
