import { motion } from "framer-motion";
import { GrTrophy } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { animation } from "../../utils/animation";

const Recommended = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      custom={2}
      viewport={{ amount: 0.3 }}
      className="mt-[35px] grid grid-cols-2 gap-3 bg-[#FAF3EA] px-5 py-5 md:flex md:items-center md:justify-between md:gap-0 md:px-4 lg:px-10 lg:py-[100px] xl:mt-24"
    >
      <div className="flex items-center gap-3">
        <GrTrophy size="60" />
        <div>
          <div className="text-[12px] font-semibold md:text-base lg:text-2xl">
            High Quality
          </div>
          <div className="text-[8px] font-medium text-gray-400 md:text-base lg:text-xl">
            Crafted from top materials
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircleOutline size="60" />
        <div>
          <div className="text-[12px] font-semibold md:text-base lg:text-2xl">
            Warranty Protection
          </div>
          <div className="text-[8px] font-medium text-gray-400 md:text-base lg:text-xl">
            Over 2 years
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TbTruckDelivery size="60" />
        <div>
          <div className="text-[12px] font-semibold md:text-base lg:text-2xl">
            Free Shipping
          </div>
          <div className="text-[8px] font-medium text-gray-400 md:text-base lg:text-xl">
            Order over 150 $
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MdOutlineSupportAgent size="60" />
        <div>
          <div className="text-[14px] font-semibold md:text-base lg:text-2xl">
            24 / 7 Support
          </div>
          <div className="text-[10px] font-medium text-gray-400 md:text-base lg:text-xl">
            Dedicated support
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Recommended;
