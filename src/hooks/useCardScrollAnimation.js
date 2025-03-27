import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardScrollAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".card");
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1), // Moves to next card
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1), // Snaps between sections
        end: () => "+=" + containerRef.current.offsetWidth, // Ends after full width scroll
      },
    });

  }, []);

  return containerRef;
};

export default useCardScrollAnimation;
