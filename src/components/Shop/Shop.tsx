import { useState } from 'react'
import Pagination from './Pagination'
import products from '../../data/products.json'

import {MdCompareArrows, MdNavigateNext, MdOutlineSupportAgent} from 'react-icons/md'
import {GiSettingsKnobs} from 'react-icons/gi'
import {AiFillCaretDown, AiOutlineHeart} from 'react-icons/ai'
import {BsArrowDownShort, BsArrowUpShort, BsFillShareFill} from 'react-icons/bs'
import {GrTrophy} from 'react-icons/gr'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [sortedProducts, setSortedProducts] = useState(products.products)

  const totalProducts = products.products.length;
  const totalPages = totalProducts / productsPerPage;
  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;
  const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);

  const changeProductsPerPage = (num: number): void => {
    if(currentPage === 1) {
      setProductsPerPage(num)
    } else {
      setCurrentPage(1)
      setProductsPerPage(num)
    }
  }

  const handleFiltered = (order: 'def' | 'asc' | 'desc'): void => {
    if(order == 'def') {
      setSortedProducts(products.products)
    } else {
      const sorted = [...sortedProducts].sort((a, b) => {
        const priceA = a.promotional ? parseInt(a.promotionalPrice.slice(3)) : parseInt(a.price.slice(3));
        const priceB = b.promotional ? parseInt(b.promotionalPrice.slice(3)) : parseInt(b.price.slice(3));
        return order === 'asc' ? priceA - priceB : priceB - priceA;
      });
      setSortedProducts(sorted);
    }
   
  }

  return (
    <section className="shop-page">
      <div className='bg-shop py-28 mt-8'>
        <h1 className='text-center text-5xl font-semibold'>Shop</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Shop</div>
        </div>
      </div>
      <div className="filter flex items-center justify-evenly gap-96 bg-yellow-50 py-9">
        <div className='flex items-center'>
          <GiSettingsKnobs/>
          <div className=' text-xl ml-3'>Filter</div>
          <div className="divider border-t bg-gray-300 h-9 w-0.5 mx-9"></div>
          <div>Showing <span>{productsPerPage * currentPage}</span> of <span>{totalProducts}</span> results</div>
        </div>
        <div className="flex items-center">
          <div className='mr-4 text-xl'>Show</div>
          <div className="dropdown">
      <button className="bg-white flex items-center gap-1 hover:bg-orange-300 text-gray-800 py-3 px-4 rounded">
        {productsPerPage} <AiFillCaretDown/>
      </button>
      <div className="dropdown-content bg-white shadow-lg rounded">
        <a onClick={() => changeProductsPerPage(16)} href="#" className="block  py-3 px-4 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
        16
        </a>
        <a onClick={() => changeProductsPerPage(32)} href="#" className="block  py-3 px-4 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          32
        </a>
        <a onClick={() => changeProductsPerPage(totalProducts)} href="#" className="block  py-3 px-6 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          All
        </a>
      </div>
    </div>
          <div className='ml-7 mr-4 text-xl'>Short by</div>
          <div className="dropdown">
      <button className="bg-white flex items-center gap-1 hover:bg-orange-300 text-gray-800 py-3 px-4 rounded">
      Default <AiFillCaretDown/>
      </button>
      <div className="dropdown-content bg-white shadow-lg rounded">
      <a onClick={() => handleFiltered('def')} href="#" className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Default
        </a>
        <a onClick={() => handleFiltered('asc')} href="#" className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Price <BsArrowDownShort/>
        </a>
        <a onClick={() => handleFiltered('desc')} href="#" className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Price <BsArrowUpShort/>
        </a>
      </div>
    </div>
        </div>
      </div>
      <div className="products-list mt-16 grid grid-cols-4 gap-8">
        {currentPosts
        .map(({image, title, subtitle, id, price, promotional, promotionalPrice, percent, newProduct}) => {
          return (
            <div key={id} className="product-list-item relative ">
              <img className="w-full" src={image} alt="syltherine" />
              <div className='absolute top-6 right-6'>
                {promotional && <div className='text-white bg-red-400 rounded-full py-3 px-2 font-semibold'>{percent}</div> || newProduct && <div className='text-white bg-teal-500 rounded-full py-3 px-2 font-semibold'>New</div>}
              </div>
              <div className="px-4 pt-4 pb-7">
              <div className="font-semibold text-2xl">{title}</div>
              <div className="text-zinc-400 my-2">{subtitle}</div>
              <div className="flex justify-between items-center">
                <div className="font-semibold text-xl">{promotional ? promotionalPrice : price}</div>
                <div className="text-zinc-400 line-through">{promotional ? price : promotionalPrice}</div>
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
          )
        })}
        </div>
        <Pagination productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        />
        <div className='flex items-center justify-between py-28 mt-24'>
          <div className='flex items-center gap-3'>
            <GrTrophy size='60'/>
            <div>
              <div className='text-2xl font-semibold'>High Quality</div>
              <div className='text-xl font-medium text-gray-400'>Crafted from top materials</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <IoMdCheckmarkCircleOutline size='60'/>
            <div>
              <div className='text-2xl font-semibold'>Warranty Protection</div>
              <div className='text-xl font-medium text-gray-400'>Over 2 years</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <TbTruckDelivery size='60'/>
            <div>
              <div className='text-2xl font-semibold'>Free Shipping</div>
              <div className='text-xl font-medium text-gray-400'>Order over 150 $</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <MdOutlineSupportAgent size='60'/>
            <div>
              <div className='text-2xl font-semibold'>24 / 7 Support</div>
              <div className='text-xl font-medium text-gray-400'>Dedicated support</div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Shop