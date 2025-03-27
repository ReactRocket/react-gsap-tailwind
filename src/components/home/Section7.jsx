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
    <div ref={sectionRef} className="custom-section-container flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Side */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="w-full md:w-1/2 flex flex-col justify-start gap-1 px-6 md:px-14 py-10 md:py-20 relative"
      >
        <h5 className="text-gray font-extralight text-sm md:text-base">Join our team</h5>
        <h1 className="font-extrabold text-xl md:text-2xl text-black">Careers at</h1>
        <h1 className="font-extrabold text-xl md:text-2xl text-orange">Our Company</h1>
        <p className="text-gray font-normal leading-5 tracking-wide text-sm md:text-base">
          We're always looking for talented individuals who share our passion for innovation and excellence.
        </p>
        <div className="bg-section-7-img1 absolute bottom-0 -right-4 md:-right-7 aspect-square w-[250px] md:w-[350px] bg-contain bg-no-repeat z-0" />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col bg-gray p-6 md:p-14 z-10 overflow-hidden">
        <div ref={cardsContainerRef} className="flex flex-col gap-4 will-change-transform">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="flex flex-col gap-2 bg-white p-4 md:p-5 min-h-[250px] md:min-h-[300px]">
              <h6 className="text-xs md:text-sm">Lorem Ipsum {index + 1}</h6>
              <h1 className="text-xl md:text-2xl font-extrabold">Account Manager {index + 1}</h1>
              <p className="font-normal tracking-wide text-sm md:text-base">
                As an Account Manager, you will work with clients to understand their needs, collaborating with teams to execute projects profitably while growing business accounts.
              </p>
              <button className="buttonEffect max-w-[100px] text-sm md:text-base">
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