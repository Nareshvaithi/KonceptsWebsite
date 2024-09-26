const Contact = ()=>{
    const ContactDetails = {
        inputs:[
        {id:1,detail:"Name *"},
        {id:2,detail:"Phone Number *"},
        {id:3,detail:"E-mail Id *"},
        {id:4,detail:"Country *"},
        {id:5,detail:"Select Budget *"},
        ],

        checkbox:[
            {id:1,service:"Web Development"},
            {id:2,service:"Web Application Development"},
            {id:3,service:"E-Commerce"},
            {id:4,service:"Mobile App Development"},
            {id:5,service:"Web Maintenance"},
            {id:6,service:"SEO/ Digital Marketing"},
            {id:7,service:"Branding"},
            {id:8,service:"Others"},
        ]

    }
    return(
        <div className="py-20">
            <div className="container">
               <div className="flex justify-center">
               <h1 className="font-light text-6xl font-Heading mx-auto text-gray-700">lets's Talk Business</h1>
               </div>
               <div className="flex justify-center mt-3">
                <form action="" className="w-full md:w-3/4 py-3 rounded-2xl px-2">
                <div className="flex flex-col md:flex-row justify-center gap-5 w-full rounded-2xl">
                <div className="w-full">
                        {ContactDetails.inputs.map((items,index)=>(
                            <div key={index} className="w-full">
                                <input type="text" placeholder={items.detail} className="text-xl bg-gray-200 placeholder:text-black placeholder:font-Heading font-thin placeholder:text-lg w-full outline-none px-3 py-2"/>
                                <p className="text-red-500 text-[15px] font-light opacity-100">please enter {items.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full">
                        <div className="bg-gray-200 px-3 py-2">
                            <h2 className="font-light text-2xl font-Heading mx-auto text-gray-700">Required services *</h2>
                            <div>
                            {
                                ContactDetails.checkbox.map((items,index)=>(
                                    <div key={index} className="flex items-center py-2">
                                        <input type="checkbox" className="opacity-50 checked:accent-gray-700 size-4"/>
                                        <h3 className="text-[18px] my-auto text-gray-600 inline ml-3">{items.service}</h3>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                        <p className="text-red-500 text-[15px] font-light">please select service *</p>
                    </div>
                </div>
                <div>
                    <textarea name="" id="" className="text-xl bg-gray-200 text-black placeholder:text-black placeholder:font-Heading font-thin placeholder:text-lg w-full outline-none px-3 py-2" placeholder="Project details" rows={4}></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="bg-darkblue hover:bg-darkblue/80 font-bold text-white text-lg px-4 py-2">Submit</button>
                </div>
                </form>
               </div>
            </div>
        </div>
    )
}
export default Contact; 