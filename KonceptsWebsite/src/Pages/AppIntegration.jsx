import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";
import Appintegrityimage from "../Components/ServicesComp/Appintegrityimage";
import { FaRegCheckCircle } from "react-icons/fa";
const AppIntegration = ()=>{
    const navigate = useNavigate()
    const moveServicePage = (to)=>{
        navigate(to);
    }
    const EnhancementMaintenance = [
        {
            id: 1,
            title: "User Support",
            details: "Our IT support experts promptly resolve issues and help users build troubleshooting, interpersonal, and technical skills.",
            points: ["Issue Resolution", "Guides & FAQs", "Change Management Requests"]
        },
        {
            id: 2,
            title: "Application Support",
            details: "Our application support services ensure smooth operations, addressing issues and optimizing systems vital to business functions.",
            points: ["Root Cause Analysis", "Feature Enhancements", "New Feature Development", "Software Release Coordination", "Patch Applications"]
        },
        {
            id: 3,
            title: "Application Maintenance",
            details: "Application maintenance services focus on extending the life and relevance of business-critical applications, adapting to changing needs.",
            points: ["Help Desk Assistance", "Remote Support"]
        },
        {
            id: 4,
            title: "Operations Support",
            details: "Operational support services help maintain efficient business performance, allowing for proactive monitoring, control, and analysis.",
            points: ["Capacity Management", "System Administration", "Database Management", "Network Oversight"]
        },
        {
            id: 5,
            title: "End User Support",
            details: "End-user support services empower employees, enhancing work performance and ensuring easy access to needed resources.",
            points: ["User Guides", "Training Resources"]
        }
    ];
    
    return(
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12">We provide comprehensive services backed by robust domain expertise and cutting-edge solutions.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Koncepts Design and Development’s Maintenance & IT Support Services empower our clients to enhance, secure, manage, and maintain their vital infrastructure. Our Infrastructure Application Support Services follow a standard set of processes, ensuring seamless IT assistance for our clients.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Software maintenance encompasses error correction, capability enhancements, the removal of outdated functions, and overall optimization. At Koncepts Design and Development, we streamline our maintenance services into corrective and adaptive maintenance for minor updates, as well as perfective and preventive maintenance for more comprehensive support.</p>
                    </div>
            </div>
            <div className="py-10">
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12">Corrective and Adaptive Maintenance</h1>
                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Typically, corrective maintenance arises from critical or emergency situations that require immediate action, focusing on rectifying design, coding, and implementation errors that should have been avoided. On the other hand, adaptive maintenance is carried out to accommodate modifications in processing or data, enabling our clients to leverage the latest technologies and adapt to evolving environmental conditions.</p>
                    <Appintegrityimage/>
                </div>
                <div className="py-10">
                    <h1 className="font-Heading text-xl md:text-[28px] leading-8">Enhancement Maintenance</h1>
                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">We utilize Agile methodologies to enhance application performance, proactively identifying and addressing hidden issues before they impact system stability. This approach enables us to deliver faster software upgrades, optimize resource use, shorten development cycles, and minimize defect rates.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        EnhancementMaintenance.map(({id,title,details,points}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details}</p>
                                    </div>
                                    <div>
                                        {
                                            points.map((points)=>(
                                                <div className="flex items-center gap-3">
                                                    <FaRegCheckCircle size={25}/>
                                                    <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">{points}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                        ))
                       } 
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AppIntegration;