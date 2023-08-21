import { motion } from "framer-motion"
import { MdNavigateNext } from "react-icons/md"
import { animation } from "../../utils/animation"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { addToCart, removeFromCart } from "../store/slices/cartSlice"

import { Helmet } from "react-helmet"
import { TbTrashFilled } from "react-icons/tb"
import { Link } from "react-router-dom"
import { Product } from "../../data/productTypes"
import { ROUTES } from "../../utils/routes"
import Recommended from "../Recommended/Recommended"

const Cart = () => {
  const cart = useAppSelector((cart) => cart.cart.cart)
  const dispatch = useAppDispatch()

  const changeQuantity = (item: Product, quantity: number) => {
    dispatch(addToCart({ ...item, quantity }))
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  return (
    <section className="cart">
      <Helmet>
        <meta
          name="description"
          content="Cart page with your selected products"
        />
        <title>Cart Page</title>
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
        <h1 className="text-center text-2xl font-semibold md:text-5xl">Cart</h1>
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
            Cart
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="flex flex-col justify-center gap-[30px] py-[30px] md:py-[70px] xl:flex-row"
      >
        <motion.div variants={animation} initial={{ x: 100 }}>
          <ul className="flex items-center justify-between bg-[#F9F1E7] px-2 py-[15px] text-xs font-semibold md:gap-[45px] md:px-[145px] md:text-base">
            <li>Product</li>
            <li className="md:ml-[80px] md:mr-[100px]">Price</li>
            <li>Quantity</li>
            <li className="md:ml-[25px]">Subtotal</li>
          </ul>
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
              } = item
              return (
                <div
                  className="mt-3 flex items-center justify-between md:mt-[55px]"
                  key={id}
                >
                  <div className="flex items-center justify-between gap-[10px] text-[10px] md:gap-[50px] md:text-base">
                    <img
                      className="h-[60px] w-[60px] md:h-[90px] md:w-[111px]"
                      src={image}
                      alt="image"
                    />
                    <Link
                      to={`/shop/${id}`}
                      className="text-[#9F9F9F] duration-300 hover:scale-110"
                    >
                      {title}
                    </Link>
                    <div className="text-[#9F9F9F] md:ml-[60px]">
                      {promotional ? promotionalPrice : price}
                    </div>
                    <div className="flex items-center rounded-[10px] border border-[#9F9F9F] px-[8px] py-[6px] duration-300 hover:scale-110 md:ml-[70px] md:py-[15px]">
                      <button
                        onClick={() =>
                          quantity === 1
                            ? null
                            : changeQuantity(item, quantity - 1)
                        }
                      >
                        -
                      </button>
                      <div className="mx-[10px] md:mx-[22px]">{quantity}</div>
                      <button
                        onClick={() => changeQuantity(item, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="md:ml-[20px]">
                      Rp.
                      {promotional
                        ? parseInt(promotionalPrice.slice(3)) * quantity
                        : parseInt(price.slice(3)) * quantity}
                    </div>
                  </div>
                  <TbTrashFilled
                    onClick={() => handleRemoveFromCart(id)}
                    className="h-[22px] w-[22px] cursor-pointer text-[#B88E2F] duration-200 hover:scale-125 md:h-[28px] md:w-[28px]"
                  />
                </div>
              )
            })
          ) : (
            <div className="mt-[70px] text-center text-[24px] md:text-[32px]">
              🛒 is empty 🤷‍♀️
            </div>
          )}
        </motion.div>
        <motion.div
          variants={animation}
          className="bg-[#F9F1E7] px-[30px] py-[15px] md:px-[75px] xl:h-[390px] xl:w-[390px]"
        >
          <div className="text-[26px] font-semibold md:text-[32px]">
            Cart Totals
          </div>
          <div className="mt-[60px] flex items-center justify-between">
            <div>Subtotal</div>
            <div>
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
          <div className="mt-[30px] flex items-center justify-between">
            <div>Total</div>
            <div>
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
          <Link
            to={ROUTES.CHECKOUT}
            className="mt-[42px] block rounded-[15px] border border-black py-[14px] text-center text-[20px] duration-200 hover:bg-black hover:text-white"
          >
            Check Out
          </Link>
        </motion.div>
      </motion.div>
      <Recommended />
    </section>
  )
}

export default Cart
