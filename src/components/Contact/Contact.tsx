import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs"
import { MdAccessTimeFilled, MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended"

const Contact = () => {
  return (
    <section className="contacts-page">
      <div className='bg-shop pt-16 md:pt-16 py-14 rounded-[10px] md:rounded-none md:pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-2xl md:text-5xl font-semibold'>Contact</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Contact</div>
        </div>
      </div>
      <div className="md:pt-24 md:pb-16 py-[20px]">
        <h3 className="font-semibold text-2xl md:text-4xl text-center">Get In Touch With Us</h3>
        <p className="text-gray-400 text-xs md:text-base mt-2 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <div className="flex justify-center flex-col md:flex-row gap-8 mt-8 md:mt-16">
          <div className="contact-info flex flex-col gap-10 px-[25px] md:px-16">
            <div className="flex gap-7">
              <BsFillGeoAltFill size='22'/>
              <div>
                <div className="md:text-2xl font-semibold">Address</div>
                <p className="text-sm md:text-base">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
              </div>
            </div>
            <div className="flex gap-7">
              <BsFillTelephoneFill size='22'/>
              <div>
                <div className="md:text-2xl font-semibold">Phone</div>
                <p className="text-sm md:text-base">Mobile: +(84) 546-6789<br /> 
                  Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-7">
              <MdAccessTimeFilled size='22'/>
              <div>
                <div className="md:text-2xl font-semibold">Working Time</div>
                <p className="text-sm md:text-base">Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00 </p>
              </div>
            </div>
          </div>
          <form method="post" className="flex flex-col md:w-[527px] px-2 md:px-14">
            <label htmlFor='name' className="font-semibold mb-6">Your name</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" minLength={3} type="text" name="name" id="name" placeholder="Alex" required/>
            <label htmlFor='email' className="font-semibold mb-6">Email address</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="email" name="email" id="email" placeholder="Email-name@gmail.com" required/>
            <label htmlFor='subject' className="font-semibold mb-6">Subject</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="subject" id="subject" placeholder="This is an optional"/>
            <label htmlFor='message' className="font-semibold mb-6">Message</label>
            <textarea className="mb-14 resize-none py-6 px-7 border rounded-xl border-gray-500 h-32" name="message" id="message" placeholder="Hi! i'd like to ask about"/>
            <button className="md:w-[240px] text-white py-4 bg-orange-400 rounded hover:bg-orange-300" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Contact