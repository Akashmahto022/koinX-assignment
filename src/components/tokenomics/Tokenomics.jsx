import React from 'react'
import Section from '../section/Section'
import chart from "../../assets/chart.png"

const TokenOmics = () => {
  return (
    <div className='mt-6 w-[850px] max-sm:w-[430px]'>
      <Section heading={"Tokenomics"}>
          <div className="py-4">
            <h1 className="text-black pb-2 font-bold">Initial DistriBution</h1>
            <img src={chart} alt="" className='w-[500px]'/>
            <p className="font-sans	font-semibold text-gray-700 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ex, voluptatem sit doloremque odio odit officia debitis ullam
              provident commodi inventore quidem quod labore ipsa voluptas illum
              quas explicabo amet dignissimos expedita architecto ut dolorum
              dolor beatae. Sunt doloribus magni tenetur, optio assumenda
              provident libero distinctio quos eum, officiis sit ipsa nemo odio
              recusandae ullam sequi dicta atque porro excepturi maxime?
              Recusandae iste neque quis corrupti nesciunt at vitae in.
            </p>
          </div>
        </Section>
    </div>
  )
}

export default TokenOmics
