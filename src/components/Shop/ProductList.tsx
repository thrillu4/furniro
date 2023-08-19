import { useState } from 'react';
import { AiFillCopy, AiOutlineHeart } from "react-icons/ai"
import { BsFillShareFill } from "react-icons/bs"
import { MdCompareArrows } from "react-icons/md"
import { CgClose } from 'react-icons/cg';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { Product } from "../../data/productTypes";
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, } from 'react-share'


interface ProductListProps {
    currentPage: number,
    productsPerPage: number,
    handleAddToFavorite: (currentProduct: Product) => void,
    handleAddToCart: (currentProduct: Product) => void,
    handleAddToComparing: (currentProduct: Product) => void,
    sortedProducts: Product[]
}

const ProductList: React.FC<ProductListProps> = ({currentPage, productsPerPage, handleAddToCart, handleAddToComparing, handleAddToFavorite, sortedProducts}) => {
const [isOpenShareModal, setOpenShareModal] = useState(false);
const [actions, setActions] = useState('');
const [isOpenDescrMenu, setOpenDescrMenu] = useState(false);
const [activeProductId, setActiveProductId] = useState('');


const lastPostIndex = currentPage * productsPerPage;
const firstPostIndex = lastPostIndex - productsPerPage;
const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);
const url = window.location.href

const toggleOpenModal = () => {
    setOpenShareModal(!isOpenShareModal)
}

const handleCopyLink = (str: string) => {
    navigator.clipboard.writeText(url)
    setActions(str)
    setTimeout(() => {
        setActions('')
    }, 3000)
}

const handleOpenDescrMenu = (id: string) => {
    if(!isOpenDescrMenu) {
        setOpenDescrMenu(true)
    }
    setActiveProductId(id);
}

  return (
    <div className="mt-4 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 overflow-hidden">
        {currentPosts
        .map(( currentProduct, index) => {
        const {image, title, subtitle, id, price, promotional, promotionalPrice, percent, newProduct} = currentProduct
        return (
            <motion.div 
            variants={animation}
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2}}
            custom={`0.${index}`}
            onClick={() => handleOpenDescrMenu(id)}
            key={id} className="product-list-item relative">
                <img className="w-full md:h-auto" src={image} alt="product" />
                <div className='absolute top-1 right-1 md:top-6  md:right-6'>
                    {promotional && <div className='text-white bg-red-400 text-[8px] md:text-base rounded-full md:py-3 p-1 md:px-2 font-semibold'>{percent}</div> || newProduct && <div className='text-white bg-teal-500 text-[8px] md:text-base rounded-full md:py-3 md:px-2 p-1 font-semibold'>New</div>}
                </div>
                <div className="px-4 pt-4 pb-7">
                <div className="font-semibold md:text-xl lg:text-2xl">{title}</div>
                <div className="text-zinc-400 text-[10px] md:text-[13px] lg:text-[16px] my-2">{subtitle}</div>
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-[10px] md:text-base lg:text-xl">{promotional ? promotionalPrice : price}</div>
                    <div className="text-zinc-400 text-[10px]  md:text-[14px] lg:text-[16px] line-through">{promotional ? price : promotionalPrice}</div>
                </div>
                </div>  
                <div className={`${isOpenDescrMenu && activeProductId === id ? 'opacity-75 block' : 'hidden'} xl:block absolute inset-0 bg-gray-600 opacity-0  xl:hover:opacity-75 transition-opacity  text-white font-semibold p-2`}>
                    {isOpenDescrMenu && <CgClose  onClick={() => setOpenDescrMenu(false)} className='cursor-pointer w-[22px] h-[22px] xl:w-[30px] xl:h-[30px] ml-auto'/>}
                    <button onClick={() => {
                        handleCopyLink('Added to cart')
                        handleAddToCart(currentProduct)
                        }}
                         className="hover:text-white hover:bg-orange-500 transition-all duration-300 my-0 mx-auto mt-[30px] xl:mt-44 block md:py-3 p-2 bg-white text-orange-500 font-semibold text-[10px] md:text-[13px] lg:text-base  xl:px-14">Add to cart</button>
                    <div className="mt-6 flex flex-col xl:flex-row xl:gap-0 gap-3 items-center justify-evenly">
                        <div onClick={toggleOpenModal} className='flex items-center gap-1 text-[10px] md:text-base cursor-pointer hover:scale-105 transition-all duration-300'><BsFillShareFill size='12' color='#fff'/>Share</div>
                        {isOpenShareModal && (
                            <motion.div initial='hidden' whileInView='visible' className='absolute flex flex-col justify-between inset-0 w-full bg-black p-3 xl:p-10'>
                                <div className='flex items-center justify-between text-[12px] xl:text-[24px]'>
                                    Share <CgClose onClick={toggleOpenModal} className='cursor-pointer w-[22px] h-[22px] xl:w-[30px] xl:h-[30px]'/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <FacebookShareButton url={url} className='hover:scale-110 duration-200'>
                                        <BiLogoFacebookCircle className='w-[22px] h-[22px] xl:w-[50px] xl:h-[50px]'/>
                                    </FacebookShareButton>
                                    <LinkedinShareButton url={url} className='hover:scale-110 duration-200'>
                                        <AiFillLinkedin className='w-[22px] h-[22px] xl:w-[50px] xl:h-[50px]'/>
                                    </LinkedinShareButton>
                                    <TwitterShareButton url={url} className='hover:scale-110 duration-200'>
                                        <AiFillTwitterCircle className='w-[22px] h-[22px] xl:w-[50px] xl:h-[50px]'/>
                                    </TwitterShareButton>
                                </div>
                                <div className='text-center flex flex-col gap-4 text-xs xl:text-base'>
                                Copy link to clipboard
                                <AiFillCopy onClick={() => handleCopyLink('Url copied to clipboard')} className='block mx-auto cursor-pointer hover:scale-110 duration-200 w-[22px] h-[22px] xl:w-[50px] xl:h-[50px]'/>
                                </div>
                                
                            </motion.div>
                        )}
                        <div onClick={() => {
                            handleCopyLink('Added for comparison')
                            handleAddToComparing(currentProduct)
                        }} className='flex items-center text-[10px] md:text-base gap-1 cursor-pointer hover:scale-105 transition-all duration-300'><MdCompareArrows size='20' color='#fff'/>Compare</div>
                        <div onClick={() => {
                            handleCopyLink('Added to favorite')
                            handleAddToFavorite(currentProduct)
                        }} className='flex items-center text-[10px] md:text-base gap-1 cursor-pointer hover:scale-105 transition-all duration-300'><AiOutlineHeart color='#fff'/>Like</div>
                    </div>
                    <Link to={`/shop/${id}`} className="text-center mx-auto p-2 xl:mt-16 text-[10px] md:text-base mt-5 border border-white block w-28 md:w-28 md:py-3 hover:scale-105 transition-all duration-300">Show More</Link>
                </div>
                {actions && (
                    <div className='fixed bottom-4 left-2 md:left-4 font-semibold bg-white border md:border-[2px] text-[10px] md:text-base border-black text-black  p-2 md:px-2 md:py-4 z-50'>{actions}</div>
                )}
            </motion.div>
        )
        })}
    </div>
  )
}

export default ProductList