import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section8 = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const data = [
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Mr. Anil Mehta",
      title: "CEO",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth.",
    },
    {
      name: "Ms. Priya Sharma",
      title: "Marketing Head",
      image: "/media/images/section8-img1.png",
      description:
        "Ms. Priya Sharma leads the marketing team with innovation and strategic vision.",
    },
    {
      name: "Mr. Rajesh Khanna",
      title: "Finance Head",
      image: "/media/images/section8-img1.png",
      description:
        "Mr. Rajesh Khanna ensures financial stability and growth with expert insights.",
    },
    {
      name: "Ms. Neha Kapoor",
      title: "HR Manager",
      image: "/media/images/section8-img1.png",
      description:
        "Ms. Neha Kapoor manages human resources with a focus on employee engagement and growth.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    // Calculate the total horizontal scroll distance
    const scrollDistance = cardsContainer.scrollWidth - window.innerWidth;

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(cardsContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="custom-section-container flex flex-col items-center w-full min-h-screen">
      {/* Section Title */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="w-full text-start p-6 md:p-14"
      >
        <h5 className="text-gray-500 font-light text-sm md:text-base">Updates</h5>
        <h1 className="font-semibold text-xl md:text-3xl text-black">The latest from</h1>
        <h1 className="font-bold text-xl md:text-3xl text-orange-500">Our Company</h1>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full px-4 md:px-10 overflow-hidden">
        <div
          ref={cardsContainerRef}
          className="flex flex-row gap-2 md:gap-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] bg-white rounded-lg p-3 md:p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-2 md:p-3 text-center w-full flex flex-col gap-2 md:gap-3 bg-[#F470240D]">
                <div className="flex justify-between items-center text-xs md:text-sm">
                  <span>News</span>
                  <span>15, Feb, 25</span>
                </div>
                <div className="flex flex-col items-start justify-end gap-1 md:gap-2 w-full">
                  <h1 className="font-extrabold text-lg md:text-2xl text-black">Lorem Ipsum Dolor</h1>
                  <h1 className="font-extrabold text-lg md:text-2xl text-black">Sit Amet</h1>
                  <button
                    style={{ color: "#f47024" }}
                    className="buttonEffect max-w-[200px] text-sm md:text-base"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section8;