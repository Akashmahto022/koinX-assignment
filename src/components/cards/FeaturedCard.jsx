import React from 'react'
import graphic from "../../assets/texGraphic.png"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const FeaturedCard = () => {
  return (
    <div className="w-[350px] mt-4">
      <div className="bg-[#0052FE] p-8 text-center rounded-md">
        <h3 className="text-white text-2xl mb-4 font-semibold">Get Started with KoinX for FREE</h3>
        <p className="text-white mb-8 text-[13px]">
          With our range of features that you can equip for free, 
          KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <img src={graphic} alt="Person looking at tax report on mobile device" className="mb-4 ml-12"/>
        <button className="bg-white text-black font-medium px-6 py-2 rounded-xl">
          Get Started for FREE <EastOutlinedIcon/>
        </button>
      </div>
    </div>
  )
}

export default FeaturedCard
