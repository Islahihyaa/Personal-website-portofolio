import { AiOutlineClose } from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';

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
    <nav className='bg-primary fixed w-full  px-2 mb-10'>
        <div className='py-5 px-4 flex items-center justify-between'>
            <a className="text-xl text-white font-bold px-5" href="#">
                Islahihya Muhammad
            </a>

            <ul className='items-center gap-x-6 text-[18px] left-0 top-24 flex-row hidden md:flex '>
                <li href="/" className="hover:text-white cursor-pointer"> Home </li>
                <li href="/about" className="hover:text-white cursor-pointer"> About </li>
                <li href="/portofolio" className="hover:text-white cursor-pointer"> Portofolio </li>
                <li href="/contact" className="hover:text-white cursor-pointer"> Contact </li>
                <div className='opacity-50'>|</div>
                <i className='logo'>logo</i>
            </ul>

            <div className='md:hidden px-5'>
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={20} className='text-white'/>
                    
                ):(<HiMenuAlt1 onClick={openMenu} size={20} className='text-white'/>)}
            </div>
        </div>

            {toggle ? (
                <ul className='text-white font-semibold justify-between w-full flex-col flex items-center'>
                    <li className='cursor-pointer mb-5'><a href="/">HOME</a></li>
                    <li className='cursor-pointer mb-5'><a href="/about">ABOUT</a></li>
                    <li className='cursor-pointer mb-5'><a href="/portofolio">PORTOFOLIO</a></li>
                    <li className='cursor-pointer mb-5'><a href="/contact">CONTACT</a></li>
                </ul>
            ):(
                <div></div>
            )}
        



        </nav>



   </> 
  )
}

export default NavbarComponent