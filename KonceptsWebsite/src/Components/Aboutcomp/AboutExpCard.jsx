const AboutExpCard = ({id,ProfilePic,Name,title,exp,profession,icon,about1,about2,proficient,socialmedia,link})=>{
    return(
        <div className="aboutExpCardContainer border-1 border-collapse border-gray-200">
            <div className="flex items-start justify-between">
                <div className="w-[150px] md:w-[250px] h-[100px] md:h-[200px]">
                    <img src={ProfilePic} className="w-full h-full" alt="" />
                </div>
                <div className="flex">
                    <p className="text-3xl md:text-5xl font-semibold text-slate-950 mr-2">{exp}+</p>
                    <p className="w-20 text-sm font-medium">years of experience in {profession}</p>
                    <img  src={icon} className="w-20 h-16 inline" alt="" />
                </div>
            </div>
            <div className="text-slate-900 pt-3">
                <h1 className="text-3xl font-semibold">{Name}</h1>
                <h2 className="text-[18px] font-semibold">{title}</h2>
                <p className="font-medium text-[15px] w-full md:w-9/12 pt-4">{about1}</p>
                <p className="font-medium text-[15px] w-full md:w-9/12">{about2}</p>
                <p className="font-medium text-[15px]">Porficient in:</p>
                <div className="w-10/12">
                   {
                    proficient.map((items,index)=>(
                        <span className="border-1 mr-2 mb-2 border-black px-3 py-1 rounded-full font-bold text-[11px] inline-block uppercase" key={index}>{items}</span>
                    ))
                   }
                </div>
                <div className="mt-5">
                    {
                        socialmedia.map((items,index)=>(
                            <a href={link} className="inline-block text-2xl text-slate-950 mr-5 hover:scale-75 transition-transform duration-200" key={index}>{items}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default AboutExpCard;
