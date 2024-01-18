import Photo from '../assets/img/photo-homepage.png';

const HomePage = () => {
  return (
    <>
      <section className="flex flex-col justify-between items-center p-20 sm:flex-row w-full">
          <div className='m-5 p-10' >
              <div className="ml-10 md:text-sm">
                  <p className="text-3xl mb-3">Hello , My Name</p>
                  <h1 className="text-9xl font-bold text-[#53CCEC]">Islahihya <br /> Muhammad</h1>
                  <p className="font-semibold text-6xl my-10">A Front End Developer</p>
                  <button className="bg-[#53CCEC] hover:bg-[#39C0E4] text-white font-bold py-2 px-4 rounded-xl text-2xl">KNOW MORE</button>
              </div>
          </div>
          <div className='flex items-center pr-20 pt-40'>
              <img src={Photo}  alt='MyPhoto' className=''/>
          </div>
      </section>
    </>

  )
}

export default HomePage