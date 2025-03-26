import React, { useState, useEffect } from "react";

const Section8 = () => {
  const data = [
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    // Add more team members here
  ];

  return (
    <div className="section-container flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full text-start p-14">
        <h5 className="text-gray-500 font-light">Updates</h5>
        <h1 className="font-semibold text-3xl text-black">The latest from</h1>
        <h1 className="font-bold text-3xl text-orange-500">Our Company</h1>
      </div>

      {/* Carousel Container */}
      <div className=" flex items-center justify-center w-full   overflow-hidden px-10">
        {/* Slides */}
        <div className="flex w-full justify-center items-center space-x-2 overflow-x-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform `}
            >
              <div className="relative w-[300px]  h-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
                
                  <div className="  text-gray p-3 rounded-md">
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                    <h2 className="text-sm text-gray-300">{item.title}</h2>
                    <p className="text-xs mt-1">{item.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;
