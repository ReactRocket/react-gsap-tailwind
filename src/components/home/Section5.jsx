import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const contentData = [
    {
      number: "01",
      title: "Foundation",
      subtitle: "Brand Essence",
      description:
        "Our journey began with a vision for innovation and excellence.",
    },
    {
      number: "02",
      title: "Growth",
      subtitle: "Scaling Up",
      description: "Expanding our expertise and reaching new milestones.",
    },
    {
      number: "03",
      title: "Innovation",
      subtitle: "Shaping the Future",
      description: "Pushing boundaries to redefine industry standards.",
    },
    {
      number: "04",
      title: "Impact",
      subtitle: "Global Reach",
      description:
        "Making a difference with sustainable and ethical practices.",
    },
    {
      number: "04",
      title: "Impact",
      subtitle: "Global Reach",
      description:
        "Making a difference with sustainable and ethical practices.",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          onUpdate: (self) => {
            let index = Math.floor(self.progress * (contentData.length - 0.1));
            setActiveIndex(index);
          },
        },
      });

      timeline.to(rightRef.current, { opacity: 1, duration: 0.5 });

      contentData.forEach((_, i) => {
        timeline.to(
          `.circle-${i}`,
          { borderColor: "#fff", duration: 0.5 },
          `step-${i}`
        );
      });

      timeline.to(
        rightRef.current,
        { opacity: 0, width: 0, duration: 1 },
        "final-step"
      );
      timeline.to(
        leftRef.current,
        { width: "100%", duration: 1 },
        "final-step"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="section-container flex flex-col md:flex-row">
      <div
        ref={leftRef}
        className="h-full w-full md:w-1/2 bg-orange flex flex-col items-center justify-between gap-3 p-6 md:p-14 text-white"
      >
        <div className="flex flex-col items-center gap-1">
          <h6 className="text-xs md:text-sm">Our Brand Story</h6>
          <h1 className="text-xl md:text-2xl font-extrabold">Brand Foundation</h1>
        </div>
        <div
          className={`relative ${
            activeIndex + 1 === 1
              ? "border-2 border-dashed border-spacing-10"
              : "border"
          } border-white size-[250px] md:size-[400px] rounded-full flex ${
            activeIndex > 3 ? "items-center" : "items-end"
          } mb-3 justify-center`}
        >
          {activeIndex + 1 === 1 && (
            <span className="absolute top-2 md:top-5 text-sm md:text-base">
              {contentData[activeIndex].title}
            </span>
          )}
          <div
            className={`size-[200px] md:size-[300px] relative ${
              activeIndex + 1 === 2
                ? "border-2 border-dashed border-spacing-10"
                : "border"
            } border-white rounded-full flex ${
              activeIndex > 3 ? "items-center" : "items-end"
            } mb-3 justify-center`}
          >
            {activeIndex + 1 === 2 && (
              <span className="absolute top-2 md:top-5 text-sm md:text-base">
                {contentData[activeIndex].title}
              </span>
            )}
            <div
              className={`size-[150px] md:size-[200px] relative ${
                activeIndex + 1 === 3
                  ? "border-2 border-dashed border-spacing-10"
                  : "border"
              } border-white rounded-full flex ${
                activeIndex > 3 ? "items-center" : "items-end"
              } mb-3 justify-center`}
            >
              {activeIndex + 1 === 3 && (
                <span className="absolute top-2 md:top-5 text-sm md:text-base">
                  {contentData[activeIndex].title}
                </span>
              )}
              <div
                className={`size-[100px] md:size-[100px] relative ${
                  activeIndex + 1 === 4
                    ? "border-2 border-dashed border-spacing-10"
                    : "border"
                } border-white rounded-full flex ${
                  activeIndex >= 3 ? "items-center" : "items-end"
                } mb-3 justify-center`}
              >
                {(activeIndex + 1 === 4 || activeIndex + 1 === 5) && (
                  <span className="absolute flex justify-center items-center text-sm md:text-base">
                    {contentData[activeIndex].title}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={rightRef}
        className="h-full w-full md:w-1/2 flex justify-center items-center"
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="flex flex-col items-start justify-center gap-2 max-w-[300px] p-6 md:p-0"
        >
          <h5 className="text-gray font-normal text-sm md:text-base">
            {contentData[activeIndex].number}
          </h5>
          <h1 className="font-bold text-xl md:text-2xl text-black">
            {contentData[activeIndex].title}
          </h1>
          <h1 className="font-extrabold text-xl md:text-2xl text-orange">
            {contentData[activeIndex].subtitle}
          </h1>
          <p className="text-base md:text-lg leading-6 md:leading-7 text-start text-gray font-light">
            {contentData[activeIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;