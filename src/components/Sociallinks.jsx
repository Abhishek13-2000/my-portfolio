import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Sociallinks = () => {
  
  const links  = [
    {
      id: 1,
      child : (<>Linkedin<FaLinkedin size={30}/></>),
      href: "https://www.linkedin.com/in/abhishek-aich-7737981ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwZXh0bgNhZW0CMTAAAR397j86t8pPTt_uldQ5i_jXVJ_uhLAK7c2mK4NkKyVui3tduzu14KlMzss_aem_AZUoXnW2r5V2B0lS6cUIRo3HtiJu93awofEKwi0XU1aBE2tZSJ-90EKAHSnx5c4mHD5CCtZvdKA2QeI09p1akZgq&original_referer=https%3A%2F%2Fl.facebook.com%2F",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child : (<>Github<FaGithub size={30}/></>),
      href: "https://github.com/Abhishek13-2000",
    },
    {
      id: 3,
      child : (<>Gmail<HiOutlineMail size={30}/></>),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child : (<>Resume<BsFillPersonLinesFill size={30}/></>),
      href: "/Resume_abhishek.pdf",
      style: "rounded-br-md",
      download: true
    },
    
  ]

  return (
    <>
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

          {links.map(({id, child, href, style, download}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                <a className='flex justify-between items-center w-full text-white' href={href} download={download} target='-blank' rel='noreferrer'>{child}</a>
            </li>
          ))}

            
        </ul>
    </div>
    </>
  )
}

export default Sociallinks