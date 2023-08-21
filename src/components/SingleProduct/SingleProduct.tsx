import { motion } from "framer-motion"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { SlArrowRight } from "react-icons/sl"
import { Link } from "react-router-dom"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { Product } from "../../data/productTypes"
import { animation } from "../../utils/animation"
import { ROUTES } from "../../utils/routes"
import { useAppDispatch } from "../store/hooks"
import { addToCart, addToComparison } from "../store/slices/cartSlice"
import RatingStars from "./RatingStats"
import TabContainer from "./TabContainer"

type SingleProductProps = {
  product: Product
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  const [productQuantity, setProductQuantity] = useState(1)
  const {
    id,
    image,
    price,
    promotional,
    promotionalPrice,
    title,
    category,
    rating,
    reviews,
    color,
  } = product

  const url = window.location.href

  const dispatch = useAppDispatch()

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: productQuantity }))
  }

  const handleAddToComparing = (currProduct: Product) => {
    dispatch(addToComparison(currProduct))
  }

  const handleQuantityDecrease = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }

  const handleQuantityIncrease = () => {
    setProductQuantity(productQuantity + 1)
  }
  return (
    <motion.div initial="hidden" whileInView="visible">
      <Helmet>
        <meta name="description" content={`${title} from our shop`} />
        <title>{title}</title>
      </Helmet>
      <motion.div
        variants={animation}
        custom={2}
        className="mt-12 flex items-center gap-[10px] bg-[#F9F1E7] p-3 text-xs md:gap-8 md:px-[100px] md:py-[38px] md:text-base "
      >
        <div className="text-[#9F9F9F]">Home</div>
        <SlArrowRight />
        <div className="text-[#9F9F9F]">Shop</div>
        <SlArrowRight />
        <div className="divider mx-9 h-6 w-0.5 border-t bg-[#9F9F9F] md:h-9"></div>
        <div>{title}</div>
      </motion.div>
      <div
        key={id}
        className="single_product-item flex flex-col justify-center py-[20px] md:flex-row md:gap-[20px] md:pb-[58px] md:pt-[35px] xl:gap-[105px]"
      >
        <motion.img
          variants={animation}
          className="object-cover md:h-[400px] md:w-[500px]"
          src={image}
          alt="image"
        />
        <motion.div
          variants={animation}
          initial={{ x: 200 }}
          className="options"
        >
          <div className="text-[30px] md:text-[42px]">{title}</div>
          <div className="text-[20px] text-[#9F9F9F] md:text-[24px]">
            {promotional ? promotionalPrice : price}
          </div>
          <div className="mt-[15px] flex items-center">
            <RatingStars rating={rating} />
            <div className="divider mx-9 h-[30px] w-[1px] border-t bg-[#9F9F9F]"></div>
            <div className="text-[13px] text-[#9F9F9F]">
              {reviews} Customer Review
            </div>
          </div>
          <p className="mt-[13px] text-[13px]">
            A chair is a functional piece of furniture designed for sitting. It
            typically consists of a seat,
            <br /> a backrest, and sometimes armrests. Chairs come in various
            styles, materials, and designs, <br /> offering comfort and support
            for different purposes such as dining, relaxation, or office work.
          </p>
          <div className="mt-[18px] text-[#9F9F9F]">Color</div>
          <div
            className="mt-3 h-[30px] w-[30px] rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <div className="mt-[32px] flex items-center justify-between">
            <div className="flex items-center rounded-[10px] border border-[#9F9F9F] px-2 py-[17px] md:px-[15px] md:py-[20px]">
              <button
                onClick={handleQuantityDecrease}
                className="transition-all duration-300 hover:scale-125"
              >
                -
              </button>
              <div className="mx-6 xl:mx-[35px]">{productQuantity}</div>
              <button
                onClick={handleQuantityIncrease}
                className="transition-all duration-300 hover:scale-125"
              >
                +
              </button>
            </div>
            <Link
              to={ROUTES.CART}
              className="rounded-[15px] border border-black px-2 py-[17px] transition-all duration-300 hover:bg-black hover:text-white md:px-[28px] xl:px-[48px] xl:text-[20px]"
              onClick={() => handleAddToCart(product)}
            >
              Buy Now
            </Link>
            <button
              onClick={() => handleAddToComparing(product)}
              className="rounded-[15px] border border-black px-2 py-[17px] transition-all duration-300 hover:bg-black hover:text-white xl:px-[48px] xl:text-[20px]"
            >
              <span>+ </span>Compare
            </button>
          </div>
          <div className="mt-[70px] md:mt-[100px]">
            <div className="mb-[12px] text-[#9F9F9F]">
              Category <span className="ml-[16px] mr-[12px]">:</span> {category}
            </div>
            <div className="mb-[12px] text-[#9F9F9F]">
              Tags <span className="ml-[16px] mr-[12px]">:</span> Sofa, Chair,
              Home, Shop
            </div>
            <div className="mb-[12px] flex text-[#9F9F9F]">
              Share <span className="ml-[16px] mr-[12px]">:</span>
              <div className="inline-flex items-center gap-[25px] text-black">
                <FacebookShareButton
                  url={url}
                  className="duration-200 hover:scale-110"
                >
                  <BiLogoFacebookCircle className="h-[26px] w-[26px]" />
                </FacebookShareButton>
                <LinkedinShareButton
                  url={url}
                  className="duration-200 hover:scale-110"
                >
                  <AiFillLinkedin className="h-[26px] w-[26px]" />
                </LinkedinShareButton>
                <TwitterShareButton
                  url={url}
                  className="duration-200 hover:scale-110"
                >
                  <AiFillTwitterCircle className="h-[26px] w-[26px]" />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="py-[30px] md:py-[60px]">
        <TabContainer reviews={reviews} />
        <div className="flex items-center justify-center md:gap-[30px]">
          <img
            className="hidden w-full xl:inline"
            src="/images/cloud-sofa1.png"
            alt="sofa"
          />
          <img className="w-full" src="/images/cloud-sofa2.png" alt="sofa" />
        </div>
      </div>
    </motion.div>
  )
}

export default SingleProduct
