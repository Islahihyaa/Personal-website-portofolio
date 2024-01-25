import PhotoProjects from '../assets/img/PhotoProjects1.png'

const Portofolio = () => {
  return (
    <section className='flex justify-between w-full p-5 '>
      <div className='space-y-6 md:flex'>
        <div className=''>
          <h1 className='font-bold mb-5 md:text-xl xl:text-3xl 2xl:text-4xl'>MY PROJECTS</h1>
          <p className="mb-3 font-semibold">Laboratory Management Systems</p>
          <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, necessitatibus! Qui beatae temporibus adipisci, velit enim labore deserunt. Sit dolores non nam eum, ratione sed cupiditate facere? Commodi, maxime at?</p>
          <button className="bg-primary text-white font-bold rounded-full shadow-lg mb-3 px-4 py-2 hover:bg-[#39C0E4] ">View on Github</button>
        </div>
        <div>

          <div className='flex flex-col'>
            <img src={PhotoProjects} alt="Project1" className='mb-3 w-full' />
            <div className='flex flex-row space-x-2 w-full overflow-x-auto'>
              <img src={PhotoProjects} alt="Project1" className='w-1/3' />
              <img src={PhotoProjects} alt="Project1" className='w-1/3'/>
              <img src={PhotoProjects} alt="Project1" className='w-1/3'/>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Portofolio