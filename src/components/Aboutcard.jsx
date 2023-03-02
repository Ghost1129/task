import React from 'react'

const Aboutcard = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className='font-bold'>Design</span>
      <p>
      With an emphasis on typography, white space, and mobile-optimized design, your website will look absolutely breathtaking.
      </p>
      <button className=' w-[40%]  md:w-[70%] lg:w-[40%] p-3 text-white bg-black'>Learn More</button>
    </div>
  )
}

export default Aboutcard