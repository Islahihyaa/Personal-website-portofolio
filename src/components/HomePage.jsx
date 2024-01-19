import Photo from '../assets/img/photo-homepage.png';

const HomePage = () => {
  return (
    <>
      <section className=" pt-28 px-5 mb-6">
          <div className='space-y-16' >
              <div className="md:text-sm">
                  <p className="text-xl mb-3">Hello! My Name</p>
                  <h1 className=" text-6xl font-bold text-[#53CCEC] mb-3">Islahihya Muhammad</h1>
                  <p className="text-xl font-semibold mb-5">A Front End Developer</p>
                  <button className="bg-[#53CCEC] text-white font-bold rounded-xl shadow-lg mb-3 p-3 hover:bg-[#39C0E4] ">KNOW MORE</button>
              </div>
              <div className='p-4 '>
                <img src={Photo}  alt='MyPhoto' className=''/>
              </div>
          </div>
          <div className='hidden'>
            Scroll Down For more!
          </div>

      </section>
    </>

  )
}

export default HomePage