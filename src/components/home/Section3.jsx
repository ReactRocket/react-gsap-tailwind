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
    <div ref={sectionRef} className="section-container relative p-14 bg-section-1 overflow-hidden h-screen flex justify-center items-center">
      <div className="absolute top-[-50px] left-[-50px] size-[500px] bg-section-3-left bg-contain"></div>

      {/* Animated Card Section */}
      <div className="w-full h-full bg-orange p-14 flex transition-opacity duration-700 ease-in-out">
        <div className="w-[60%] h-full flex flex-col justify-between items-start">
          <div className="text-white flex flex-col items-start justify-start gap-6">
            <h6 className="text-sm">{cards[activeIndex].number}</h6>
            <h1 className="font-bold text-2xl">{cards[activeIndex].title}</h1>
            <h4>{cards[activeIndex].subtitle}</h4>
            <p className="text-normal text-justify">{cards[activeIndex].description}</p>
          </div>
          <div>
            <button className="border hover:text-orange-500 cursor-pointer hover:bg-white border-white font-bold text-white px-4 py-2">Learn More</button>
          </div>
        </div>
        <div className="w-[40%] h-full">
          <div className="bg-section-3-main"></div>
        </div>
      </div>

      <div className="absolute bottom-[-100px] right-[-50px] size-[500px] bg-section-3-right bg-contain"></div>
    </div>
  );
};

export default Section3;
