import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BackgroundSlider from "../Components/BackgroundSlider/BackgroundSlider";


const Layout = ()=>{
    return(
        <>
           <Navbar/>
           <BackgroundSlider/>
            <Outlet/>
            <Footer/>   
        </>
    )
}
export default Layout; 