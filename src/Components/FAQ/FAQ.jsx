import { useState } from "react"
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
export const FaqItems = ({answer,question})=>{
    const [openfaq,setopenfaq] = useState(false);
    return(
        <div className="w-full md:w-[530px] bg-white mx-auto mb-5 rounded-xl p-3 hover:shadow-2xl">
            <div className="">
                <h1>{question}</h1>
                <h1>{openfaq ? <LuMinusCircle/>:<LuPlusCircle/>}</h1>
            </div>
            <div className={`${openfaq ? "grid-cols-[1fr]": "grid-flow-col-[0fr]"} grid`}>
            <div className="">
                <h1>{answer}</h1>
            </div>
            </div>
           
        </div>
    )
}