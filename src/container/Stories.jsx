import { Storycard } from '@/components'
import React from 'react'
import {building1,building2,building3,building4} from '@/assets'

const Stories = () => {
  const stories = [{
    title: 'OVERCOMING CREATIVE BLOCK',
    description: 'Brian Gardner · May 1,2017',
    image: building1

  },{
    title: 'WHY COMMUNICATION IS KEY',
    description: 'Brian Gardner · May 1,2017',
    image: building2
 },{
    title: 'THE PATH OF LEAST RESISTANCE',
    description: 'Brian Gardner · May 1,2017',
    image: building3

 },
 {
    title: 'HOW TO REACH NEW HEIGHTS',
    description: 'Brian Gardner · May 1,2017',
    image: building4
 }
]
  return (
    <div className=''>
       <div className='mx-[10%] my-[8%] flex flex-col h-full gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-4xl font-bold'>We create Stories.</h2>
            <p>A simple look is all you need to crush your competition.</p>
          </div>
          <hr className='h-1 my-4 bg-black w-7' />
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {stories.map((story,index) => (
              <Storycard key={index} story={story}  />
            ))}
          </div>
       </div>
    </div>
  )
}

export default Stories