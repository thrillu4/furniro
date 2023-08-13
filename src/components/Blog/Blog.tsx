import { MdDateRange, MdNavigateNext } from "react-icons/md"
import {FaUser} from 'react-icons/fa'
import Recommended from "../Recommended/Recommended"
import blog from '../../data/blog.json';
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Shop/Pagination";
import { IoMdPricetag } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Blog = () => {
  const posts = blog.blog
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchValue, setSearchValue] = useState('')
  const categoryCount: Record<string, number> = {}

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = filteredPosts.slice(firstPostsIndex, lastPostsIndex)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  posts.forEach(item => {
    if(categoryCount[item.category]) {
      categoryCount[item.category]++
    } else {
      categoryCount[item.category] = 1
    }
  });

  const categories = Object.keys(categoryCount)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    const filtered = posts.filter((elem) => elem.category === category);
    setFilteredPosts(filtered);
  }

  return (
    <section>
      <div className='bg-shop pt-16 md:pt-16 py-14 rounded-[10px] md:rounded-none md:pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-2xl md:text-5xl font-semibold'>Blog</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Blog</div>
        </div>
      </div>
      <div className="md:pt-[100px] pb-[60px] flex justify-center flex-col-reverse md:flex-row  md:gap-[30px] gap-[15px]">
        <div className="blog-items md:w-[817px]">
          {currentPosts.map(item => {
            const {id, author, category, date, description, image, title} = item;
            return (
              <div key={id} className="blog-item">
                <img className="rounded-[10px] w-full md:max-h-[500px] object-cover" src={image} alt="image" />
                <div className="flex items-center md:gap-[35px] gap-[20px] mt-[17px]">
                  <div className="flex text-[9px] items-center gap-[7px] text-[#9F9F9F]"><FaUser/>{author}</div>
                  <div className="flex text-[9px] items-center gap-[7px] text-[#9F9F9F]"><MdDateRange/>{date}</div>
                  <div className="flex text-[9px] items-center gap-[7px] text-[#9F9F9F]"><IoMdPricetag/>{category}</div>
                </div>
                <div className="mt-[15px] md:text-[30px] font-medium">{title}</div>
                <p className="mt-[12px] text-xs md:mb-[30px] mb-4 text-[#9F9F9F]">{description}</p>
                <Link className="md:pb-[12px] pb-[5px] md:text-base text-sm border-b border-black mb-[54px] inline-block" to={`/blog/${id}`}>Read more</Link>
              </div>
            )
          })}
        </div>
        <div className="blog-filter md:w-[393px]">
          <div className="w-[311px] mx-auto pt-[22px] md:pb-[60px]">
            <div className="relative">
              <HiMagnifyingGlass size={24} className="absolute top-[18px] right-[15px]"/>
              <input className="w-full p-[17px] pr-[45px] rounded-[10px] border border-[#9F9F9F] block mx-auto" type="search" name="search" id="search" onChange={(event) => {
                setSearchValue(event.target.value)
              }} value={searchValue}/> 
              {searchValue && posts.filter(val => {
                if(searchValue == '') {
                  return val
                } else if(val.title.toLowerCase().includes(searchValue.toLowerCase())){
                  return val
                }
              }).slice(0,3).map((item) => {
                const {id, date, image, title} = item;
                return (
                  <Link to={`/blog/${id}`} className=" px-[20px] flex items-center gap-[12px] py-[20px] border border-b-black" key={id}>
                    <img className="w-[80px] h-[80px] rounded-[10px]" src={image} alt="image" />
                    <div>
                      <div className="text-[14px] mb-[5px]">{title}</div>
                      <div className="text-[#9F9F9F] text-[12px]">{date}</div>
                    </div>
                  </Link>
                )
              })} 
            </div>
            <div className="mt-[43px] text-[24px] font-semibold px-[20px] md:mb-[33px] mb-[15px]">Categories</div>
            {categories.map(category => (
              <div onClick={() => handleCategoryChange(category)} className={`${activeCategory === category && 'text-black'} px-[20px] flex md:mb-[40px] mb-[20px] items-center justify-between  cursor-pointer text-[#9F9F9F]`} key={category}>
                <div >{category.charAt(0).toUpperCase() + category.slice(1)}</div>
                <div>{categoryCount[category]}</div>
              </div>
            ))}
          </div>
          <div className=" hidden md:block w-[311px] mx-auto mt-[40px] py-[16px]">
            <div className="mt-[43px] text-[24px] font-semibold px-[20px] mb-[33px]">Recent Posts</div>
            <div className="flex flex-col gap-[40px]">
              {posts.slice(-5).reverse().map(item => {
                const {id, date, image, title} = item;
                return (
                  <Link to={`/blog/${id}`} className=" px-[20px] flex items-center gap-[12px]" key={id}>
                    <img className="w-[80px] h-[80px] rounded-[10px]" src={image} alt="image" />
                    <div>
                      <div className="text-[14px] mb-[5px]">{title}</div>
                      <div className="text-[#9F9F9F] text-[12px]">{date}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Pagination totalProducts={filteredPosts.length} productsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
      <Recommended/>
    </section>
  )
}

export default Blog