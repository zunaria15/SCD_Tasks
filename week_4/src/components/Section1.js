import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Section1() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center font-bold px-10 py-8">
        <h1>NEXT JS</h1>
        <button className="bg-blue-600 px-10 py-2 rounded-full">CV</button>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center mt-4">
        <h1 className="text-6xl font-bold">John Wick</h1>
        <h2 className="text-3xl font-medium">Actor and Artist</h2>

        <p className="max-w-xl mt-4">
          John Wick is a 2014 American neo-noir action thriller film directed by
          Chad Stahelski.
        </p>

        {/* Social Icons */}
        <div className="flex gap-20 text-3xl mt-4">
          <CiFacebook />
          <FaYoutube />
          <CiLinkedin />
        </div>

        {/* Image */}
        <div className="mt-10">
          <div className="h-[180px] w-[180px] rounded-full overflow-hidden">
            <img
              src="/images.jpg"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
