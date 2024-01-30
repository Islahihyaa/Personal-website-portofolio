import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="pt-40">
      <div className="bg-secondary rounded-t-full">
        <div>
          <h1 className="uppercase text-center text-xl font-bold py-6 text-primary xl:text-3xl 2xl:text-4xl">contact</h1>
        </div>
      </div>

      <div className="bg-secondary px-5 ">
        <div className="container">
          <div className="lg:flex justify-between pb-10 ">
            <div className="mb-10">
              <div className="mb-6">
                <h2 className="font-semibold text-primary text-lg mb-2">Drop Me a Message</h2>
                <p className="text-lg text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, harum animi. A beatae libero facere deleniti perspiciatis porro dolor eaque.</p>
              </div>

              <div className="px-5">
                <div className="flex gap-5 flex-row items-center mb-2">
                  <div className="bg-primary p-3 rounded-xl">
                    <BsTelephone className="w-5 h-5"/>
                  </div>
                  <p>088215419786</p>
                </div>
                <div className="flex gap-5 flex-row items-center mb-2">
                  <div className="bg-primary p-3 rounded-xl">
                    <MdOutlineEmail className="w-5 h-5"/>
                  </div>
                  <p>islahihyaa@gmail.com</p>
                </div>
                <div className="flex gap-5 flex-row items-center mb-2">
                  <div className="bg-primary p-3 rounded-xl">
                    <IoLocationOutline className="w-5 h-5"/>
                  </div>
                  <p>Bandung, West Java</p>
                </div>
              </div>
            </div>

            <div className="bg-primary p-4 flex-col rounded-lg shadow-lg">
              <input type="text" placeholder="Name" className="mb-2 rounded-lg w-full h-10 px-6"/>
              <input type="text" placeholder="Email" className="mb-2 rounded-lg w-full h-10 px-6"/>
              <textarea name="message" id="message" placeholder="Message" cols="40" rows="10" className="mb-2 rounded-lg w-full px-6 py-2" ></textarea>
              <button type="submit" className="rounded-full bg-blue-400 py-2 px-4 font-semibold shadow-xl">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact