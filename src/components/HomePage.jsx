import Photo from '../assets/img/Photo.png';

const HomePage = () => {
  return (
    <>
      <section name='home' className="pt-28 2xl:p-60">
            <div className='container'>
              <div className='justify-between mb-14 lg:flex lg:px-4 lg:gap-10'>
                  <div className="mb-5">
                      <p className="text-base mb-5 md:text-2xl xl:text-3xl 2xl:text-3xl">Hello!👋 I'm</p>
                      <h1 className="text-3xl font-bold text-primary mb-3 md:text-5xl xl:text-6xl xl:max-w-xl 2xl:text-7xl">Islahihya <span>Muhammad</span></h1>
                      <p className="text-xl font-semibold mb-5 md:text-2xl xl:text-3xl 2xl:text-3xl">A Frontend Web Developer</p>
                      <p className='mb-10 text-slate-400 md:text-2xl max-w-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum officia, odit blanditiis dolore omnis tempore! Modi obcaecati, fuga, quibusdam perspiciatis, voluptas maiores eligendi corrupti asperiores placeat sit accusamus cum?</p>
                      <button className="bg-primary text-white font-semibold text-base rounded-full shadow-lg mb-3 py-3 px-4 hover:bg-primary md:text-2xl xl:text-2xl ">Know More</button>
                  </div>
                  <div className='mb-3 flex justify-center'>
                    <img src={Photo}  alt='MyPhoto' className='object-cover w-[500px] '/>
                  </div>
              </div>
            </div>

      </section>
    </>

  )
}

export default HomePage