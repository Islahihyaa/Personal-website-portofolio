import PhotoProjects from '../assets/img/PhotoProjects1.png'

const Portofolio = () => {
  return (
    <section className='bg-secondary pt-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <h1 className='font-bold text-primary mb-10'>MY PORTOFOLIO</h1>
        <div className='grid grid-cols-1 md:grid-rows-3 gap-3'>

        <div className='relative mb-5'>
          <img src={PhotoProjects} alt="" className=''/>
          <div className='bg-white rounded-tl-3xl p-5 absolute bottom-0 '>
            <h1>Laboratory Management Systems</h1>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias aliquam deleniti asperiores temporibus. Officiis provident sunt voluptas eligendi vitae possimus.</p>
          </div>
        </div>

        </div>
      </div>

    </section>
  )
}

export default Portofolio