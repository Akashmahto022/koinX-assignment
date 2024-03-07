import React from 'react'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const Card = ({
    children,
    bgColor = "bg-blue-600",
    image,
    title,
    btnName
}) => {
  return (
    <div className={`p-4 ${bgColor} inline-block rounded-md`}>
    <div className='flex gap-6'>
      <img src={image} alt="" className='w-[100px] h-[90px] pt-2'/>
      <div>
        <h1 className='text-white my-2 text-xl font-bold'>{title}</h1>
        <button className='bg-white px-4 py-1 my-2 text-black font-normal rounded '>{btnName} <EastOutlinedIcon/></button>
      </div>
      {children}
    </div>
    </div>
  )
}

export default Card
