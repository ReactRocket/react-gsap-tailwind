import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      number: "01",
      title: "Domain Expertise",
      subtitle: "Lorem Ipsum Dolor Sit Amet",
      description:
        "With decades of expertise, our team crafts strategic financial solutions tailored to your goals, leveraging deep industry knowledge, market insights, and a commitment to long-term financial growth and security.",
    },
    {
      number: "02",
      title: "Financial Growth",
      subtitle: "Optimized Investment Strategies",
      description:
        "Our experts analyze market trends and investment strategies to help you achieve financial independence and growth.",
    },
    {
      number: "03",
      title: "Risk Management",
      subtitle: "Secure Your Future",
      description:
        "We provide risk management solutions to ensure financial stability and security for the long term.",
    },
    {
      number: "04",
      title: "Business Consulting",
      subtitle: "Scale Your Business",
      description:
        "We offer expert guidance to help businesses scale and adapt to market changes, ensuring long-term success.",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=300%", // Makes sure all cards are visible before moving to the next section
          scrub: 1,
          onUpdate: (self) => {
            let index = Math.floor(self.progress * (cards.length - 0.1));
            setActiveIndex(index);
          },
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="custom-section-container relative p-6 md:p-14 bg-section-1 overflow-hidden h-screen flex justify-center items-center"
    >
      <div className="absolute top-[-43px] left-[-30px] md:top-[-50px] md:left-[-50px] size-[300px] md:size-[500px] bg-section-3-left bg-contain" />

      {/* Animated Card Section */}
      <div className="w-full h-full bg-orange p-6 md:p-14 flex flex-col md:flex-row transition-opacity duration-700 ease-in-out">
        <div 
          data-aos="zoom-in" 
          className="w-full md:w-[60%] h-full flex flex-col justify-between items-start"
        >
          <div className="text-white flex flex-col items-start justify-start gap-4 md:gap-6">
            <h6 className="text-xs md:text-sm">{cards[activeIndex].number}</h6>
            <h1 className="font-bold text-xl md:text-2xl">{cards[activeIndex].title}</h1>
            <h4 className="text-sm md:text-base">{cards[activeIndex].subtitle}</h4>
            <p className="text-sm md:text-normal text-justify">{cards[activeIndex].description}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="border hover:text-orange-500 cursor-pointer hover:bg-white border-white font-bold text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-[40%] h-full mt-6 md:mt-0">
          <div className="bg-section-3-main h-full w-full" />
        </div>
      </div>

      <div className="absolute bottom-[-60px] right-[-30px] md:bottom-[-100px] md:right-[-50px] size-[300px] md:size-[500px] bg-section-3-right bg-contain" />
    </div>
  );
};

export default Section3;