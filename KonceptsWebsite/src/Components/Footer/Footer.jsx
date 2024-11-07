import { NavLink, useNavigate } from "react-router-dom";
import { navlinks } from "../Navbar/Navbar";
import { hiringing, Services, technologies } from "../Navbar/ResponsiveNavbar";
import EmailandQuote from "../Contents/EmailandQuote";

const Footer = ()=>{
    const navigate = useNavigate();
    const moveServicesPages = (to)=>{
        navigate(to);
    }
    return(
        <>
        <div>
            <EmailandQuote/>
            <div className="container">
                <div className="mt-3">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/4 my-[45px]">
                        <ul className="pl-0">
                            {navlinks.map((items,index)=>(
                                <li className="py-2" key={index}>
                                    <NavLink to={items.to} className="no-underline text-lg text-black" onClick={()=>window.scrollTo(0,0)}>{items.lable}</NavLink>
                                </li>
                            ))}
                        </ul>
                        </div>
                        
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">services</p>
                            {Services.map((items,index)=>(
                                <li onClick={()=>moveServicesPages(items.to)} key={index} className={`${items.id === 2 ? "list-disc text-sm py-1 ml-7":"list-none py-2"} cursor-pointer`}>{items.service}</li>
                            ))}
                        </ul>
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">openning</p>
                            {hiringing.map((items,index)=>(
                                <li key={index} className={`${items.id === 2 ? "list-disc text-sm py-1 ml-7":"list-none py-2"}`}>{items.openning}</li>
                            ))}
                        </ul>
                        <ul className="w-1/2 md:w-1/4 pl-0">
                            <p className="font-bold text-xl">technologies</p>
                            {technologies.map((items,index)=>(
                                <li key={index} className={`${items.id === 2 ? "list-disc text-sm py-1":"list-none py-2"}`}>{items.tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default Footer;