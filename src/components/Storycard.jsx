import Image from 'next/image'
import React from 'react'


const Storycard = (props) => {
  const {title,description,image} = props.story
  return (
    <div className='flex flex-col max-w-md gap-3 h-80'>
      <Image src={image} className='w-full h-64 grayscale ' />
      <div>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Storycard