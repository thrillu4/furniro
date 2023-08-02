import { AiOutlineHeart } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { MdCompareArrows } from "react-icons/md"
import { Product } from '../../data/productTypes'
import { Link } from "react-router-dom";

interface ProductListProps {
    currentPage: number,
    productsPerPage: number,
    handleAddToCart: (currentProduct: Product) => void,
    sortedProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({currentPage, productsPerPage, handleAddToCart, sortedProducts}) => {

const lastPostIndex = currentPage * productsPerPage;
const firstPostIndex = lastPostIndex - productsPerPage;
const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="products-list mt-16 grid grid-cols-4 gap-8">
        {currentPosts
        .map(( currentProduct ) => {
        const {image, title, subtitle, id, price, promotional, promotionalPrice, percent, newProduct} = currentProduct
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
            <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-75 transition-opacity  text-white font-semibold">
                <button onClick={() => handleAddToCart(currentProduct)} className="my-0 mx-auto mt-52 block py-3 bg-white text-orange-500 font-semibold px-14">Add to cart</button>
                <div className="mt-6 flex items-center justify-evenly">
                <div className='flex items-center gap-1 cursor-pointer'><BsFillShareFill size='12' color='#fff'/>Share</div>
                <div className='flex items-center gap-1 cursor-pointer'><MdCompareArrows size='20' color='#fff'/>Compare</div>
                <div className='flex items-center gap-1 cursor-pointer'><AiOutlineHeart color='#fff'/>Like</div>
                </div>
                <Link to={`/shop/${id}`} className="text-center mx-auto mt-16 border border-white block w-28 py-3">Show More</Link>
            </div>
            </div>
        )
        })}
    </div>
  )
}

export default ProductList