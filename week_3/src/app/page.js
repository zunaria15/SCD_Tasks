import React from 'react'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaYoutube, FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-white bg-[#050522] font-sans">
      {/* SECTION 1  */}
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-between items-center font-bold text-white px-10 py-8">
          <h1>NEXT JS</h1>
          <button className="bg-blue-600 px-10 py-2 rounded-full">CV</button>
        </div>

        <div className=" flex flex-col items-center text-center  text-white mt-4">
          <h1 className=" text-6xl font-bold">John Wick</h1>
          <h2 className=" text-3xl font-medium">Actor and Artist</h2>

          <p className="max-w-xl mt-4 ">
            John Wick is a 2014 American neo-noir action thriller film directed by Chad
            Stahelski in his directorial debut and a screenplay by Derek Kolstad.
          </p>

          {/* Social Icons */}
          <div className="flex gap-20 text-3xl mt-4">
            <CiFacebook/>
            <FaYoutube />
            <CiLinkedin />
          </div>

          {/* Image */}
          <div className="mt-10 ">
            <div className="h-[180px] w-[180px] rounded-full overflow-hidden ">
              <img
                src="/images.jpg" 
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  SERVICES SECTION  */}
      <div className="bg-[#050522] px-6 md:px-20 py-20 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Services I Offer</h2>

          <p className="text-white text-sm max-w-f mb-16">
            Legendary assassin John Wick (Keanu Reeves) retired from his violent career after
            marrying the love of his life. Her sudden death leaves John in deep mourning.
            When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized
            car and kill the puppy that was a last gift from his wife, John unleashes the
            remorseless killing machine within and seeks vengeance.
          </p>

          {/* Service Cards */}
          <div className="flex flex-col-3 gap-8 text-center">
            {/* Card 1 */}
            <div className="bg-white text-gray-800 p-10 rounded-xl ">
              <FaTools className="text-4xl mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Dummy Text</h3>
              <p className="text-sm text-gray-600  mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti suscipit iure corporis temporibus ipsa exercitationem 
                nesciunt impedit modi.
              </p>
              <p className="font-bold text-sm">Dummy text</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-gray-800 p-10 rounded-xl">
              <FaBriefcaseMedical className="text-4xl mx-auto mb-6 " />
              <h3 className="font-bold text-xl mb-4">Dummy Text</h3>
              <p className="text-sm text-gray-600  mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti suscipit iure corporis temporibus ipsa exercitationem 
                nesciunt impedit modi.
              </p>
              <p className="font-bold text-sm">Dummy text</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-gray-800 p-10 rounded-xl">
              <FaCogs className="text-4xl mx-auto mb-6 " />
              <h3 className="font-bold text-xl mb-4">Dummy Text</h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti suscipit iure corporis temporibus ipsa exercitationem 
                nesciunt impedit modi.
              </p>
              <p className="font-bold text-sm">Dummy text</p>
            </div>
          </div>
        </div>
      </div>

      {/*imgs */}
      <div className="bg-[#050522]  md:px-10 pb-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
      
          {/*  1 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/img1.jpg" alt="" className="w-full h-full object-cover " />
          </div>

          {/*  2 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/img2.jpg" alt="" className="w-full h-full object-cover " />
          </div>
          {/* 3 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/img3.jpg" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 4 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/img4.jpg" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 5*/}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)] h-[300px] overflow-hidden">
            <img src="/img5.jpg" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 6 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  h-[300px] overflow-hidden">
            <img src="/img6.jpg" alt="" className="w-full h-full object-cover " />
          </div>

        </div>
      </div>
    </div>
  );
}