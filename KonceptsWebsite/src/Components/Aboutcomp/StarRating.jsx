const StarRating = ({id,rating,stars,quality,schedule,cost,Will2Ref})=>{
    return(
        <div className="border border-gray-200 w-full h-[350px] flex flex-col justify-between aboutExpCardContainer">
            <div>
                <p className="text-xl mb-1"><span className="text-4xl font-semibold">{rating}</span> of 5.0</p>
                <span className="flex text-yellow-400">{stars}</span>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <p className="mb-1">Quality</p>
                    <p className="mb-1 font-bold">{quality}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mb-1">Schedule</p>
                    <p className="mb-1 font-bold">{schedule}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mb-1">Cost</p>
                    <p className="mb-1 font-bold">{cost}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="mb-1">Willing to refer</p>
                    <p className="mb-1 font-bold">{Will2Ref}</p>
                </div>
            </div>
        </div>
    )
}
export default StarRating;