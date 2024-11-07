import { Link } from "react-router-dom";
const EmailandQuote = ()=>{
    return(
        <div className="bg-darkblue py-20 flex items-center">
            <div className="container">
                <div className="text-white">
                <p className="text-xl md:text-2xl">Transformation begins now!</p>
                <h1 className="text-3xl md:text-5xl">Move forward towards meaningful outcomes.</h1>
                </div>
                <div className="flex flex-col md:flex-row mt-5 text-white gap-3">
                    <a href="mailto:sridhar@konceptsdandd.com" className="no-underline text-white"><button className="border-3 border-white px-3 py-2 text-xl md:text-2xl font-bold hover:bg-white hover:text-darkblue transition-all duration-500">Email us today</button></a>
                   <Link className="no-underline text-white" to={'/getaquote'} onClick={()=>window.scrollTo(0,0)}><button className="border-3 border-white px-3 py-2 text-xl md:text-2xl font-bold hover:bg-white hover:text-darkblue transition-all duration-500">Request a quote</button></Link>
                </div>
            </div>
        </div>
    )
}
export default EmailandQuote;