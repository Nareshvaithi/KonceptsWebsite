import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";
import design from "../assets/Images/crossplatformapp/design.png";
import mobilewithapp from "../assets/Images/crossplatformapp/mobilewithapp.png";
import phonewithglobe from "../assets/Images/crossplatformapp/smartphonewithglobe.png";
import { FaRegCheckCircle } from "react-icons/fa";

const CrossPlatformApp = ()=>{
    const navigate = useNavigate();

    const moveServicePage = (to)=>{
        navigate(to);
    }
    const crossplatformdata = {
        about:[
            {
                id:1,
                title:"Design & Concept In A Few Days",
                details:"With years of experience, we work with our customers to develop design prototypes in days that would normally take months. This allows us to launch products quickly and efficiently."
                ,icon:design
            },
            {id:2,
                title:"App In Store In 3-6 Weeks",
                details:"We develop complete app solutions for our customers. In doing so, we focus our customers on the strategically important functions in order to publish the first version of your app quickly, efficiently and with maximum impact.",
                icon:phonewithglobe
            },
            {
                id:3,
                title:"App Professionals By Your Side",
                details:"We take care that the ideas of our customers come into the world. We’re always there when they come back with any other requirements. App marketing, Support & Maintenance, team building etc., we accompany our customers in all aspects.",
                icon:mobilewithapp
            }
        ],
        key: [
            {
                id: 1,
                title: "Security",
                details: "Koncepts Design and Development prioritizes security at every stage. We apply robust security practices, including penetration testing, code review, and more, to safeguard your app against potential vulnerabilities."
            },
            {
                id: 2,
                title: "Performance",
                details: "Our developers create applications optimized for instant loading by pre-loading static content. We also manage back-end infrastructure, hosting, and processes to ensure top performance for mobile web apps."
            },
            {
                id: 3,
                title: "User Experience",
                details: "Our team employs industry-leading strategies to provide a seamless user experience, optimizing payload distribution and managing HTTP requests efficiently."
            },
            {
                id: 4,
                title: "Interoperability",
                details: "Our client-focused approach ensures that mobility solutions are tailored to align with the look and feel of each target platform, enhancing usability and cohesion."
            }
        ],
        services: [
            { id: 1, details: "Our open-source solutions support all major mobile platforms, including iPhone, BlackBerry, Android, Windows Mobile, and Symbian." },
            { id: 2, details: "Create applications using HTML, CSS, and JavaScript." },
            { id: 3, details: "Cross-platform technologies reduce technical barriers for development." },
            { id: 4, details: "They decrease the skill set requirements for the development team." },
            { id: 5, details: "This approach minimizes both development costs and long-term maintenance expenses." },
            { id: 6, details: "The same codebase can be used to build mobile apps for both iPhone and Android platforms." }
        ]
        
}

const areaExpertise = {
    part1:[
    {id:1,title:"Augmented Reality"},
    {id:2,title:"Beacons"},
    {id:3,title:"Machine-to-Machine"},
    {id:4,title:"Optical Character Recognition"}
],
    part2:[
    {id:5,title:"Internet Of Things"},
    {id:6,title:"Streaming"},
    {id:7,title:"Near Field Communication"},
    {id:8,title:"Geolocation"},
]

}
    return(
        <div className="pt-24">
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">Crafting vibrant, cross-platform applications that captivate users.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Offering a diverse array of ready-to-launch solutions, Koncepts Design and Development excels in delivering resilient and agile mobile apps across all platforms. We specialize in crafting custom solutions tailored to meet your unique needs.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">With a comprehensive suite of ready-to-implement solutions, Koncepts Design and Development takes pride in delivering robust and flexible mobile apps across all platforms. We focus on creating bespoke solutions designed specifically to meet your individual requirements.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Our expertise ensures that each mobile app is not only powerful and reliable but also optimized to deliver a seamless user experience on any device.</p>
                    </div>
                </div>
                <div className="py-10">
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 py-3">Our Commitment to Rapid, Expert Mobile App Development</h1>
                        {
                            crossplatformdata.about.map(({id,title,details,icon})=>(
                                <div key={id} className="flex flex-col md:flex-row w-full crossgap">
                                    <div className="w-1/12">
                                        <img src={icon} className="w-full" alt="" />
                                    </div>
                                    <div className="w-11/12">
                                        <h1 className="font-Heading text-xl">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">{details}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="py-10">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 text-center py-3">Our Areas of Expertise</h1>
                        <div className="flex justify-around items-center">
                            <div>
                            {areaExpertise.part1.map(({id,title})=>(
                                    <div key={id} className="flex items-center gap-2">
                                        <span><FaRegCheckCircle size={20}/></span>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">{title}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                            {areaExpertise.part2.map(({id,title})=>(
                                    <div key={id} className="flex items-center gap-2">
                                        <span><FaRegCheckCircle size={20}/></span>
                                        <p className="font-ContentText text-[14px] md:text-[19px] text-slate-600 mb-0 py-2">{title}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                    <div className="py-10">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 py-3">Key Mobile Development Traits at Koncepts Design and Development</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        crossplatformdata.key.map(({id,title,details}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details}</p>
                                    </div>
                                </div>
                        ))
                       } 
                        </div>
                    </div>
                    <div className="py-10">
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 py-3">Empower your business with Koncepts Design and Development’s cross-platform application development and tailored solutions.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-justify text-slate-600 mb-0 py-2">We employ an agile development methodology to effectively manage our cross-platform mobile development projects. Our skilled cross-platform developers are capable of creating multi-platform experiences tailored to meet your users', business, or industry-specific needs. We specialize in building unique and robust cross-platform mobile applications utilizing technologies such as PhoneGap, Titanium, Sencha, Xamarin, Cordova, and Ionic.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-justify text-slate-600 mb-0 py-2">PhoneGap serves as a bridge to connect the coding languages and scripts used for iOS, Android, and Windows applications. Our development services also encompass creating tablet-friendly websites, mobile sites, and mobile applications using technologies such as PhoneGap, Sencha Touch, Cordova, Xamarin, Qt, Titanium, and Appcelerator. As a free, open-source software, PhoneGap facilitates the development of apps across various platforms, including iPhone, iTouch, iPad, Symbian, Android and Blackberry.</p>
                    </div>
                    <div>
                        <h1 className="font-Heading text-xl md:text-[28px] w-4/5 leading-8">Here are the cross-platform application services offered by Koncepts Design and Development:</h1>
                        {
                            crossplatformdata.services.map(({id,details})=>(
                                <div key={id} className="flex items-start gap-3 w-4/5 py-2">
                                    <span><FaRegCheckCircle size={25}/></span>
                                    <p className="font-ContentText text-[14px] md:text-[19px] text-slate-600 mb-0">{details}</p>
                                </div>
                            ))
                        }
                      
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default CrossPlatformApp;