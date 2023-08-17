import { MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended"
import { Link } from "react-router-dom"
import { ROUTES } from "../../utils/routes"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import RatingStars from "../SingleProduct/RatingStats"
import { addToCart } from "../store/slices/cartSlice"
import { Product } from "../../data/productTypes"
import { motion } from 'framer-motion';
import { animation } from "../../utils/animation";

const Comparison = () => {
  const comparingItems = useAppSelector(item => item.cart.compare)

  const dispatch = useAppDispatch()

  const handleAddToCart = (currProduct: Product) => {
    dispatch(addToCart(currProduct));
  };

  return (
    <section>
      <motion.div initial={{opacity: 0 }} animate={{opacity: 1, transition: {duration: .5}}} className='bg-shop pt-16 md:pt-16 py-14 rounded-[10px] md:rounded-none md:pb-28 mt-8'>
        <motion.img initial={{y: -100}} animate={{y: 0, transition: {duration: .5}}} className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-2xl md:text-5xl font-semibold'>Product Comparison</h1>
        <motion.div initial='hidden'
        whileInView='visible' className='flex items-center mt-1 gap-2 justify-center'>
          <motion.div variants={animation} className='font-semibold'>Home</motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext/>
          </motion.div>
          <motion.div variants={animation} custom={0.4}>Comparison</motion.div>
        </motion.div>
      </motion.div>
      <motion.form initial='hidden' whileInView='visible' viewport={{amount: 0.2}} className="flex pt-[20px] md:pt-[54px] md:flex-row flex-col md:gap-[0] gap-[20px] justify-evenly">
        <motion.div variants={animation} animate={{x: 100}} className="text-[20px] md:text-[28px] font-medium">
          Go to Product <br />
          page for more <br />
          Products <br />
          <Link className="hover:scale-110 duration-300 inline-block md:text-[20px] text-[16px] text-[#727272] border-b border-[#727272] pb-1" to={ROUTES.SHOP}>View More</Link>
        </motion.div>
        {comparingItems.length ? <div className="flex xl:gap-[45px] md:justify-normal justify-center gap-[10px]">
          {comparingItems.map(item => {
            const {id, image, newProduct, price, promotional, promotionalPrice, subtitle, title, category, color, percent, rating, reviews} = item
            return (
              <motion.div variants={animation} initial={{x: 0, y: 100}} animate={{x: 0, y: 0, transition:{duration: 0.5}}} className="md:max-w-[300px] flex flex-col justify-between border rounded-[10px] border-[#9F9F9F] p-3 pb-6" key={id}>
                <img className="md:w-[280px] mx-auto md:h-[177px] rounded-[10px]" src={image} alt="image" />
                <div className='md:text-[24px] font-medium mt-[20px]'>{title}</div>
                <div className="md:text-[18px] text-[10px] font-medium mt-[6px]">{promotional ? promotionalPrice : price}</div>
                <div className="flex md:flex-row flex-col mt-[7px] md:text-[18px] text-[10px]">
                  <div>{rating}</div>
                  <RatingStars rating={rating}/>
                  <div className="hidden md:block divider border-t bg-[#9F9F9F] h-[24px] w-[1px] ml-[6px] mr-[9px]"></div>
                  <div>{reviews} Reviews</div>
                </div>
                <div className="my-[30px] md:mt-[30px] md:mb-[64px] md:text-[18px] text-[10px] flex flex-col gap-[10px] md:gap-[30px]">
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
                <button onClick={() => handleAddToCart(item)} className="hover:text-[#B88E2F] hover:bg-white duration-300 border border-[#B88E2F] bg-[#B88E2F] py-[5px] md:py-[17px] text-[12px] md:text-[20px] text-white block mx-auto px-[10px] md:px-[48px]">Add To Cart</button>
              </motion.div>
            )
          })}
        </div>
        : <motion.div variants={animation} initial={{x: 0, y: 100}} animate={{x: 0, y: 0, transition:{duration: 0.5}}} className="text-[28px] md:text-left text-center font-bold">Comparison is empty 💫</motion.div>}
        <motion.div variants={animation} className="text-[20px] md:text-[28px] font-medium text-right">
          Go to your cart<br />
          for buy it<br />
          now <br />
          <Link className="hover:scale-110 duration-300 inline-block md:text-[20px] text-[16px] text-[#727272] border-b border-[#727272] pb-1" to={ROUTES.CART}>Open Cart</Link>
        </motion.div>
      </motion.form>
      <Recommended/>
    </section>
  )
}

export default Comparison