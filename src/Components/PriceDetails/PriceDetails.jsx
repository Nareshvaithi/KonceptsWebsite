import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillRecord2Fill } from "react-icons/bs";
const Lite = [
    {id:1,details:"website design"},
    {id:2,details:"212 Unique Page Designs"},
    {id:3,details:"All MIT licensed images and fonts"},
    {id:4,details:"Single user license"},
    {id:5,details:"Use on unlimited projects"},
]

const ProPackage = [
    {id:1,details:"website design"},
    {id:2,details:"212 Unique Page Designs"},
    {id:3,details:"All MIT licensed images and fonts"},
    {id:4,details:"Single user license"},
    {id:5,details:"Use on unlimited projects"},
]

const BusinessPackage = [
    {id:1,details:"website design"},
    {id:2,details:"212 Unique Page Designs"},
    {id:3,details:"All MIT licensed images and fonts"},
    {id:4,details:"Single user license"},
    {id:5,details:"Use on unlimited projects"},
] 

const PriceDetails = ()=>{
    return(
        <>
        <div className="py-10">
        <div className="container flex flex-wrap mx-auto">
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5">
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">LITE</h1>
                    <h1>$359<sup className="text-gray-400">00</sup></h1>
                </div>

                <div className="my-5">
                    <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit, ut facilis commodi deserunt.</p>
                </div>
                
                <div>
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
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5 relative">
                <div className="absolute top-0 md:-top-3 right-10">
                    <h1 className="text-lg bg-darkblue text-white px-3 py-1 rounded-xl w-fit ml-auto text-right">Most Populor</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">Pro package</h1>
                    <h1>$599<sup className="text-gray-400">00</sup></h1>
                </div>

                <div className="my-5">
                    <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit, ut facilis commodi deserunt.</p>
                </div>
                
                <div>
                {
                   <div>
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
            <div className="w-full md:w-1/3 shadow-2xl shadow-black/20 p-5 relative">
                <div className="absolute top-0 md:-top-3 right-10 rounded-xl bg-white px-3 flex items-center">
                    <BsFillRecord2Fill color="red"/>
                    <h1 className="text-lg p-1 w-fit ml-auto text-right">Live Updates</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="text-xl text-gray-800">Business Package</h1>
                    <h1>$999<sup className="text-gray-400">00</sup></h1>
                </div>

                <div className="my-5">
                    <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sit, ut facilis commodi deserunt.</p>
                </div>
                
                <div>
                {
                   <div>
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