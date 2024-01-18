import Photo from '../assets/img/photo-homepage.png';

const About = () => {
  return (
    <section className='flex justify-between w-full p-20'>
        <div className='w-2/5 p-10 items-center'>
            <img src={Photo}  alt='' className=''/>
        </div>
        <div>
          <div className='text-left'>
            <p>ABOUT ME</p>
            <h1>Hi There! I'm Islahihya</h1>
            <p>I am Jane Alom a professional website designer and developer. I design WordPress & Shopify Websites. In 2020, I began my freelance job as a web designer. As a freelancer, I completed 80+ projects in 20+ countries & 50+ clients at various marketplaces. I have good communication skills and have a team also</p>
            <button className="bg-[#53CCEC] hover:bg-[#39C0E4] text-white font-bold py-2 px-4 rounded-xl text-2xl">Download CV</button>
          </div>
        </div>
    </section>
  )
}

export default About