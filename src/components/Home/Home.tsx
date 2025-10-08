import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { Product } from "../../data/productTypes"
import products from "../../data/products.json"
import { animation } from "../../utils/animation"
import { ROUTES } from "../../utils/routes"
import ProductList from "../Shop/ProductList"
import { useAppDispatch } from "../store/hooks"
import {
  addToCart,
  addToComparison,
  addToFavorite,
} from "../store/slices/cartSlice"

const Home = () => {
  const pagination = {
    clickable: false,

    renderBullet: function (__: number, className: number | string) {
      return `<span class='${className} w-7 h-7 border bg-white border-orange-400'><span class=" w-3 h-3 border rounded-full flex items-center bg-orange-400 my-auto mt-[7px] mx-auto"></span></span>`
    },
  }

  const dispatch = useAppDispatch()
  const handleAddToCart = (currProduct: Product) => {
    dispatch(addToCart(currProduct))
  }

  const handleAddToFavorite = (currProduct: Product) => {
    dispatch(addToFavorite(currProduct))
  }

  const handleAddToComparing = (currProduct: Product) => {
    dispatch(addToComparison(currProduct))
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Home page Furniro" />
        <title>Furniro</title>
      </Helmet>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="promo relative"
      >
        <motion.img
          variants={animation}
          className="hidden w-full md:block"
          src="images/new-collection.png"
          alt="collection"
        />
        <motion.img
          custom={1}
          variants={animation}
          className="block h-[80vh] w-full object-cover md:hidden"
          src="images/phone-wall-7.jpg"
          alt="collection"
        />
        <motion.div
          custom={2}
          variants={animation}
          className="arrival absolute bottom-12 left-12 ml-auto rounded  bg-[#fff3de] p-2 sm:max-w-[250px]   md:bottom-0 md:right-0 md:max-w-[320px] md:bg-yellow-50 md:p-4 lg:bottom-20 lg:max-w-[450px] lg:p-2 xl:top-36 xl:max-w-[550px] xl:px-11 xl:py-16 2xl:max-w-[643px]"
        >
          <div className="text-[10px] font-semibold xl:text-base">
            New Arrival
          </div>
          <h2 className="mt-1 font-bold text-amber-500 md:text-3xl xl:text-5xl">
            Discover Our
            <br />
            New Collection
          </h2>
          <div className="lg:text-md mt-4 hidden font-medium md:block md:text-[12px] xl:text-lg">
            Unveil a realm of captivating creations, where every piece tells a
            story of grace and allure.
          </div>
          <Link
            to={ROUTES.SHOP}
            className="inline-block rounded-[5px] border border-amber-500 bg-amber-500 px-2 py-1 text-center text-[10px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-amber-500 md:mt-[15px] md:px-5 md:py-4 md:text-base lg:mt-[46px] lg:px-[45px] xl:px-[74px] xl:py-6"
          >
            Show More
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="range"
      >
        <h2 className="range-header mt-6 text-center  font-bold md:mt-11 md:text-2xl lg:text-3xl">
          Browse The Range
        </h2>
        <div className="mb-11 text-center text-[10px] text-zinc-400 md:text-xl">
          Where exquisite furnishings await your discerning eye
        </div>
        <div className="items-wrapper flex items-center justify-center gap-4 ">
          <motion.div variants={animation} custom={1}>
            <img src="images/dining.png" alt="dining" />
            <div className="mt-5 text-center font-semibold md:text-2xl">
              Dining
            </div>
          </motion.div>
          <motion.div variants={animation} custom={2}>
            <img src="images/living.png" alt="Living" />
            <div className="mt-5 text-center font-semibold md:text-2xl">
              Living
            </div>
          </motion.div>
          <motion.div variants={animation} custom={3}>
            <img src="images/bedroom.png" alt="Bedroom" />
            <div className="mt-5 text-center font-semibold md:text-2xl">
              Bedroom
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="our-product">
        <h2 className="mt-6 text-center font-bold md:mb-11 md:mt-11 md:text-2xl lg:text-3xl">
          Our Product
        </h2>
        <ProductList
          handleAddToComparing={handleAddToComparing}
          currentPage={1}
          productsPerPage={8}
          handleAddToCart={handleAddToCart}
          handleAddToFavorite={handleAddToFavorite}
          sortedProducts={products.products}
        />
        <Link to={ROUTES.SHOP}>
          <button
            className="mx-auto my-0 mt-4 block border border-orange-300 px-[20px] py-3 text-[12px] font-semibold  text-orange-400 transition-all duration-300 hover:bg-orange-400 hover:text-white 
                md:mt-11 md:px-20 md:text-base"
          >
            Show More
          </button>
        </Link>
      </div>
      <div className="slider-component relative mt-[50px] md:mt-[100px] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-[40px]">
            <div className="w-full md:w-2/5 lg:w-1/3 flex-shrink-0 xl:pl-[100px]">
              <h2 className="font-bold md:text-xl lg:text-4xl">
                50+ Beautiful rooms inspiration
              </h2>
              <div className="mt-2  text-sm font-medium text-gray-500 md:text-[12px] lg:text-base">
                Our designer already made a lot of beautiful prototype of rooms
                that inspire you
              </div>
              <Link
                to={ROUTES.BLOG}
                className="mt-5 block w-[150px] border border-orange-400 bg-orange-400 py-3 text-center text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-orange-400 md:mt-9 md:w-[176px] xl:text-base"
              >
                Explore More
              </Link>
            </div>
            <div className="w-full md:w-3/5 lg:w-2/3 flex-shrink-0">
              <Swiper
                effect={"coverflow"}
                breakpoints={{
                  300: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    pagination: false,
                  },
                }}
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 1,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={pagination}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper w-full h-[250px] md:h-[380px] lg:h-[480px] xl:h-[580px]"
              >
                <SwiperSlide className="h-full max-w-[400px] relative">
                  <img className="h-full" src="images/bed-room-peace.png" />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      01{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Bed Room
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Inner Peace
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/kitchen-room.png"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      02{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Kitchen
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Gentle Breeze
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/beautiful1.jpg"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      03{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Living Room
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Blissful Abode
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/beautiful2.jpg"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      04{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Hall
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Sanctuary of Souls
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/beautiful3.jpg"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      05{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Study
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Sanctuary of Souls
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/beautiful4.jpg"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      06{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Sitting-room
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Still Waters Refuge
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="h-full max-w-[400px]">
                  <img
                    className="h-full object-cover w-full"
                    src="images/beautiful5.jpg"
                  />
                  <div className="absolute bottom-8 left-1 bg-white p-2 text-[10px] xl:text-base md:bottom-14 md:left-2 md:px-7 md:pb-8 md:pt-4 lg:left-7 ">
                    <div>
                      07{" "}
                      <div className="mx-2 hidden h-1 w-7 border border-t-black md:inline-block"></div>{" "}
                      Bed Room
                    </div>
                    <div className="mt-2 font-semibold md:text-sm lg:text-3xl">
                      Elysian Fields
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        className="share-your mb-14 pt-16"
      >
        <div className="text-center font-semibold text-gray-600 md:text-xl">
          Share your setup with
        </div>
        <h2 className="mt-2 text-center font-bold md:text-4xl">
          #FuniroFurniture
        </h2>
        <motion.img
          variants={animation}
          custom={2}
          src="images/all-yours.png"
          alt="picture"
        />
      </motion.div>
    </>
  )
}

export default Home
