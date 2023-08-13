import { MdNavigateNext } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import Recommended from "../Recommended/Recommended";
import { TbTrashFilled } from "react-icons/tb";
import { Product } from "../../data/productTypes";

const Cart = () => {
  const cart = useAppSelector(cart => cart.cart.cart)
  const dispatch = useAppDispatch();

  const changeQuantity = (item: Product, quantity: number) => {
    dispatch(addToCart({ ...item, quantity }));
  };
  
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <section className="cart">
      <div className='bg-shop pt-16 md:pt-16 py-14 rounded-[10px] md:rounded-none md:pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-2xl md:text-5xl font-semibold'>Cart</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Cart</div>
        </div>
      </div>
      <div className="md:py-[70px] py-[30px] flex justify-center flex-col xl:flex-row gap-[30px]">
        <div>
          <ul className="flex items-center justify-between md:gap-[45px] text-xs font-semibold py-[15px] md:px-[145px] px-2 bg-[#F9F1E7]">
            <li>Product</li>
            <li className="md:ml-[80px] md:mr-[100px]">Price</li>
            <li>Quantity</li>
            <li className="md:ml-[25px]">Subtotal</li>
          </ul>
            {cart.length ? cart.map((item) => {
              const {image, title, id, price, promotional, promotionalPrice, quantity} = item 
              return (
                <div className="md:mt-[55px] mt-3 flex items-center justify-between" key={id}>
                  <div className='flex items-center text-[10px] justify-between gap-[10px] md:gap-[50px]'>
                  <img className="w-[60px] h-[60px] md:w-[111px] md:h-[90px]" src={image} alt="image" />
                  <Link to={`/shop/${id}`} className="text-[#9F9F9F]">{title}</Link>
                  <div className="md:ml-[60px] text-[#9F9F9F]">{promotional ? promotionalPrice : price}</div>
                  <div className='md:ml-[70px] flex items-center md:py-[15px] py-[6px] px-[8px] border border-[#9F9F9F] rounded-[10px]'>
                      <button onClick={() => quantity === 1 ? null : changeQuantity(item, quantity - 1)}>-</button>
                      <div className='md:mx-[22px] mx-[10px]'>{quantity}</div>
                      <button onClick={() => changeQuantity(item, quantity + 1)}>+</button>
                  </div>
                  <div className="md:ml-[20px]">Rp.{promotional ? parseInt(promotionalPrice.slice(3)) * quantity : parseInt(price.slice(3)) * quantity}</div>
                  </div>
                  <TbTrashFilled onClick={() => handleRemoveFromCart(id)} className='cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px] text-[#B88E2F]'/>
              </div>
              )
            }) : <div className='text-center mt-[70px] text-[24px] md:text-[32px]'>🛒 is empty 🤷‍♀️</div>}
        </div>
        <div className="xl:w-[390px] xl:h-[390px] bg-[#F9F1E7] md:px-[75px] px-[30px] py-[15px]">
          <div className="text-[26px] md:text-[32px] font-semibold">Cart Totals</div>
          <div className="flex items-center justify-between mt-[60px]">
            <div>Subtotal</div>
            <div>Rp. {cart.map(({price, promotional, promotionalPrice, quantity}) => (promotional ? parseInt(promotionalPrice.slice(3)) : parseInt(price.slice(3))) * quantity).reduce((prev, curr) => prev + curr, 0)}</div>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <div>Total</div>
            <div>Rp. {cart.map(({price, promotional, promotionalPrice, quantity}) => (promotional ? parseInt(promotionalPrice.slice(3)) : parseInt(price.slice(3))) * quantity).reduce((prev, curr) => prev + curr, 0)}</div>
          </div>
          <Link to={ROUTES.CHECKOUT} className="block border border-black text-[20px] py-[14px] rounded-[15px] text-center mt-[42px]">Check Out</Link>
        </div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Cart