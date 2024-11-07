'use client'
import { CgProfile } from "react-icons/cg";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
    const Cards = ({id,title,description,img,tags,progress,range,targetscale})=>{
      const scale = useTransform(progress,range,[1,targetscale])
    return(
        <motion.div style={{scale}} className="h-[100vh] sticky top-0 flex items-center justify-center">
        <div className='flex flex-col md:flex-row items-center relative bg-gray-500 p-3 rounded-3xl'>
        <div className='w-full md:w-1/2'>
        <img src={img} alt="" className='w-full h-full'/>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-y-14'>
        <div className="flex items-center flex-wrap">
        {tags.map((tags,index)=>(
                <p key={index} className='px-2 w-fit py-1 border bg-gray-300 border-gray-500 rounded-full text-sm mx-1'>{tags}</p>
            ))}
        </div>
            
            <p>{description}</p>
            <div className='flex gap-x-5 items-center'>
                <CgProfile size={40}/>
                <div>
                    <p className='mb-0'>Dimitri Dumont</p>
                    <p className='mb-0'>Fondateur, Hexa Web</p>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
        
    )
}
export default Cards;