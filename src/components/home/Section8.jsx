import React from "react";

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
      name: "Mr. Anil Mehta",
      title: "CEO",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Ms. Priya Sharma",
      title: "Marketing Head",
      image: "/media/images/section8-img1.png",
      description:
        "Ms. Priya Sharma leads the marketing team with innovation and strategic vision.",
    },
    {
      name: "Mr. Rajesh Khanna",
      title: "Finance Head",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Rajesh Khanna ensures financial stability and growth with expert insights.",
    },
    {
      name: "Ms. Neha Kapoor",
      title: "HR Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Ms. Neha Kapoor manages human resources with a focus on employee engagement and growth.",
    },
  ];

  return (
    <div className="section-container flex flex-col items-center w-full">
      {/* Section Title */}
      <div className="w-full text-start p-14">
        <h5 className="text-gray-500 font-light">Updates</h5>
        <h1 className="font-semibold text-3xl text-black">The latest from</h1>
        <h1 className="font-bold text-3xl text-orange-500">Our Company</h1>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full h-full px-10 overflow-hidden">
        <div
          className="grid grid-flow-col auto-cols-[minmax(400px,_1fr)] gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="snap-start  bg-white rounded-lg  p-4 w-full flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="p-3 text-center  w-full h-full flex flex-col gap-3   bg-[#F470240D]">
                <div className="flex justify-between items-center"><span>News</span><span>15, Feb, 25</span></div>
                <div className="flex flex-col items-start justify-end gap-2 w-full">
                  <h1 className="font-extrabold text-2xl text-black">Lorem Ipsum Dolor</h1>
                  <h1 className="font-extrabold text-2xl text-black">Sit Amet</h1>
                  <button className="border border-orange text-orange max-w-[200px] px-4 py-2 font-bold">Read More</button>
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
