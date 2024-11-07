import React from 'react'
import downarrow from "../../assets/animated-icons/Downarrow.gif"
export const AboutHero = () => {
  const moveteam=()=>{
      const teamSection = document.getElementById('team');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
  return (
    <div className='w-full h-screen flex flex-col text-center'>
      <div className='py-5 md:py-10'>
        <p className='font-ContentText text-lg font-bold'>Who We Are</p>
      </div>
      <div>
        <h1 className='mx-auto font-Heading abouttext'>We are a remote design team with strong experience in creating UX/UI solutions</h1>
      </div>
      <div className='py-20'>
          <button onClick={moveteam} className='border-2 border-slate-950 w-fit mx-auto rounded-full p-3 flex items-center transition-all duration-300 hover:scale-95'>
            <span className='font-ContentText font-semibold'>Leadership team</span>
            <img src={downarrow} alt="Downarrow"/>
          </button>
      </div>
    </div>
  )
}
