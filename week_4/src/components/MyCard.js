import React from "react";

export default function MyCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-white text-gray-800 p-10 rounded-xl text-center">
      <Icon className="text-4xl mx-auto mb-6" />
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{desc}</p>
      <p className="font-bold text-sm">Dummy text</p>
    </div>
  );
}
