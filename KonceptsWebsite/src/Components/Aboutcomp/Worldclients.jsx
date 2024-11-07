const WorldClients = ()=>{
    return(
        <div className="w-full h-full p-1 md:p-5">
            <div className="w-full h-[80vh] flex flex-col items-center gap-5 justify-center">
                <h1 className="text-gray-950 text-6xl w-full md:w-2/5 text-center font-Heading font-bold">Our clients from all over the world</h1>
                <p className="text-gray-950 w-full md:w-1/3 text-center font-ContentText">Having accomplished projects for over 25 clients globally, our reach extends to various regions, with a predominant client base in the USA, Europe, and the UK</p>
            </div>
            <div className="w-full h-full flex justify-start relative pb-20">
                <img src="https://cdn.prod.website-files.com/658af721191810b77772eeb2/658af721191810b77772f11c_map-p-1080.png" className="w-[100%] h-full" alt="" />
                <div className="absolute size-24 top-[40px] md:top-[200px] left-[60px] md:left-[300px] country-icon">
                    <img src="https://cdn.prod.website-files.com/658af721191810b77772eeb2/66ab9b7b25e912f392ee55f7_clients%20from%20USA.svg" alt="" />
                </div>
                <div className="absolute size-24 top-[8px] md:top-[70px] left-[140px] md:left-[550px] country-icon">
                    <img src="https://cdn.prod.website-files.com/658af721191810b77772eeb2/66ab9b7bbfb91be59c4d4236_clients%20from%20UK.svg" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default WorldClients;