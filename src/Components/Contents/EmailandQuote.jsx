const EmailandQuote = ()=>{
    return(
        <div className="bg-darkblue py-20 flex items-center">
            <div className="container">
                <div className="text-white">
                <p className="text-2xl">Change starts here!</p>
                <h1 className="text-5xl">Take your first step towards RESULT.</h1>
                </div>
                <div className="flex mt-5 text-white gap-3">
                    <button className="border-3 border-white px-3 py-2 text-2xl font-bold hover:bg-white hover:text-darkblue transition-all duration-500">Email us today</button>
                    <button className="border-3 border-white px-3 py-2 text-2xl font-bold hover:bg-white hover:text-darkblue transition-all duration-500">Request a quote</button>
                </div>
            </div>
        </div>
    )
}
export default EmailandQuote;