import React from 'react'

const Person = ({
    personImage,
    personName,
    personDesignation,
    description
}) => {
  return (
    <div className='flex py-4 m-4 gap-6 '>
      <div className='text-center'>
        <img src={personImage} alt="" className='w-[70px] h-[80px] rounded-md ml-[28px]'/>
        <h2 className='text-black font-medium '>{personName}</h2>
        <h3>{personDesignation}</h3>
      </div>
      <div className='w-[500px] py-4'>
        <p className='font-sans font-normal text-gray-700 text-[18px]'>{description}</p>
      </div>
    </div>
  )
}

export default Person
