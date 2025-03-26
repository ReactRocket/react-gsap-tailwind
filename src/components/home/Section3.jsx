import React from "react";

const Section3 = () => {
  return (
    <div className="section-container relative p-14 bg-section-1 overflow-hidden">
      <div className="bg-section-3-left absolute top-[-50px] left-[-50px] size-[500px] bg-contain"></div>
      <div className="w-full h-full bg-orange  p-14 flex">
        <div className="w-[60%] h-full flex flex-col justify-between items-start">
          <div className="text-white flex flex-col items-start justify-start gap-6">
            <h6 className="text-sm">01</h6>
            <h1 className="font-bold text-2xl">Domain Expertise</h1>
            <h4>Lorem Ipsum Dolor Sit Amet</h4>
            <p className="text-normal text-justify">
              With decades of expertise, our team crafts strategic financial
              solutions tailored to your goals, leveraging deep industry
              knowledge, market insights, and a commitment to long-term
              financial growth and security.
            </p>
          </div>
          <div>
            <button className="border border-white font-bold text-white px-4 py-2">Learn More</button>
          </div>
        </div>
        <div className="w-[40%] h-full">
          <div className="bg-section-3-main"></div>
        </div>
      </div>
      <div className="bg-section-3-right absolute bottom-[-100px] right-[-50px] size-[500px] bg-contain"></div>
    </div>
  );
};

export default Section3;
