import { useContext } from "react";
import { MenuStateContext } from "../Usecontext/UseContext";
import { TfiClose } from "react-icons/tfi";
const ResponsiveNavbar = ()=>{
    const {MenuState,SetMenuState,HandleMenuState} = useContext(MenuStateContext)
    return(
        <>
         <div className={`${MenuState ?"top-0" : "-top-[100000%]"} fixed w-full h-screen bg-blue-400 transition-all ease-in-out duration-700`}>
            <div className="flex justify-between">
                <div>

                </div>
                <div onClick={HandleMenuState}>
                    <TfiClose size={20}/>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default ResponsiveNavbar;