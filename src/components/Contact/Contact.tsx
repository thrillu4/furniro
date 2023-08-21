import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs"
import { MdAccessTimeFilled, MdNavigateNext } from "react-icons/md"
import { animation } from "../../utils/animation"
import Recommended from "../Recommended/Recommended"

const Contact = () => {
  return (
    <section className="contacts-page">
      <Helmet>
        <meta
          name="description"
          content="Contact page - Get In Touch With Us
          For More Information About Our Product & Services."
        />
        <title>Contact Page</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="mt-8 rounded-[10px] bg-shop py-14 pt-16 md:rounded-none md:pb-28 md:pt-16"
      >
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          className="mx-auto my-0 mb-3 block "
          src="images/main-logo.png"
          alt="logo"
        />
        <h1 className="text-center text-2xl font-semibold md:text-5xl">
          Contact
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="mt-1 flex items-center justify-center gap-2"
        >
          <motion.div variants={animation} className="font-semibold">
            Home
          </motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext />
          </motion.div>
          <motion.div variants={animation} custom={0.4}>
            Contact
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="py-[20px] md:pb-16 md:pt-24">
        <h3 className="text-center text-2xl font-semibold md:text-4xl">
          Get In Touch With Us
        </h3>
        <p className="mt-2 text-center text-xs text-gray-400 md:text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4 }}
          className="mt-8 flex flex-col justify-center gap-8 md:mt-16 md:flex-row"
        >
          <motion.div
            variants={animation}
            animate={{ x: 200 }}
            className="contact-info flex flex-col gap-10 px-[25px] md:px-16"
          >
            <div className="flex gap-7">
              <BsFillGeoAltFill size="22" />
              <div>
                <div className="font-semibold md:text-2xl">Address</div>
                <p className="text-sm md:text-base">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                  States
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <BsFillTelephoneFill size="22" />
              <div>
                <div className="font-semibold md:text-2xl">Phone</div>
                <p className="text-sm md:text-base">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-7">
              <MdAccessTimeFilled size="22" />
              <div>
                <div className="font-semibold md:text-2xl">Working Time</div>
                <p className="text-sm md:text-base">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                  21:00{" "}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.form
            variants={animation}
            method="post"
            className="flex flex-col px-2 md:w-[527px] md:px-14"
          >
            <label htmlFor="name" className="mb-6 font-semibold">
              Your name
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 transition-all duration-200 hover:border-black"
              minLength={3}
              type="text"
              name="name"
              id="name"
              placeholder="Alex"
              required
            />
            <label htmlFor="email" className="mb-6 font-semibold">
              Email address
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 transition-all duration-200 hover:border-black"
              type="email"
              name="email"
              id="email"
              placeholder="Email-name@gmail.com"
              required
            />
            <label htmlFor="subject" className="mb-6 font-semibold">
              Subject
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 transition-all duration-200 hover:border-black"
              type="text"
              name="subject"
              id="subject"
              placeholder="This is an optional"
            />
            <label htmlFor="message" className="mb-6 font-semibold">
              Message
            </label>
            <textarea
              className="mb-14 h-32 resize-none rounded-xl border border-gray-500 px-7 py-6 transition-all duration-200 hover:border-black"
              name="message"
              id="message"
              placeholder="Hi! i'd like to ask about"
            />
            <button
              className="rounded border bg-orange-400 py-4 text-white transition-all duration-200 hover:border-orange-400 hover:bg-white hover:text-orange-400 md:w-[240px]"
              type="submit"
            >
              Submit
            </button>
          </motion.form>
        </motion.div>
      </div>
      <Recommended />
    </section>
  )
}

export default Contact
