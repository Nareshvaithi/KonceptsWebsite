const CustomerReview = ({id,review,reviewer,des})=>{
    return(
        <div className="w-full h-[200px] md:h-[350px] border border-gray-200 aboutExpCardContainer flex flex-col justify-between">
            <div className="flex items-start gap-1">
                <p className="text-[15px] font-bold text-slate-950">{review}</p>
                <img className="w-10" src={'https://cdn.prod.website-files.com/658af721191810b77772eeb2/658af721191810b77772eee0_quote%201.svg'} alt="" />
            </div>
            <div>
                <p className="pb-0">{reviewer}</p>
                <p className="pb-0">{des}</p>
            </div>
        </div>
    )
}

export default CustomerReview;
