import { AiOutlineClose } from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true)
}

function closeMenu() {
    setToggle(false)
}

  return (
    <>
    <div className='bg-[#53CCEC]'>
        <div className="flex items-center justify-between text-lg">
            <div className='text-2xl text-white ssm:p-0 font-bold'>
                <a className=" ssm:hidden lg:block py-5 pl-20" href="#">Islahihya Muhammad</a>
                <a className=" ssm:block lg:hidden py-5 pl-5" href="#">Islahihya Muhammad</a>
            </div>
            <div className="px-5 ">
                <div className="ssm:hidden lg:block space-x-10 font-semibold">
                    <a href="/" className="hover:text-white hover:underline underline-offset-4 "> HOME </a>
                    <a href="/about" className="hover:text-white hover:underline underline-offset-4"> ABOUT </a>
                    <a href="/portofolio" className="hover:text-white hover:underline underline-offset-4"> PORTOFOLIO </a>
                    <a href="/contact" className="hover:text-white hover:underline underline-offset-4"> CONTACT </a>
                </div>
            </div>

            <div className='ssm:block lg:hidden px-5'>
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={20} className='text-white'/>
                    
                ):(<HiMenuAlt1 onClick={openMenu} size={20} className='text-white'/>)}
            </div>
        </div>

        <div className=''> 
            {toggle ? (
                <div className='pl-5 pb-2'>
                    <ul className='text-white font-semibold justify-between'>
                        <li className='cursor-pointer mb-2'><a href="/">HOME</a></li>
                        <li className='cursor-pointer mb-2'><a href="/about">ABOUT</a></li>
                        <li className='cursor-pointer mb-2'><a href="/portofolio">PORTOFOLIO</a></li>
                        <li className='cursor-pointer mb-2'><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            ):(
                <div></div>
            )}
        </div>

    </div>
    
   </> 
  )
}

export default NavbarComponent