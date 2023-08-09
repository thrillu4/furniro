import {useState } from 'react';
import { SlArrowRight } from 'react-icons/sl'
import { Product } from '../../data/productTypes';
import RatingStars from './RatingStats';
import { useAppDispatch } from '../store/slices/hooks';
import { addToCart } from '../store/cartSlice';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import TabContainer from './TabContainer';


type SingleProductProps = {
  product: Product;
};

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const {id, image, price, promotional, promotionalPrice, title, category, rating, reviews, color} = product;

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const [productQuantity, setProductQuantity] = useState(1);

  const handleQuantityDecrease = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setProductQuantity(productQuantity + 1);
  };
  return (
    <>
      <div className="flex gap-8 items-center mt-12 py-[38px] px-[100px] bg-[#F9F1E7] ">
        <div className='text-[#9F9F9F]'>Home</div>
        <SlArrowRight/>
        <div className='text-[#9F9F9F]'>Shop</div>
        <SlArrowRight/>
        <div className="divider border-t bg-[#9F9F9F] h-9 w-0.5 mx-9"></div>
        <div>{title}</div>
      </div>
      <div key={id} className="single_product-item pt-[35px] pb-[58px] flex justify-center gap-[105px]">
        <img className='w-[500px] h-[400px] object-cover' src={image} alt="image" />
        <div className="options">
          <div className='text-[42px]'>{title}</div>
          <div className='text-[#9F9F9F] text-[24px]'>{promotional ? promotionalPrice : price}</div>
          <div className="flex items-center mt-[15px]">
            <RatingStars rating={rating}/>
            <div className="divider border-t bg-[#9F9F9F] h-[30px] w-[1px] mx-9"></div>
            <div className='text-[#9F9F9F] text-[13px]'>{reviews} Customer Review</div>
          </div>
          <p className='text-[13px] mt-[13px]'>A chair is a functional piece of furniture designed for sitting.  It typically consists of a seat,<br /> a backrest, and sometimes armrests. Chairs come in various styles, materials, and designs, <br /> offering comfort and support for different purposes such as dining, relaxation, or office work.</p>
          <div className='text-[#9F9F9F] mt-[18px]'>Color</div>
          <div className='w-[30px] h-[30px] rounded-full mt-3' style={{ backgroundColor: color }}></div>
          <div className="flex items-center justify-between mt-[32px]">
            <div className='flex items-center py-[20px] px-[15px] border border-[#9F9F9F] rounded-[10px]'>
              <button onClick={handleQuantityDecrease}>-</button>
              <div className='mx-[35px]'>{productQuantity}</div>
              <button onClick={handleQuantityIncrease}>+</button>
            </div>
            <button className='border py-[17px] px-[48px] text-[20px] border-black rounded-[15px]' onClick={() => handleAddToCart(product)}>Add To Cart</button>
            <button className='border py-[17px] px-[48px] text-[20px] border-black rounded-[15px]'><span>+ </span>Compare</button>
          </div>
          <div className='mt-[100px]'>
            <div className='text-[#9F9F9F] mb-[12px]'>Category <span className='ml-[16px] mr-[12px]'>:</span> {category}</div>
            <div className='text-[#9F9F9F] mb-[12px]'>Tags <span className='ml-[16px] mr-[12px]'>:</span> Sofa, Chair, Home, Shop</div>
            <div className='text-[#9F9F9F] mb-[12px] flex'>Share <span className='ml-[16px] mr-[12px]'>:</span>
            <div className="inline-flex items-center gap-[25px] text-black"><Link target="_blank" rel="noopener noreferrer" to={'https://www.facebook.com/'}><BiLogoFacebookCircle size={24}/></Link><Link target="_blank" rel="noopener noreferrer" to={'https://www.linkedin.com/'}><AiFillLinkedin size={24}/></Link><Link target="_blank" rel="noopener noreferrer" to={'https://twitter.com/'}><AiFillTwitterCircle size={24}/></Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-[60px]'>
        <TabContainer reviews={reviews}/>
      <div className='flex justify-center items-center gap-[30px]'>
        <img src="/images/cloud-sofa1.png" alt="sofa" />
        <img className='bg-orange' src="/images/cloud-sofa2.png" alt="sofa" />
      </div>
      </div>
    </>
  )
}

export default SingleProduct