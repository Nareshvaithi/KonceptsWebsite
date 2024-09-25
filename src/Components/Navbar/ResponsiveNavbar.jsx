import { useContext, useEffect, useState } from "react";
import { MenuStateContext } from "../Usecontext/UseContext";
import { TfiClose } from "react-icons/tfi";
import Logo from "../../assets/Images/Logo";
import { navlinks } from "./Navbar";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Services = [
    {id:1,service:"Web Development"},
    {id:1,service:"Mobile App Development"},
    {id:2,service:"Native Apps"},
    {id:2,service:"Cross Platform Application"},
    {id:2,service:"Mobile App Conversion"},
    {id:2,service:"Mobile App Re-Engineering"},
    {id:1,service:"E-Commerce Development"},
    {id:1,service:"App.Integration/ Web Service"},
    {id:1,service:"Requirement Engineering"},
]

const hiringing = [
    {id:1,openning:"Dedicated Hiring"},
    {id:1,openning:"Digital Marketing"},
    {id:2,openning:"Search Engine Optimization"},
    {id:2,openning:"Social Media Marketing"},
    {id:2,openning:"Search Engine Marketing"},
    {id:2,openning:"Content Marketing"},
    {id:1,openning:"UI / UX Design"},
    {id:1,openning:"Brand Identity"},
]

const technologies = [
    {id:1,tech:"PHP"},
    {id:1,tech:"DOT NET DEVELOPMENT"},
    {id:1,tech:"ANGULAR JS"},
    {id:1,tech:"HTML5"},
    {id:1,tech:"iOS"},
    {id:1,tech:"ANDROID"},
    {id:1,tech:"UI / UX Design"},
    {id:1,tech:"REACT NATIVE"},
]

const ResponsiveNavbar = ()=>{
    const {MenuState,SetMenuState,HandleMenuState} = useContext(MenuStateContext);

    const claculator = window.innerWidth > 760

    const [serviceopen,setserviceopen] = useState(false);
    const [hiringopen,sethiringopen] = useState(false);
    const [techopen,settechopen] = useState(false);
   
    useEffect(()=>{
        if(window.innerWidth > 760){
            settechopen(true)
            setserviceopen(true)
            sethiringopen(true)
        }
        else{
            settechopen(false)
            setserviceopen(false)
            sethiringopen(false)
        }
    },[claculator])

    
    return(
        <>
         <div className={`fixed bottom-0 top-0 w-screen h-screen left-0 right-0 bg-gray-400 z-40 transition-all duration-500 ease-in-out ${MenuState ? "top-0 bottom-0" : "transform translate-y-[100%]"} overflow-y-scroll`}>
             {/* header */}
            <div className="bg-red-500 fixed right-0 left-0 overflow-hidden">
                <div className="container">
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <Logo/>
                    </div>
                    <div onClick={HandleMenuState}>
                        <TfiClose/>
                    </div>
                   
                </div>
            </div>
            </div>
            {/* body */}
            <div className="container flex flex-wrap mt-20 overflow-hidden uppercase">
                <ul className="w-full md:w-1/4 pl-0 py-0">
                   {
                    navlinks.map((items)=>(
                        <li className="py-2 overflow-hidden">
                            <Link onClick={()=>SetMenuState(false)} to={items.to} className="no-underline text-gray-900 text-xl font-semibold hover:text-white transition-all duration-300">{items.lable}</Link>
                        </li>
                    ))
                   } 
                </ul>
                <ul className="w-full md:w-1/4 pl-0">
                <li onClick={()=>setserviceopen(!serviceopen)} className="py-2 text-2xl overflow-hidden">services</li>
                    {
                        Services.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} overflow-hidden`}>
                                <div className={`grid ${serviceopen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300 overflow-hidden`}>
                                    <div className="overflow-hidden">
                                   {items.service}
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className="w-full md:w-1/4 pl-0 overflow-hidden">
                <li onClick={()=>sethiringopen(!hiringopen)} className="py-2 text-2xl overflow-hidden">openning</li>
                    {
                        hiringing.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} overflow-hidden`}>
                                <div className={`grid ${hiringopen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-300 overflow-hidden`}>
                                    <div className="overflow-hidden">
                                   {items.openning}
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <ul className="w-full md:w-1/4 pl-0">
                    <li onClick={()=>settechopen(!techopen)} className="py-2 text-2xl">Technologies</li>
                    <div className="overflow-hidden">
                    {
                        technologies.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} overflow-hidden`}>
                                <div className={`grid ${techopen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} transition-all duration-300 overflow-hidden`}>
                                    <div className="overflow-hidden">
                                    {items.tech}
                                    </div>
                                
                                </div>
                            </li>
                        ))
                    }
                    </div>
                    
                </ul>
            </div>
            <div className="container flex flex-wrap mt-20 gap-10">
                <div className="w-full md:w-1/4">
                    <h1 className="text-xl font-bold">INDIA</h1>
                    <p className="w-56">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolores.</p>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="text-xl font-bold">FOLLOW US</h1>
                    <div className="flex gap-2 mx-auto">
                    <div className="bg-white rounded-full p-1 w-fit">
                        <FaFacebook size={20} className="rounded-full"/>
                        </div>
                        <div className="bg-white rounded-full p-1 w-fit">
                        <AiFillTwitterCircle size={20} className="rounded-full"/>
                        </div>
                        <div className="bg-white rounded-full p-1 w-fit">
                        <TiSocialInstagramCircular size={20} className="rounded-full"/>
                        </div>
                        <div className="bg-white rounded-full p-1 w-fit">
                        <FaLinkedin size={20} className="rounded-full"/>
                        </div>
                        <div className="bg-white rounded-full p-1 w-fit">
                        <FaPinterest size={20} className="rounded-full"/>
                        </div>
                        <div className="bg-white rounded-full p-1 w-fit">
                        <FaYoutube size={20} className="rounded-full"/>
                        </div>
                        
                    </div>

                </div>
                <div className="w-full md:w-1/4 flex flex-col">
                    <div className="mx-0 md:mx-auto">
                        <Logo/>
                        <p className="w-[310px]">&copy; 2024 BlazeDream Technologies Pvt Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default ResponsiveNavbar;
