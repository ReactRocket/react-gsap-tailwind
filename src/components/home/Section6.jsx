import React, { useState, useEffect } from "react";

const Section6 = () => {
  const data = [
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    // Add more team members here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="section-container flex flex-col items-center">
      {/* Section Title */}
      <div className="w-full text-start p-14">
        <h5 className="text-gray-500 font-light">Our Team</h5>
        <h1 className="font-semibold text-3xl text-black">The Minds Behind</h1>
        <h1 className="font-bold text-3xl text-orange-500">Our Company</h1>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center w-full max-w-[95%] overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 md:left-5 text-white text-2xl bg-gray-800 rounded-full size-10 flex justify-center items-center hover:bg-gray-700 transition"
        >
          {`<`}
        </button>

        {/* Slides */}
        <div className="flex w-full justify-center items-center space-x-1">
          {data.map((item, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ease-in-out transform ${
                index === currentIndex ? "scale-110 opacity-100" : "scale-90 opacity-50"
              }`}
            >
              <div className="relative w-72 md:w-80 h-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
                {index === currentIndex && (
                  <div className="absolute bottom-5 left-4 right-4 bg-opacity-70 text-white p-3 rounded-md">
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                    <h2 className="text-sm text-gray-300">{item.title}</h2>
                    <p className="text-xs mt-1">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 md:right-5 text-white text-2xl bg-gray-800 rounded-full size-10 flex justify-center items-center hover:bg-gray-700 transition"
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default Section6;
