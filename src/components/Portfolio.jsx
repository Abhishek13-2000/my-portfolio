import React from 'react'

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src="/1a.jpg" alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='w-full px-6 py-3 m-3 font-semibold duration-500 hover:scale-105'>Social Media Website</p>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src="/1b.jpg" alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='w-full px-6 py-3 m-3 font-semibold duration-500 hover:scale-105'>Ochi UI Clone</p>
                        
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src="/1c.jpg" alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='w-full px-6 py-3 m-3 font-semibold duration-500 hover:scale-105'>e-Commerce Website</p>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src="/1d.jpg" alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='w-full px-6 py-3 m-3 font-semibold duration-500 hover:scale-105'>Netflix UI Clone</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio