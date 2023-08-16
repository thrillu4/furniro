import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs"
import { MdAccessTimeFilled, MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended"
import { motion } from 'framer-motion';
import { animation } from "../../utils/animation";

const Contact = () => {
  return (
    <section  className="contacts-page">
      <motion.div initial={{opacity: 0 }} animate={{opacity: 1, transition: {duration: .5}}} className='bg-shop pt-16 md:pt-16 py-14 rounded-[10px] md:rounded-none md:pb-28 mt-8'>
        <motion.img initial={{y: -100}} animate={{y: 0, transition: {duration: .5}}}  className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-2xl md:text-5xl font-semibold'>Contact</h1>
        <motion.div initial='hidden'
        whileInView='visible' className='flex items-center mt-1 gap-2 justify-center'>
          <motion.div variants={animation} className='font-semibold'>Home</motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext/>
          </motion.div>
          <motion.div variants={animation} custom={0.4}>Contact</motion.div>
        </motion.div>
      </motion.div>
      <div className="md:pt-24 md:pb-16 py-[20px]">
        <h3 className="font-semibold text-2xl md:text-4xl text-center">Get In Touch With Us</h3>
        <p className="text-gray-400 text-xs md:text-base mt-2 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <motion.div initial='hidden'
        whileInView='visible' viewport={{amount: 0.4}} className="flex justify-center flex-col md:flex-row gap-8 mt-8 md:mt-16">
          <motion.div variants={animation} animate={{x: 200}} className="contact-info flex flex-col gap-10 px-[25px] md:px-16">
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
          </motion.div>
          <motion.form variants={animation} method="post" className="flex flex-col md:w-[527px] px-2 md:px-14">
            <label htmlFor='name' className="font-semibold mb-6">Your name</label>
            <input className="hover:border-black transition-all duration-200 mb-9 border rounded-xl border-gray-500 py-6 px-7" minLength={3} type="text" name="name" id="name" placeholder="Alex" required/>
            <label htmlFor='email' className="font-semibold mb-6">Email address</label>
            <input className="hover:border-black transition-all duration-200 mb-9 border rounded-xl border-gray-500 py-6 px-7" type="email" name="email" id="email" placeholder="Email-name@gmail.com" required/>
            <label htmlFor='subject' className="font-semibold mb-6">Subject</label>
            <input className="hover:border-black transition-all duration-200 mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="subject" id="subject" placeholder="This is an optional"/>
            <label htmlFor='message' className="font-semibold mb-6">Message</label>
            <textarea className="hover:border-black transition-all duration-200 mb-14 resize-none py-6 px-7 border rounded-xl border-gray-500 h-32" name="message" id="message" placeholder="Hi! i'd like to ask about"/>
            <button className="md:w-[240px] text-white py-4 border bg-orange-400 rounded hover:bg-white hover:border-orange-400 hover:text-orange-400 transition-all duration-200" type="submit">Submit</button>
          </motion.form>
        </motion.div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Contact