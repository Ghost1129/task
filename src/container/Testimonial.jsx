import React from 'react'

const Testimonial = () => {
  return (
    <div className='h-[50vh] bg-black text-white'>
      <div className='mx-[10%] flex flex-col justify-center h-full gap-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-bold'>We design brands.</h2>
          <p>A simple look is all you need to crush your competition.</p>
        </div>
        <hr className='w-6 my-4' />
        <ul className='flex flex-wrap gap-5'>
          {['les avenirs', 'avec\'simple', 'WHITESPACE', 'mnmalsm', 'barcelona', 'smoothVANILLA'].map((item, index) => (
            <li className='text-xl cursor-pointer' key={index}>{item}</li>
          ))}
          
        </ul>
        
      </div>
      
    </div>
  )
}

export default Testimonial