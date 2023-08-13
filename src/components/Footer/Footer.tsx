import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"

const Footer = () => {
  return (
    <footer className="footer flex md:py-11 justify-evenly md:gap-[70px] lg:max-2xl:gap-0 gap-10">
      <div className="first-colon text-[10px] md:text-base">
        <div className="md:text-2xl font-bold mb-12">Furniro.</div>
        <p className="text-gray-400 mb-20 md:mb-60">400 University Drive Suite 200 Coral<br/> Gables,<br/>
        FL 33134 USA</p>
        <div>2023 furniro. All rights reverved</div>
      </div>
      <ul className="second-colon text-[10px] md:text-base md:font-medium flex flex-col md:gap-11 gap-6"><div className="text-gray-400">Links</div>
      <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.SHOP}>Shop</Link></li>
        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
        <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
      </ul>
      <ul className="third-colon text-[10px]  md:text-base md:font-medium flex flex-col md:gap-11 gap-6"><div className="text-gray-400">Help</div>
      <li><Link to={ROUTES.CONTACT}>Payment Options</Link></li>
      <li><Link to={ROUTES.CONTACT}>Returns</Link></li>
      <li><Link to={ROUTES.PrivacyPolicies}>Privacy Policies</Link></li>
      </ul>
      <div className="fourth-colon hidden text-gray-400 md:flex flex-col gap-11">Newsletter
      <div>
      <input className="underline md:text-base text-[10px]  text-black underline-offset-4" type="email" name="email" id="email" placeholder="Enter Your Email Address"/>
      <button type="submit" className="underline text-black underline-offset-4 ml-8 font-medium">SUBSCRIBE</button>
      </div>
      </div>
    </footer>
  )
}

export default Footer