import { Link, useParams } from "react-router-dom"
import blogs from '../../data/blog.json';
import { ROUTES } from "../../utils/routes";
import { SlArrowRight } from "react-icons/sl";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import Recommended from "../Recommended/Recommended";

const SingleBlogPage = () => {
  const { itemId } = useParams<{itemId: string}>()
  const blog = blogs.blog.find((item) => item.id === itemId)
  const shareUrl = window.location.href;

  if (!blog) {
    return <div className='flex flex-col items-center justify-center h-screen bg-white md:text-[40px]'>❌ Post not found... 
      <div>Something getting wrong 🤷‍♂️</div>
      <Link className='border-2 mt-[20px] p-[20px] border-black rounded-[15px]' to={ROUTES.BLOG}>Back To Blog 🚀</Link>
    </div>;
  } else {
    const { title, author, category, date, description, id, image, info } = blog
    return (
      <>
        <div className="flex gap-[10px] md:gap-8 items-center text-xs md:text-base p-3 mt-12 md:pt-[38px] md:px-[100px] bg-[#F9F1E7] ">
          <div className='text-[#9F9F9F]'>Home</div>
          <SlArrowRight/>
          <div className='text-[#9F9F9F]'>Blog</div>
          <SlArrowRight/>
          <div className="divider border-t bg-[#9F9F9F] h-6 md:h-9 w-0.5 mx-9"></div>
          <div>{author}</div>
        </div>
        <div key={id} className="single_product-item pt-[35px] md:pb-[58px]">
          <img className='rounded-[10px] w-full xl:h-[600px] object-cover' src={image} alt="image" />
          <div className="options">
            <div className='mt-[40px] text-[24px] md:text-[42px]'>{title}</div>
            <div className="flex items-center gap-2 md:gap-[35px] mt-[17px]">
              <div className="flex items-center gap-[7px] text-[#9F9F9F]"><FaUser/>{author}</div>
              <div className="flex items-center gap-[7px] text-[#9F9F9F]"><MdDateRange/>{date}</div>
              <div className="flex items-center gap-[7px] text-[#9F9F9F]"><IoMdPricetag/>{category}</div>
            </div>
            <p className='text-sm md:text-[18px] tracking-widest mt-[13px]'>{description}</p>
            <p className='text-sm md:text-[18px] tracking-widest mt-[13px]'>{info}</p>
            <div className='mt-[30px] md:mt-[100px] flex items-center flex-col md:flex-row md:gap-0 gap-2 justify-between'>
              <div className='text-[#9F9F9F] mb-[12px]'>Category <span className='ml-[16px] mr-[12px]'>:</span> {category}</div>
              <div className='text-[#9F9F9F] mb-[12px]'>Author <span className='ml-[16px] mr-[12px]'>:</span>{author}</div>
              <div className='text-[#9F9F9F] mb-[12px] flex'>Share <span className='ml-[16px] mr-[12px]'>:</span>
              <div className="inline-flex items-center gap-[25px] text-black">
                <Link target="_blank" rel="noopener noreferrer" to={`https://www.facebook.com/sharer.php?u=${shareUrl}&quote=${title}`}><BiLogoFacebookCircle size={24}/></Link>
                <Link target="_blank" rel="noopener noreferrer" to={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${title}&summary=${description}`}><AiFillLinkedin size={24}/></Link>
                <Link target="_blank" rel="noopener noreferrer" to={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${'note' + title}`}><AiFillTwitterCircle size={24}/></Link>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Recommended/>
      </>
    )
  }

 
}

export default SingleBlogPage