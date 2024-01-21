import Photo from '../assets/img/Photo.png';

const About = () => {
  return (
    <section className='bg-secondary flex justify-between w-full p-5'>
      <div className='space-y-6 md:flex space-x-10'>
        <div className='hidden md:block'>
            <img src={Photo}  alt='MyPhoro' className=''/>
        </div>
        <div className='mb-3'>
          <h1 className='font-bold mb-5 md:text-xl xl:text-3xl 2xl:text-4xl'>ABOUT ME</h1>
          <p className='mb-3 md:text-xl xl:text-3xl 2xl:text-4xl'>Hi There! I'm <span className='text-[#53CCEC]'>Islahihya 👋</span></p>
          <p className='mb-3 md:text-xl xl:text-3xl text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ullam recusandae commodi nesciunt possimus hic enim magni esse quibusdam a nihil sequi reiciendis debitis labore provident, rem pariatur laudantium consequatur.</p>
          <button className="bg-[#53CCEC] text-white font-bold rounded-lg shadow-lg mb-3 p-3 hover:bg-[#39C0E4]">Download CV</button>
        </div>
      </div>
    </section>
  )
}

export default About