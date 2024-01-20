import Photo from '../assets/img/photo-homepage.png';
import PhotoProjects from '../assets/img/PhotoProjects1.png'

const HomePage = () => {
  return (
    <>
      <section className="flex pt-28 px-5 mb-6 w-full justify-center">
            <div className='container 2xl:flex-col'>
              <div className='md:px-28 lg:px-32 lg:flex xl:space-x-4 mb-14' >
                  <div className="xl:p-6">
                      <p className="text-xl mb-3 xl:text-3xl 2xl:text-4xl">Hello! My Name</p>
                      <h1 className=" text-6xl font-bold text-[#53CCEC] mb-3 xl:text-8xl 2xl:text-9xl">Islahihya <br />Muhammad</h1>
                      <p className="text-xl font-semibold mb-5 xl:text-3xl 2xl:text-4xl">A Front End Developer</p>
                      <button className="bg-[#53CCEC] text-white font-bold rounded-xl shadow-lg mb-3 p-3 hover:bg-[#39C0E4] xl:text-2xl ">KNOW MORE</button>
                  </div>
                  <div className=''>
                    <img src={PhotoProjects}  alt='MyPhoto' className='w-full'/>
                  </div>
              </div>
            </div>

      </section>
    </>

  )
}

export default HomePage