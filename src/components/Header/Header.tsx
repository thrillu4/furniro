import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { TfiMenu } from 'react-icons/tfi'
import { MdCompareArrows } from "react-icons/md"
import { AiOutlineClose, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IoIosCloseCircle, IoMdHeartDislike } from "react-icons/io";
import { removeFromCart, removeFromFavorite } from '../store/slices/cartSlice'
import product from '../../data/products.json';
import blog from '../../data/blog.json';
import { motion } from 'framer-motion';
import { animation } from "../../utils/animation";

const Header = () => {
  const products = product.products;
  const blogs = blog.blog
  const allItems = [...blogs, ...products]
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenFavorite, setOpenFavorite] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isOpenHamburger, setOpenHamburger] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector(cart => cart.cart.cart)
  const favorite = useAppSelector(fav => fav.cart.favorite)
  const compare = useAppSelector(comp => comp.cart.compare)

  useEffect(() => {
    if (isOpenHamburger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isOpenHamburger])

  useEffect(() => {
    if (isOpenCart || isOpenSearch || isOpenFavorite) {
      document.body.style.overflow = 'visible'
    }
  }, [isOpenCart, isOpenFavorite, isOpenSearch])

  const toggleOpenCartMenu = () => {
    setOpenCart(!isOpenCart)
    if(isOpenHamburger) setOpenHamburger(!isOpenHamburger)
  }

  const toggleOpenSearchMenu = () => {
    setOpenSearch(!isOpenSearch)
  }
  
  const toggleOpenFavoriteMenu = () => {
    setOpenFavorite(!isOpenFavorite)
    if(isOpenHamburger) setOpenHamburger(!isOpenHamburger)
  }

  const toggleOpenHamburger = () => {
    setOpenHamburger(!isOpenHamburger)
  }

  const closeMenus = () => {
    setOpenCart(false);
    setOpenFavorite(false);
    setOpenSearch(false)
    setSearchValue('');
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveFromFavorite = (id: string) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <>
      <nav className="relative nav flex justify-between items-center px-2 pt-3 md:pt-9">
        <Link to={ROUTES.HOME} className="logo-wrap flex items-center cursor-pointer">
          <img className='w-[30px] md:w-full' src="/images/main-logo.png" alt="logo" />
          <div className="name-site md:text-3xl ml-1 font-bold">Furniro</div>
        </Link>
        <TfiMenu onClick={toggleOpenHamburger} className='md:hidden w-[22px] h-[22px] relative'/>
        <span className={!cart.length && !favorite.length && !compare.length ? 'hidden none' : "absolute bottom-[-10px] right-[4px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{(cart.length || favorite.length || compare.length) > 0 && cart.length + favorite.length + compare.length}</span>
        {isOpenHamburger && (
          <div className="fixed z-50 inset-0 bg-black block w-full  p-[10px]">
            <AiOutlineClose onClick={toggleOpenHamburger} className='w-[25px] h-[25px] text-white ml-auto cursor-pointer'/>
            <ul className="mt-[20px] text-white flex justify-center items-center gap-[60px]">
              <li onClick={toggleOpenSearchMenu} className='relative cursor-pointer'><HiOutlineMagnifyingGlass size={23}/></li>
              <li onClick={() => setOpenFavorite(true)} className='relative cursor-pointer'><AiOutlineHeart size={23}/><span className={!favorite.length ? 'none' : "absolute bottom-[-10px] right-[-6px] text-white bg-orange-400 rounded-full w-3 h-3 flex items-center justify-center text-xs z-50"}>{favorite.length > 0 && favorite.length}</span></li>
              <li onClick={() => setOpenCart(true)} className='relative cursor-pointer'><AiOutlineShoppingCart size={23} /><span className={!cart.length ? 'none' : "absolute bottom-[-10px] left-[-7px] text-white bg-orange-400 rounded-full w-3 h-3 flex items-center justify-center text-xs z-50"}>{cart.length > 0 && cart.length}</span>
              <span className={!compare.length ? 'none' : "absolute bottom-[-10px] right-[-11px] text-white bg-orange-400 rounded-full w-3 h-3 flex items-center justify-center text-xs z-50"}>{compare.length > 0 && <MdCompareArrows/>}</span>
              </li>
            </ul>
            <ul className="flex flex-col justify-center items-center text-white gap-[50px] mt-[100px]">
              <li><Link onClick={toggleOpenHamburger} to={ROUTES.HOME}>Home</Link></li>
              <li><Link onClick={toggleOpenHamburger} to={ROUTES.SHOP}>Shop</Link></li>
              <li><Link onClick={toggleOpenHamburger} to={ROUTES.BLOG}>Blog</Link></li>
              <li><Link onClick={toggleOpenHamburger} to={ROUTES.CONTACT}>Contact</Link></li>
            </ul>
          </div>
        )}
        <ul className="hidden page-nav md:flex items-center text-[12px] gap-[5px] md:text-[16px] sm:gap[20px] md:gap-10 lg:gap-20 font-medium">
          <li className='hover:scale-110 duration-300'><Link to={ROUTES.HOME}>Home</Link></li>
          <li className='hover:scale-110 duration-300'><Link to={ROUTES.SHOP}>Shop</Link></li>
          <li className='hover:scale-110 duration-300'><Link to={ROUTES.BLOG}>Blog</Link></li>
          <li className='hover:scale-110 duration-300'><Link to={ROUTES.CONTACT}>Contact</Link></li>
        </ul>
        <ul className="hidden icons-list md:flex items-center sm:gap-[20px] md:gap-8 lg:gap-12">
          <li onClick={toggleOpenSearchMenu} className='relative cursor-pointer'><HiOutlineMagnifyingGlass className='hover:scale-110 duration-300 md:w-[23px] md:h-[23px] xl:w-[26px] xl:h-[26px]'/></li>
          <li onClick={toggleOpenFavoriteMenu} className='relative cursor-pointer'><AiOutlineHeart className='hover:scale-110 duration-300 md:w-[23px] md:h-[23px] xl:w-[26px] xl:h-[26px]'/><span className={!favorite.length ? 'none' : "absolute bottom-[-10px] right-[-6px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{favorite.length > 0 && favorite.length}</span></li>
          <li onClick={toggleOpenCartMenu} className='relative cursor-pointer'><AiOutlineShoppingCart className='hover:scale-110 duration-300 md:w-[23px] md:h-[23px] xl:w-[26px] xl:h-[26px]' /><span className={!cart.length ? 'none' : "absolute bottom-[-10px] left-[-7px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{cart.length > 0 && cart.length}</span>
          <span className={!compare.length ? 'none' : "absolute bottom-[-10px] right-[-11px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{compare.length > 0 && <MdCompareArrows/>}</span>
          </li>
        </ul>
      </nav>
      {isOpenSearch && 
        <motion.div initial='hidden'
        whileInView='visible'variants={animation} className="absolute w-full md:w-[300px] right-0 md:right-[215px] top-[20px] md:top-[25px] z-[51]">
          <input placeholder='search ...' autoFocus className="w-full p-[17px] pr-[45px] rounded-t-[10px] border border-[#9F9F9F] block mx-auto" type="search" name="search" id="search" onChange={(event) => {
            setSearchValue(event.target.value)
          }} value={searchValue}/>
          <div className="bg-white rounded-b-[10px]">
            {searchValue &&
            (allItems.some(val => val.title.toLowerCase().includes(searchValue.toLowerCase())) ? 
            allItems.filter(val => {
              if(searchValue == '') {
                return val
              } else if(val.title.toLowerCase().includes(searchValue.toLowerCase())){
                return val
              }
            }).slice(0,3).map((item) => {
              const {id, image, category, title} = item;
              return (
                <Link to={`/blog/${id}`} onClick={toggleOpenSearchMenu} className="px-[20px] flex items-center gap-[32px] py-[20px] border-b border-b-[#9F9F9F]" key={id}>
                  <img className="w-[80px] h-[80px] rounded-[10px]" src={image} alt="image" />
                  <div>
                    <div className="text-[12px] mb-[5px]">{title}</div>
                    <div className="text-[#9F9F9F] text-[12px]">{category}</div>
                  </div>
                </Link>
              )
          })
            : <div className='p-[20px]'>No results 🙈</div>)
            }
          </div>
        </motion.div>
      }
      {isOpenCart && 
      <motion.div initial={{opacity: 0, y: -100}}
      whileInView='visible' animate={{opacity: 1, y: 0, transition: {duration: 0.3}}} className="absolute w-full md:w-[417px] bg-white right-0 rounded-[10px] top-2 p-4 md:p-9 z-[51]">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">Shopping Cart</div>
        <AiOutlineClose onClick={() => setOpenCart(false)} size={25} className='text-[#9F9F9F] cursor-pointer'/>
      </div>
      <div>
        {cart.length ? cart.map((item) => {
          const {image, title, id, price, promotional, promotionalPrice, quantity} = item
          return (
            <div className="flex items-center justify-between mb-[28px] mt-[75px]" key={id}>
              <Link onClick={toggleOpenCartMenu} className='hover:scale-110 duration-300 flex items-center gap-8' to={`/shop/${id}`}>
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
              <IoIosCloseCircle onClick={() => handleRemoveFromCart(id)} size={20} className='hover:scale-125 duration-300 cursor-pointer text-[#9F9F9F]'/>
            </div>
          )
        }) : <div className='my-6'>🛒 is empty 🤷‍♀️</div>}
      </div>
      <div className="flex items-center">
        <div>Subtotal</div>
        <div className="text-[#B88E2F] text-bold ml-[100px]">
        Rp. {cart.map(({price, promotional, promotionalPrice, quantity}) => (promotional ? parseInt(promotionalPrice.slice(3)) : parseInt(price.slice(3))) * quantity).reduce((prev, curr) => prev + curr, 0)}
        </div>
      </div>
      <div className="flex items-center gap-[14px] mt-[50px]">
        <Link className="hover:scale-110 duration-300 rounded-[50px] px-[15px] md:px-[30px] py-[6px] text-xs font-normal border border-black relative " onClick={toggleOpenCartMenu} to={ROUTES.CART}>Cart <span className={!cart.length ? 'none' : "absolute bottom-[-10px] right-[4px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{cart.length > 0 && cart.length}</span></Link>
        <Link className="hover:scale-110 duration-300 rounded-[50px] px-[15px] md:px-[30px] py-[6px] text-xs font-normal border border-black " onClick={toggleOpenCartMenu} to={ROUTES.CHECKOUT}>Checkout </Link>
        <Link className="hover:scale-110 duration-300 rounded-[50px] px-[15px] md:px-[30px] py-[6px] text-xs font-normal border border-black relative" onClick={toggleOpenCartMenu} to={ROUTES.COMPARISON}>Comparison <span className={!compare.length ? 'none' : "absolute bottom-[-7px] right-[7px] text-white bg-orange-400 rounded-full w-4 h-4 flex items-center justify-center text-xs z-50"}>{compare.length > 0 && <MdCompareArrows size={22}/>}</span></Link>
      </div>
    </motion.div>
    }
    {(isOpenFavorite || isOpenCart || isOpenSearch) && (
        <div 
          className="fixed inset-0 bg-black opacity-40 z-50"
          style={{ display: isOpenFavorite || isOpenCart || isOpenSearch ? "block" : "none" }}
          onClick={closeMenus}
        ></div>
    )}
    {isOpenFavorite &&
    <motion.div initial={{opacity: 0, y: -100}}
    whileInView='visible' animate={{opacity: 1, y: 0, transition: {duration: 0.3}}}  className="absolute w-full md:w-[417px] right-0 rounded-[10px] bg-white md:right-0 top-2 p-4 md:p-9 z-[51]">
    <div className="flex items-center justify-between">
      <div className="text-2xl font-semibold">Favorites</div>
      <AiOutlineClose onClick={() => setOpenFavorite(false)} size={25} className='text-[#9F9F9F] cursor-pointer'/>
    </div>
    <div>
      {favorite.length ? favorite.map((item) => {
        const {image, title, id, price, promotional, promotionalPrice} = item
        return (
          <div className="flex items-center justify-between mb-[28px] mt-[75px]" key={id}>
            <Link onClick={toggleOpenFavoriteMenu} className='hover:scale-110 duration-300 flex items-center gap-8' to={`/shop/${id}`}>
              <img className="w-[111px] h-[90px] rounded" src={image} alt="image" />
              <div className="md:flex md:items-center gap-5">
                <div>{title}</div> 
                <div className="text-[#B88E2F]">{promotional ? promotionalPrice : price}</div>
              </div>
            </Link>
            <IoMdHeartDislike onClick={() => handleRemoveFromFavorite(id)} size={20} className='hover:scale-110 duration-300 cursor-pointer text-[#9F9F9F]'/>
          </div>
        )
      }) : <div className='my-6'>💖 is empty 🤷‍♀️</div>}
    </div>
  </motion.div>
  }
    </>
  )
}

export default Header