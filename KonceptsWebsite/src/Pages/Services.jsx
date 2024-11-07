import FaqAccordian2 from "../Components/FAQ/Accordian2";
import AboutService from "../Components/ServicesComp/aboutservice";
import Verticles from "../Components/ServicesComp/Verticles"
import WhatWeDo from "../Components/ServicesComp/WhatWeDo";
import { useState,useEffect } from "react";
const Services = ()=>{
    const whatwedodata = [
        {
            id:1,
            title:"Logo & Identity",
            details:[
                "Having a professional-looking and well-designed logo builds trust and grabs people’s attention. Potential customers are more likely to approach the company with a robust logo because it tells them what the company does and how that would benefit them. It communicates with people with no prior knowledge or experience, making them more likely to do business with you and stick around in the long run.",
                "Keeping all this in mind, Koncepts creates professional logos providing high-quality, creative and unique designs. Our creations help you show off your brand’s personality and function by being precise and accurate after thoroughly studying the business and its consumers."

            ]
        },
        {
            id:2,
            title:"Branding",
            details:[
                "Branding is one of the important aspects of any large or small business. In simple words a company’s brand tells its customer what they can expect from its products and services.",
                "Because defining a brand and developing a brand strategy can be a complex time-consuming process Koncepts simplifies it for you by carefully selecting the branding components and distributing them evenly to meet the business goals to its end users.",
                "With Meticulous research, we learn the requirements and desires of a company’s current and prospective clients and plan the branding components accordingly. The modern era of digital marketing has evolved to an extent where branding has to be on par with the best digital industry practices. With memorable, meaningful and concise methods our designs capture the essence of your business portfolio with the best practices."

            ]
        },
        {
            id:3,
            title:"Brochures",
            details:[
                "Brochures are essentially your product catalog in a digital form. Unlike physical brochures (print form), digital brochures are completely optimizable to various digital media, including the web.",
                "Our UI designers are well-versed in the user interaction arena, where digital brochures have a wide reach. Our team excels in carefully creating brochures with optimum readability and minimalistic design, focusing on the subject which helps in maximizing conversions.  Hence our clients have the choice of having their brochures in pdf or real-time animations to showcase their products in the right light.",
            ]
        },
        {
            id:4,
            title:"Web Design & Development",
            details:[
                "Being up to date with the evolving web standards is a difficult task and this is where the services of Koncepts come in handy. Our team design & development team helps enable startups and big companies to envision their business goals. We make sure the user experience strikes a chord with its target audience by delivering the business vision, mission and services and product roadmap.",
                "Koncepts also custom development of software, providing end-to-end solutions for the challenges of scaling any business. This helps the clients to bestow strategic application development to have organic footfall and conversion. We also provide bespoke solutions for your specific web application needs. ",
            ]
        }
    ]
    const [activeId, setActiveId] = useState(null);
    const [previousId, setPreviousId] = useState(null);
    const [scrollDirection, setScrollDirection] = useState("down");

     useEffect(() => {
        let lastScrollTop = window.scrollY;

        const handleScroll = () => {
            let scrollTop = window.scrollY;
            setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (scrollDirection === "down") {
            setPreviousId(activeId);
        } else {
            setPreviousId(null); // Clear previous blur when scrolling up
        }
    }, [activeId, scrollDirection]);
    return(
        <>
        <div>
            <AboutService/>
            <Verticles/>
            {
                whatwedodata.map((items,index)=>{
                    return <WhatWeDo key={items.id} {...items} activeId={activeId} setActiveId={setActiveId} previousId={previousId}/>
                })
            }
            {/* <FaqAccordian2/> */}
        </div>
        </>
    )
}
export default Services;