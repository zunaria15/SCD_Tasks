// src/components/mycart.js
import Link from "next/link";
import React from "react";

function Card({ image, title, date, address, id }) {
  return (
    <div className="flex bg-gray-100 rounded-xl shadow-md p-4 mb-6 items-center justify-between">
      <img
        src={image}
        alt={title}
        className="w-72 h-40 object-cover rounded-lg"
      />

      <div className="flex-1 ml-6">
        <h2 className="text-lg text-black font-semibold">{title}</h2>
        <p className="text-sm font-normal text-black mt-1">{date}</p>
        <p className="text-black text-sm">{address}</p>
      </div>

      <Link
        href={"/events/" + id}
        className="bg-green-500 text-white text-sm px-5 py-2 rounded-md hover:bg-green-600 transition flex items-center gap-1"
      >
        Explore Event →
      </Link>
    </div>
  );
}

export default Card;