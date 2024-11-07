import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillRecord2Fill } from "react-icons/bs";

const Lite = [
    {id:1,details:"Upto 10 pages"},
    {id:2,details:"50% advance"},
    {id:3,details:"50% before delivery"},
    {id:4,details:"Timeframe 2 Weeks"},
    {id:5,details:"Custom Design"},
    {id:6,details:"Unparalleled 3 Months Free Support"},
    {id:7,details:"Domain Name"},
    {id:8,details:"Stock Photo upto 10"},
    {id:9,details:"On Page Optimization"},
    {id:10,details:"Essential Elements of Successful Design"},
    {id:11,details:"Blog"},
    {id:12,details:"CMS"},
    {id:13,details:"E-Commerce (₹10,000)"},
    {id:14,details:"Web Hosting"},
    {id:15,details:"Strategy Session"},
    {id:16,details:"Full source code"},
]

const ProPackage = [
    {id:1,details:"Upto 15 pages"},
    {id:2,details:"50% advance"},
    {id:3,details:"50% before delivery"},
    {id:4,details:"Timeframe 3 Weeks"},
    {id:5,details:"Custom Design"},
    {id:6,details:"Unparalleled 6 Months Free Support"},
    {id:7,details:"Domain Name"},
    {id:8,details:"Stock Photo upto 15"},
    {id:9,details:"On Page Optimization"},
    {id:10,details:"Essential Elements of Successful Design"},
    {id:11,details:"Blog"},
    {id:12,details:"CMS"},
    {id:13,details:"E-Commerce (₹10,000)"},
    {id:14,details:"Web Hosting"},
    {id:15,details:"Strategy Session"},
    {id:26,details:"Full source code"},
]

const BusinessPackage = [
    {id:1,details:"Upto 30 pages"},
    {id:2,details:"40% advance"},
    {id:3,details:"30% midway and 30% before delivery"},
    {id:4,details:"Timeframe 6-7 Weeks"},
    {id:5,details:"Custom Design"},
    {id:6,details:"Unparalleled 6 Months Free Support"},
    {id:7,details:"Domain Name"},
    {id:8,details:"Stock Photo upto 20"},
    {id:9,details:"On Page Optimization"},
    {id:10,details:"Essential Elements of Successful Design"},
    {id:11,details:"Blog"},
    {id:12,details:"CMS"},
    {id:13,details:"E-Commerce (₹10,000)"},
    {id:14,details:"Lead Magnet"},
    {id:15,details:"Strategy Session"},
    {id:16,details:"Full source code"},
] 

const PriceDetails = ()=>{
    return(
        <>
        <div className="py-10">
        <div className="container flex flex-wrap mx-auto">
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5 hover:shadow-black/50 my-5">
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">LITE</h1>
                    <h1>₹25,000</h1>
                </div>

                <div className="pt-3">
                {
                   <div>
                        {
                            Lite.map((items)=>(
                                <li key={items.id} className="flex items-center gap-2 text-xl mb-3">
                                    <span><IoIosCheckmarkCircle color="darkblue"/></span>
                                    <span>{items.details}</span>
                                </li>
                            ))
                        }
                   </div>
                        
                    
                }
                </div>
            </div>
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5 relative hover:shadow-black/50 my-5">
                <div className="absolute top-0 md:-top-3 right-10">
                    <h1 className="text-lg bg-darkblue text-white px-3 py-1 rounded-xl w-fit ml-auto text-right">Most Populor</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">Pro package</h1>
                    <h1>₹40,000</h1>
                </div>

                <div>
                {
                   <div className="pt-3">
                        {
                            ProPackage.map((items)=>(
                                <li key={items.id} className="flex items-center gap-2 text-xl mb-3">
                                    <span><IoIosCheckmarkCircle color="darkblue"/></span>
                                    <span>{items.details}</span>
                                </li>
                            ))
                        }
                   </div>
                        
                    
                }
                </div>
            </div>
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5 relative hover:shadow-black/50 my-5">
                <div className="absolute top-0 md:-top-3 right-10 rounded-xl bg-white px-3 flex items-center">
                    <BsFillRecord2Fill color="red"/>
                    <h1 className="text-lg p-1 w-fit ml-auto text-right">Live Updates</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">Business Package</h1>
                    <h1>₹60,000</h1>
                </div>

                <div>
                {
                   <div className="pt-3">
                        {
                            BusinessPackage.map((items)=>(
                                <li key={items.id} className="flex items-center gap-2 text-xl mb-3">
                                    <span><IoIosCheckmarkCircle color="darkblue"/></span>
                                    <span>{items.details}</span>
                                </li>
                            ))
                        }
                   </div>
                }
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default PriceDetails;