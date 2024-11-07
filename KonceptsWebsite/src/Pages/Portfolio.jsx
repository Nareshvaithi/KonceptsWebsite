'use client'
import React, { useEffect, useRef } from 'react';
import Rellax from "rellax";
import Lenis from 'lenis';
import Flowimg1 from "../assets/Images/flowimg1.png"
import Flowimg2 from "../assets/Images/flowimg2.png"
import Flowimg3 from "../assets/Images/flowimg3.png"
import Flowimg4 from "../assets/Images/flowimg4.png"
import Flowimg5 from "../assets/Images/flowimg5.png"
import Flowimg6 from "../assets/Images/flowimg6.png"
import Cards from '../Components/StackingCards/Cards';
import { useScroll } from 'framer-motion';
import Portfolioslider from '../Components/PortFoliosSider/PortfolioSlider';

const Portfolio=()=>{
   const projects=[
    {id:1,title:"Card 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg1, tags:["figma","e-commerce","landing page"]},
    {id:1,title:"Card 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg2, tags:["figma","e-commerce","landing page"]},
    {id:1,title:"Card 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg3, tags:["figma","e-commerce","landing page"]},
    {id:1,title:"Card 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae obcaecati ex. Accusamus, reiciendis. Ducimus amet voluptatem tenetur porro? Quod et minus facere in, velit accusamus sit ratione? Consequatur, id.",img:Flowimg4, tags:["figma","e-commerce","landing page"]},
   ]

    useEffect(() => {
        const rellax = new Rellax('.rellax', {
      // Customize speed as needed
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false,
        });
        const lenis = new Lenis({
            easing: (t) => t,
            duration:3,  
            direction: 'vertical',
            smooth: true,
            smoothTouch: true,   
            gestureDirection: 'vertical',
            wheelMultiplier: 2.0,  
          });
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
        
          requestAnimationFrame(raf);
        // Cleanup Rellax on component unmount
        return () => {
          rellax.destroy();
          lenis.destroy();
        };
      }, []);
      
      const container = useRef(null)
      const {scrollYProgress} = useScroll({
        target:container,
        offset:['start start','end end']
      })
   
    return(
        <>
        <div>
            <div className='container'>
            <div className='flex justify-center items-start h-screen w-full top-60 sticky'>
                <div>
                    <p className='text-xl font-semibold text-center'>Create, Connect, Celebrate</p>
                    <h1 className='font-Heading leading-tight text-center text-2xl md:text-4xl font-bold text-gray-800'>We have thougtfully shaped innumerable websites over the years and successfully launched the same for many <span className='text-gray-500 block'>satisfied clients.</span></h1> 
                </div>
            </div>
            <div className='h-[200vh] flex flex-col'>
                <div className='grid grid-cols-2 absolute gap-2 md:gap-40'>
                    <img src={Flowimg1} className='h-[100px] md:h-[250px] w-[400px] mr-[200px] -z-[9] rellax' data-rellax-speed="3"/>
                    <img src={Flowimg2} className='h-[100px] md:h-[250px] w-[400px] rellax -z-[9]' data-rellax-speed="-1"/>
                    <img src={Flowimg3} className='h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="4"/>
                    <img src={Flowimg4} className='h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-3"/>
                    <img src={Flowimg5} className='h-[100px] md:h-[250px] w-[400px] rellax' data-rellax-speed="-2"/>
                    <img src={Flowimg6} className='h-[100px] md:h-[250px] w-[400px] rellax -z-[9]' data-rellax-speed="5"/>
                </div>
               
            </div>
            </div>
            <div className='container'>
                <div ref={container}>
                {
                   projects.map((items,index)=>{
                    const targetscale = 1 - ((projects.length - index) * 0.1);
                    return <Cards key={index} {...items} progress={scrollYProgress} range={[index * 0.25,1]} targetscale={targetscale}/>
                   })
                }
                </div>
            </div>
            <div>
                <Portfolioslider/>
            </div>
            
        </div>
        </>
         
      
    )
}
export default Portfolio;