import React from "react";

const Section5 = () => {
  return (
    <div className="section-container flex">
      <div className="h-full w-full bg-orange flex flex-col items-center justify-between p-14 text-white">
        <div className="flex flex-col items-center gap-1">
          <h6 className="text-sm">Our Brand Story</h6>
          <h1 className="text-2xl font-extrabold">Brand Foundation</h1>
        </div>
        <div className="border border-white size-[400px] rounded-full flex items-end mb-3 justify-center">
          <div className="size-[300px] border-2 border-dashed border-spacing-10 border-white rounded-full flex items-end mb-3 justify-center">
            <div className="size-[200px] border border-white rounded-full flex items-end mb-3 justify-center"> 
              <div className="size-[100px] border border-white rounded-full flex items-end mb-3 justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full  flex  justify-center items-center ">
        <div className="flex flex-col items-start justify-center gap-2 max-w-[300px]">
          <h5 className="text-gray font-normal">02</h5>
          <h1 className="font-bold text-2xl text-black">Lorem Ipsum</h1>
          <h1 className="font-extrabold text-2xl text-orange">
            Dolor Sit Aamet
          </h1>
          <p className="text-lg leading-7 text-start text-gray font-light">
            Our expert advisors offer strategic investment planning, risk
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
