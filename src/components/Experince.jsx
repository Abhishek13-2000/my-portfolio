import React from 'react'

const Experince = () => {
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've Worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                    <img className='w-20 mx-auto' src="/html.png" alt="" />
                    <p className='mt-4'>HTML</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img className='w-20 mx-auto' src="/css.png" alt="" />
                    <p className='mt-4'>CSS</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg  shadow-yellow-500'>
                    <img className='w-20 mx-auto' src="/javascript.png" alt="" />
                    <p className='mt-4'>JavaScript</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img className='w-20 mx-auto' src="/react.png" alt="" />
                    <p className='mt-4'>React.Js</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500'>
                    <img className='w-20 mx-auto' src="/node.png" alt="" />
                    <p className='mt-4'>Node.Js</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-300'>
                    <img className='w-20 mx-auto' src="/tailwind.png" alt="" />
                    <p className='mt-4'>Tailwind</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500'>
                    <img className='w-20 mx-auto' src="/figma.png" alt="" />
                    <p className='mt-4'>Figma</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500'>
                    <img className='w-20 mx-auto' src="/git.png" alt="" />
                    <p className='mt-4'>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experince