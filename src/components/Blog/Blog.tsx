import { MdDateRange, MdNavigateNext } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Recommended from "../Recommended/Recommended";
import blog from "../../data/blog.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Shop/Pagination";
import { IoMdPricetag } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";

const Blog = () => {
  const posts = blog.blog;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchValue, setSearchValue] = useState("");
  const categoryCount: Record<string, number> = {};

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstPostsIndex, lastPostsIndex);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  posts.forEach((item) => {
    if (categoryCount[item.category]) {
      categoryCount[item.category]++;
    } else {
      categoryCount[item.category] = 1;
    }
  });

  const categories = Object.keys(categoryCount);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const filtered = posts.filter((elem) => elem.category === category);
    setFilteredPosts(filtered);
  };

  return (
    <motion.section initial="hidden" whileInView="visible">
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
        <h1 className="text-center text-2xl font-semibold md:text-5xl">Blog</h1>
        <div className="mt-1 flex items-center justify-center gap-2">
          <motion.div variants={animation} className="font-semibold">
            Home
          </motion.div>
          <motion.div variants={animation} custom={0.3}>
            <MdNavigateNext />
          </motion.div>
          <motion.div variants={animation} custom={0.4}>
            Blog
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col-reverse justify-center gap-[15px] pb-[60px] md:flex-row  md:gap-[30px] md:pt-[100px]">
        <div className="blog-items md:w-[817px]">
          {currentPosts.map((item, index) => {
            const { id, author, category, date, description, image, title } =
              item;
            return (
              <motion.div
                variants={animation}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.15 }}
                custom={`0.${index}`}
                key={id}
                className="blog-item"
              >
                <img
                  className="w-full rounded-[10px] object-cover md:max-h-[500px]"
                  src={image}
                  alt="image"
                />
                <div className="mt-[17px] flex items-center gap-[20px] md:gap-[35px]">
                  <div className="flex items-center gap-[7px] text-[9px] text-[#9F9F9F] xl:text-base">
                    <FaUser />
                    {author}
                  </div>
                  <div className="flex items-center gap-[7px] text-[9px] text-[#9F9F9F] xl:text-base">
                    <MdDateRange />
                    {date}
                  </div>
                  <div className="flex items-center gap-[7px] text-[9px] text-[#9F9F9F] xl:text-base">
                    <IoMdPricetag />
                    {category}
                  </div>
                </div>
                <div className="mt-[15px] font-medium md:text-[30px]">
                  {title}
                </div>
                <p className="mb-4 mt-[12px] text-xs text-[#9F9F9F] md:mb-[30px] xl:text-base">
                  {description}
                </p>
                <Link
                  className=" mb-[54px] inline-block border-b border-black pb-[5px] text-sm transition-all duration-300 hover:scale-105 md:pb-[12px] md:text-base"
                  to={`/blog/${id}`}
                >
                  Read more
                </Link>
              </motion.div>
            );
          })}
        </div>
        <motion.div className="blog-filter md:w-[393px]">
          <div className="mx-auto w-[311px] pt-[22px] md:pb-[60px]">
            <div className="relative">
              <HiMagnifyingGlass
                size={24}
                className="absolute right-[15px] top-[18px]"
              />
              <input
                className="mx-auto block w-full rounded-[10px] border border-[#9F9F9F] p-[17px] pr-[45px] transition-all duration-200 hover:border-black"
                type="search"
                name="search"
                id="search"
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
                value={searchValue}
              />
              {searchValue &&
                posts
                  .filter((val) => {
                    if (searchValue == "") {
                      return val;
                    } else if (
                      val.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(0, 3)
                  .map((item) => {
                    const { id, date, image, title } = item;
                    return (
                      <Link
                        to={`/blog/${id}`}
                        className=" flex items-center gap-[12px] border border-b-black px-[20px] py-[20px]"
                        key={id}
                      >
                        <img
                          className="h-[80px] w-[80px] rounded-[10px]"
                          src={image}
                          alt="image"
                        />
                        <div>
                          <div className="mb-[5px] text-[14px]">{title}</div>
                          <div className="text-[12px] text-[#9F9F9F]">
                            {date}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
            <div className="mb-[15px] mt-[43px] px-[20px] text-[24px] font-semibold md:mb-[33px]">
              Categories
            </div>
            {categories.map((category) => (
              <div
                onClick={() => handleCategoryChange(category)}
                className={`${
                  activeCategory === category && "text-black"
                } mb-[20px] flex cursor-pointer items-center justify-between px-[20px] text-[#9F9F9F] transition-all duration-200  hover:text-black md:mb-[40px]`}
                key={category}
              >
                <div>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
                <div>{categoryCount[category]}</div>
              </div>
            ))}
          </div>
          <div className=" mx-auto mt-[40px] hidden w-[311px] py-[16px] md:block">
            <div className="mb-[33px] mt-[43px] px-[20px] text-[24px] font-semibold">
              Recent Posts
            </div>
            <div className="flex flex-col gap-[40px]">
              {posts
                .slice(-5)
                .reverse()
                .map((item) => {
                  const { id, date, image, title } = item;
                  return (
                    <Link
                      to={`/blog/${id}`}
                      className="flex items-center gap-[12px] px-[20px] transition-all duration-200 hover:scale-105"
                      key={id}
                    >
                      <img
                        className="h-[80px] w-[80px] rounded-[10px]"
                        src={image}
                        alt="image"
                      />
                      <div>
                        <div className="mb-[5px] text-[14px]">{title}</div>
                        <div className="text-[12px] text-[#9F9F9F]">{date}</div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </motion.div>
      </div>
      <Pagination
        totalProducts={filteredPosts.length}
        productsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <Recommended />
    </motion.section>
  );
};

export default Blog;
