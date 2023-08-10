import {useState} from 'react'
import { MdNavigateNext } from "react-icons/md"
import Recommended from "../Recommended/Recommended"
import blog from '../../data/blog.json';
import { Link } from "react-router-dom";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = blog.blog
  const categoryCount: Record<string, number> = {}

  posts.forEach(item => {
    if(categoryCount[item.category]) {
      categoryCount[item.category]++
    } else {
      categoryCount[item.category] = 1
    }
  });

  const categories = Object.keys(categoryCount)

  return (
    <section>
      <div className='bg-shop pt-16 pb-28 mt-8'>
        <img className="block my-0 mx-auto mb-3 " src="images/main-logo.png" alt="logo" />
        <h1 className='text-center text-5xl font-semibold'>Blog</h1>
        <div className='flex items-center mt-1 gap-2 justify-center'>
          <div className='font-semibold'>Home</div>
          <MdNavigateNext/>
          <div>Blog</div>
        </div>
      </div>
      <div className="pt-[100px] pb-[60px] flex justify-center gap-[30px]">
        <div className="blog-items w-[817px]">
          {posts.map(item => {
            const {id, author, category, date, description, image, title} = item;
            return (
              <div key={id} className="blog-item">
                <img src={image} alt="image" />
                <div className="flex items-center gap-[35px]">
                  <div>{author}</div>
                  <div>{date}</div>
                  <div>{category}</div>
                </div>
                <div>{title}</div>
                <p>{description}</p>
                <Link to={`/blog/${id}`}>Read more</Link>
              </div>
            )
          })}
        </div>
        <div className="blog-filter w-[393px]">
          <input type="text" name="" id="" />
          <ul>Categories</ul>
          {categories.map(item => (
            <li className="flex items-center justify-between" key={item}>
              <div>{item}</div>
              <div>{categoryCount[item]}</div>
            </li>
          ))}
        </div>
      </div>
      <Recommended/>
    </section>
  )
}

export default Blog