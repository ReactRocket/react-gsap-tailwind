import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    // Calculate the scroll distance
    const scrollDistance = cardsContainer.scrollHeight - window.innerHeight;

    // Create the scroll animation
    const scrollTween = gsap.to(cardsContainer, {
      y: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top", // Pin when section hits top of viewport
        end: () => `+=${scrollDistance}`, // Scroll the full height of cards
        pin: true, // Pin the section
        scrub: 1, // Smooth scrolling tied to scroll position
        anticipatePin: 1,
        pinSpacing: true, // Maintain space while pinned
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    // Cleanup
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="section-container flex min-h-screen w-full">
      {/* Left Side */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="w-1/2 flex flex-col justify-start gap-1 px-14 py-20 relative">
        <h5 className="text-gray font-extralight">Join our team</h5>
        <h1 className="font-extrabold text-2xl text-black">Careers at</h1>
        <h1 className="font-extrabold text-2xl text-orange">Our Company</h1>
        <p className="text-gray font-normal leading-5 tracking-wide">
          We're always looking for talented individuals who share our passion for innovation and excellence.
        </p>
        <div className="bg-section-7-img1 absolute bottom-0 -right-7 aspect-square w-[350px] bg-contain bg-no-repeat z-0"></div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col bg-gray p-14 z-10">
        <div ref={cardsContainerRef} className="flex flex-col gap-4 will-change-transform">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => ( // Added more cards to ensure scrolling
            <div key={index} className="flex flex-col gap-2 bg-white p-5 min-h-[300px]">
              <h6 className="text-sm">Lorem Ipsum {index + 1}</h6>
              <h1 className="text-2xl font-extrabold">Account Manager {index + 1}</h1>
              <p className="font-normal tracking-wide">
                As an Account Manager, you will work with clients to understand their needs, collaborating with teams to execute projects profitably while growing business accounts.
              </p>
              <button className="buttonEffect max-w-[100px] ">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section7;