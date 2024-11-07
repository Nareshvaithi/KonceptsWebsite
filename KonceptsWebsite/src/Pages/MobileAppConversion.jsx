import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
const MobileAppConversion = ()=>{
    const navigate = useNavigate();
    const moveServicePage = (to)=>{
        navigate(to)
    }
    const mobileappconversion = {
        redesign: [
            { id: 1, details: "Effectively track and optimize ROI." },
            { id: 2, details: "Enhance your brand identity." },
            { id: 3, details: "Evaluate the impact of your digital campaigns." },
            { id: 4, details: "Reconnect with current users and expand to new audiences." }
        ],
        
        mobileexpert: [
            { id: 1, details: "Option to handpick your team with pre-screening capabilities." },
            { id: 2, details: "Expertise in integrating third-party APIs and libraries." },
            { id: 3, details: "Full control over project team and workflow." },
            { id: 4, details: "Proficient in the latest mobile technologies." },
            { id: 5, details: "Customer-focused models for rapid project deployment." }
        ]
        
    }
    return (
        <div className="py-24">
            <div className="container">
            <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className={`${items.id === 2 ? "list-disc text-sm py-1 ml-6":"list-none py-2"} cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify`} onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">We customize & convert your existing mobile apps.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Mobile apps provide a versatile solution for tracking revenue goals and performance targets. Our mobile application developers leverage advanced technologies to create highly customized apps that align with your specific standards and requirements. Conversion rate remains a key marketing metric, and many marketers today find that real conversions often take place within the app.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Mobile apps offer a powerful way to monitor revenue targets and performance goals. Utilizing cutting-edge technology, our developers craft tailored mobile applications that align perfectly with your business standards and needs. With in-app conversions becoming increasingly critical, mobile apps are essential for driving impactful marketing results.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div className="py-10">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Mobile app redesign and its impact on conversion rates.</h1>
                        {
                            mobileappconversion.redesign.map(({id,details})=>(
                                <div key={id} className="flex items-center gap-3">
                                    <span><FaRegCheckCircle size={25}/></span>
                                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">{details}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Our team of dedicated mobile experts</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Lower overhead expenses without sacrificing quality by hiring our dedicated mobile developers. Our skilled experts employ proven methodologies to deliver cutting-edge mobile applications. Engage our top-tier development team long-term to boost project efficiency while minimizing operational costs.</p>
                        {
                            mobileappconversion.mobileexpert.map(({id,details})=>(
                                <div key={id} className="flex items-center gap-3">
                                    <span><FaRegCheckCircle size={25}/></span>
                                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">{details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileAppConversion;