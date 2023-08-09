import { MdNavigateNext } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../store/slices/hooks"
import { removeFromCart } from "../store/cartSlice";

import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";
import Recommended from "../Recommended/Recommended";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const cart = useAppSelector(cart => cart.cart.cart)
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
  };

  useEffect(() => {
    let newSubtotal = 0;
    const newQuantities: { [key: string]: number } = {};
  
    cart.forEach((item) => {
      const itemPrice = item.promotional
        ? parseInt(item.promotionalPrice.slice(3))
        : parseInt(item.price.slice(3));
      newSubtotal += itemPrice * (quantities[item.id] || 1);
      newQuantities[item.id] = quantities[item.id] || 1;
    });
  
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  }, [cart, quantities]);
  
  useEffect(() => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      ...cart.reduce((acc: {[key: string]: number }, item) => {
        acc[item.id] = quantities[item.id] || 1;
        return acc;
      }, {}),
    }));
  }, [cart]);

  return (
    <section className="cart">
      <div className='bg-shop pt-16 pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-5xl font-semibold'>Cart</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Cart</div>
        </div>
      </div>
      <div className="py-[70px] flex justify-center gap-[30px]">
        <div>
          <ul className="flex items-center justify-between gap-[45px] font-semibold py-[15px] px-[145px] bg-[#F9F1E7]">
            <li>Product</li>
            <li className="ml-[80px] mr-[100px]">Price</li>
            <li>Quantity</li>
            <li className="ml-[25px]">Subtotal</li>
          </ul>
            {cart.length ? cart.map((item) => {
              return <CartItem handleQuantityChange={handleQuantityChange } item={item} key={item.id} handleRemoveFromCart={handleRemoveFromCart}/>
            }) : <div className='text-center mt-[70px] text-[32px]'>🛒 is empty 🤷‍♀️</div>}
        </div>
        <div className="w-[390px] h-[390px] bg-[#F9F1E7] px-[75px] py-[15px]">
          <div className="text-[32px] font-semibold">Cart Totals</div>
          <div className="flex items-center justify-between mt-[60px]">
            <div>Subtotal</div>
            <div>{subtotal}</div>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <div>Total</div>
            <div>{total}</div>
          </div>
          <Link to={ROUTES.CHECKOUT} className="block border border-black text-[20px] py-[14px] rounded-[15px] text-center mt-[42px]">Check Out</Link>
        </div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Cart