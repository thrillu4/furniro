import { TbTrashFilled } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/productTypes";

interface CartItemProps {
    item: Product,
    handleRemoveFromCart: (id: string) => void
    handleQuantityChange: (id: string, newQuantity: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, handleRemoveFromCart, handleQuantityChange }) => {
  const [isQuantity, setQuantity] = useState(1);

    const handleQuantityDecrease = () => {
        if (isQuantity > 1) {
            const newQuantity = isQuantity - 1;
            setQuantity(newQuantity);
            handleQuantityChange(item.id, newQuantity);
        }
    };
    
    const handleQuantityIncrease = () => {
        const newQuantity = isQuantity + 1;
        setQuantity(newQuantity);
        handleQuantityChange(item.id, newQuantity);
    };
    const {image, title, id, price, promotional, promotionalPrice} = item

    return (
        <div className="mt-[55px] flex items-center justify-between" key={id}>
            <div className='flex items-center justify-between gap-[50px]'>
            <img className="w-[111px] h-[90px]" src={image} alt="image" />
            <Link to={`/shop/${id}`} className="text-[#9F9F9F]">{title}</Link>
            <div className="ml-[60px] text-[#9F9F9F]">{promotional ? promotionalPrice : price}</div>
            <div className='ml-[70px] flex items-center py-[15px] px-[8px] border border-[#9F9F9F] rounded-[10px]'>
                <button onClick={handleQuantityDecrease}>-</button>
                <div className='mx-[22px]'>{isQuantity}</div>
                <button onClick={handleQuantityIncrease}>+</button>
            </div>
            <div className="ml-[20px]">Rp.{promotional ? parseInt(promotionalPrice.slice(3)) * isQuantity : parseInt(price.slice(3)) * isQuantity}</div>
            </div>
            <TbTrashFilled onClick={() => handleRemoveFromCart(id)} size={28} className='cursor-pointer text-[#B88E2F]'/>
        </div>
    )
}

export default CartItem