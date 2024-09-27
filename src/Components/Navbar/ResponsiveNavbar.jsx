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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const Services = [
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

export const hiringing = [
    {id:1,openning:"Dedicated Hiring"},
    {id:1,openning:"Digital Marketing"},
    {id:2,openning:"Search Engine Optimization"},
    {id:2,openning:"Social Media Marketing"},
    {id:2,openning:"Search Engine Marketing"},
    {id:2,openning:"Content Marketing"},
    {id:1,openning:"UI / UX Design"},
    {id:1,openning:"Brand Identity"},
]

export const technologies = [
    {id:1,tech:"PHP"},
    {id:1,tech:"DOT NET DEVELOPMENT"},
    {id:1,tech:"ANGULAR JS"},
    {id:1,tech:"HTML5"},
    {id:1,tech:"iOS"},
    {id:1,tech:"ANDROID"},
    {id:1,tech:"UI / UX Design"},
    {id:1,tech:"REACT NATIVE"},
]

export const SocialMedia = [
    {id:1,platform:<FaFacebook className="rounded-full" size={20}/>,title:"facebook"},
    {id:2,platform:<AiFillTwitterCircle className="rounded-full" size={20}/>,title:"twitter"},
    {id:3,platform:<TiSocialInstagramCircular className="rounded-full" size={20}/>,title:"instagram"},
    {id:4,platform:<FaLinkedin className="rounded-full" size={20}/>,title:"linkedin"},
    {id:5,platform:<FaPinterest className="rounded-full" size={20}/>,title:"pinterest"},
    {id:6,platform:<FaYoutube className="rounded-full" size={20}/>,title:"youtube"},
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
         <div className={`fixed top-0 w-screen min-h-screen inset-0 left-0 bg-darkblue text-white z-40 transition-all duration-500 ease-in-out ${MenuState ? "-translate-y-0" : "-translate-y-full"} overflow-y-scroll`}>
             {/* header */}
            <div className="bg-gray-200 fixed right-0 left-0 text-darkblue overflow-hidden">
                <div className="container">
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <Logo/>
                    </div>
                    <div onClick={HandleMenuState}>
                        <TfiClose size={30}/>
                    </div>
                   
                </div>
            </div>
            </div>
            {/* body */}
            <div className="container flex flex-wrap uppercase mt-20">
                <div className="w-full md:w-1/4">
                <ul className="pl-0">
                    {
                        navlinks.map((items,index)=>(
                            <Link onClick={()=>SetMenuState(false)} key={index} to={items.to} className="no-underline text-white block py-2">{items.lable}</Link>
                        ))
                    }
                </ul>
                </div>
                <div className="w-full md:w-1/4 overflow-hidden">
                    <div onClick={()=>setserviceopen(!serviceopen)} className="flex items-center overflow-hidden cursor-pointer">
                        <p>services</p>
                        <p className="block md:hidden"><MdOutlineKeyboardArrowDown color="white"/></p>
                    </div>
                    <div className={`${serviceopen ?"opacity-100 h-auto" :"opacity-0 h-0 overflow-hidden"} border-black transition-all duration-700`}>
                        {Services.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm" : "list-none"}`}>{items.service}</li>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/4 overflow-hidden">
                    <div onClick={()=>sethiringopen(!hiringopen)} className="flex items-center overflow-hidden cursor-pointer">
                        <p>Openning</p>
                        <p className="block md:hidden"><MdOutlineKeyboardArrowDown color="white"/></p>
                    </div>
                    <div className={`${hiringopen ?"opacity-100 h-auto":"h-0 opacity-0 overflow-hidden"} transition-all duration-700`}>
                        {hiringing.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm" : "list-none"}`}>{items.openning}</li>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/4 overflow-hidden">
                    <div onClick={()=>settechopen(!techopen)} className="flex items-center overflow-hidden cursor-pointer">
                        <p>technologies</p>
                        <p className="block md:hidden"><MdOutlineKeyboardArrowDown color="white"/></p>
                    </div>
                    <div className={`${techopen ?"opacity-100 h-auto" :"opacity-0 h-0 overflow-hidden"} border-black transition-all duration-700`}>
                        {technologies.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm" : "list-none"}`}>{items.tech}</li>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container w-full flex flex-wrap justify-between twmt">
                <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-bold">INDIA</h1>
                    <p className="w-56">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolores.</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-bold">FOLLOW US</h1>
                    <div className="flex gap-2 mx-auto">
                            {SocialMedia.map((items,index)=>(
                                <p key={index} title={items.title} className="sbg rounded-full p-1 transition-all duration-500">{items.platform}</p>
                            ))}
                        </div>

                </div>
                <div className="w-full md:w-auto flex flex-col">
                    <div>
                        <div className="bg-white w-fit py-2 rounded-full">
                        <Logo/>
                        </div>
                        <span className="block text-sm pt-1">&copy; 2024 BlazeDream Technologies Pvt Ltd.</span>
                        <span className="text-sm">All rights recieved</span>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default ResponsiveNavbar;
