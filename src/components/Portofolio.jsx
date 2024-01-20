import PhotoProjects from '../assets/img/PhotoProjects1.png'

const Portofolio = () => {
  return (
    <section className='flex justify-between w-full p-5'>
    <div className='space-y-6'>
      <div className=''>
        <h1 className='text-xl font-bold mb-5'>My Projects</h1>
        <p className="mb-3 font-semibold">Laboratory Management Systems</p>
        <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, necessitatibus! Qui beatae temporibus adipisci, velit enim labore deserunt. Sit dolores non nam eum, ratione sed cupiditate facere? Commodi, maxime at?</p>
        <button className="bg-[#53CCEC] text-white font-bold rounded-full shadow-lg mb-3 px-4 py-2 hover:bg-[#39C0E4] ">View on Github</button>
      </div>
      <div>
        <div className='m-3 '>
          <img src={PhotoProjects} alt="Project1" className='mb-3'/>
          <div className='overflow-x-auto'>
            <div className='flex flex-row w-32  bg-slate-400 space-x-2 '  >
              <img src={PhotoProjects} alt="Project1" className='' />
              <img src={PhotoProjects} alt="Project1" className=''/>
              <img src={PhotoProjects} alt="Project1" className=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portofolio