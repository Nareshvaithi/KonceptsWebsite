import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/Images/Logo";
import {Link, NavLink} from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { MenuStateContext } from "../Usecontext/UseContext";
import logo from "../../assets/Images/Koncepts-logo.svg"
export const navlinks = [
    {
        lable:"Home",
        to:"/"
    },

    {
        lable:"About us",
        to:"/about"
    },

    {
        lable:"Services",
        to:"/services"
    },

    {
        lable:"Portfolio",
        to:"/portfolio"
    },
    // {
    //     lable:"case study",
    //     to:"/casestudy"
    // },

    {
        lable:"Carrier",
        to:"/carrier"
    },

    {
        lable:"Contact us",
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
            <div className={`fixed top-0 w-full ${window.scrollY > 150 ? "bg-white bordershadow":"bg-transparent"} text-darkblue z-40 transition-all duration-500 ${
                            isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="container flex items-center justify-between">
                    {/* logo */}
                    <div className="">
                        <Link onClick={()=>{SetMenuState(false);window.scrollTo(0,0)}} className="" to={'/'}><Logo/></Link>
                    </div>
                    {/* navbar links */}
                    <div className="hidden md:block">
                        <ul className="flex gap-3 mr-28 mt-2">
                            {
                                navlinks.map((items,index)=>(
                                    <li key={index} className="text-lg font-semibold">
                                        <NavLink to={items.to} className="links no-underline text-darkblue">
                                            {items.lable}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Menu button */}
                    <div onClick={HandleMenuState} className="cursor-pointer">
                        {MenuState ? (""):(<CgMenuRight size={30}/>)}
                    </div>
                   
            </div>
            </div>
             
            </>
            
        )
    }

export default Navbar;