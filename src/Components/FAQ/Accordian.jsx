
import { FaqItems } from "./faq";

const faqdata = [
    {id:1,question:"sample question",answer:"sample answer"},
    {id:2,question:"sample question",answer:"sample answer"},
    {id:3,question:"sample question",answer:"sample answer"},
    {id:4,question:"sample question",answer:"sample answer"},
]

const FaqAccordian = ()=>{
    return(
        <>
        <div className="my-10">
        <div className="container mx-auto w-full">
            <div className="text-center">
                <h1 className="font-bold text-6xl mb-5">FAQ</h1>
                <p className="text-gray-600 text-2xl font-semibold mb-10">What you should know about our website designs.</p>
            </div>
            <div className="flex flex-wrap">
                {faqdata.map((items)=>(
                    <FaqItems key={items.id} {...items}/>
                ))}
            </div>
        </div>
        </div>
       
        </>
    )
}

export default FaqAccordian; 