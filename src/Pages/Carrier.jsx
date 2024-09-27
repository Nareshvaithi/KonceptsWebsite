import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
const Carrier = ()=>{

    const carrierdetails={
        inputs:[
            {id:1,detail:"First Name",type:"text"},
            {id:2,detail:"Last Name",type:"text"},
            {id:3,detail:"E-Mail",type:"email"},
            {id:4,detail:"Phone Number",type:"text"},
            {id:5,detail:"College Name",type:"text"},
            {id:6,detail:"Department",type:"text"},
        ],
        inputradio:[
            {id:"one",detail:"1st year",type:"radio"},
            {id:"two",detail:"2nd year",type:"radio"},
            {id:"three",detail:"3rd year",type:"radio"},
            {id:"four",detail:"4th year",type:"radio"},
        ]
    }

    return(
        <>
        <div className="pt-36 pb-20">
            <div className="container">
                <div className="flex flex-col md:flex-row cargap">
                    <div className="text-center w-full md:w-1/2 px-5 py-4 shadow-xl border-2 border-gray-300 shadow-black/20 rounded-3xl hover:scale-105 transition-transform duration-500">
                        <h2 className="pb-4 font-Heading">Get In <span className="text-darkblue">Touch</span></h2>
                        <a href="tel:+917845420505" className="no-underline"><h3 className="text-gray-600 font-medium text-lg font-ContentText capitalize w-96 mx-auto">Call us for quick support and instant answers. our team is ready to assist you!</h3></a>
                        <div className="flex items-center justify-center gap-3 pt-5">
                            <IoCall size={35}/>
                            <a href="tel:+917845420505" className="no-underline text-black text-xl font-light">+91 78454 20505</a>
                        </div>
                    </div>
                    <div className="text-center w-full md:w-1/2 px-5 py-4 shadow-xl border-2 border-gray-300 shadow-black/20 rounded-3xl hover:scale-105 transition-transform duration-500">
                    <h2 className="pb-4 font-Heading">Reach out <span className="text-darkblue">Via E-mail</span></h2>
                        <a href="mailto:sridhar@konceptsdandd.com" className="no-underline"><h3 className="text-gray-600 font-medium text-lg font-ContentText capitalize w-96 mx-auto">Send us an email for detailed inquiries or assistance. we'll respond promptly to your questions and needs!</h3></a>
                        <div className="flex items-center gap-3 justify-center pt-3">
                            <TbMailFilled size={35}/>
                            <a href="mailto:sridhar@konceptsdandd.com" className="no-underline text-black text-xl font-light">sridhar@konceptsdandd.com</a>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="text-center">
                        <h1>Looking <span className="text-darkblue">For Internship?</span></h1>
                        <h2>Are you a student and looking for internship?  We are hiring !</h2>
                    </div>
                    <div>
                        <form action="" className="bg-white py-5">
                            <div className="w-1/2 mx-auto">
                                {carrierdetails.inputs.map((items,index)=>(
                                    <div>
                                        <input key={index} type={items.type} placeholder={items.detail} className="text-xl bg-gray-200 placeholder:text-black placeholder:font-Heading font-thin placeholder:text-lg w-full outline-none px-3 py-2"/>
                                        <p className="px-3 text-red-500">please enter {items.detail}</p>
                                    </div>
                                ))}
                                <div className="grid grid-cols-2 gap-3 pl-3">
                                    {carrierdetails.inputradio.map((items,index)=>(
                                        <div key={index} className="">
                                            <input name="year" id={items.id} value={items.detail} type={items.type}/>
                                            <label htmlFor={items.id} className="pl-3 cursor-pointer">{items.detail}</label>
                                        </div>
                                    ))}
                                </div>
                                <h2 className="text-center text-xl mt-4">Share your Resume to us via E-mail </h2>
                                <button className="w-full bg-darkblue hover:bg-darkblue/80 font-bold text-white text-lg px-4 py-2 rounded-full mt-3">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}




export default Carrier; 