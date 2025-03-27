import React from "react";

const Section4 = () => {
  return (
    <div className="section-container relative bg-[#F470241A] overflow-hidden flex">
      <div className="h-full w-1/2 relative">
        <div data-aos="zoom-in" className=" absolute bottom-0 bg-section-4-img2  w-full h-[80%] bg-contain bg-no-repeat bg-bottom"></div>
      </div>
      <div data-aos="zoom-in-up" className="h-full w-1/2 pr-14 flex flex-col justify-center items-start gap-5 ">
        <div >
          <h5 className="text-gray font-normal">Message</h5>
          <h1 className="font-semibold text-2xl text-black">What our</h1>
          <h1 className="font-extrabold text-2xl text-orange">CEO Says</h1>
        </div>
        <p className="text-lg text-justify text-gray font-light">
          Our Company empowers individuals and businesses with strategic
          financial solutions, investment planning, and business growth
          advisory. We provide expert guidance in wealth management, risk
          assessment, and financial planning to help clients achieve sustainable
          success. Our mission is to elevate financial well-being through
          innovation, integrity, and personalized solutions for long-term
          growth.
        </p>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-black font-bold">Raghvendra Nath,</h4>
          <h5>MD and CEO, Our Company</h5>
        </div>
      </div>
      <div className="bg-section-4-img1 absolute bottom-0 right-0 size-[200px] bg-contain bg-no-repeat bg-bottom"></div>
    </div>
  );
};

export default Section4;
