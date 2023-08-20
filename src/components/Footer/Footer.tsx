import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { animation } from "../../utils/animation";
import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className="footer lg:max-2xl:gap-0 flex justify-evenly gap-10 md:gap-[70px] md:py-11"
    >
      <motion.div
        variants={animation}
        custom={2}
        className="first-colon text-[10px] md:text-base"
      >
        <div className="mb-12 font-bold md:text-2xl">Furniro.</div>
        <p className="mb-20 text-gray-400 md:mb-60">
          400 University Drive Suite 200 Coral
          <br /> Gables,
          <br />
          FL 33134 USA
        </p>
        <div>2023 furniro. All rights reverved</div>
      </motion.div>
      <motion.ul
        variants={animation}
        custom={3}
        className="second-colon flex flex-col gap-6 text-[10px] md:gap-11 md:text-base md:font-medium"
      >
        <div className="text-gray-400">Links</div>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.SHOP}>Shop</Link>
        </li>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.BLOG}>Blog</Link>
        </li>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </li>
      </motion.ul>
      <motion.ul
        variants={animation}
        custom={4}
        className="third-colon flex  flex-col gap-6 text-[10px] md:gap-11 md:text-base md:font-medium"
      >
        <div className="text-gray-400">Help</div>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.CONTACT}>Payment Options</Link>
        </li>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.CONTACT}>Returns</Link>
        </li>
        <li className="duration-200 hover:scale-105">
          <Link to={ROUTES.PrivacyPolicies}>Privacy Policies</Link>
        </li>
      </motion.ul>
      <motion.div
        variants={animation}
        custom={5}
        className="fourth-colon hidden flex-col gap-11 text-gray-400 md:flex"
      >
        Newsletter
        <div>
          <input
            className="p-1 text-[10px] text-black underline underline-offset-4 duration-200 hover:scale-105 md:text-base"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
          />
          <button
            type="submit"
            className="ml-8 font-medium text-black underline underline-offset-4 duration-200 hover:scale-105"
          >
            SUBSCRIBE
          </button>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
