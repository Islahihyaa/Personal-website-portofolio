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
    <div className="bg-[url('/src/assets/img/bg-navbar.png')] bg-cover flex items-center justify-between py-10 px-10 text-lg">
        <div>
            <a className="pl-20 text-2xl text-[#53CCEC] ssm:p-0" href="#">Islahihya Muhammad</a>
        </div>
        <div className="pr-20 space-x-5 ">
            <div className="ssm:hidden lg:block space-x-2">
                <a href="/" className="hover:text-[#53CCEC] hover:underline underline-offset-4 "> HOME </a>
                <a href="/about" className="hover:text-[#53CCEC] hover:underline underline-offset-4"> ABOUT </a>
                <a href="/portofolio" className="hover:text-[#53CCEC] hover:underline underline-offset-4"> PORTOFOLIO </a>
                <a href="/contact" className="hover:text-[#53CCEC] hover:underline underline-offset-4"> CONTACT </a>
            </div>
        </div>
        <div className='ssm:block lg:hidden'>
            {toggle ? (
                <AiOutlineClose onClick={closeMenu} size={20} className='text-[#53CCEC]'/>
                
                
            ):(<HiMenuAlt1 onClick={openMenu} size={20} className='text-[#53CCEC]'/>)}
        </div>
    </div>
    <div className="ssm:block lg:hidden bg-[url('/src/assets/img/bg-navbar.png')]">
        {toggle ? (
            <div className='flex justify-between ml-10'>
                <ul className='text-[#53CCEC] '>
                    <li className='cursor-pointer'>HOME</li>
                    <li className='cursor-pointer'>ABOUT</li>
                    <li className='cursor-pointer'>PORTOFOLIO</li>
                    <li className='cursor-pointer'>CONTACT</li>
                </ul>
            </div>
        ):(
            <div></div>
        )}

    </div>
    
   </> 
  )
}

export default NavbarComponent