import { MdNavigateNext } from "react-icons/md"

const Checkout = () => {
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
        <div className="px-20 pt-9">
          <form method="post" className="flex justify-center gap-7 ">
            <div className="inputs w-[453px] px-14 flex flex-col">
            <div className="font-semibold text-4xl mb-9">Billing details</div>
            <div className="flex mb-9">
              <div className="w-[211px]">
                <label className="font-semibold mb-6" htmlFor="firstName">First Name</label>
                <input className="border rounded-xl border-gray-500 py-6 " type="text" name="firstName" id="firstName" />
              </div>
              <div className="w-[211px]">
                <label className="font-semibold mb-6" htmlFor="lastName">Last Name</label>
                <input className=" border rounded-xl border-gray-500 py-6 " type="text" name="lastName" id="lastName" />
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
            <div className="form-prices"></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Checkout