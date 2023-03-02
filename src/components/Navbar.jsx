import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [show, setShow] = React.useState(false)
  return (
    <nav className='relative flex items-center justify-between p-6 '>
        <div className='text-3xl font-extrabold'>M</div>
        <div className='flex items-center'>
            <ul className='items-center hidden gap-5 md:flex'>
            {['Sample', 'Features', 'Layouts', 'Our Shop', 'But Theme'].map((item, index) => (
                    <li className='cursor-pointer' key={index}>{item}</li>
                ))}
                <li className='cursor-pointer'><AiOutlineSearch /></li>
            </ul>
            <GiHamburgerMenu onClick={()=>setShow(!show)} size={30} className='md:hidden' />
        </div>
        {/* Mobile Menu */}
        {show && (
            <div className='fixed top-0 left-0 z-20 flex flex-col w-screen h-screen p-4 overflow-hidden bg-white md:hidden '>
            <div className='flex justify-end w-full'>
                <AiOutlineClose onClick={()=>setShow(!show)} size={30} className='' />
            </div>
            
            <ul className='flex flex-col items-center justify-center h-full gap-10'>
                {['Sample', 'Features', 'Layouts', 'Our Shop', 'But Theme'].map((item, index) => (
                    <li className='cursor-pointer' key={index}>{item}</li>
                ))}
                <li className='cursor-pointer'><AiOutlineSearch /></li>
            </ul>
        </div>)
            }
    </nav>
  )
}

export default Navbar