import { motion } from "framer-motion";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { Product } from "../../data/productTypes";
import { animation } from "../../utils/animation";
import { ROUTES } from "../../utils/routes";
import Recommended from "../Recommended/Recommended";
import RatingStars from "../SingleProduct/RatingStats";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromComparison } from "../store/slices/cartSlice";

const Comparison = () => {
  const [actions, setActions] = useState("");
  const comparingItems = useAppSelector((item) => item.cart.compare);

  const dispatch = useAppDispatch();

  const handleAddToCart = (currProduct: Product, action: string) => {
    dispatch(addToCart(currProduct));
    setActions(action);
    setTimeout(() => {
      setActions("");
    }, 3000);
  };

  const handleRemoveFromComparison = (id: string, action: string) => {
    dispatch(removeFromComparison(id));
    setActions(action);
    setTimeout(() => {
      setActions("");
    }, 3000);
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="mt-8 rounded-[10px] bg-shop py-14 pt-16 md:rounded-none md:pb-28 md:pt-16"
      >
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          className="mx-auto my-0 mb-3 block "
          src="images/main-logo.png"
          alt="logo"
        />
        <h1 className="text-center text-2xl font-semibold md:text-5xl">
          Product Comparison
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="mt-1 flex items-center justify-center gap-2"
        >
          <motion.div variants={animation} className="font-semibold">
            Home
          </motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext />
          </motion.div>
          <motion.div variants={animation} custom={0.4}>
            Comparison
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="flex flex-col justify-evenly gap-[20px] pt-[20px] md:flex-row md:gap-[0] md:pt-[54px]"
      >
        <motion.div
          variants={animation}
          animate={{ x: 100 }}
          className="text-[20px] font-medium md:text-[28px]"
        >
          Go to Product <br />
          page for more <br />
          Products <br />
          <Link
            className="inline-block border-b border-[#727272] pb-1 text-[16px] text-[#727272] duration-300 hover:scale-110 md:text-[20px]"
            to={ROUTES.SHOP}
          >
            View More
          </Link>
        </motion.div>
        {comparingItems.length ? (
          <div className="flex justify-center gap-[10px] md:justify-normal xl:gap-[45px]">
            {comparingItems.map((item) => {
              const {
                id,
                image,
                newProduct,
                price,
                promotional,
                promotionalPrice,
                subtitle,
                title,
                category,
                color,
                percent,
                rating,
                reviews,
              } = item;
              return (
                <motion.div
                  variants={animation}
                  initial={{ x: 0, y: 100 }}
                  animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
                  className="flex flex-col justify-between rounded-[10px] border border-[#9F9F9F] p-3 pb-6 md:max-w-[300px]"
                  key={id}
                >
                  <img
                    className="mx-auto rounded-[10px] md:h-[177px] md:w-[280px]"
                    src={image}
                    alt="image"
                  />
                  <div className="mt-[20px] font-medium md:text-[24px]">
                    {title}
                  </div>
                  <div className="mt-[6px] text-[10px] font-medium md:text-[18px]">
                    {promotional ? promotionalPrice : price}
                  </div>
                  <div className="mt-[7px] flex flex-col text-[10px] md:flex-row md:text-[18px]">
                    <div>{rating}</div>
                    <RatingStars rating={rating} />
                    <div className="divider ml-[6px] mr-[9px] hidden h-[24px] w-[1px] border-t bg-[#9F9F9F] md:block"></div>
                    <div>{reviews} Reviews</div>
                  </div>
                  <div className="my-[30px] flex flex-col gap-[10px] text-[10px] md:mb-[64px] md:mt-[30px] md:gap-[30px] md:text-[18px]">
                    <div>
                      <span className="font-semibold">Subtitle</span> :{" "}
                      {subtitle}
                    </div>
                    <div>
                      <span className="font-semibold">Category</span> :{" "}
                      {category}
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">Color</span> :
                      <div
                        className="ml-3 h-[30px] w-[30px] rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                    {newProduct && (
                      <div>
                        <span className="font-semibold">Product</span> : New
                      </div>
                    )}
                    {percent && (
                      <div>
                        <span className="font-semibold">Discount</span>{" "}
                        {percent}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveFromComparison(id, "Removed from comparison")
                    }
                    className="mx-auto mb-2  border p-2 text-[8px] duration-200 hover:border hover:border-zinc-400 md:text-[12px]"
                  >
                    remove from comparison
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item, "Added to cart")}
                    className="mx-auto block border border-[#B88E2F] bg-[#B88E2F] px-[10px] py-[5px] text-[12px] text-white duration-300 hover:bg-white hover:text-[#B88E2F] md:px-[48px] md:py-[17px] md:text-[20px]"
                  >
                    Add To Cart
                  </button>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            variants={animation}
            initial={{ x: 0, y: 100 }}
            animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
            className="text-center text-[28px] font-bold md:text-left"
          >
            Comparison is empty 💫
          </motion.div>
        )}
        <motion.div
          variants={animation}
          className="text-right text-[20px] font-medium md:text-[28px]"
        >
          Go to your cart
          <br />
          for buy it
          <br />
          now <br />
          <Link
            className="inline-block border-b border-[#727272] pb-1 text-[16px] text-[#727272] duration-300 hover:scale-110 md:text-[20px]"
            to={ROUTES.CART}
          >
            Open Cart
          </Link>
        </motion.div>
      </motion.form>
      {actions && (
        <span className="fixed bottom-4 left-2 z-50 border border-black bg-white p-2 text-[10px] font-semibold text-black md:left-4  md:border-[2px] md:px-2 md:py-4 md:text-base">
          {actions}
        </span>
      )}
      <Recommended />
    </section>
  );
};

export default Comparison;
