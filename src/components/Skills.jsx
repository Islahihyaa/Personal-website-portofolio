import React from 'react'
import html from '../assets/img/html.png'

const Skills = () => {
  return (
    <section name='skills' className='w-full h-screen'>
        <div className="container p-10 flex flex-col justify-center h-full">
            <div className='mb-10'>
                <h1 className='uppercase font-bold text-primary mb-5 md:text-xl xl:text-3xl xl:mb-10 2xl:text-4xl'>my skills</h1>
                <p className='text-slate-700 md:text-2xl'> // There's some my skills</p>
            </div>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-9 text-center'>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
                <div className='bg-secondary shadow-xl p-5 rounded-md'>
                    <img src={html} alt="html icons" className='w-20 mx-auto'/>
                    <p className='font-semibold  text-lg mt-4'>HTML</p>
                </div>
            </div>
        </div>

        
    </section>
  )
}

export default Skills