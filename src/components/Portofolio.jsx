import PhotoProjects from '../assets/img/PhotoProjects1.png'


const Portofolio = () => {
  return (
    <section className='bg-secondary pt-10'>
      <div className='container p-10 flex flex-col justify-center h-full'>
        <div className=''>
            <h1 className='uppercase font-bold text-primary mb-5 md:text-xl xl:text-3xl xl:mb-10 2xl:text-4xl'>my portofolios</h1>
        </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9 text-center'>

            <div style={{ backgroundImage: `url(${PhotoProjects})` }}
             className="shadow-xl rounded-md content-div flex flex-col justify-end">
              <div className='bg-white rounded-tl-3xl p-5 text-left'>
                <h1>Laboratory Management Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${PhotoProjects})` }}
             className="shadow-xl rounded-md content-div flex flex-col justify-end">
              <div className='bg-white rounded-tl-3xl p-5 text-left'>
                <h1>Laboratory Management Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${PhotoProjects})` }}
             className="shadow-xl rounded-md content-div flex flex-col justify-end">
              <div className='bg-white rounded-tl-3xl p-5 text-left'>
                <h1>Laboratory Management Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${PhotoProjects})` }}
             className="shadow-xl rounded-md content-div flex flex-col justify-end">
              <div className='bg-white rounded-tl-3xl p-5 text-left'>
                <h1>Laboratory Management Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div style={{ backgroundImage: `url(${PhotoProjects})` }}
             className="shadow-xl rounded-md content-div flex flex-col justify-end">
              <div className='bg-white rounded-tl-3xl p-5 text-left'>
                <h1>Laboratory Management Systems</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          
      </div>

    </section>
  )
}

export default Portofolio