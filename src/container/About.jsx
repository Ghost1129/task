import { Aboutcard } from '@/components'
import React from 'react'

const About = () => {
  return (
    <div className='mx-[10%] my-[8%]'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-4xl font-bold'>We build experience.</h2>
        <p>A minimalist approach is the only way to design a website.</p>
      </div>
      <div className='flex flex-col mt-16 gap-14 md:flex-row'>
        <Aboutcard/>
        <Aboutcard/>
        <Aboutcard/>
      </div>
    </div>
  )
}

export default About