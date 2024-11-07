import { useLocation} from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
const PortfolioProject = ()=>{
    const location = useLocation();
    console.log(location);
    const {id,img,title,detail} = location.state;

    useEffect(() => {
        const lenis = new Lenis({
            easing: (t) => t,
            duration:1,  
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
          lenis.destroy();
        };
      }, []);
    return(
        <div>
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 bg-white portfolio-white-div top-0 pt-20 px-3">
                <div className="mt-3">
                    <h1 className="font-Heading">{title}</h1>
                </div>
                <div className="mt-5">
                    <p className="text-justify font-ContentText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eum beatae ducimus natus hic, corrupti pariatur, earum asperiores totam, rem fugiat placeat magni minus vel ex molestias optio quo? Neque?</p>
                    <p className="text-justify font-ContentText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eum beatae ducimus natus hic, corrupti pariatur, earum asperiores totam, rem fugiat placeat magni minus vel ex molestias optio quo? Neque?</p>
                </div>
                <div>
                    <p className="">technologies used:</p>
                    <div className="flex justify-around">
                        <div>
                            <span className="block">HTML 5</span>
                            <span className="block">CSS 3</span>
                            <span className="block">Javascript</span>
                        </div>
                        <div>
                            <span className="block">Tailwind CSS</span>
                            <span className="block">React js</span>
                            <span className="block">Node js</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 border w-fit mx-auto group">
                <div className="relative">
                    <div className="bg-darkblue transform translate-x-5 group-hover:translate-x-0 w-40 h-5 transition-all duration-700"></div>
                    <div className="bg-darkblue transform -translate-x-5 group-hover:-translate-x-0 w-40 h-5 transition-all duration-700"></div>
                    <a href="" className="absolute top-2 left-7"><button className="text-white text-lg">View Project</button></a>
                </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-screen md:h-[160vh] bg-[#fcc900]">
                <div className="mt-60 w-full">
                    <img loading="lazy" src={img} className="w-full" alt={detail} title={title}/>
                </div>
            </div>
        </div>
        </div>
    )
}
export default PortfolioProject;