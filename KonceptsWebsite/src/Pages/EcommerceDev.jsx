import { Services } from "../Components/Navbar/ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
const EcommerceDev = ()=>{
    const navigate = useNavigate()
    const moveServicePage = (to)=>{
        navigate(to);
    }
    const ecommercedata = [
        {
            id: 1,
            title: "B2C e-Commerce (Business to Consumer)",
            details1: "B2C e-Commerce enables businesses to sell directly to consumers, providing easy access to a wide variety of goods and services. Companies like Starbucks and Walmart flourished during the pandemic as online shopping surged.",
            details2: "At Koncepts Design and Development, we specialize in creating engaging B2C e-Commerce platforms that offer seamless user experiences, helping you reach your target customers effectively."
        },
        {
            id: 2,
            title: "B2B e-Commerce (Business to Business)",
            details1: "B2B e-Commerce simplifies transactions between businesses, such as manufacturers and wholesalers. This model boosts operational efficiency, expands market reach, and enhances productivity across industries.",
            details2: "Koncepts Design and Development delivers comprehensive B2B e-Commerce solutions tailored to optimize your online presence and performance, empowering you to build a scalable platform."
        },
        {
            id: 3,
            title: "C2B e-Commerce (Consumer-to-Business)",
            details1: "In the C2B model, individuals provide products or services to businesses, reversing the traditional model. Examples include freelancers and consultants offering their skills online for various projects.",
            details2: "Koncepts Design and Development can assist you in building a C2B platform that effectively connects businesses with individual service providers, increasing opportunities for all involved."
        },
        {
            id: 4,
            title: "C2C e-Commerce (Consumer to Consumer)",
            details1: "C2C e-Commerce allows consumers to buy and sell goods among themselves, often through third-party platforms. Popular examples include OLX and eBay, where transactions are facilitated easily.",
            details2: "With Koncepts Design and Development, you can develop a reliable C2C platform that streamlines consumer transactions, ensuring convenience and a broader customer base for all users."
        },
        {
            id: 5,
            title: "e-Commerce Frontend Design and Development",
            details1: "Frontend design includes the visual elements and interface users engage with, such as layout, typography, and navigation. It is crucial in creating an enjoyable shopping experience for all users.",
            details2: "The skilled frontend team at Koncepts Design and Development designs visually appealing and responsive interfaces that deliver a seamless experience across all devices for your customers."
        },
        {
            id: 6,
            title: "e-Commerce Backend Design and Development",
            details1: "Backend development focuses on the systems and databases that power the frontend, including server management and application logic. This ensures efficient and secure data handling for your platform.",
            details2: "At Koncepts Design and Development, our dedicated backend team establishes a secure and efficient infrastructure, providing a robust foundation for your e-Commerce operations and growth."
        },
        {
            id: 7,
            title: "e-Commerce Web Development Frameworks",
            details1: "An e-Commerce framework is essential for building online stores, offering modular components that streamline and enhance development processes. This flexibility caters to various business needs and requirements.",
            details2: "The experts at Koncepts Design and Development will guide you in selecting the right framework, such as Laravel or React.js, tailored to your operational needs and future growth goals."
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12">Leading e-Commerce web design and development company in India, delivering innovative and user-friendly solutions.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Koncepts Design and Development is a top-tier eCommerce web design and development company in India, specializing in crafting user-centric eCommerce websites and applications. Our expert team of eCommerce developers and designers is dedicated to transforming clients' visions into reality, delivering seamless user experiences and secure transaction capabilities. As pioneers in the industry, we build custom eCommerce websites and applications from the ground up, providing scalable, secure, and engaging solutions to enhance your business growth.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">At Koncepts Design and Development, we create scalable software solutions for any operating system, browser, or device. Combining extensive industry knowledge with the latest IT innovations, we deliver custom solutions and products tailored precisely to meet end-user needs. Our approach is deeply client-centric, ensuring each project aligns with our clients’ unique goals and expectations.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">At Koncepts Design and Development, we excel in handling diverse eCommerce models, including B2C, B2B, C2B, and C2C eCommerce websites. As one of India's premier eCommerce web design and development service providers, we deliver tailored, high-quality solutions that drive engagement and growth across all eCommerce channels.</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-Heading text-xl md:text-[28px] leading-8 py-10">Different types of eCommerce solutions we offer:</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                       {
                        ecommercedata.map(({id,title,details1,details2}) =>(
                                <div key={id} className="border-l-2 border-darkblue pl-2 md:pl-6 h-fit flex flex-col gap-3">
                                    <div className="">
                                        <h1 className="text-2xl font-Heading pt-2">{title}</h1>
                                    </div>
                                    <div>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details1}</p>
                                        <p className="font-ContentText text-[15px] md:text-[17px] text-slate-600 text-justify">{details2}</p>
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

export default EcommerceDev;