import AboutExpCard from "../Components/Aboutcomp/AboutExpCard";
import { AboutHero } from "../Components/Aboutcomp/AboutHero";
import { FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import EmptyPic  from "../assets/Images/Emptypic.png";
import Aboutcardicon from "../assets/Images/aboutcardicon.png"
import MindsetCard from "../Components/Aboutcomp/Mindsetcards";
import { Link } from "react-router-dom";
import WorldClients from "../Components/Aboutcomp/Worldclients";
import ClientsCard from "../Components/Aboutcomp/Clientscard";
import { verticals } from "../Components/ServicesComp/Verticles";
import ReviewSlider from "../Components/Aboutcomp/ReviewSlider";
import { MdStar } from "react-icons/md";
import CustomerReview from "../Components/Aboutcomp/CustomerReview";
import StarRating from "../Components/Aboutcomp/StarRating";
import Counter from "../Components/Aboutcomp/RunningNumbers";
import TeamCard from "../Components/Aboutcomp/TeamCard";
import IAAS from "../assets/Images/iaas.png";
import sangumark from "../assets/Images/sangumak.png";
import maxima from "../assets/Images/maxima.png";
import infinityPotential from "../assets/Images/infinitePotential.png";
import soulfullSpace from "../assets/Images/soulful.png";
import PSCS from "../assets/Images/pscs-1.png";
import jathi from "../assets/Images/jathi.png";
import appDocker from "../assets/Images/appDocker.png";
import TAAS from "../assets/Images/taas.png";
import shazab from "../assets/Images/shazab-1.png";
import whichcourse from "../assets/Images/which.png";
import luckygame from "../assets/Images/lucky8games.png";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineCamera } from "react-icons/ai";
import { GiDeadEye } from "react-icons/gi";
import { TbBrandAdonisJs } from "react-icons/tb";
import { BiBarChartAlt } from "react-icons/bi";
import { PiCodeBlockFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
const About = ()=>{
    const ExperienceCard=[
        {
            id:1,
            ProfilePic:EmptyPic,
            Name:"Sridhar Natrajan",
            title:"Founder, UX/UI LEAD",
            exp:9,
            profession:"design",
            icon:Aboutcardicon,
            about1:"Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88% success rate in planned KPIs after redesigns.",
            about2:'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram competition for redesigning the Android app.',
            proficient:['finance','banking','telecommunication','healthcare','accessiblity','travel and leisure','ai chats','other'],
            socialmedia:[<FaLinkedinIn/>,<SiInstagram/>,<FaFacebookF/>,<FaXTwitter/>,<ImWhatsapp/>]
        },
        {
            id:2,
            ProfilePic:EmptyPic,
            Name:"Sridhar Natrajan",
            title:"Founder, UX/UI LEAD",
            exp:8,
            profession:"design",
            icon:Aboutcardicon,
            about1:"Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88% success rate in planned KPIs after redesigns.",
            about2:'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram competition for redesigning the Android app.',
            proficient:['finance','banking','telecommunication','healthcare','accessiblity','travel and leisure','ai chats','other'],
            socialmedia:[<FaLinkedinIn/>,<SiInstagram/>,<FaFacebookF/>,<FaXTwitter/>,<ImWhatsapp/>]
        },
    ]
    const MindSet = {
        Part1:[
            {
                id:1,
                icon:<BiBarChartAlt/>,
                title:"UX Research",
                details:"Our UX designer’s job is to create a product that provides the best possible user experience. The UX Researcher reveals what the consumers need from the business’s products by conducting primary research, Design, Product Management, and Product Development.",
            },
            {
                id:2,
                icon:<TbBrandAdonisJs/>,
                title:"Brand Identity",
                details:"Our team usually focus on Brand vision, brand culture, positioning, personality, relationships, and presentations. Out team includes the thinking, feelings and expectations of the target market/consumers",
            },
            {
                id:3,
                icon:<PiCodeBlockFill/>,
                title:'Web Development',
                details:"We develop web application using latest technologies.Our team  make a website look great, work fast and perform well with a seamless user experience.Web development typically refers to web mark up and coding",
            },
            {
                id:4,
                icon:<GiDeadEye/>,
                title:'Business Strategy',
                details:"Our Business strategy is a set of competitive moves and actions that a business uses to attract customers, compete successfully, strengthening performance, and achieve organizational goals.",
            },
        ],
        part2:[
            {
                id:5,
                icon:``,
                title:'',
                details:"",
            },
            {
                id:6,
                icon:<CgWebsite/>,
                title:'Web Design',
                details:'Our web designer is responsible for creating the design, layout and coding of a website.They are involved with the technical and graphical aspects of a website',
            },
            {
                id:7,
                icon:``,
                title:'',
                details:"",
            },
            
            {
                id:8,
                icon:<AiOutlineCamera/>,
                title:'Photography',
                details:"Our professional Photographer’s main priority is taking quality photographs. . Our photographer’s travel to locations for photoshoots and set up shots in natural or studio environments",
            },
        ]
    }
    const Clientslogo = {
        part1:[
            {id:1,logo:IAAS},
            {id:2,logo:PSCS},
            {id:3,logo:shazab},
            {id:4,logo:infinityPotential},
        ],
        part2:[
            {id:5,logo:soulfullSpace},
            {id:6,logo:sangumark},
            {id:7,logo:jathi},
            {id:8,logo:appDocker},
        ],
        part3:[
            {id:9,logo:TAAS},
            {id:10,logo:maxima},
            {id:11,logo:whichcourse},
            {id:12,logo:luckygame},
        ]
    }

    const customerreview = {
        part1reviews:[
            {id:1,review:'"Level of research and execution was very impressive"',reviewer:"Harry James",des:"Founder, Ted's Health, UK"},
            {id:2,review:'"Level of research and execution was very impressive"',reviewer:"Harry James",des:"Founder, Ted's Health, UK"},
            {id:3,review:'"Level of research and execution was very impressive"',reviewer:"Harry James",des:"Founder, Ted's Health, UK"},
        ],
        part1ratings:[
            {id:1,rating:"5.0" ,stars:[<MdStar size={25}/>,<MdStar size={25}/>,<MdStar size={25}/>,<MdStar size={25}/>,<MdStar size={25}/>],quality:"5.0",schedule:"5.0",cost:"5.0",Will2Ref:"5.0"},
        ]


    }
    
    return(
        <div className="pt-20 bg-gray-50">
            {/* hero section */}
            <AboutHero/>
            {/* Exp card */}
            <div id="team" className="grid grid-cols-1 md:grid-cols-2">
               {
                   ExperienceCard.map((items,index)=>{
                       return <AboutExpCard key={index} {...items}/>
                   })
               }
            </div>
            {/* our mindset */}
            <div className="w-full md:flex">
               <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
                    <h1 className='font-Heading text-6xl font-bold'>Building the future</h1>
                    <p className="font-medium font-ContentText text-[15px] pt-4">Creativity and critical thinking are both critical for business and we use them as appropriately as possible so that we get noticed by our target audience and are able to keep them intrigued from start to finish. Creativity can take many forms the more we will be able to spread our creative wings and fly.</p>
                    <p className="font-medium font-ContentText text-[15px] pt-4">We usually set goals from the beginning of our process and then make sure that we achieve those goals by the end of the process. It is important to think outside of the box as well as bring your point effectively.</p>
               </div>
               <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        MindSet.Part1.map((items,index)=>{
                            return <MindsetCard key={index} {...items}/>
                        })
                    }
                    </div>
               </div>
            </div>
            {/* we share same review */}
            <div className="w-full md:flex">
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        MindSet.part2.map((items,index)=>{
                            return <MindsetCard key={index} {...items}/>
                        })
                    }
                    </div>
               </div>
               <div className="w-full md:w-1/2 border border-gray-200">
               <div className="w-full h-full">
                    <ReviewSlider/>
               </div>
                    
               </div>
            </div>
            <div className="w-full md:flex">
                <div className="w-full md:w-1/2 aboutExpCardContainer my-auto border border-gray-200 border-separate">
                    <h3 className='font-ContentText text-lg font-bold pb-4'>Our Superpowers</h3>
                    <h1 className='font-Heading text-6xl font-bold leading-tight'>We just doing what others don't</h1>
                    <p className="font-medium text-[15px] pt-4">We prioritize robust UX structuring before wireframing and validate our hypotheses with real user testing to continually enhance our designs.</p>
                    <div className="flex flex-col md:flex-row gap-3 mt-10 items-center">
                    <Link to={'/services'} className='border-2 border-darkblue w-fit text-white bg-darkblue no-underline rounded-full p-3 flex items-center gap-3 transition-all duration-300 hover:scale-95'>
                        <span className='font-ContentText font-semibold'>Explore our services</span>
                        <GoArrowRight size={25} className=""/>
                    </Link>
                    <Link to={'/portfolio'} className='border-2 border-darkblue text-darkblue w-fit no-underline rounded-full p-3 flex items-center gap-3 transition-all duration-300 hover:scale-95'>
                        <span className='font-ContentText font-semibold'>Explore our portfolio</span>
                        <GoArrowRight size={25} className="text-darkblue"/>
                    </Link>
                    </div>
               </div>
            </div>
            {/* our clients all over world */}
            {/* <WorldClients/> */}
            {/* our clients some of them */}
            <div className="w-full md:flex border border-gray-200">
                 <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
                    <h3 className='font-ContentText text-lg font-bold pb-4'>Our clients</h3>
                    <h1 className='font-Heading text-6xl font-bold'>Some of them</h1>
                    <p className="font-medium text-[15px] pt-4">We are working with a diverse range of clients, spanning from globally renowned entities with millions of users to innovative startups seeking for MVP design solutions.</p>
                </div>
                <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2">
                    {
                        Clientslogo.part1.map((items,index)=>{
                            return <ClientsCard key={index} {...items}/>
                        })
                    }
                </div> 
                </div>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        Clientslogo.part2.map((items,index)=>{
                            return <ClientsCard key={index} {...items}/>
                        })
                    }
                </div> 
            </div>
            {/* business domains */}
            <div className="w-full md:flex border border-gray-200">
            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2">
                    {
                        Clientslogo.part3.map((items,index)=>{
                            return <ClientsCard key={index} {...items}/>
                        })
                     
                    }
                </div> 
            </div>
            <div className="aboutExpCardContainer w-full md:w-1/2">
                <div>
                        <h1>Business domains</h1>
                        <p>We boast extensive experience with products and projects across various business niches, including</p>
                </div>
                <div>
                    {
                        verticals.map(({title},index)=>{
                            return <span key={index} className="border-1 w-40 mr-2 mb-2 border-black px-4 py-2 rounded-full font-bold text-[14px] text-center tracking-widest block uppercase hover:bg-darkblue hover:text-white">{title}</span>
                        })
                    }
                </div>
            </div>
            </div>
            {/* what clients says */}
            <div className="w-full md:flex">
                <div className="aboutExpCardContainer w-full md:w-1/2 my-auto">
                    <h3 className='font-ContentText text-lg font-bold pb-4'>Clients reviews</h3>
                    <h1 className='font-Heading text-6xl font-bold'>What they say</h1>
                </div>
                <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2">
                   {
                    customerreview.part1reviews.map((items,index)=>(
                        <div key={index} className="w-full">
                            <CustomerReview {...items}/>
                        </div>
                    ))
                   }
                   {
                    customerreview.part1ratings.map((items,index)=>(
                        <div className="w-full" key={index}>
                            <StarRating {...items} />
                        </div>
                    ))
                   }
                </div>
                </div>
            </div>
            <Counter/>
            <TeamCard/>
        </div>
    )
}
export default About; 