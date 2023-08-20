import { useState } from "react";
import products from "../../data/products.json";
import Pagination from "./Pagination";

import { motion } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { Product } from "../../data/productTypes";
import { animation } from "../../utils/animation";
import Recommended from "../Recommended/Recommended";
import { useAppDispatch } from "../store/hooks";
import {
  addToCart,
  addToComparison,
  addToFavorite,
} from "../store/slices/cartSlice";
import ProductList from "./ProductList";

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [sortedProducts, setSortedProducts] = useState(products.products);

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
    if (currentPage === 1) {
      setProductsPerPage(num);
    } else {
      setCurrentPage(1);
      setProductsPerPage(num);
    }
  };

  const handleFiltered = (order: "def" | "asc" | "desc"): void => {
    if (order == "def") {
      setSortedProducts(products.products);
    } else {
      const sorted = [...sortedProducts].sort((a, b) => {
        const priceA = a.promotional
          ? parseInt(a.promotionalPrice.slice(3))
          : parseInt(a.price.slice(3));
        const priceB = b.promotional
          ? parseInt(b.promotionalPrice.slice(3))
          : parseInt(b.price.slice(3));
        return order === "asc" ? priceA - priceB : priceB - priceA;
      });
      setSortedProducts(sorted);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="shop-page"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="mt-8 rounded-[10px] bg-shop py-14 md:rounded-none md:py-28"
      >
        <h1 className="text-center text-2xl font-semibold md:text-5xl">Shop</h1>
        <div className="mt-1 flex items-center justify-center gap-2">
          <motion.div variants={animation} className="font-semibold">
            Home
          </motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext />
          </motion.div>
          <motion.div variants={animation} custom={0.4}>
            Shop
          </motion.div>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 bg-yellow-50 px-6 py-3 filter md:flex md:items-center md:justify-evenly md:gap-4 md:py-9 lg:gap-96">
        <div className="md:flex md:items-center">
          <GiSettingsKnobs className="hidden md:block" />
          <div className="md:ml-3 lg:text-xl">Filter</div>
          <div className="divider mx-9 hidden h-9 w-0.5 border-t bg-gray-300 md:block"></div>
          <div className="pt-8 md:pt-0">
            Showing{" "}
            <span>
              {productsPerPage * currentPage >= totalProducts
                ? totalProducts
                : productsPerPage * currentPage}
            </span>{" "}
            of <span>{totalProducts}</span> results
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="mr-4 lg:text-xl">Show</div>
          <div className="dropdown">
            <button className="flex items-center gap-1 rounded bg-white px-5 py-3 text-gray-800 hover:bg-orange-300">
              {productsPerPage} <AiFillCaretDown />
            </button>
            <div className="dropdown-content rounded bg-white shadow-lg">
              <button
                onClick={() => changeProductsPerPage(16)}
                className="flex items-center  rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                16
              </button>
              <button
                onClick={() => changeProductsPerPage(32)}
                className="flex items-center rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                32
              </button>
              <button
                onClick={() => changeProductsPerPage(totalProducts)}
                className="flex items-center rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                All
              </button>
            </div>
          </div>
          <div className="md:ml-7 md:mr-4 lg:text-xl">Short by</div>
          <div className="dropdown">
            <button className="flex items-center gap-1 rounded bg-white px-4 py-3 text-gray-800 hover:bg-orange-300">
              Default <AiFillCaretDown />
            </button>
            <div className="dropdown-content rounded bg-white shadow-lg">
              <button
                onClick={() => handleFiltered("def")}
                className="flex items-center rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                Default
              </button>
              <button
                onClick={() => handleFiltered("asc")}
                className="flex items-center rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                Price <BsArrowDownShort />
              </button>
              <button
                onClick={() => handleFiltered("desc")}
                className="flex items-center rounded px-7 py-3 text-center text-gray-800 hover:bg-orange-400 hover:text-white"
              >
                Price <BsArrowUpShort />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductList
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        handleAddToCart={handleAddToCart}
        handleAddToComparing={handleAddToComparing}
        handleAddToFavorite={handleAddToFavorite}
        sortedProducts={sortedProducts}
      />
      <Pagination
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Recommended />
    </motion.section>
  );
};

export default Shop;
