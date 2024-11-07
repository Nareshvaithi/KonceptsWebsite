import { FaSquareWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const WhatsAppicon = ()=>{
    const moveToWhatsapp = ()=>{
        window.location.href='https://wa.me/+919791177077';
    }
    return(
        <div onClick={moveToWhatsapp} className="fixed bottom-16 md:bottom-24 cursor-pointer right-3 md:right-20 bg-white rounded-md z-10">
            <div className="text-green-500"><FaSquareWhatsapp size={50}/></div>
        </div>
    )
}

export default WhatsAppicon;