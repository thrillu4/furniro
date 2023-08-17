import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import { motion } from "framer-motion"
import { animation } from "../../utils/animation"

const Footer = () => {
  return (
    <motion.footer initial='hidden' whileInView='visible' viewport={{amount: 0.3}} className="footer flex md:py-11 justify-evenly md:gap-[70px] lg:max-2xl:gap-0 gap-10">
      <motion.div variants={animation} custom={2} className="first-colon text-[10px] md:text-base">
        <div className="md:text-2xl font-bold mb-12">Furniro.</div>
        <p className="text-gray-400 mb-20 md:mb-60">400 University Drive Suite 200 Coral<br/> Gables,<br/>
        FL 33134 USA</p>
        <div>2023 furniro. All rights reverved</div>
      </motion.div>
      <motion.ul variants={animation} custom={3} className="second-colon text-[10px] md:text-base md:font-medium flex flex-col md:gap-11 gap-6"><div className="text-gray-400">Links</div>
      <li className="hover:scale-105 duration-200"><Link to={ROUTES.HOME}>Home</Link></li>
        <li className="hover:scale-105 duration-200"><Link to={ROUTES.SHOP}>Shop</Link></li>
        <li className="hover:scale-105 duration-200"><Link to={ROUTES.BLOG}>Blog</Link></li>
        <li className="hover:scale-105 duration-200"><Link to={ROUTES.CONTACT}>Contact</Link></li>
      </motion.ul>
      <motion.ul variants={animation} custom={4} className="third-colon text-[10px]  md:text-base md:font-medium flex flex-col md:gap-11 gap-6"><div className="text-gray-400">Help</div>
      <li className="hover:scale-105 duration-200"><Link to={ROUTES.CONTACT}>Payment Options</Link></li>
      <li className="hover:scale-105 duration-200"><Link to={ROUTES.CONTACT}>Returns</Link></li>
      <li className="hover:scale-105 duration-200"><Link to={ROUTES.PrivacyPolicies}>Privacy Policies</Link></li>
      </motion.ul>
      <motion.div variants={animation} custom={5} className="fourth-colon hidden text-gray-400 md:flex flex-col gap-11">Newsletter
        <div>
        <input className="hover:scale-105 duration-200 underline md:text-base text-[10px] p-1 text-black underline-offset-4" type="email" name="email" id="email" placeholder="Enter Your Email Address"/>
        <button type="submit" className="underline hover:scale-105 duration-200 text-black underline-offset-4 ml-8 font-medium">SUBSCRIBE</button>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer