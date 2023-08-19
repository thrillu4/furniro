import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TfiMenu } from "react-icons/tfi";
import { MdCompareArrows } from "react-icons/md";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { IoIosCloseCircle, IoMdHeartDislike } from "react-icons/io";
import { removeFromCart, removeFromFavorite } from "../store/slices/cartSlice";
import product from "../../data/products.json";
import blog from "../../data/blog.json";
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";

const Header = () => {
  const products = product.products;
  const blogs = blog.blog;
  const allItems = [...blogs, ...products];
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenFavorite, setOpenFavorite] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isOpenHamburger, setOpenHamburger] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector((cart) => cart.cart.cart);
  const favorite = useAppSelector((fav) => fav.cart.favorite);
  const compare = useAppSelector((comp) => comp.cart.compare);

  useEffect(() => {
    if (isOpenHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpenHamburger]);

  useEffect(() => {
    if (isOpenCart || isOpenSearch || isOpenFavorite) {
      document.body.style.overflow = "visible";
    }
  }, [isOpenCart, isOpenFavorite, isOpenSearch]);

  const toggleOpenCartMenu = () => {
    setOpenCart(!isOpenCart);
    if (isOpenHamburger) setOpenHamburger(!isOpenHamburger);
  };

  const toggleOpenSearchMenu = () => {
    setOpenSearch(!isOpenSearch);
  };

  const toggleOpenFavoriteMenu = () => {
    setOpenFavorite(!isOpenFavorite);
    if (isOpenHamburger) setOpenHamburger(!isOpenHamburger);
  };

  const toggleOpenHamburger = () => {
    setOpenHamburger(!isOpenHamburger);
  };

  const closeMenus = () => {
    setOpenCart(false);
    setOpenFavorite(false);
    setOpenSearch(false);
    setSearchValue("");
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveFromFavorite = (id: string) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <>
      <nav className="nav relative flex items-center justify-between px-2 pt-3 md:pt-9">
        <Link
          to={ROUTES.HOME}
          className="logo-wrap flex cursor-pointer items-center"
        >
          <img
            className="w-[30px] md:w-full"
            src="/images/main-logo.png"
            alt="logo"
          />
          <div className="name-site ml-1 font-bold md:text-3xl">Furniro</div>
        </Link>
        <TfiMenu
          onClick={toggleOpenHamburger}
          className="relative h-[22px] w-[22px] md:hidden"
        />
        <span
          className={
            !cart.length && !favorite.length && !compare.length
              ? "none hidden"
              : "absolute bottom-[-10px] right-[4px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white md:hidden"
          }
        >
          {(cart.length || favorite.length || compare.length) > 0 &&
            cart.length + favorite.length + compare.length}
        </span>
        {isOpenHamburger && (
          <div className="fixed inset-0 z-50 block w-full bg-black  p-[10px]">
            <AiOutlineClose
              onClick={toggleOpenHamburger}
              className="ml-auto h-[25px] w-[25px] cursor-pointer text-white"
            />
            <ul className="mt-[20px] flex items-center justify-center gap-[60px] text-white">
              <li
                onClick={toggleOpenSearchMenu}
                className="relative cursor-pointer"
              >
                <HiOutlineMagnifyingGlass size={23} />
              </li>
              <li
                onClick={() => setOpenFavorite(true)}
                className="relative cursor-pointer"
              >
                <AiOutlineHeart size={23} />
                <span
                  className={
                    !favorite.length
                      ? "none"
                      : "absolute bottom-[-10px] right-[-6px] z-50 flex h-3 w-3 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                  }
                >
                  {favorite.length > 0 && favorite.length}
                </span>
              </li>
              <li
                onClick={() => setOpenCart(true)}
                className="relative cursor-pointer"
              >
                <AiOutlineShoppingCart size={23} />
                <span
                  className={
                    !cart.length
                      ? "none"
                      : "absolute bottom-[-10px] left-[-7px] z-50 flex h-3 w-3 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                  }
                >
                  {cart.length > 0 && cart.length}
                </span>
                <span
                  className={
                    !compare.length
                      ? "none"
                      : "absolute bottom-[-10px] right-[-11px] z-50 flex h-3 w-3 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                  }
                >
                  {compare.length > 0 && <MdCompareArrows />}
                </span>
              </li>
            </ul>
            <ul className="mt-[100px] flex flex-col items-center justify-center gap-[50px] text-white">
              <li>
                <Link onClick={toggleOpenHamburger} to={ROUTES.HOME}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={toggleOpenHamburger} to={ROUTES.SHOP}>
                  Shop
                </Link>
              </li>
              <li>
                <Link onClick={toggleOpenHamburger} to={ROUTES.BLOG}>
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={toggleOpenHamburger} to={ROUTES.CONTACT}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ul className="page-nav sm:gap[20px] hidden items-center gap-[5px] text-[12px] font-medium md:flex md:gap-10 md:text-[16px] lg:gap-20">
          <li className="duration-300 hover:scale-110">
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li className="duration-300 hover:scale-110">
            <Link to={ROUTES.SHOP}>Shop</Link>
          </li>
          <li className="duration-300 hover:scale-110">
            <Link to={ROUTES.BLOG}>Blog</Link>
          </li>
          <li className="duration-300 hover:scale-110">
            <Link to={ROUTES.CONTACT}>Contact</Link>
          </li>
        </ul>
        <ul className="icons-list hidden items-center sm:gap-[20px] md:flex md:gap-8 lg:gap-12">
          <li
            onClick={toggleOpenSearchMenu}
            className="relative cursor-pointer"
          >
            <HiOutlineMagnifyingGlass className="duration-300 hover:scale-110 md:h-[23px] md:w-[23px] xl:h-[26px] xl:w-[26px]" />
          </li>
          <li
            onClick={toggleOpenFavoriteMenu}
            className="relative cursor-pointer"
          >
            <AiOutlineHeart className="duration-300 hover:scale-110 md:h-[23px] md:w-[23px] xl:h-[26px] xl:w-[26px]" />
            <span
              className={
                !favorite.length
                  ? "none"
                  : "absolute bottom-[-10px] right-[-6px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
              }
            >
              {favorite.length > 0 && favorite.length}
            </span>
          </li>
          <li onClick={toggleOpenCartMenu} className="relative cursor-pointer">
            <AiOutlineShoppingCart className="duration-300 hover:scale-110 md:h-[23px] md:w-[23px] xl:h-[26px] xl:w-[26px]" />
            <span
              className={
                !cart.length
                  ? "none"
                  : "absolute bottom-[-10px] left-[-7px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
              }
            >
              {cart.length > 0 && cart.length}
            </span>
            <span
              className={
                !compare.length
                  ? "none"
                  : "absolute bottom-[-10px] right-[-11px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
              }
            >
              {compare.length > 0 && <MdCompareArrows />}
            </span>
          </li>
        </ul>
      </nav>
      {isOpenSearch && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animation}
          className="absolute right-0 top-[20px] z-[51] w-full md:right-[215px] md:top-[25px] md:w-[300px]"
        >
          <input
            placeholder="search ..."
            autoFocus
            className="mx-auto block w-full rounded-t-[10px] border border-[#9F9F9F] p-[17px] pr-[45px]"
            type="search"
            name="search"
            id="search"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            value={searchValue}
          />
          <div className="rounded-b-[10px] bg-white">
            {searchValue &&
              (allItems.some((val) =>
                val.title.toLowerCase().includes(searchValue.toLowerCase()),
              ) ? (
                allItems
                  .filter((val) => {
                    if (searchValue == "") {
                      return val;
                    } else if (
                      val.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(0, 3)
                  .map((item) => {
                    const { id, image, category, title } = item;
                    return (
                      <Link
                        to={`/blog/${id}`}
                        onClick={toggleOpenSearchMenu}
                        className="flex items-center gap-[32px] border-b border-b-[#9F9F9F] px-[20px] py-[20px]"
                        key={id}
                      >
                        <img
                          className="h-[80px] w-[80px] rounded-[10px]"
                          src={image}
                          alt="image"
                        />
                        <div>
                          <div className="mb-[5px] text-[12px]">{title}</div>
                          <div className="text-[12px] text-[#9F9F9F]">
                            {category}
                          </div>
                        </div>
                      </Link>
                    );
                  })
              ) : (
                <div className="p-[20px]">No results 🙈</div>
              ))}
          </div>
        </motion.div>
      )}
      {isOpenCart && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView="visible"
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          className="absolute right-0 top-2 z-[51] w-full rounded-[10px] bg-white p-4 md:w-[417px] md:p-9"
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Shopping Cart</div>
            <AiOutlineClose
              onClick={() => setOpenCart(false)}
              size={25}
              className="cursor-pointer text-[#9F9F9F]"
            />
          </div>
          <div>
            {cart.length ? (
              cart.map((item) => {
                const {
                  image,
                  title,
                  id,
                  price,
                  promotional,
                  promotionalPrice,
                  quantity,
                } = item;
                return (
                  <div
                    className="mb-[28px] mt-[75px] flex items-center justify-between"
                    key={id}
                  >
                    <Link
                      onClick={toggleOpenCartMenu}
                      className="flex items-center gap-8 duration-300 hover:scale-110"
                      to={`/shop/${id}`}
                    >
                      <img
                        className="h-[90px] w-[111px] rounded"
                        src={image}
                        alt="image"
                      />
                      <div className="mr-8">
                        <div className="mb-3">{title}</div>
                        <div className="flex items-center justify-between gap-4">
                          <div>{quantity}</div>
                          <div>x</div>
                          <div className="text-xs text-[#B88E2F]">
                            {promotional ? promotionalPrice : price}
                          </div>
                        </div>
                      </div>
                    </Link>
                    <IoIosCloseCircle
                      onClick={() => handleRemoveFromCart(id)}
                      size={20}
                      className="cursor-pointer text-[#9F9F9F] duration-300 hover:scale-125"
                    />
                  </div>
                );
              })
            ) : (
              <div className="my-6">🛒 is empty 🤷‍♀️</div>
            )}
          </div>
          <div className="flex items-center">
            <div>Subtotal</div>
            <div className="text-bold ml-[100px] text-[#B88E2F]">
              Rp.{" "}
              {cart
                .map(
                  ({ price, promotional, promotionalPrice, quantity }) =>
                    (promotional
                      ? parseInt(promotionalPrice.slice(3))
                      : parseInt(price.slice(3))) * quantity,
                )
                .reduce((prev, curr) => prev + curr, 0)}
            </div>
          </div>
          <div className="mt-[50px] flex items-center gap-[14px]">
            <Link
              className="relative rounded-[50px] border border-black px-[15px] py-[6px] text-xs font-normal duration-300 hover:scale-110 md:px-[30px] "
              onClick={toggleOpenCartMenu}
              to={ROUTES.CART}
            >
              Cart{" "}
              <span
                className={
                  !cart.length
                    ? "none"
                    : "absolute bottom-[-10px] right-[4px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                }
              >
                {cart.length > 0 && cart.length}
              </span>
            </Link>
            <Link
              className="rounded-[50px] border border-black px-[15px] py-[6px] text-xs font-normal duration-300 hover:scale-110 md:px-[30px] "
              onClick={toggleOpenCartMenu}
              to={ROUTES.CHECKOUT}
            >
              Checkout{" "}
            </Link>
            <Link
              className="relative rounded-[50px] border border-black px-[15px] py-[6px] text-xs font-normal duration-300 hover:scale-110 md:px-[30px]"
              onClick={toggleOpenCartMenu}
              to={ROUTES.COMPARISON}
            >
              Comparison{" "}
              <span
                className={
                  !compare.length
                    ? "none"
                    : "absolute bottom-[-7px] right-[7px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                }
              >
                {compare.length > 0 && <MdCompareArrows size={22} />}
              </span>
            </Link>
          </div>
        </motion.div>
      )}
      {(isOpenFavorite || isOpenCart || isOpenSearch) && (
        <div
          className="fixed inset-0 z-50 bg-black opacity-40"
          style={{
            display:
              isOpenFavorite || isOpenCart || isOpenSearch ? "block" : "none",
          }}
          onClick={closeMenus}
        ></div>
      )}
      {isOpenFavorite && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView="visible"
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          className="absolute right-0 top-2 z-[51] w-full rounded-[10px] bg-white p-4 md:right-0 md:w-[417px] md:p-9"
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Favorites</div>
            <AiOutlineClose
              onClick={() => setOpenFavorite(false)}
              size={25}
              className="cursor-pointer text-[#9F9F9F]"
            />
          </div>
          <div>
            {favorite.length ? (
              favorite.map((item) => {
                const {
                  image,
                  title,
                  id,
                  price,
                  promotional,
                  promotionalPrice,
                } = item;
                return (
                  <div
                    className="mb-[28px] mt-[75px] flex items-center justify-between"
                    key={id}
                  >
                    <Link
                      onClick={toggleOpenFavoriteMenu}
                      className="flex items-center gap-8 duration-300 hover:scale-110"
                      to={`/shop/${id}`}
                    >
                      <img
                        className="h-[90px] w-[111px] rounded"
                        src={image}
                        alt="image"
                      />
                      <div className="gap-5 md:flex md:items-center">
                        <div>{title}</div>
                        <div className="text-[#B88E2F]">
                          {promotional ? promotionalPrice : price}
                        </div>
                      </div>
                    </Link>
                    <IoMdHeartDislike
                      onClick={() => handleRemoveFromFavorite(id)}
                      size={20}
                      className="cursor-pointer text-[#9F9F9F] duration-300 hover:scale-110"
                    />
                  </div>
                );
              })
            ) : (
              <div className="my-6">💖 is empty 🤷‍♀️</div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
