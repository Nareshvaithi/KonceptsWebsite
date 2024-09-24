import { useState } from "react"
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
export const FaqItems = ({answer,question})=>{
    const [openfaq,setopenfaq] = useState(false);
    return(
        <div className="w-full md:w-1/2 bg-white mx-auto mb-5 rounded-xl p-3 hover:shadow-2xl overflow-hidden">
            <div onClick={()=>setopenfaq(!openfaq)} className="flex items-center justify-between cursor-pointer">
                <h1 className="text-xl">{question}</h1>
                <h1 className="">{openfaq ? <LuMinusCircle size={20}/>:<LuPlusCircle size={20}/>}</h1>
            </div>
            
            <div className={`grid ${openfaq ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} transition-all duration-300 overflow-hidden`}>
                <div className="overflow-hidden">{answer}</div>
            </div>
        
           
        </div>
    )
}