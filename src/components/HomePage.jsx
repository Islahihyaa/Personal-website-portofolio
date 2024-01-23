import Photo from '../assets/img/Photo.png';

const HomePage = () => {
  return (
    <>
      <section className="pt-28 2xl:pt-60 2xl:mb-64">
            <div className='container'>
              <div className='justify-center mb-14 md:flex lg:px-4' >
                  <div className="mb-5 lg:mr-10">
                      <p className="text-base mb-2 md:text-2xl xl:text-3xl 2xl:text-4xl">Hello!👋 I'm</p>
                      <h1 className="text-3xl font-bold text-primary md:text-6xl xl:text-8xl 2xl:text-9xl">Islahihya <span>Muhammad</span></h1>
                      <p className="text-xl font-semibold mb-5 md:text-2xl xl:text-3xl 2xl:text-4xl">A Front End Developer</p>
                      <p className='mb-10 text-slate-700 md:text-2xl xl:text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus. Minus facere mollitia, soluta iure error id quisquam ad inventore!</p>
                      <button className="bg-primary text-white font-semibold text-base rounded-full shadow-lg mb-3 py-3 px-4 hover:bg-primary md:text-2xl xl:text-2xl ">Know More</button>
                  </div>
                  <div className='mb-3'>
                    <img src={Photo}  alt='MyPhoto' className=' max-w-full mx-auto'/>
                  </div>
              </div>
            </div>

      </section>
    </>

  )
}

export default HomePage