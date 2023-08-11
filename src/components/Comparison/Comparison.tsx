import { MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended"
import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import RatingStars from "../SingleProduct/RatingStats"
import { addToCart } from "../store/slices/cartSlice"
import { Product } from "../../data/productTypes"

const Comparison = () => {
  const comparingItems = useAppSelector(item => item.cart.compare)

  const dispatch = useAppDispatch()

  const handleAddToCart = (currProduct: Product) => {
    dispatch(addToCart(currProduct));
  };

  return (
    <section>
      <div className='bg-shop pt-16 pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-5xl font-semibold'>Product Comparison</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Comparison</div>
        </div>
      </div>
      <div className="flex pt-[54px] justify-evenly">
        <div className="text-[28px] font-medium">
        Go to Product <br />
        page for more <br />
        Products <br />
        <Link className="inline-block text-[20px] text-[#727272] border-b border-[#727272] pb-1" to={ROUTES.SHOP}>View More</Link>
        </div>
        {comparingItems.length ? <div className="flex gap-[45px]">
          {comparingItems.map(item => {
            const {id, image, newProduct, price, promotional, promotionalPrice, subtitle, title, category, color, percent, rating, reviews} = item
            return (
              <div className="max-w-[300px] flex flex-col justify-between border rounded-[10px] border-[#9F9F9F] p-3 pb-6" key={id}>
                <img className="w-[280px] mx-auto h-[177px] rounded-[10px]" src={image} alt="image" />
                <div className='text-[24px] font-medium mt-[20px]'>{title}</div>
                <div className="text-[18px] font-medium mt-[6px]">{promotional ? promotionalPrice : price}</div>
                <div className="flex mt-[7px] text-[18px]">
                  <div>{rating}</div>
                  <RatingStars rating={rating}/>
                  <div className="divider border-t bg-[#9F9F9F] h-[24px] w-[1px] ml-[6px] mr-[9px]"></div>
                  <div>{reviews} Reviews</div>
                </div>
                <div className="mt-[30px] mb-[64px] text-[18px] flex flex-col gap-[30px]">
                  <div><span className="font-semibold">Subtitle</span> : {subtitle}</div>
                  <div><span className="font-semibold">Category</span> : {category}</div>
                  <div className="flex items-center"><span className="font-semibold">Color</span> :<div className='w-[30px] h-[30px] rounded-full ml-3' style={{ backgroundColor: color }}></div></div>
                  {newProduct && <div>
                    <span className="font-semibold">Product</span> : New
                  </div>}
                  {percent && <div>
                    <span className="font-semibold">Discount</span> {percent}
                  </div>}
                </div>
                <button onClick={() => handleAddToCart(item)} className="border border-[#B88E2F] bg-[#B88E2F] py-[17px] text-[20px] text-white block mx-auto px-[48px]">Add To Cart</button>
              </div>
            )
          })}
        </div>
        : <div className="text-[28px] font-bold">Comparison is empty 🕳</div>}
        <div className="text-[28px] font-medium text-right">
          Go to your cart<br />
          for buy it<br />
          now <br />
          <Link className="inline-block text-[20px] text-[#727272] border-b border-[#727272] pb-1" to={ROUTES.CART}>Open Cart</Link>
        </div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Comparison