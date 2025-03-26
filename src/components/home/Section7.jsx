import React from "react";

const Section7 = () => {
  const data = [1,2,3,4,5]
  return (
    <div className="section-container flex ">
      <div className="h-full w-1/2 flex flex-col justify-start gap-1 px-14 py-20 relative">
        <h5 className="text-gray font-extralight">Join our team</h5>
        <h1 className="font-extrabold text-2xl text-black">Careers at</h1>
        <h1 className="font-extrabold text-2xl text-orange">Our Company</h1>
        <p className="text-gray font-normal  leading-5 tracking-wide ">
          We're always looking for talented individuals who share our passion
          for innovation and excellence.
        </p>
        <div className="bg-section-7-img1 absolute bottom-0 -right-7 aspect-square w-[350px] bg-contain bg-no-repeat z-0"></div>
      </div>
      <div className="w-1/2 h-full bg-gray p-14 z-10 flex flex-col gap-4 overflow-y-auto">
        {data.map((item, index) =>  {
          return (
            <div key={index} className="flex flex-col gap-2 bg-white p-5">
              <h6 className="text-sm">Lorem Ipsum</h6>
              <h1 className="text-2xl font-extrabold">Account Manager</h1>
              <p className="font-normal tracking-wide">
                As an Account Manager you will be working with clients to
                understand their needs, collaborating with internal teams
                executing projects profitably whilst growing existing and new
                business accounts.
              </p>
              <button className="border border-orange text-orange max-w-[100px] px-4 py-2 font-bold">
                Apply
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section7;
