import React from "react";

export default function Section3() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <div className="md:px-10 pb-10">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[calc(50%-12px)] h-[300px] overflow-hidden"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
