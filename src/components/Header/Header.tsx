import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { TbUserExclamation } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  return (
    <nav className="nav flex justify-between items-center pt-9">
      <Link to={ROUTES.HOME} className="logo-wrap flex items-center cursor-pointer">
        <img src="images/main-logo.png" alt="logo" />
        <div className="name-site text-3xl ml-1 font-bold">Furniro</div>
      </Link>
      <ul className="page-nav flex items-center gap-20 text-base font-medium">
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.SHOP}>Shop</Link></li>
        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
        <li><Link to={ROUTES.CONTACTS}>Contacts</Link></li>
      </ul>
      <ul className="icons-list flex items-center gap-12">
        <li><TbUserExclamation size={26}/></li>
        <li><HiOutlineMagnifyingGlass size={26}/></li>
        <li><AiOutlineHeart size={26}/></li>
        <li><AiOutlineShoppingCart size={26}/></li>
      </ul>
    </nav>
  )
}

export default Header