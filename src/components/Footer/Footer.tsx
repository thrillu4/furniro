import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"

const Footer = () => {
  return (
    <footer className="footer flex py-11 justify-evenly ">
      <div className="first-colon">
        <div className="text-2xl font-bold mb-12">Furniro.</div>
        <p className="text-gray-400 mb-60">400 University Drive Suite 200 Coral<br/> Gables,<br/>
        FL 33134 USA</p>
        <div>2023 furniro. All rights reverved</div>
      </div>
      <ul className="second-colon font-medium flex flex-col gap-11"><div className="text-gray-400">Links</div>
      <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.SHOP}>Shop</Link></li>
        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
        <li><Link to={ROUTES.CONTACTS}>Contacts</Link></li>
      </ul>
      <ul className="third-colon font-medium flex flex-col gap-11"><div className="text-gray-400">Help</div>
      <li>Payment Options</li>
      <li>Returns</li>
      <li>Privacy Policies</li>
      </ul>
      <div className="fourth-colon text-gray-400 flex flex-col gap-11">Newsletter
      <div>
      <input className="underline text-black underline-offset-4" type="email" name="email" id="email" placeholder="Enter Your Email Address"/>
      <button type="submit" className="underline text-black underline-offset-4 ml-8 font-medium">SUBSCRIBE</button>
      </div>
      </div>
    </footer>
  )
}

export default Footer