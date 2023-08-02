import { useState } from "react";
import { MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [transferPayment, setTransferPayment] = useState(true);
  const [deliveryPayment, setDeliveryPayment] = useState(false);

  const toggleTransferPayment = () => {
    setTransferPayment(true);
    setDeliveryPayment(false)
  };

  const toggleDeliveryPayment = () => {
    setDeliveryPayment(true)
    setTransferPayment(false)
  };

  return (
    <section className="check-out">
      <div className='bg-shop pt-16 pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-5xl font-semibold'>Checkout</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Checkout</div>
        </div>
      </div>
      <div className="mt-16">
        <form method="post" className="flex justify-evenly gap-7 ">
          <div className="inputs w-[608px] px-14 flex flex-col">
            <div className="font-semibold text-4xl mb-9">Billing details</div>
            <div className="flex gap-8 mb-9">
              <div className="flex flex-col">
                <label className="font-semibold mb-6" htmlFor="firstName">First Name</label>
                <input className="border rounded-xl border-gray-500 py-6 " type="text" name="firstName" id="firstName" required/>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-6" htmlFor="lastName">Last Name</label>
                <input className=" border rounded-xl border-gray-500 py-6 " type="text" name="lastName" id="lastName" required/>
              </div>
            </div>
            <label htmlFor='company' className="font-semibold mb-6">Company Name (Optional)</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" minLength={3} type="text" name="company" id="company"/>
            <label htmlFor='region' className="font-semibold mb-6">Country / Region</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="region" id="region" placeholder="Sri Lanka" required/>
            <label htmlFor='address' className="font-semibold mb-6">Street address</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="address" id="address" required/>
            <label htmlFor='city' className="font-semibold mb-6">Town / City</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="city" id="city" required/>
            <label htmlFor='province' className="font-semibold mb-6">Province</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="province" id="province" placeholder="Western Province" />
            <label htmlFor='zip' className="font-semibold mb-6">ZIP code</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="number" name="zip" id="zip" />
            <label htmlFor='phone' className="font-semibold mb-6">Phone</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="tel" name="phone" id="phone" required/>
            <label htmlFor='email-add' className="font-semibold mb-6">Email address</label>
            <input className="mb-9 border rounded-xl border-gray-500 py-6 px-7" type="text" name="email-add" id="email-add"/>
            <textarea className="mb-14 resize-none py-6 px-7 border rounded-xl border-gray-500" name="information" id="information" placeholder="Additional information"/>
            </div>
          <div className="form-prices w-[608px] pt-[87px] px-10">
            <div className="flex justify-between items-center text-2xl mb-3">
              <div>Product</div>
              <div>Subtotal</div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div><span className="text-gray-400">Asgaard sofa</span> x 1</div>
              <div>Rs. 250,000.00</div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div >Subtotal</div>
              <div>Rs. 250,000.00</div>
            </div>
            <div className="flex justify-between items-center mb-[60px]">
              <div >Total</div>
              <div className="font-bold text-2xl text-orange-400">Rs. 250,000.00</div>
            </div>
            <div className="flex gap-4 items-center mb-3">
              <input onChange={toggleTransferPayment} checked={transferPayment} type="checkbox" name="Transfer" id="Transfer" className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px] "/>
              <label htmlFor="Transfer">Direct Bank Transfer</label>
            </div>
            <p className="mb-6 font-light text-[#9F9F9F]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className="flex gap-4 items-center mb-6 text-[#9F9F9F]">
              <input onChange={toggleDeliveryPayment} checked={deliveryPayment} type="checkbox"  name="Delivery" id="Delivery" className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px] "/>
              <label htmlFor="Delivery">Cash On Delivery</label>
            </div>
            <p className="mb-10">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link to={ROUTES.PrivacyPolicies} className="font-bold">privacy policy</Link>.</p>
            <button type="submit" className="block mx-auto text-xl rounded-[15px] border border-black py-[17px] px-[102px]">Place order</button>
          </div>
        </form>
      </div>
      <Recommended/>
    </section>
  )
}

export default Checkout