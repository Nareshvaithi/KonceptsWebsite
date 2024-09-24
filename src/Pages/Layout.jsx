import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";
import ResponsiveNavbar from "../Components/Navbar/ResponsiveNavbar";


const Layout = ()=>{
    return(
        <>
           <Navbar/>
            <Outlet/>
            <Footer/>
             {/* ResponsiveNavbar */}
               
             <ResponsiveNavbar/>   
        </>
    )
}
export default Layout; 