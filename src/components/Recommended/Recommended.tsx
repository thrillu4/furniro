import { motion } from "framer-motion"
import { GrTrophy } from "react-icons/gr"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdOutlineSupportAgent } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { animation } from "../../utils/animation"


const Recommended = () => {
  return (
    <motion.div initial="hidden" whileInView='visible' variants={animation} custom={2} viewport={{amount: 0.3}} className='md:flex md:gap-0 gap-3 md:items-center md:justify-between grid grid-cols-2 py-5 lg:py-[100px] mt-[35px] xl:mt-24 bg-[#FAF3EA] md:px-4 lg:px-10 px-5'>
          <div className='flex items-center gap-3'>
            <GrTrophy size='60'/>
            <div>
              <div className='md:text-base lg:text-2xl text-[12px] font-semibold'>High Quality</div>
              <div className='md:text-base lg:text-xl text-[8px] font-medium text-gray-400'>Crafted from top materials</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <IoMdCheckmarkCircleOutline size='60'/>
            <div>
              <div className='md:text-base lg:text-2xl text-[12px] font-semibold'>Warranty Protection</div>
              <div className='md:text-base lg:text-xl text-[8px] font-medium text-gray-400'>Over 2 years</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <TbTruckDelivery size='60'/>
            <div>
              <div className='md:text-base lg:text-2xl text-[12px] font-semibold'>Free Shipping</div>
              <div className='md:text-base lg:text-xl text-[8px] font-medium text-gray-400'>Order over 150 $</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <MdOutlineSupportAgent size='60'/>
            <div>
              <div className='md:text-base lg:text-2xl text-[14px] font-semibold'>24 / 7 Support</div>
              <div className='md:text-base lg:text-xl text-[10px] font-medium text-gray-400'>Dedicated support</div>
            </div>
          </div>
        </motion.div>
  )
}

export default Recommended