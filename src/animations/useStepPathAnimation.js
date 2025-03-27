import { useEffect } from "react";
import gsap from "gsap";

const useStepPathAnimation = () => {
  useEffect(() => {
    const path = document.querySelector("#myPath");

    if (!path) return;

    // Get total path length
    const pathLength = path.getTotalLength();

    // Set initial state
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    // Create a GSAP timeline
    const tl = gsap.timeline({ repeat: -1, ease: "power2.inOut" });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 8, // Adjust speed of animation
      ease: "power2.inOut",
    });

  }, []);
};

export default useStepPathAnimation;
