import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll"
const Hero = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I love to work on web applications using technologies like React, Javascript, Tailwind CSS. As a fresher, I am eager to bring innovative ideas and contribute to dynamic projects while continuously learning and growing in the field.
                    Email_id: zxabhishek1@gmail.com
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={25}/></span>
                    </Link>
                </div>
            </div>
            <div className='w-96 '>
                <img src="/heroimage.JPG" className='rounded-2xl mx-auto w-2/3 md:w-full object-cover' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero