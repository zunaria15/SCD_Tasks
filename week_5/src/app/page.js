"use client";
import React, { useState } from 'react';

export default function CounterSection() {
  const [count, setCount] = useState(0);

  // Increment Function: 10 se upar nahi jayega
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  // Decrement Function: 0 se niche nahi jayega
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#d7f9e8]">
      <h1 className="text-5xl font-bold text-black mb-4">Counter Program</h1>
      
      {/* Number Display */}
      <p className="text-8xl font-bold text-black mb-10">{count}</p>
      
      <div className="flex gap-4">
        {/* Add Button */}
        <button 
          onClick={handleIncrement}
          className={`bg-[#3b82f6] text-white px-8 py-3 rounded-md font-medium transition shadow-md 
            ${count === 10 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          Add 1
        </button>

        {/* Subtract Button */}
        <button 
          onClick={handleDecrement}
          className={`bg-[#3b82f6] text-white px-8 py-3 rounded-md font-medium transition shadow-md 
            ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          Subtract 1
        </button>
      </div>
    </section>
  );
}