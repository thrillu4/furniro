import { useState } from 'react'
import Pagination from './Pagination'
import products from '../../data/products.json'

import {MdNavigateNext} from 'react-icons/md'
import {GiSettingsKnobs} from 'react-icons/gi'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsArrowDownShort, BsArrowUpShort} from 'react-icons/bs'
import { Product } from '../../data/productTypes'
import { useAppDispatch} from '../store/hooks'
import { addToCart, addToComparison, addToFavorite } from '../store/slices/cartSlice'
import Recommended from '../Recommended/Recommended'
import ProductList from './ProductList'

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [sortedProducts, setSortedProducts] = useState(products.products)

  const totalProducts = products.products.length;
  const totalPages = totalProducts / productsPerPage;


  //redux
  const dispatch = useAppDispatch();

  const handleAddToCart = (currProduct: Product) => {
    dispatch(addToCart(currProduct));
  };

  const handleAddToComparing = (currProduct: Product) => {
    dispatch(addToComparison(currProduct));
  };

  const handleAddToFavorite = (currProduct: Product) => {
    dispatch(addToFavorite(currProduct));
  };
  //redux

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
          <div>Showing <span>{productsPerPage * currentPage >= totalProducts ? totalProducts : productsPerPage * currentPage}</span> of <span>{totalProducts}</span> results</div>
        </div>
        <div className="flex items-center">
          <div className='mr-4 text-xl'>Show</div>
          <div className="dropdown">
      <button className="bg-white flex items-center gap-1 hover:bg-orange-300 text-gray-800 py-3 px-5 rounded">
        {productsPerPage} <AiFillCaretDown/>
      </button>
      <div className="dropdown-content bg-white shadow-lg rounded">
        <button onClick={() => changeProductsPerPage(16)} className="flex items-center  py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
        16
        </button>
        <button onClick={() => changeProductsPerPage(32)} className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          32
        </button>
        <button onClick={() => changeProductsPerPage(totalProducts)} className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          All
        </button>
      </div>
    </div>
          <div className='ml-7 mr-4 text-xl'>Short by</div>
          <div className="dropdown">
      <button className="bg-white flex items-center gap-1 hover:bg-orange-300 text-gray-800 py-3 px-4 rounded">
      Default <AiFillCaretDown/>
      </button>
      <div className="dropdown-content bg-white shadow-lg rounded">
      <button onClick={() => handleFiltered('def')} className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Default
        </button>
        <button onClick={() => handleFiltered('asc')} className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Price <BsArrowDownShort/>
        </button>
        <button onClick={() => handleFiltered('desc')} className="flex items-center py-3 px-7 rounded text-center text-gray-800 hover:bg-orange-400 hover:text-white">
          Price <BsArrowUpShort/>
        </button>
      </div>
    </div>
        </div>
      </div>
        <ProductList productsPerPage={productsPerPage} currentPage={currentPage} handleAddToCart={handleAddToCart} handleAddToComparing={handleAddToComparing} handleAddToFavorite={handleAddToFavorite} sortedProducts={sortedProducts}/>
        <Pagination productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        />
        <Recommended/>
    </section>
  )
}

export default Shop