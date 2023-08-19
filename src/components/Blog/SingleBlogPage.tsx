import { Link, useParams } from "react-router-dom";
import blogs from "../../data/blog.json";
import { ROUTES } from "../../utils/routes";
import { SlArrowRight } from "react-icons/sl";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import Recommended from "../Recommended/Recommended";
import { motion } from "framer-motion";
import { animation } from "../../utils/animation";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const SingleBlogPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const blog = blogs.blog.find((item) => item.id === itemId);
  const shareUrl = window.location.href;

  if (!blog) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white md:text-[40px]">
        ❌ Post not found...
        <div>Something getting wrong 🤷‍♂️</div>
        <Link
          className="mt-[20px] rounded-[15px] border-2 border-black p-[20px]"
          to={ROUTES.BLOG}
        >
          Back To Blog 🚀
        </Link>
      </div>
    );
  } else {
    const { title, author, category, date, description, id, image, info } =
      blog;
    return (
      <motion.div initial="hidden" whileInView="visible">
        <motion.div
          variants={animation}
          custom={2}
          className="mt-12 flex items-center gap-[10px] bg-[#F9F1E7] p-3 text-xs md:gap-8 md:px-[100px] md:pt-[38px] md:text-base "
        >
          <div className="text-[#9F9F9F]">Home</div>
          <SlArrowRight />
          <div className="text-[#9F9F9F]">Blog</div>
          <SlArrowRight />
          <div className="divider mx-9 h-6 w-0.5 border-t bg-[#9F9F9F] md:h-9"></div>
          <div>{author}</div>
        </motion.div>
        <motion.div
          variants={animation}
          initial={{ x: 0, y: 200 }}
          animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
          custom={2}
          key={id}
          className="single_product-item pt-[35px] md:pb-[58px]"
        >
          <img
            className="w-full rounded-[10px] object-cover xl:h-[600px]"
            src={image}
            alt="image"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            className="options"
          >
            <motion.div
              variants={animation}
              className="mt-[40px] text-[24px] md:text-[42px]"
            >
              {title}
            </motion.div>
            <div className="mt-[17px] flex items-center gap-2 md:gap-[35px]">
              <div className="flex items-center gap-[7px] text-[#9F9F9F]">
                <FaUser />
                {author}
              </div>
              <div className="flex items-center gap-[7px] text-[#9F9F9F]">
                <MdDateRange />
                {date}
              </div>
              <div className="flex items-center gap-[7px] text-[#9F9F9F]">
                <IoMdPricetag />
                {category}
              </div>
            </div>
            <motion.p
              variants={animation}
              custom={2}
              className="mt-[13px] text-sm tracking-widest md:text-[18px]"
            >
              {description}
            </motion.p>
            <motion.p
              variants={animation}
              custom={3}
              className="mt-[13px] text-sm tracking-widest md:text-[18px]"
            >
              {info}
            </motion.p>
            <div className="mt-[30px] flex flex-col items-center justify-between gap-2 md:mt-[100px] md:flex-row md:gap-0">
              <div className="mb-[12px] text-[#9F9F9F]">
                Category <span className="ml-[16px] mr-[12px]">:</span>{" "}
                {category}
              </div>
              <div className="mb-[12px] text-[#9F9F9F]">
                Author <span className="ml-[16px] mr-[12px]">:</span>
                {author}
              </div>
              <div className="mb-[12px] flex text-[#9F9F9F]">
                Share <span className="ml-[16px] mr-[12px]">:</span>
                <div className="inline-flex items-center gap-[25px] text-black">
                  <FacebookShareButton
                    url={shareUrl}
                    className="duration-200 hover:scale-110"
                  >
                    <BiLogoFacebookCircle className="h-[26px] w-[26px]" />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={shareUrl}
                    className="duration-200 hover:scale-110"
                  >
                    <AiFillLinkedin className="h-[26px] w-[26px]" />
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    className="duration-200 hover:scale-110"
                  >
                    <AiFillTwitterCircle className="h-[26px] w-[26px]" />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <Recommended />
      </motion.div>
    );
  }
};

export default SingleBlogPage;
