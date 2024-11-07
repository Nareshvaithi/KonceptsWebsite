import { useState } from "react"
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
import { IoIosArrowDropdownCircle } from "react-icons/io";
export const FaqItems2 = ({answer,question})=>{
    const [openfaq,setopenfaq] = useState(false);
    return(
        <div className="w-full mb-5 bg-white mx-auto rounded-xl p-3 hover:shadow-xl overflow-hidden">
            <div onClick={()=>setopenfaq(!openfaq)} className="flex items-center justify-between cursor-pointer pr-5">
                <h1 className="text-xl">{question}</h1>
                <h1 className={`text-darkblue transition-transform duration-300 ${openfaq ? "origin-right rotate-180":"origin-right rotate-0"} transition-all duration-500`}><IoIosArrowDropdownCircle size={25}/></h1>
            </div>
            
            <div className={`grid ${openfaq ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} transition-all duration-300 overflow-hidden`}>
                <div className="overflow-hidden">{answer}</div>
            </div>
        
           
        </div>
    )
}