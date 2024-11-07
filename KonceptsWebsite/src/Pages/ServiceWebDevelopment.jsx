import { useNavigate } from "react-router-dom";
import { Services } from "../Components/Navbar/ResponsiveNavbar";

const ServiceWebDevelopment = ()=>{
    const navigate = useNavigate();

    const moveServicePage = (to)=>{
        navigate(to);
    }
    const webdesigndata = [
        {id:1,title:"Single Page Website Design",details:"A single-page website displays all content on one HTML page, with users directed to specific sections via navigation links. This design is mobile-friendly but may have limited SEO benefits."},
        {id:2,title:"Static Website Design",details:"Static websites display the same content for every visitor. Built in HTML, they are straightforward to create and don’t require programming or databases like dynamic sites."},
        {id:3,title:"HTML Website Design",details:"HTML, or Hypertext Markup Language, structures web content with headings, links, and sections. While it adds organization, it lacks dynamic capabilities on its own."},
        {id:4,title:"CSS Website Design",details:"CSS, or Cascading Style Sheets, complements HTML by styling web pages. Together with JavaScript, CSS is essential for creating visually appealing and responsive interfaces."},
        {id:5,title:"Javascript Website Design",details:"JavaScript enables interactive features on web pages, adding dynamic behavior that enhances user engagement and provides customizable functionalities."},
        {id:6,title:"Front End Website Design",details:"Front-end design focuses on the visible part of the website, including layout, visuals, and usability, to create a pleasing user experience."},
        {id:7,title:"UI/UX Website Design",details:"UX design addresses user needs and functionality, while UI design creates appealing interfaces. UX lays the foundation, and UI brings it to life visually."},
        {id:8,title:"Dynamic Website Design",details:"Dynamic websites offer content that varies based on user preferences, time, or location, making each visit unique and engaging for users."},
        {id:9,title:"Back-end Website Design",details:"Back-end design involves setting up the database, server, and application to ensure seamless functionality and data management for website users."},
        {id:10,title:"PHP Website Design",details:"PHP is a widely-used, open-source scripting language ideal for creating dynamic web pages, with compatibility across various database platforms."},
        {id:11,title:"Responsive Web Design",details:"Responsive design adjusts a website’s layout based on screen size and device type, ensuring optimal viewing and usability across all devices."},
        {id:12,title:"User-Friendly Website Design",details:"A user-friendly site combines intuitive navigation, fast load times, and a clear layout to help users easily access the information they need."},
        {id:13,title:"SEO-Friendly Website Design",details:"SEO-friendly design enhances search engine accessibility and visibility, making it easier for users to find the site while prioritizing their experience."},
    ];
    
    return(
        <div className="pt-24">
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-3/12">
                        <h1 className="font-Heading text-xl">Services</h1>
                        <ul className="pl-0">
                            {Services.map((items) =>(
                                <li className="cursor-pointer font-ContentText pt-2 text-[15px] text-slate-600 text-justify" onClick={()=>moveServicePage(items.to)}>{items.service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-9/12 border-l-2 border-darkblue pl-2 md:pl-6">
                        <h1 className="font-Heading text-xl md:text-[28px]">Leading digital design and development agency in India</h1>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify mt-4">Koncepts Design and Development is recognized as one of the leading web design and development companies in India. We offer a comprehensive array of website design services tailored for both small and large enterprises.</p>
                        <p className="font-ContentText text-[15px] md:text-[20px] text-slate-600 text-justify">Our skilled team of web developers and digital marketing experts leverage cutting-edge technologies and innovative strategies to craft user-friendly business websites and applications, aiming to expand customer outreach and drive success.</p>
                    </div>
                </div>

                <div className="pt-20">
                    <div className="">
                        <h1 className="font-Heading text-xl md:text-[28px]">Web Design Services</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">As a prominent website design company in India, <span className="text-slate-700 font-semibold">Koncepts Design and Development</span> provides a comprehensive range of website development services to meet all your requirements. <span className="text-slate-700 font-semibold">Our team of web design specialists possesses extensive experience in creating visually appealing and functional websites.</span></p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">Looking to elevate your business? At Koncepts Design and Development, our exceptional web designs not only captivate but also transform prospects into loyal customers. <span className="text-slate-700 font-semibold">Our solutions are both affordable and user-friendly, ensuring a seamless experience. As one of the top web design firms in India,</span> we do more than just create stunning websites; we build a powerful online presence. With our expertise in web development, we guarantee that your brand will shine. Utilizing straightforward yet effective content management systems, we make it effortless for you to update and manage your website.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">To help in the growth of your business is our motto.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify">Our dedicated team of web designers and developers is committed to improving customer experience and addressing your business challenges through creative, innovative, and cost-effective web design solutions. <span className="text-slate-700 font-semibold">This passion and expertise are what truly define us as Web Design Specialists.</span></p>
                    </div>
                </div>

                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        webdesigndata.map(({id,title,details}) =>(
                                <div className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details}</p>
                                    </div>
                                </div>
                        ))
                       } 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceWebDevelopment;