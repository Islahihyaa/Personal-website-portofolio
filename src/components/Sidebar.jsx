
const Sidebar = () => {
  return (
    <section className="bg-slate-400 fixed bottom-0 hidden 2xl:block">
        <div className=" absolute bottom-0 left-0 px-12 py-8">
            <div className="flex flex-col space-y-5">
                <a href="" className="bg-white border shadow-lg rounded-full px-6 py-4 ">1</a>
                <a href="" className="bg-white border shadow-lg rounded-full px-6 py-4">2</a>
                <a href="" className="bg-white border shadow-lg rounded-full px-6 py-4">3</a>
                <a href="" className="bg-white border shadow-lg rounded-full px-6 py-4">4</a>
            </div>
        </div>
    </section>
  )
}

export default Sidebar