import { Services } from "../Components/Navbar/ResponsiveNavbar";
import { FaRegCheckCircle } from "react-icons/fa";
import agile from "../assets/Images/requirementenginerring/agile.png";
import waterfall from "../assets/Images/requirementenginerring/waterfall.png";
import kickoff from "../assets/Images/reqirementenginerring/kickoff.png";
import plan from "../assets/Images/reqirementenginerring/plan.png";
import create from "../assets/Images/reqirementenginerring/create.png";
import build from "../assets/Images/reqirementenginerring/build.png";
import { useNavigate } from "react-router-dom";
const RequirementEngineering = ()=>{
    const navigate = useNavigate()
    const moveServicePage = (to)=>{
        navigate(to);
    }
    const kickoffprocess = [
        {id:1,qus:"Who are your website visitors?"},
        {id:2,qus:"What will be the purpose of their visit?"},
        {id:3,qus:"What is the paramount target of your website?"},
        {id:4,qus:"How can your website best cater to their needs?"},
        {id:5,qus:"What is the Scope of the project?"},
        {id:6,qus:"How different the site should be compared to the competitors’ site?"},
    ]
    const methodology = [
        {
            id: 1,
            title: "Agile Model",
            details1: "In the Agile approach to software development, requirements are gathered iteratively, allowing us to dedicate ample time to identify the high-level requirements and define the project scope.",
            details2: "We favor Agile over Waterfall because it emphasizes a rapid, customer-focused, and iterative delivery process. The Agile methodology offers numerous benefits, especially in facilitating an efficient change control process.",
            img: agile
        },
        {
            id: 2,
            title: "Waterfall Model",
            details1: "In the Waterfall approach to software development, most requirements are collected during the initial phase of the project.",
            details2: "The purpose of the review is to confirm that the anticipated requirements have been accurately captured, ensuring they are sufficiently detailed and easy to comprehend.",
            img: waterfall
        }
    ]

    const lifecycle = [
        {
            id: 1,
            title: "Kickoff",
            points: [
                {
                    title: "Project Kickoff",
                    details: "The Kickoff meeting is a foundational part of our project process, setting the stage for successful collaboration. During this meeting, we gather the project team and the client to discuss the objectives, timelines, and essential requirements. This session helps establish mutual understanding and ensures everyone is aligned on project goals and expectations. We clarify roles, communicate initial ideas, and set the tone for a productive partnership. The kickoff is also an opportunity for stakeholders to ask questions and share insights, fostering a collaborative environment and clear communication from the very start."
                }
            ],
            img: kickoff
        },
        {
            id: 2,
            title: "Plan",
            points: [
                {
                    title: "Discover",
                    details: "In the Discovery phase, we work closely with the client to gain a comprehensive understanding of the project’s scope. Our team thoroughly assesses what needs to be accomplished, identifying core objectives and potential challenges. We also establish effective ways to collaborate throughout the project to ensure we’re aligned and working efficiently. This foundation-building step ensures that both our team and the client have a clear vision of the project direction and requirements."
                },
                {
                    title: "Analysis",
                    details: "We utilize structured methods to analyze project requirements, diving deep into the business needs. By breaking down the project into key components, we ensure a clear understanding of each requirement. This organized approach enables us to validate and align these elements with decision-makers, making certain the project aligns perfectly with the client’s goals. After analysis, all findings are documented for clear communication and guidance."
                },
                {
                    title: "Documentation",
                    details: "The Business Requirements Document (BRD) is a critical deliverable created by our analysts to outline the project’s business solution. This document captures customer needs, expectations, and project requirements in detail, serving as a primary reference point throughout development. The BRD promotes transparency, ensuring that the team and stakeholders are aligned on what the project will achieve. It forms a solid basis for design and implementation."
                }
            ],
            img: plan
        },
        {
            id: 3,
            title: "Create",
            points: [
                {
                    title: "Wireframe",
                    details: "During the Wireframe stage, our designers craft a high-level outline of the project, focusing on structure and layout without incorporating detailed design elements like colors or images. This skeletal framework helps both the team and stakeholders visualize the project’s basic organization, allowing for feedback on the overall flow and functionality. Wireframing is essential for confirming that the layout aligns with the client’s vision before moving into detailed design."
                },
                {
                    title: "Design",
                    details: "Once the wireframe is approved, our design team starts working on detailed designs based on client specifications. This phase brings the project to life, integrating brand elements and visual details while meeting functional requirements. Each module is carefully crafted to align with client expectations, ensuring both aesthetic appeal and usability. This design blueprint serves as a guide for development, leading to a cohesive, polished final product."
                }
            ],
            img: create
        },
        {
            id: 4,
            title: "Build",
            points: [
                {
                    title: "Develop",
                    details: "In the Development phase, our team begins creating the project based on approved requirements and designs. We create a mockup for client review, gathering feedback to ensure that the project aligns with the original vision. Once the mockup is approved, we move into full-scale development, incorporating all agreed-upon functionality. This stage focuses on coding and building a robust structure to support the application’s features and usability."
                },
                {
                    title: "Test",
                    details: "Testing is a critical step to verify that the application functions as intended across all targeted browsers and devices. Our team conducts various testing processes, including functional, compatibility, and user acceptance testing, to ensure reliability and seamless performance. By identifying and fixing any issues early, we safeguard a smooth user experience post-launch, aligning with the highest quality standards."
                },
                {
                    title: "Launch",
                    details: "The Launch phase marks the culmination of planning, design, and development, as we deploy the completed project with precision. Our management team oversees every aspect of the deployment process, ensuring the project goes live smoothly. By closely monitoring the launch, we ensure that the final product meets quality standards, enabling the client to confidently present it to end-users. We provide a stable and successful launch to kickstart project success."
                },
                {
                    title: "Maintenance",
                    details: "Following deployment, we offer comprehensive maintenance services to ensure long-term project reliability. We conduct routine checks and updates to prevent and address any issues, ensuring the application remains compatible with evolving technologies. Our support includes software updates, security patches, and optimizations to maintain performance and adapt to new requirements, ensuring the application continues to meet business needs effectively."
                }
            ],
            img: build
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
                        <h1 className="font-Heading text-xl md:text-[28px] leading-8 w-11/12">Our work empowers customers to choose you with confidence.</h1>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">We operate under specific standards and recognize the necessity of grasping our clients' expectations before we design their websites. Our team is committed to identifying unique elements that will set your site apart, ensuring our methodologies empower you to capitalize on the latest internet technologies.</p>
                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">Following strict standards, we emphasize the importance of understanding our clients' needs before embarking on website design projects. Our skilled professionals are dedicated to finding distinctive solutions that help your website shine, enabling you to fully harness the power of online technologies.</p>
                </div>
            </div>
            <div className="py-10">
                <h1 className="font-Heading text-xl md:text-[28px] leading-8">We are committed to requirement gathering as an essential process for ensuring a strong foundation in our web development efforts.</h1>
                <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">We kick off this process with an in-person meeting, during which our prospective clients communicate their project expectations, which include:</p>
                <div>
                    {
                        kickoffprocess.map(({id,qus})=>(
                            <div key={id} className="flex items-center gap-3">
                                <FaRegCheckCircle size={25}/>
                                <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">{qus}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="py-10">
                <h1 className="font-Heading text-xl md:text-[28px] leading-8">Our Methodologies</h1>
                <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 text-justify mb-0 py-2">In our requirement engineering process, we primarily utilize the spiral model, which incorporates agile development methodologies. However, for smaller and less complex projects, we occasionally adopt the Waterfall model and its variations.</p>
                    <div>
                        {
                            methodology.map(({id,title,details1,details2,img})=>(
                                <div key={id} className="flex py-5">
                                    <div className="w-2/12">
                                        <img src={img} className="w-full" alt="" />
                                    </div>
                                    <div className="w-10/12 border-l-2 border-darkblue pl-2 md:pl-6">
                                        <h1 className="font-Heading text-xl md:text-[28px] leading-8">{title}</h1>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">{details1}</p>
                                        <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">{details2}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
            <div>
                <h1 className="font-Heading text-xl md:text-[28px] leading-8">Application Requirement Life-Cycle</h1>
                <p className="font-ContentText text-[15px] md:text-[19px] text-slate-600 mb-0 py-2">Our pool of skilled professionals implements the following strategies for a successful project completion.</p>
                <div>
                    {
                        lifecycle.map(({id,title,points,img})=>(
                            <div key={id} className="flex gap-3 py-5">
                                <div className="w-2/12 text-center">
                                    <img src={img} className="w-full" alt={title} />
                                    <h1 className="font-Heading text-[15px] md:text-[28px] leading-8 py-5">{title}</h1>
                                </div>
                                <div className="w-10/12 border-l-2 border-darkblue pl-2 md:pl-6">
                                    {
                                        points.map(({title,details})=>(
                                            <div>
                                                <div className="flex items-center gap-3 py-3">
                                                    <FaRegCheckCircle size={25}/>
                                                    <h1 className="font-Heading text-xl md:text-[28px] my-0">{title}</h1>
                                                </div>
                                                <p className="font-ContentText text-[15px] md:text-[19px] text-justify text-slate-600 mb-0 py-2">{details}</p>
                                            </div> 
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <p className="font-ContentText text-[15px] md:text-[19px] text-justify text-slate-600 mb-0 py-2">Requirement Engineering involves the critical steps of <span className="font-bold text-black">defining,</span> <span className="font-bold text-black">documenting,</span> and <span className="font-bold text-black">maintaining</span> project requirements, all of which are essential for driving the success of your software project.</p>
                <p className="font-ContentText text-[15px] md:text-[19px] text-justify text-slate-600 mb-0 py-2">Connect with us to gain full control over your business operations.</p>
            </div>
            </div>
        </div>
    )
}

export default RequirementEngineering;