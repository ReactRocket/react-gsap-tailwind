import React from "react";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col justify-end">
      <div className="relative w-full md:max-h-[660px] h-[80%] bg-gray flex flex-col justify-end items-center">
        <div
          data-aos="zoom-in"
          className="md:absolute md:-top-20 md:right-1/2 md:translate-x-1/2 w-full md:mb-0 mb-3 md:w-[90%] m-auto min-h-[120px] md:h-[150px] bg-orange flex flex-col md:flex-row px-4 md:px-14 py-6 md:py-10 gap-4 md:gap-0"
        >
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-2 md:gap-3 text-lg md:text-2xl text-white md:items-start items-center">
            <h3>Subscribe for regular</h3>
            <h3>
              Updates from <b>Our Company</b>
            </h3>
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col md:flex-row gap-2 md:gap-3 justify-end items-center">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full px-3 md:px-4 py-1 md:py-2 border border-white text-white placeholder:text-white text-sm md:text-base"
            />
            <button>
              <span className="text-white border px-3 md:px-4 py-1 md:py-2 border-white flex justify-center items-center font-semibold text-sm md:text-base">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className="w-[90%] flex flex-col md:flex-row justify-end items-center px-4 md:px-5 pb-10 md:pb-14 gap-6 md:gap-0">
          <div className="w-full h-auto flex flex-col gap-3 text-white">
            <h1 className="letter-spacing-3 text-3xl md:text-5xl font-bold text-start">
              Logo
            </h1>
            <p className="mt-3 md:mt-5 text-sm md:text-base">
              Our expert advisors offer strategic investment planning, risk
              management.
            </p>
            <ul className="flex gap-2 mt-2 md:mt-0">
              <li>
                <a href="#">
                  <img src="/media/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/twitter.svg" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/media/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex  md:justify-center justify-start items-center gap-6 md:gap-10">
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-sm md:text-base">Explore</h3>
              <ul className="mt-2 md:mt-4 flex flex-col gap-1 md:gap-2 text-white text-xs md:text-sm">
                <li>About Us</li>
                <li>Our Offerings</li>
                <li>Knowledge Centre</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-semibold text-sm md:text-base">SEBI Details</h3>
              <ul className="mt-2 md:mt-4 flex flex-col gap-1 md:gap-2 text-white text-xs md:text-sm">
                <li>Stock code:</li>
                <li>123456</li>
                <li>ISIN number:</li>
                <li>INE 123D01010</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <p className="text-white text-sm md:text-base">Have any query in your mind?</p>
            <h1 className="text-4xl md:text-7xl mt-2 md:mt-3 text-white font-bold">Let’s Talk</h1>
            <button
              style={{ color: "#f47024" }}
              className="buttonEffect mt-1 text-orange max-w-[200px] text-sm md:text-base"
            >
              Let’s have a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;