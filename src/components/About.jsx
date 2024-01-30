import Photo from '../assets/img/Photo.png';

const About = () => {
  return (
    <section name='about' className='bg-secondary py-40'>
      <div className="container">
        <div className='flex lg:px-10 lg:space-x-10'>
          <div className='hidden lg:flex justify-center'>
              <img src={Photo}  alt='MyPhoto' className='w-[500px]'/>
          </div>
          <div className='w-full lg:mr-10'>
            <h1 className='font-bold text-primary mb-5 md:text-xl xl:text-3xl xl:mb-10 2xl:text-4xl'>ABOUT ME</h1>
            <p className='mb-5 md:text-xl xl:text-3xl 2xl:text-4xl'>Hi There! I'm <span className='text-primary'>Islahihya 👋</span></p>
            <p className='mb-5 text-slate-400 md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ullam recusandae commodi nesciunt possimus hic enim magni esse quibusdam a nihil sequi reiciendis debitis labore provident, rem pariatur laudantium consequatur.</p>
            <button className="bg-primary text-white p-3 font-bold rounded-lg shadow-lg lg:p-4 lg:text-2xl hover:bg-primary">Download CV</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About