import { GrTrophy } from "react-icons/gr"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdOutlineSupportAgent } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"

const Recommended = () => {
  return (
    <div className='flex items-center justify-between py-28 mt-24 bg-orange-100 px-10'>
          <div className='flex items-center gap-3'>
            <GrTrophy size='60'/>
            <div>
              <div className='text-2xl font-semibold'>High Quality</div>
              <div className='text-xl font-medium text-gray-400'>Crafted from top materials</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <IoMdCheckmarkCircleOutline size='60'/>
            <div>
              <div className='text-2xl font-semibold'>Warranty Protection</div>
              <div className='text-xl font-medium text-gray-400'>Over 2 years</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <TbTruckDelivery size='60'/>
            <div>
              <div className='text-2xl font-semibold'>Free Shipping</div>
              <div className='text-xl font-medium text-gray-400'>Order over 150 $</div>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <MdOutlineSupportAgent size='60'/>
            <div>
              <div className='text-2xl font-semibold'>24 / 7 Support</div>
              <div className='text-xl font-medium text-gray-400'>Dedicated support</div>
            </div>
          </div>
        </div>
  )
}

export default Recommended