import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import ProductList from '../Shop/ProductList';
import { Product } from '../../data/productTypes';
import { useAppDispatch } from '../store/hooks';
import { addToCart, addToComparison, addToFavorite } from '../store/slices/cartSlice';
import products from '../../data/products.json'
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';

const Home = () => {

  const pagination = {
    clickable: false,
    
    renderBullet: function (__: number, className: number | string) {
      
      return `<span class='${className} w-7 h-7 border bg-white border-orange-400'><span class=" w-3 h-3 border rounded-full flex items-center bg-orange-400 my-auto mt-[7px] mx-auto"></span></span>`;
    },
  };

  const dispatch = useAppDispatch();
  const handleAddToCart = (currProduct: Product) => {
    dispatch(addToCart(currProduct));
  };

  const handleAddToFavorite = (currProduct: Product) => {
    dispatch(addToFavorite(currProduct));
  };

  const handleAddToComparing = (currProduct: Product) => {
    dispatch(addToComparison(currProduct));
  };

  return (
    <>
      <div className="promo relative">
        <img className='w-full' src="images/new-collection.png" alt="collection" />
        <div className="arrival absolute lg:top-20 md:top-10 lg:p-2 xl:top-36 bottom-0 right-8 2xl:max-w-[643px] xl:max-w-[550px] lg:max-w-[450px] md:max-w-[350px] sm:max-w-[250px] ml-auto bg-yellow-50 p-2 md:p-4 xl:py-16 xl:px-11">
          <div className="font-semibold text-[10px] xl:text-base">New Arrival</div>
          <h2 className="font-bold md:text-3xl xl:text-5xl text-amber-500 mt-1">Discover Our<br/>
          New Collection
          </h2>
          <div className="hidden xl:block mt-4 font-medium lg:text-md xl:text-lg">Unveil a realm of captivating creations, where every piece tells a story of grace and allure.</div>
          <Link to={ROUTES.SHOP} className="inline-block text-center md:mt-[15px] lg:mt-[46px] md:py-4 md:px-5 xl:py-6 lg:px-[45px] xl:px-[74px] font-bold bg-amber-500 text-white text-[10px] py-1 px-2 rounded-[5px]">Show More</Link>
        </div>
      </div>
      <div className="range">
        <h2 className="range-header text-center font-bold  md:text-2xl lg:text-3xl mt-6 md:max-2xl:mt-11">Browse The Range</h2>
        <div className="text-center text-[10px] md:max-2xl:text-xl text-zinc-400 mb-11">Where exquisite furnishings await your discerning eye</div>
        <div className="items-wrapper flex justify-center items-center gap-4 ">
        <div className="range-item1">
          <img src="images/dining.png" alt="dining" />
          <div className="text-center mt-5 md:max-2xl:text-2xl font-semibold">Dining</div>
        </div>
        <div className="range-item2">
          <img src="images/living.png" alt="Living" />
          <div className="text-center mt-5 md:max-2xl:text-2xl font-semibold">Living</div>
        </div>
        <div className="range-item3">
          <img src="images/bedroom.png" alt="Bedroom" />
          <div className="text-center mt-5 md:max-2xl:text-2xl font-semibold">Bedroom</div>
        </div>
        </div>
      </div>
      <div className="our-product">
        <h2 className="text-center font-bold md:text-2xl lg:text-3xl md:max-2xl:mt-11 mt-6 md:max-2xl:mb-11">Our Product</h2>
        <ProductList handleAddToComparing={handleAddToComparing} currentPage={1} productsPerPage={8} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite} sortedProducts={products.products}/>
        <Link to={ROUTES.SHOP}><button className='block my-0 mx-auto font-semibold border border-orange-300 text-orange-400 py-3  md:max-2xl:px-20 px-[20px] md:max-2xl:mt-11'>Show More</button></Link>
      </div>
      <div className="slider-component relative md:max-2xl:mt-16">
        <div className='mt-56 md:ml-4 lg:ml-24 mb-60'>
          <h2 className='font-bold text-4xl'>50+ Beautiful rooms<br />
          inspiration</h2>
          <div className='font-medium mt-2 text-gray-500'>Our designer already made a lot of beautiful<br /> prototipe of rooms that inspire you</div>
          <Link to={ROUTES.BLOG} className='block w-[176px] font-semibold mt-9 py-3 px-8 text-white bg-orange-400'>Explore More</Link>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper absolute md:right-0 md:-top-28 lg:right-[40px] lg:-top-32 xl:right-0  xl:-top-36 md:max-w-[350px] lg:max-w-[400px] xl:max-w-4xl"
      >
        <SwiperSlide className='max-w-sm h-582 relative'>
          <img className='h-full' src="images/bed-room-peace.png" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>01 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Bed Room</div>
            <div className='mt-2 font-semibold text-3xl'>Inner Peace</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/kitchen-room.png" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>02 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Kitchen</div>
            <div className='mt-2 font-semibold text-3xl'>Gentle Breeze</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/beautiful1.jpg" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>03 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Living Room</div>
            <div className='mt-2 font-semibold text-3xl'>Blissful Abode</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/beautiful2.jpg" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>04 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Hall</div>
            <div className='mt-2 font-semibold text-3xl'>Sanctuary of Souls</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/beautiful3.jpg" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>05 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Study</div>
            <div className='mt-2 font-semibold text-3xl'>Sanctuary of Souls</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/beautiful4.jpg" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>06 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Sitting-room</div>
            <div className='mt-2 font-semibold text-3xl'>Still Waters Refuge</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='max-w-sm h-582'>
          <img className='h-full' src="images/beautiful5.jpg" />
          <div className='absolute bottom-14 left-7 pt-4 px-7 pb-8 bg-white '>
            <div>07 <div className='h-1 w-7 inline-block border border-t-black mx-2'></div> Bed Room</div>
            <div className='mt-2 font-semibold text-3xl'>Elysian Fields</div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="share-your pt-16 mb-14">
        <div className='text-center font-semibold text-xl text-gray-600'>Share your setup with</div>
        <h2 className='text-center font-bold text-4xl mt-2'>#FuniroFurniture</h2>
        <img src="images/all-yours.png" alt="picture" />
      </div>
    </>
  )
}

export default Home