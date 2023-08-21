import { motion } from "framer-motion"
import { useState } from "react"
import { MdNavigateNext } from "react-icons/md"
import { Link } from "react-router-dom"
import { animation } from "../../utils/animation"
import { ROUTES } from "../../utils/routes"
import Recommended from "../Recommended/Recommended"
import { useAppSelector } from "../store/hooks"
import { Helmet } from "react-helmet"

const Checkout = () => {
  const [transferPayment, setTransferPayment] = useState(true)
  const [deliveryPayment, setDeliveryPayment] = useState(false)
  const cart = useAppSelector((cart) => cart.cart.cart)

  const toggleTransferPayment = () => {
    setTransferPayment(true)
    setDeliveryPayment(false)
  }

  const toggleDeliveryPayment = () => {
    setDeliveryPayment(true)
    setTransferPayment(false)
  }

  return (
    <section className="check-out">
      <Helmet>
        <meta
          name="description"
          content="Checkout page confirming the purchase"
        />
        <title>Checkout Page</title>
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
          Checkout
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
            Checkout
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="md:mt-16">
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          method="post"
          className="flex flex-col justify-evenly md:gap-7 xl:flex-row "
        >
          <motion.div
            variants={animation}
            animate={{ x: 100 }}
            className="inputs flex flex-col md:px-14 xl:w-[608px]"
          >
            <div className="mb-9 mt-[30px] text-2xl font-semibold md:mt-0 md:text-4xl">
              Billing details
            </div>
            <div className="mb-9 flex flex-col gap-8 md:flex-row">
              <div className="flex flex-col">
                <label className="mb-6 font-semibold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-6 font-semibold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="rounded-xl border  border-gray-500 px-7 py-6 duration-200 hover:border-black"
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <label htmlFor="company" className="mb-6 font-semibold">
              Company Name (Optional)
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              minLength={3}
              type="text"
              name="company"
              id="company"
            />
            <label htmlFor="region" className="mb-6 font-semibold">
              Country / Region
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="text"
              name="region"
              id="region"
              placeholder="Sri Lanka"
              required
            />
            <label htmlFor="address" className="mb-6 font-semibold">
              Street address
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="text"
              name="address"
              id="address"
              required
            />
            <label htmlFor="city" className="mb-6 font-semibold">
              Town / City
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="text"
              name="city"
              id="city"
              required
            />
            <label htmlFor="province" className="mb-6 font-semibold">
              Province
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="text"
              name="province"
              id="province"
              placeholder="Western Province"
            />
            <label htmlFor="zip" className="mb-6 font-semibold">
              ZIP code
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="number"
              name="zip"
              id="zip"
            />
            <label htmlFor="phone" className="mb-6 font-semibold">
              Phone
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="tel"
              name="phone"
              id="phone"
              required
            />
            <label htmlFor="email-add" className="mb-6 font-semibold">
              Email address
            </label>
            <input
              className="mb-9 rounded-xl border border-gray-500 px-7 py-6 duration-200 hover:border-black"
              type="text"
              name="email-add"
              id="email-add"
            />
            <textarea
              className="mb-14 resize-none rounded-xl border border-gray-500 px-7 py-6"
              name="information"
              id="information"
              placeholder="Additional information"
            />
          </motion.div>
          <motion.div
            variants={animation}
            className="form-prices md:px-10 xl:w-[608px] xl:pt-[87px]"
          >
            <div className="mb-3 flex items-center justify-between text-2xl">
              <div>Product</div>
              <div>Subtotal</div>
            </div>
            {cart.length > 0 && (
              <>
                {cart.map(
                  ({
                    title,
                    id,
                    quantity,
                    promotional,
                    promotionalPrice,
                    price,
                  }) => {
                    return (
                      <div
                        key={id}
                        className="mb-3 flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="text-[#9F9F9F]">{title} </div>
                          <div>
                            {" "}
                            <span className="mx-[11px]">x</span> {quantity}
                          </div>
                        </div>
                        <div>
                          Rp.
                          {promotional
                            ? parseInt(promotionalPrice.slice(3)) * quantity
                            : parseInt(price.slice(3)) * quantity}
                        </div>
                      </div>
                    )
                  },
                )}
                <div className="mb-3 flex items-center justify-between">
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
                <div className="mb-[60px] flex items-center justify-between">
                  <div>Total</div>
                  <div className="text-2xl font-bold text-orange-400">
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
              </>
            )}
            <div className="mb-3 flex items-center gap-4">
              <input
                onChange={toggleTransferPayment}
                checked={transferPayment}
                type="checkbox"
                name="Transfer"
                id="Transfer"
                className="h-[14px] w-[14px] rounded-full border border-[#9F9F9F] duration-200 hover:border-black "
              />
              <label htmlFor="Transfer">Direct Bank Transfer</label>
            </div>
            <p className="mb-6 font-light text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="mb-6 flex items-center gap-4 text-[#9F9F9F]">
              <input
                onChange={toggleDeliveryPayment}
                checked={deliveryPayment}
                type="checkbox"
                name="Delivery"
                id="Delivery"
                className="h-[14px] w-[14px] rounded-full border border-[#9F9F9F] duration-200 hover:border-black "
              />
              <label htmlFor="Delivery">Cash On Delivery</label>
            </div>
            <p className="mb-10">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link to={ROUTES.PrivacyPolicies} className="font-bold">
                privacy policy
              </Link>
              .
            </p>
            <button
              type="submit"
              className="mx-auto block rounded-[15px] border border-black px-[50px] py-[17px] text-xl duration-300 hover:bg-black hover:text-white md:px-[102px]"
            >
              Place order
            </button>
          </motion.div>
        </motion.form>
      </div>
      <Recommended />
    </section>
  )
}

export default Checkout
