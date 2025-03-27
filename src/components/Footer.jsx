import React from "react";

const Footer = () => {
  return (
    <div className="footer-container  flex flex-col justify-end">
      <div className="relative w-full max-h-[660px] h-[80%] bg-gray flex flex-col justify-end items-center">
        <div className="absolute -top-20 translate right-1/2 translate-x-1/2 w-[90%] m-auto h-[150px] bg-orange flex px-14 py-10">
          <div className="w-full h-full flex flex-col justify-center gap-3 text-2xl text-white items-start">
            <h3>Subscribe for regular</h3>
            <h3>
              Updates from <b>Our Company</b>
            </h3>
          </div>
          <div className="w-full h-full flex gap-3 justify-end items-center">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full  px-4 py-2 border border-white text-white placeholder:text-white"
            />
            <button>
              <span className="text-white border  px-4 py-2 border-white flex justify-center items-center font-semibold">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className="w-[90%] flex justify-end items-center px-5 pb-14">
          <div className="w-full h-auto flex flex-col gap-3 text-white">
            <h1 className="letter-spacing-3 text-5xl font-bold text-start">
              Logo
            </h1>
            <p className="mt-5">
              Our expert advisors offer strategic investment planning, risk
              management.
            </p>
            <ul className="flex gap-2">
              <li>
                <a href="#">
                  <img src="/media/icons/linkedin.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center items-center gap-10">
            <div className="flex flex-col">
              <h3 className="text-white font-semibold">Explore</h3>
              <ul className=" mt-4 flex flex-col gap-2 text-white">
                <li>About Us</li>
                <li>Our Offerings</li>
                <li>Knowledge Centre</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-semibold">SEBI Details</h3>
              <ul className=" mt-4 flex flex-col gap-2 text-white">
                <li>Stock code:</li>
                <li>123456</li>
                <li>ISIN number:</li>
                <li>INE 123D01010</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <p className="text-white">Have any query in your mind?</p>
            <h1 className="text-7xl mt-3 text-white font-bold">Let’s Talk</h1>
            <button style={{'color':'#f47024'}} className="buttonEffect mt-1 text-orange max-w-[200px]">
              Let’s have a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
