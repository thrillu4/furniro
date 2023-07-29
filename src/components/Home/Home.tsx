import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {BsFillShareFill} from 'react-icons/bs'
import {MdCompareArrows} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'

const Home = () => {

  const pagination = {
    clickable: false,
    
    renderBullet: function (__: number, className: number | string) {
      
      return `<span class='${className} w-7 h-7 border bg-white border-orange-400'><span class=" w-3 h-3 border rounded-full flex items-center bg-orange-400 my-auto mt-[7px] mx-auto"></span></span>`;
    },
  };

  return (
    <>
      <div className="promo relative">
        <img src="images/new-collection.png" alt="collection" />
        <div className="arrival absolute top-36 right-14 max-w-2xl ml-auto bg-yellow-50 py-16 px-11">
          <div className="font-semibold">New Arrival</div>
          <h2 className="font-bold text-5xl text-amber-500 mt-1">Discover Our<br/>
          New Collection
          </h2>
          <div className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum doloremque aperiam atque animi.</div>
          <button className="w-64 mt-11 py-6 font-bold bg-amber-500 text-white">BUY NOW</button>
        </div>
      </div>
      <div className="range">
        <h2 className="range-header text-center font-bold text-3xl mt-11">Browse The Range</h2>
        <div className="text-center text-xl text-zinc-400 mb-11">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div className="items-wrapper flex justify-center items-center gap-4 ">
        <div className="range-item1">
          <img src="images/dining.png" alt="dining" />
          <div className="text-center mt-5 text-2xl font-semibold">Dining</div>
        </div>
        <div className="range-item2">
          <img src="images/living.png" alt="Living" />
          <div className="text-center mt-5 text-2xl font-semibold">Living</div>
        </div>
        <div className="range-item3">
          <img src="images/bedroom.png" alt="Bedroom" />
          <div className="text-center mt-5 text-2xl font-semibold">Bedroom</div>
        </div>
        </div>
      </div>
      <div className="our-product">
        <h2 className="text-center font-bold text-3xl mt-11 mb-11">Our Product</h2>
        <div className="products-list grid grid-cols-4 gap-8">
          <div className="product-list-item relative ">
            <img className="w-full" src="images/syltherine.png" alt="syltherine" />
            <div className="px-4 pt-4 pb-7">
            <div className="font-semibold text-2xl">Syltherine</div>
            <div className="text-zinc-400 my-2">Stylish cafe chair</div>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl">Rp 2.500.000</div>
              <div className="text-zinc-400 line-through">Rp 3.500.000</div>
            </div>
            </div>
            <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-75 transition-opacity">
              <button className="my-0 mx-auto mt-52 block py-3 bg-white text-orange-500 font-semibold px-14">Add to cart</button>
              <div className="mt-6 flex items-center justify-evenly text-white font-semibold">
                <div className='flex items-center gap-1 cursor-pointer'><BsFillShareFill size='12' color='#fff'/>Share</div>
                <div className='flex items-center gap-1 cursor-pointer'><MdCompareArrows size='20' color='#fff'/>Compare</div>
                <div className='flex items-center gap-1 cursor-pointer'><AiOutlineHeart color='#fff'/>Like</div>
              </div>
            </div>
          </div>
        </div>
        <button className='block my-0 mx-auto font-semibold border border-orange-300 text-orange-400 py-3 px-20 mt-11'>Show More</button>
      </div>
      <div className="slider-component relative mt-16">
        <div className='mt-56 ml-24 mb-60'>
          <h2 className='font-bold text-4xl'>50+ Beautiful rooms<br />
          inspiration</h2>
          <div className='font-medium mt-2 text-gray-500'>Our designer already made a lot of beautiful<br /> prototipe of rooms that inspire you</div>
          <button className='font-semibold mt-9 py-3 px-8 text-white bg-orange-400'>Explore More</button>
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
        className="mySwiper absolute right-0 -top-36 max-w-4xl"
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