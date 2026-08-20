import React from 'react'

export default function cards({heading, content, subHeading, icon}) {
  return (
    <div className="bg-white p-8 rounded-lg  flex flex-col items-center text-center">
        <div className="text-4xl mb-4 text-black">
            {icon}
        </div>
        
        <h2 className="text-black font-bold text-black mb-2">{heading}</h2>
        
        <p className="text-black  mb-4 leading-relaxed">
            {content}
        </p>
        
        <h3 className="text-black  ">
            {subHeading}
        </h3>
    </div>
  )
}