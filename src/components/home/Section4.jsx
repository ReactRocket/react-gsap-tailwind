import React from "react";

const Section4 = () => {
  return (
    <div className="custom-section-container relative bg-[#F470241A] overflow-hidden flex flex-col md:flex-row">
      <div className="h-full w-full md:w-1/2 relative">
        <div 
          data-aos="zoom-in" 
          className="absolute bottom-0 bg-section-4-img2 w-full h-[80%] bg-contain bg-no-repeat bg-bottom"
        />
      </div>
      <div 
        data-aos="zoom-in-up" 
        className="h-full w-full md:w-1/2 p-6 md:pr-14 flex flex-col justify-center items-start gap-4 md:gap-5"
      >
        <div>
          <h5 className="text-gray font-normal text-sm md:text-base">Message</h5>
          <h1 className="font-semibold text-xl md:text-2xl text-black">What our</h1>
          <h1 className="font-extrabold text-xl md:text-2xl text-orange">CEO Says</h1>
        </div>
        <p className="text-base md:text-lg text-justify text-gray font-light">
          Our Company empowers individuals and businesses with strategic
          financial solutions, investment planning, and business growth
          advisory. We provide expert guidance in wealth management, risk
          assessment, and financial planning to help clients achieve sustainable
          success. Our mission is to elevate financial well-being through
          innovation, integrity, and personalized solutions for long-term
          growth.
        </p>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-black font-bold text-sm md:text-base">Raghvendra Nath,</h4>
          <h5 className="text-sm md:text-base">MD and CEO, Our Company</h5>
        </div>
      </div>
      <div className="bg-section-4-img1 absolute bottom-0 right-0 size-[150temporarypx] md:size-[200px] bg-contain bg-no-repeat bg-bottom" />
    </div>
  );
};

export default Section4;