import React from 'react'

const Header = () => {
  return (
      <div className="navbar fixed w-full top-0 left-0 z-50 mb-[120px] bg-white flex items-center justify-between px-14 py-4 shadow-md">
        <div className="logo">
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ww5aYn5_3C8Kc9dj0hlvQnHdpdSWl_WDEc976bLSWu2P4Mj7xAESLMsRW86q36PxKA&usqp=CAU'} alt="Logo" className="h-8" />
        </div>
        <div className="menu flex items-center space-x-8">
          <a href="#" className="text-black font-medium hover:text-blue-500">
            Crypto Taxes
          </a>
          <a href="#" className="text-black font-medium hover:text-blue-500">
            Free Tools
          </a>
          <a href="#" className="text-black font-medium hover:text-blue-500">
            Resource Center
          </a>
        <div className="buttons flex items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
        </div>
      </div>
  )
}

export default Header
