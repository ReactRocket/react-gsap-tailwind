import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const dataContainerRef = useRef(null);

  const data = [
    {
      name: "Mr. Manoj Singrodia",
      title: "General Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Manoj Singrodia drives operational excellence as General Manager with strategic innovation and a passion for organizational success.",
    },
    {
      name: "Mr. Anil Mehta",
      title: "CEO",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader driving financial empowerment and business growth with strategic innovation.",
    },
    {
      name: "Ms. Priya Sharma",
      title: "Marketing Head",
      image: "/media/images/section7-img2.png",
      description:
        "Ms. Priya Sharma leads marketing with innovation and strategic vision, enhancing brand growth and market presence.",
    },
    {
      name: "Mr. Rajesh Khanna",
      title: "Finance Head",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Rajesh Khanna ensures financial stability with expert insights, guiding the company towards sustainable growth.",
    },
    {
      name: "Ms. Neha Kapoor",
      title: "HR Manager",
      image: "/media/images/section7-img2.png",
      description:
        "Ms. Neha Kapoor focuses on employee engagement and growth, fostering a positive and productive work environment.",
    },
    {
      name: "Mr. Vikram Patel",
      title: "Tech Lead",
      image: "/media/images/section7-img2.png",
      description:
        "Mr. Vikram Patel spearheads technological innovation, driving the company’s digital transformation.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsContainer.children;

    // Calculate total scroll distance
    const cardWidth = cards[0].offsetWidth;
    const totalWidth = cardsContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth + cardWidth;

    // Horizontal scroll animation
    gsap.to(cardsContainer, {
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

    // Scale and opacity for each card, update data
    Array.from(cards).forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "left center",
        end: "right center",
        scrub: 1,
        onEnter: () => {
          gsap.to(card, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(dataContainerRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              dataContainerRef.current.innerHTML = `
                <h1 class="font-extrabold text-xl md:text-3xl text-black">${data[index].name}</h1>
                <h2 class="text-base md:text-lg text-gray-500">(${data[index].title})</h2>
                <p class="text-gray-600 mt-2 text-sm md:text-base">${data[index].description}</p>
              `;
              gsap.to(dataContainerRef.current, { opacity: 1, duration: 0.2 });
            },
          });
        },
        onLeave: () => {
          gsap.to(card, {
            scale: 0.8,
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(card, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(dataContainerRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              dataContainerRef.current.innerHTML = `
                <h1 class="font-extrabold text-xl md:text-3xl text-black">${data[index].name}</h1>
                <h2 class="text-base md:text-lg text-gray-500">(${data[index].title})</h2>
                <p class="text-gray-600 mt-2 text-sm md:text-base">${data[index].description}</p>
              `;
              gsap.to(dataContainerRef.current, { opacity: 1, duration: 0.2 });
            },
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            scale: 0.8,
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    });

    // Set initial data
    dataContainerRef.current.innerHTML = `
      <h1 class="font-extrabold text-xl md:text-3xl text-black">${data[0].name}</h1>
      <h2 class="text-base md:text-lg text-gray-500">(${data[0].title})</h2>
      <p class="text-gray-600 mt-2 text-sm md:text-base">${data[0].description}</p>
    `;

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="section-container flex flex-col items-center w-full min-h-screen">
      {/* Section Title */}
      <div data-aos="fade-up" className="w-full text-start p-6 md:p-14">
        <h5 className="text-gray-500 font-light text-sm md:text-base">Our Team</h5>
        <h1 className="font-semibold text-xl md:text-3xl text-black">The Minds Behind</h1>
        <h1 className="font-bold text-xl md:text-3xl text-orange-500">Our Company</h1>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full px-4 md:px-10 overflow-hidden flex flex-col items-center gap-6 md:gap-8">
        {/* Cards */}
        <div className="relative flex items-center w-full">
          <div
            ref={cardsContainerRef}
            className="flex flex-row gap-2 md:gap-4 will-change-transform"
            style={{ width: "max-content" }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 md:w-48 lg:w-64 h-auto transition-all duration-500 ease-in-out opacity-50 scale-80"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          {/* Arrows */}
          <div className="absolute left-0 right-0 flex justify-between pointer-events-none">
            <span className="text-2xl md:text-4xl text-gray-400">←</span>
            <span className="text-2xl md:text-4xl text-gray-400">→</span>
          </div>
        </div>

        {/* Data Display */}
        <div ref={dataContainerRef} className="w-full md:w-1/3 p-4 text-center md:text-left" />
      </div>
    </div>
  );
};

export default Section6;