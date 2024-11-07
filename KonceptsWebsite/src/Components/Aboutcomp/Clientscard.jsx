const ClientsCard = ({id,logo})=>{
    const logoadj=(id)=>{
        if(id === 6){
            return 'w-64';
        }
    }

    const logoad2=(id)=>{
        if(id === 7){
            return 'jathi';
        }
    }
    
 
    return(
        <div className="w-full border border-gray-200 flex justify-center items-center px-2 py-20 md:py-32">
            <div className={`${logoadj(id)} ${logoad2(id)} w-44`}>
                <img loading="lazy" src={logo} className="w-full" alt="" />
            </div>
        </div>
            
    )
}
export default ClientsCard;