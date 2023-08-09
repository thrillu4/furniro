import {useState} from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { TbUserExclamation } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../store/slices/hooks";
import { IoIosCloseCircle, IoMdHeartDislike } from "react-icons/io";
import { removeFromCart, removeFromFavorite } from '../store/cartSlice'

const Header = () => {
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenFavorite, setOpenFavorite] = useState(false);
  const dispatch = useAppDispatch();

  const cart = useAppSelector(cart => cart.cart.cart)
  const favorite = useAppSelector(fav => fav.cart.favorite)

  const toggleOpenCartMenu = () => {
    setOpenCart(!isOpenCart)
  }

  const toggleOpenFavoriteMenu = () => {
    setOpenFavorite(!isOpenFavorite)
  }

  const closeMenus = () => {
    setOpenCart(false);
    setOpenFavorite(false);
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveFromFavorite = (id: string) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <>
      <nav className="relative nav flex justify-between items-center pt-9">
        <Link to={ROUTES.HOME} className="logo-wrap flex items-center cursor-pointer">
          <img src="/images/main-logo.png" alt="logo" />
          <div className="name-site text-3xl ml-1 font-bold">Furniro</div>
        </Link>
        <ul className="page-nav flex items-center gap-20 text-base font-medium">
          <li><Link to={ROUTES.HOME}>Home</Link></li>
          <li><Link to={ROUTES.SHOP}>Shop</Link></li>
          <li><Link to={ROUTES.BLOG}>Blog</Link></li>
          <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
        </ul>
        <ul className="icons-list flex items-center gap-12">
          <li><TbUserExclamation size={26}/></li>
          <li><HiOutlineMagnifyingGlass size={26}/></li>
          <li onClick={toggleOpenFavoriteMenu} className='relative cursor-pointer'><AiOutlineHeart size={26}/><span className={!favorite.length ? 'none' : "absolute bottom-[-10px] right-[-6px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{favorite.length > 0 && favorite.length}</span></li>
          <li onClick={toggleOpenCartMenu} className='relative cursor-pointer'><AiOutlineShoppingCart size={26} /><span className={!cart.length ? 'none' : "absolute bottom-[-10px] right-[-10px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{cart.length > 0 && cart.length}</span></li>
        </ul>
      </nav>
      {isOpenCart && 
      <div className="absolute w-[417px] bg-white right-0 top-0 p-9 z-[51]">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">Shopping Cart</div>
        <AiOutlineClose onClick={toggleOpenCartMenu} size={25} className='text-[#9F9F9F] cursor-pointer'/>
      </div>
      <div>
        {cart.length ? cart.map((item) => {
          const {image, title, id, price, promotional, promotionalPrice, quantity} = item
          return (
            <div className="flex items-center justify-between mb-[28px] mt-[75px]" key={id}>
              <Link className='flex items-center gap-8' to={`/shop/${id}`}>
                <img className="w-[111px] h-[90px] rounded" src={image} alt="image" />
                <div className="mr-8">
                  <div className="mb-3">{title}</div>
                  <div className="flex items-center justify-between gap-4">
                    <div>{quantity}</div>
                    <div>x</div>
                    <div className="text-[#B88E2F] text-xs">{promotional ? promotionalPrice : price}</div>
                  </div>
                </div>
              </Link>
              <IoIosCloseCircle onClick={() => handleRemoveFromCart(id)} size={20} className='cursor-pointer text-[#9F9F9F]'/>
            </div>
          )
        }) : <div className='my-6'>🛒 is empty 🤷‍♀️</div>}
      </div>
      <div className="flex items-center">
        <div>Subtotal</div>
        <div className="text-[#B88E2F] text-bold ml-[100px]">
          Rp. {cart.map(({price, promotional, promotionalPrice}) => promotional ? parseInt(promotionalPrice.slice(3)) : parseInt(price.slice(3)) * 1).reduce((prev, curr) => prev + curr, 0)}
        </div>
      </div>
      <div className="flex items-center gap-[14px] mt-[50px]">
        <Link className="rounded-[50px] px-[30px] py-[6px] text-xs font-normal border border-black " onClick={toggleOpenCartMenu} to={ROUTES.CART}>Cart</Link>
        <Link className="rounded-[50px] px-[30px] py-[6px] text-xs font-normal border border-black " onClick={toggleOpenCartMenu} to={ROUTES.CHECKOUT}>Checkout</Link>
        <Link className="rounded-[50px] px-[30px] py-[6px] text-xs font-normal border border-black " onClick={toggleOpenCartMenu} to={ROUTES.COMPARISON}>Comparison</Link>
      </div>
    </div>
    }
    {(isOpenFavorite || isOpenCart) && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-50"
          style={{ display: isOpenFavorite || isOpenCart ? "block" : "none" }}
          onClick={closeMenus}
        ></div>
    )}
    {isOpenFavorite &&
    <div className="absolute w-[417px] bg-white right-0 top-0 p-9 z-[51]">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-semibold">Favorites</div>
      <AiOutlineClose onClick={toggleOpenFavoriteMenu} size={25} className='text-[#9F9F9F] cursor-pointer'/>
    </div>
    <div>
      {favorite.length ? favorite.map((item) => {
        const {image, title, id, price, promotional, promotionalPrice} = item
        return (
          <div className="flex items-center justify-between mb-[28px] mt-[75px]" key={id}>
            <Link className='flex items-center gap-8' to={`/shop/${id}`}>
              <img className="w-[111px] h-[90px] rounded" src={image} alt="image" />
              <div className="flex items-center gap-5">
                <div>{title}</div> 
                <div className="text-[#B88E2F]">{promotional ? promotionalPrice : price}</div>
              </div>
            </Link>
            <IoMdHeartDislike onClick={() => handleRemoveFromFavorite(id)} size={20} className='cursor-pointer text-[#9F9F9F]'/>
          </div>
        )
      }) : <div className='my-6'>💖 is empty 🤷‍♀️</div>}
    </div>
  </div>
  }
    </>
  )
}

export default Header