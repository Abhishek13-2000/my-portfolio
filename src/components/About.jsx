import React from 'react'

const About = () => {
  return (
   <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Hello! I'm Abhishek Aich, a passionate web developer dedicated to crafting beautiful, user-friendly, and high-performing websites. With a strong background in both front-end and back-end development, I transform ideas into digital reality through innovative design and robust coding. I'm always excited to take on new challenges and collaborate with like-minded individuals and businesses. 
        </p>
        <br />

        <p className='text-xl'>
        Education qualification : I pursued Bachelor degree of Information Technology from B.Borooah College, Guwahati and Master degree of Computer Applications from Cotton University, Guwahati.
        </p>
    </div>
   </div>
  )
}

export default About