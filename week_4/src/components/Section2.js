import React from "react";
import { FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";
import MyCard from "./MyCard";

export default function Section2() {
  return (
    <div className="px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services I Offer</h2>

        <p className="text-sm mb-16">
          Legendary assassin John Wick retired from his violent career after
          marrying the love of his life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <MyCard
            icon={FaTools}
            title="Dummy Text"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <MyCard
            icon={FaBriefcaseMedical}
            title="Dummy Text"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />

          <MyCard
            icon={FaCogs}
            title="Dummy Text"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </div>
  );
}
