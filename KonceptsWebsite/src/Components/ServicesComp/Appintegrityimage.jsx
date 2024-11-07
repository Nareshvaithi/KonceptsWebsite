
import { CgWebsite } from "react-icons/cg";
import { FaBug } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { GrUpdate } from "react-icons/gr";
import { LuDatabaseBackup } from "react-icons/lu";
import { GrCloudSoftware } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { DiAtom } from "react-icons/di";
import { MdDisplaySettings } from "react-icons/md";


const Appintegrityimage = () => {

    const data = [
        {id:1,details:"Application Integration & Migration",icon:<CgWebsite size={60}/>},
        {id:2,details:"Trouble Shooting & Bug Fixes",icon:<FaBug size={60}/>},
        {id:3,details:"Upgrades & Enhancements",icon:<GrUpdate size={60}/>},
        {id:4,details:"Development Support",icon:<GrCloudSoftware size={60}/>},
        {id:5,details:"Database & Operating System Administration",icon:<LuDatabaseBackup size={60}/>},
        {id:6,details:"Integration Management",icon:<FaPeopleGroup size={60}/>},
        {id:7,details:"Performance Modelling",icon:<DiAtom size={60}/>},
        {id:8,details:"Software Quality Assurance",icon:<MdDisplaySettings size={60}/>},
    ]

    return (
            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 py-10">
                {
                    data.map(({id,details,icon})=>(
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                {icon}
                            </div>
                            <div>
                                <p className="font-ContentText text-[15px] md:text-lg text-darkblue font-bold mb-0 py-2">{details}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
};

export default Appintegrityimage;
