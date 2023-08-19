import { useState } from "react";
import { AiFillCopy, AiOutlineHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Product } from "../../data/productTypes";
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

interface ProductListProps {
  currentPage: number;
  productsPerPage: number;
  handleAddToFavorite: (currentProduct: Product) => void;
  handleAddToCart: (currentProduct: Product) => void;
  handleAddToComparing: (currentProduct: Product) => void;
  sortedProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  currentPage,
  productsPerPage,
  handleAddToCart,
  handleAddToComparing,
  handleAddToFavorite,
  sortedProducts,
}) => {
  const [isOpenShareModal, setOpenShareModal] = useState(false);
  const [actions, setActions] = useState("");
  const [isOpenDescrMenu, setOpenDescrMenu] = useState(false);
  const [activeProductId, setActiveProductId] = useState("");

  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;
  const currentPosts = sortedProducts.slice(firstPostIndex, lastPostIndex);
  const url = window.location.href;

  const toggleOpenModal = () => {
    setOpenShareModal(!isOpenShareModal);
  };

  const handleCopyLink = (str: string) => {
    navigator.clipboard.writeText(url);
    setActions(str);
    setTimeout(() => {
      setActions("");
    }, 3000);
  };

  const handleOpenDescrMenu = (id: string) => {
    if (!isOpenDescrMenu) {
      setOpenDescrMenu(true);
    }
    setActiveProductId(id);
  };

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 overflow-hidden md:mt-16 md:grid-cols-4 md:gap-8">
      {currentPosts.map((currentProduct, index) => {
        const {
          image,
          title,
          subtitle,
          id,
          price,
          promotional,
          promotionalPrice,
          percent,
          newProduct,
        } = currentProduct;
        return (
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            custom={`0.${index}`}
            onClick={() => handleOpenDescrMenu(id)}
            key={id}
            className="product-list-item relative"
          >
            <img className="w-full md:h-auto" src={image} alt="product" />
            <div className="absolute right-1 top-1 md:right-6  md:top-6">
              {(promotional && (
                <div className="rounded-full bg-red-400 p-1 text-[8px] font-semibold text-white md:px-2 md:py-3 md:text-base">
                  {percent}
                </div>
              )) ||
                (newProduct && (
                  <div className="rounded-full bg-teal-500 p-1 text-[8px] font-semibold text-white md:px-2 md:py-3 md:text-base">
                    New
                  </div>
                ))}
            </div>
            <div className="px-4 pb-7 pt-4">
              <div className="font-semibold md:text-xl lg:text-2xl">
                {title}
              </div>
              <div className="my-2 text-[10px] text-zinc-400 md:text-[13px] lg:text-[16px]">
                {subtitle}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold md:text-base lg:text-xl">
                  {promotional ? promotionalPrice : price}
                </div>
                <div className="text-[10px] text-zinc-400  line-through md:text-[14px] lg:text-[16px]">
                  {promotional ? price : promotionalPrice}
                </div>
              </div>
            </div>
            <div
              className={`${
                isOpenDescrMenu && activeProductId === id
                  ? "block opacity-75"
                  : "hidden"
              } absolute inset-0 bg-gray-600 p-2 font-semibold  text-white opacity-0  transition-opacity xl:block xl:hover:opacity-75`}
            >
              {isOpenDescrMenu && (
                <CgClose
                  onClick={() => setOpenDescrMenu(false)}
                  className="ml-auto h-[22px] w-[22px] cursor-pointer xl:h-[30px] xl:w-[30px]"
                />
              )}
              <button
                onClick={() => {
                  handleCopyLink("Added to cart");
                  handleAddToCart(currentProduct);
                }}
                className="mx-auto my-0 mt-[30px] block bg-white p-2 text-[10px] font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white md:py-3 md:text-[13px] lg:text-base xl:mt-44  xl:px-14"
              >
                Add to cart
              </button>
              <div className="mt-6 flex flex-col items-center justify-evenly gap-3 xl:flex-row xl:gap-0">
                <div
                  onClick={toggleOpenModal}
                  className="flex cursor-pointer items-center gap-1 text-[10px] transition-all duration-300 hover:scale-105 md:text-base"
                >
                  <BsFillShareFill size="12" color="#fff" />
                  Share
                </div>
                {isOpenShareModal && (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="absolute inset-0 flex w-full flex-col justify-between bg-black p-3 xl:p-10"
                  >
                    <div className="flex items-center justify-between text-[12px] xl:text-[24px]">
                      Share{" "}
                      <CgClose
                        onClick={toggleOpenModal}
                        className="h-[22px] w-[22px] cursor-pointer xl:h-[30px] xl:w-[30px]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <FacebookShareButton
                        url={url}
                        className="duration-200 hover:scale-110"
                      >
                        <BiLogoFacebookCircle className="h-[22px] w-[22px] xl:h-[50px] xl:w-[50px]" />
                      </FacebookShareButton>
                      <LinkedinShareButton
                        url={url}
                        className="duration-200 hover:scale-110"
                      >
                        <AiFillLinkedin className="h-[22px] w-[22px] xl:h-[50px] xl:w-[50px]" />
                      </LinkedinShareButton>
                      <TwitterShareButton
                        url={url}
                        className="duration-200 hover:scale-110"
                      >
                        <AiFillTwitterCircle className="h-[22px] w-[22px] xl:h-[50px] xl:w-[50px]" />
                      </TwitterShareButton>
                    </div>
                    <div className="flex flex-col gap-4 text-center text-xs xl:text-base">
                      Copy link to clipboard
                      <AiFillCopy
                        onClick={() =>
                          handleCopyLink("Url copied to clipboard")
                        }
                        className="mx-auto block h-[22px] w-[22px] cursor-pointer duration-200 hover:scale-110 xl:h-[50px] xl:w-[50px]"
                      />
                    </div>
                  </motion.div>
                )}
                <div
                  onClick={() => {
                    handleCopyLink("Added for comparison");
                    handleAddToComparing(currentProduct);
                  }}
                  className="flex cursor-pointer items-center gap-1 text-[10px] transition-all duration-300 hover:scale-105 md:text-base"
                >
                  <MdCompareArrows size="20" color="#fff" />
                  Compare
                </div>
                <div
                  onClick={() => {
                    handleCopyLink("Added to favorite");
                    handleAddToFavorite(currentProduct);
                  }}
                  className="flex cursor-pointer items-center gap-1 text-[10px] transition-all duration-300 hover:scale-105 md:text-base"
                >
                  <AiOutlineHeart color="#fff" />
                  Like
                </div>
              </div>
              <Link
                to={`/shop/${id}`}
                className="mx-auto mt-5 block w-28 border border-white p-2 text-center text-[10px] transition-all duration-300 hover:scale-105 md:w-28 md:py-3 md:text-base xl:mt-16"
              >
                Show More
              </Link>
            </div>
            {actions && (
              <div className="fixed bottom-4 left-2 z-50 border border-black bg-white p-2 text-[10px] font-semibold text-black md:left-4  md:border-[2px] md:px-2 md:py-4 md:text-base">
                {actions}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductList;
