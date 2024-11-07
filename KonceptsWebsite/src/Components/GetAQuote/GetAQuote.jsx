import { Link } from "react-router-dom";

const GetAQuote = ()=>{
    return(
        <Link to={'/getaquote'} className="no-underline border border-white fixed bottom-5 md:bottom-10 right-3 md:right-20 bg-darkblue z-10 hover:bg-darkblue/80 text-white w-fit h-fit px-2 py-2 rounded-2xl">
            <p className="my-auto text-sm">Get A Qoute</p>
        </Link>
    )
}

export default GetAQuote;