import React from 'react'

const Hero = () => {
  return (
    <div className='text-white h-[50vh] flex items-center bg-hero-pattern bg-cover bg-center bg-blend-darken bg-black '>
       <div className='md:max-w-[50%] lg:max-w-[30%] max-h-max-[60%] ml-[10%] flex flex-col gap-5'>
          <h1 className='text-5xl font-bold'>We crush <br /> minimal <br /> design.</h1>
          <p> <span className='font-bold'>MONOCHROME</span> is a creative agency based in Chicago. We <br/> developed the Genesis Framework and build mobile-optimized themes <br /> for WordPress.</p>
       </div>
    </div>
  )
}

export default Hero