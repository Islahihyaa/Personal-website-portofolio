import Photo from '../assets/img/photo-homepage.png';

const About = () => {
  return (
    <section className="flex justify-between items-center p-20 ">
        <div className='p-5 mr-5'>
            <div className="ml-10 space-y-4">
                <p className="text-3xl">Hello, My Name Is</p>
                <h1 className="text-6xl font-bold text-[#53CCEC]">Islahihya <br /> Muhammad</h1>
                <p className="font-semibold text-3xl">A Front End Developer</p>
                <button className="bg-[#53CCEC] hover:bg-[#39C0E4] text-white font-bold py-2 px-4 rounded">KNOW MORE</button>
            </div>
        </div>
        <div className='w-1/2 p-5 mr-5'>
            <img src={Photo}  alt=''  className=''/>
        </div>
    </section>
  )
}

export default About