"use client";
import React from "react";
import { useParams } from "next/navigation";
import { events } from "@/components/Data";

export default function Page() {
  const params = useParams();
  const id = Number(params?.id); // convert "1" to 1
  const event = events.find((i) => i.id === id);

  //  Main Render
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 font-sans">
      {/* Header */}
      <div className="w-full bg-linear-to-r from-cyan-500 to-teal-500 text-center p-20">
        <h1 className="text-4xl font-semibold text-white">{event.title}</h1>
      </div>

      {/* Event Card */}
      <div className="bg-[#1f2937] text-white w-[600px] -mt-16 rounded-sm shadow-lg flex items-center p-6">
        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          className="rounded-full object-cover border-2 border-white w-48 h-48"
        />

        {/* Date and Address */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-teal-400">
            <span className="text-lg">📅</span>
            <span>{event.date}</span>
          </div>

          <div className="flex items-center space-x-2 text-teal-400 text-center">
            <span className="text-lg">📍</span>
            <span>{event.address}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-3xl mt-10 px-8 leading-relaxed text-[17px]">
        {event.description}
      </p>
    </div>
  );
}