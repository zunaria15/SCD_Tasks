/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Page() {
  return (
    <div className="m-0 bg-red-600 flex justify-center min-h-screen">
      {/* Main Container 900px */}
      <div className="w-[900px] flex flex-col">
        
        {/* Header Image */}
        <div className="h-[150px] w-full">
          <img src="/image.jpg" alt="Header" className="w-full h-full object-fill" />
        </div>

        {/* Navbar */}
        <div className="bg-black py-[12px] px-[20px] flex gap-[50px]">
          <a href="#" className="text-white no-underline text-[14px] font-bold">Home</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">About Us</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">Products</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">Contact Us</a>
        </div>

        {/* Content Section */}
        <div className="flex flex-grow">
          {/* Left Section */}
          <div className="w-[300px] bg-green-600 text-white p-2">
            left
          </div> 
          
          {/* Right Section - Simple Orange */}
          <div className="flex-grow bg-[#ffa500] text-white p-2">
            right
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-blue-700 text-white h-[50px] p-2">
          Footer Section
        </div>
        
      </div>
    </div>
  )
}