import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/Images/Logo";
import {Link, NavLink} from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { MenuStateContext } from "../Usecontext/UseContext";
import ResponsiveNavbar from "./ResponsiveNavbar";
export const navlinks = [
    {
        lable:"home",
        to:"/"
    },

    {
        lable:"about us",
        to:"/about"
    },

    {
        lable:"services",
        to:"/services"
    },

    {
        lable:"portfolio",
        to:"/portfolio"
    },
    {
        lable:"case study",
        to:"/casestudy"
    },

    {
        lable:"carrier",
        to:"/carrier"
    },

    {
        lable:"contact us",
        to:"/contact"
    },
]
    const Navbar = ()=>{

        const [isScrollingUp, setIsScrollingUp] = useState(true);
        const [lastScrollTop, setLastScrollTop] = useState(0);
      
        useEffect(() => {
          const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
            if (scrollTop > lastScrollTop) {
              setIsScrollingUp(false); // Scrolling down
            } else {
              setIsScrollingUp(true); // Scrolling up
            }
      
            setLastScrollTop(scrollTop);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
          };
        }, [lastScrollTop]);

        const {MenuState,SetMenuState,HandleMenuState}= useContext(MenuStateContext)
      
        return(
            <>
            <div className={`fixed top-0 w-full ${window.scrollY > 150 ? "bg-red-500":"bg-transparent"} text-white z-50 transition-all duration-500 ${
                            isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="container flex items-center justify-between  mx-auto">
                    {/* logo */}
                    <div>
                        <div className="w-20">
                        <Link className="" to={'/'}><Logo/></Link>
                        </div>
                    </div>
                    {/* navbar links */}
                    <div className="hidden md:block">
                        <ul className="flex">
                            {
                                navlinks.map((items,index)=>(
                                    <li key={index} className="font-Heading">
                                        <NavLink to={items.to} className="links">
                                            {items.lable}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Menu button */}
                    <div onClick={HandleMenuState} className="block md:hidden">
                        {MenuState ? (<TfiClose size={20}/>):(<CiMenuBurger size={20}/>)}
                    </div>
                   
            </div>
                {/* ResponsiveNavbar */}
               
                <ResponsiveNavbar/>
            </div>
            </>
            
        )
    }

export default Navbar;