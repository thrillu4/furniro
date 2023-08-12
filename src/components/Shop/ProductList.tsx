import { AiOutlineHeart } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { MdCompareArrows } from "react-icons/md"
import { Link } from "react-router-dom";
import { Product } from "../../data/productTypes";

interface ProductListProps {
    currentPage: number,
    productsPerPage: number,
    handleAddToFavorite: (currentProduct: Product) => void,
    handleAddToCart: (currentProduct: Product) => void,
    handleAddToComparing: (currentProduct: Product) => void,
    sortedProducts: Product[]
}

const ProductList: React.FC<ProductListProps> = ({currentPage, productsPerPage, handleAddToCart, handleAddToComparing, handleAddToFavorite, sortedProducts}) => {
const lastPostIndex = currentPage * productsPerPage;
const firstPostIndex = lastPostIndex - productsPerPage;
const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="products-list mt-4 md:max-2xl:mt-16 grid grid-cols-2 md:max-2xl:grid-cols-4 gap-4 md:max-2xl:gap-8">
        {currentPosts
        .map(( currentProduct ) => {
        const {image, title, subtitle, id, price, promotional, promotionalPrice, percent, newProduct} = currentProduct
        return (
            <div key={id} className="product-list-item relative ">
            <img className="w-full md:max-2xl:h-auto" src={image} alt="syltherine" />
            <div className='absolute top-1 right-1 md:max-2xl:top-6  md:max-2xl:right-6'>
                {promotional && <div className='text-white bg-red-400 rounded-full py-3 px-2 font-semibold'>{percent}</div> || newProduct && <div className='text-white bg-teal-500 rounded-full py-3 px-2 font-semibold'>New</div>}
            </div>
            <div className="px-4 pt-4 pb-7">
            <div className="font-semibold md:max-2xl:text-2xl">{title}</div>
            <div className="text-zinc-400 text-[10px] md:max-2xl:text-[16px] my-2">{subtitle}</div>
            <div className="flex justify-between items-center">
                <div className="font-semibold text-[10px] md:max-2xl:text-xl">{promotional ? promotionalPrice : price}</div>
                <div className="text-zinc-400 text-[10px]  md:max-2xl:text-[16px] line-through">{promotional ? price : promotionalPrice}</div>
            </div>
            </div>
            <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-75 transition-opacity  text-white font-semibold">
                <button onClick={() => handleAddToCart(currentProduct)} className="my-0 mx-auto mt-[24px] md:max-2xl:mt-52 block md:max-2xl:py-3 p-2 bg-white text-orange-500 font-semibold  md:max-2xl:px-14">Add to cart</button>
                <div className="mt-6 flex flex-col md:max-2xl:flex-row md:max-2xl:gap-0 gap-3 items-center justify-evenly">
                <div className='flex items-center gap-1 text-[10px] cursor-pointer'><BsFillShareFill size='12' color='#fff'/>Share</div>
                <div onClick={() => handleAddToComparing(currentProduct)} className='flex items-center text-[10px] gap-1 cursor-pointer'><MdCompareArrows size='20' color='#fff'/>Compare</div>
                <div onClick={() => handleAddToFavorite(currentProduct)} className='flex items-center text-[10px] gap-1 cursor-pointer'><AiOutlineHeart color='#fff'/>Like</div>
                </div>
                <Link to={`/shop/${id}`} className="text-center mx-auto p-2 md:max-2xl:mt-16 mt-5 border border-white block w-28 md:max-2xl:w-28 md:max-2xl:py-3">Show More</Link>
            </div>
            </div>
        )
        })}
    </div>
  )
}

export default ProductList