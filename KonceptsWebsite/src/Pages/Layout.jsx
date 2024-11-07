import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ResponsiveNavbar from "../Components/Navbar/ResponsiveNavbar";
import GetAQuote from "../Components/GetAQuote/GetAQuote";
import WhatsAppicon from "../Components/Whatsapp/whatsapp";


const Layout = ()=>{
    return(
        <>
           <Navbar/>
            <Outlet/>
            <Footer/>
            <GetAQuote/>
            <WhatsAppicon/>
            <ResponsiveNavbar/>   
        </>
    )
}
export default Layout; 