import Photo from '../assets/img/photo-homepage.png';

const About = () => {
  return (
    <section className='flex justify-between w-full p-5'>
      <div className='space-y-6'>
        <div className='hidden'>
            <img src={Photo}  alt='' className=''/>
        </div>
        <div className=''>
          <h1 className='font-bold mb-5'>ABOUT ME</h1>
          <p className='mb-3'>Hi There! I'm <span className='text-[#53CCEC]'>Islahihya 👋</span></p>
          <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ullam recusandae commodi nesciunt possimus hic enim magni esse quibusdam a nihil sequi reiciendis debitis labore provident, rem pariatur laudantium consequatur.</p>
          <button className="bg-[#53CCEC] text-white font-bold rounded-lg shadow-lg mb-3 p-3 hover:bg-[#39C0E4]">Download CV</button>
        </div>
      </div>
    </section>
  )
}

export default About