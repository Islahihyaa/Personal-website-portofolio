import { AiOutlineClose } from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-scroll';

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
    <nav className='bg-primary fixed w-full mb-10'>
        <div className='py-5 px-4 flex items-center justify-between lg:px-20'>
            <a className="text-xl text-white font-bold lg:px-5" href="#">
                Islahihya Muhammad
            </a>

            <ul className='items-center gap-x-6 text-[18px] left-0 top-24 flex-row hidden md:flex '>
                <li href="/" className="hover:text-white cursor-pointer"> 
                    <Link 
                        to="home" 
                        smooth={true} 
                        duration={500}
                        >Home
                    </Link>
                </li>
                <li href="/about" className="hover:text-white cursor-pointer">
                    <Link 
                        to="about" 
                        smooth={true} 
                        duration={500}
                        >About
                    </Link>
                </li>
                <li href="/skills" className="hover:text-white cursor-pointer">
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={500}
                        >Skills
                    </Link>
                </li>
                <li href="/portofolio" className="hover:text-white cursor-pointer">
                    <Link 
                        to="portofolio" 
                        smooth={true} 
                        duration={500}
                        >Portofolio
                    </Link>
                </li>
                <li href="/contact" className="hover:text-white cursor-pointer">
                    <Link 
                        to="contact" 
                        smooth={true} 
                        duration={500}
                        >Contact
                    </Link>
                </li>
            </ul>

            <div className='md:hidden px-5'>
                {toggle ? (
                    <AiOutlineClose onClick={closeMenu} size={20} className='text-white'/>
                    
                ):(<HiMenuAlt1 onClick={openMenu} size={20} className='text-white'/>)}
            </div>
        </div>

            {toggle ? (
                <ul className='text-white font-semibold justify-between w-full flex-col flex items-center'>
                    <li href="/" className='cursor-pointer mb-5'>HOME</li>
                    <li href="/about" className='cursor-pointer mb-5'>ABOUT</li>
                    <li href="/skills" className='cursor-pointer mb-5'>SKILL</li>
                    <li href="/portofolio" className='cursor-pointer mb-5'>PORTOFOLIO</li>
                    <li href="/contact" className='cursor-pointer mb-5'>CONTACT</li>
                </ul>
            ):(
                <div></div>
            )}
        </nav>
   </> 
  )
}

export default NavbarComponent