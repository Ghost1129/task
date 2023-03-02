import React from 'react'

const Footer = () => {
  return (
    <div className='h-[50vh] md:h-[40vh] bg-black text-white'>
      
      {/* Upper Footer */}
      <div className=' h-[40%] md:h-[40%] bg-gradient-to-r from-blue-600 to-sky-400 flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4 m-6 text-center md:m-0 md:flex-row'>
          <h3 className='text-lg font-bold md:text-2xl lg:text-4xl'>Hit the ground running with a minimalist look.</h3>
          <button className='px-3 py-2 text-black bg-white md:px-5 md:py-4' >Learn More</button>
        </div>

      </div>
      {/* Lower Footer */}
      <div className='flex flex-col gap-4 justify-center items-center h-[60%] text-center'>
        <h2 className='text-5xl font-extrabold'>M</h2>
        <span>Handcrafted with ❤️ in Chicago · Powered by StudioPress</span>
        <ul className='flex gap-5'>
          {['FACEBOOK', 'TWITTER', 'INSTAGRAM'].map((item, index) => (
            <li key={index}>{item}</li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer