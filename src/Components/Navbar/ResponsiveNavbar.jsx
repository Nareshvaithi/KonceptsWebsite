import { useContext } from "react";
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
    {id:1,tech:"Dedicated Hiring"},
    {id:1,tech:"Digital Marketing"},
    {id:1,tech:"Search Engine Optimization"},
    {id:1,tech:"Social Media Marketing"},
    {id:1,tech:"Search Engine Marketing"},
    {id:1,tech:"Content Marketing"},
    {id:1,tech:"UI / UX Design"},
    {id:1,tech:"Brand Identity"},
]

const ResponsiveNavbar = ()=>{
    const {MenuState,SetMenuState,HandleMenuState} = useContext(MenuStateContext)
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
            <div className="container flex flex-wrap mt-20">
                <ul className="w-full md:w-1/4 pl-0 flex-col flex-wrap">
                   {
                    navlinks.map((items)=>(
                        <li className="py-2">
                            <Link to={items.to} className="no-underline text-black text-xl font-semibold -z-10 links">{items.lable}</Link>
                        </li>
                    ))
                   } 
                </ul>
                <ul className="w-full md:w-1/4 pl-0">
                    <li className="py-2">Services</li>
                    {
                        Services.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} py-2`}>{items.service}</li>
                        ))
                    }
                </ul>
                <ul className="w-full md:w-1/4 pl-0">
                    <li className="py-2">Opening</li>
                    {
                        hiringing.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} grid-rows-1  py-2`}>{items.openning}</li>
                        ))
                    }
                </ul>
                <ul className="w-full md:w-1/4 pl-0">
                    <li className="py-2">Technologies</li>
                    {
                        technologies.map((items,index)=>(
                            <li key={index} className={`${items.id === 2 ? "list-disc text-sm":"list-none text-lg font-medium"} py-2`}>{items.tech}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full md:1/4">
                    <h1 className="text-xl font-bold">INDIA</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dolores quos vitae dicta soluta porro dolor recusandae vero expedita sapiente.</p>
                </div>
                <div className="w-full md:1/4">
                    <h1 className="text-xl font-bold">FOLLOW US</h1>
                    <div className="flex gap-2">
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
                <div className="w-full md:1/4">
                    <div>
                        <Logo/>
                        <p>&copy; 2024 BlazeDream Technologies Pvt Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default ResponsiveNavbar;
