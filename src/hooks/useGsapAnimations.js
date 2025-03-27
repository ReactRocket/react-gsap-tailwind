import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  const elementRef = useRef(null);

  // 🔥 Fade In / Out
  const fade = (type = "in", delay = 0, duration = 1.5) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { opacity: type === "in" ? 0 : 1 },
      {
        opacity: type === "in" ? 1 : 0,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  };

  // 🔥 Slide In / Out (Left, Right, Top, Bottom)
  const slide = (direction = "left", type = "in", delay = 0, duration = 1.5) => {
    if (!elementRef.current) return;

    const xValue = direction === "left" ? -100 : direction === "right" ? 100 : 0;
    const yValue = direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, x: type === "in" ? xValue : 0, y: type === "in" ? yValue : 0 },
      {
        opacity: 1,
        x: type === "in" ? 0 : xValue,
        y: type === "in" ? 0 : yValue,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  };

  // 🔥 Scale / Zoom Animation
  const scale = (type = "in", delay = 0, duration = 1.5) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { scale: type === "in" ? 0.8 : 1 },
      {
        scale: type === "in" ? 1 : 0.8,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  };

  // 🔥 Rotate Animation
  const rotate = (angle = 360, delay = 0, duration = 1.5) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { rotate: 0 },
      {
        rotate: angle,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  };

  // 🔥 Scroll-triggered Animation
  const scrollReveal = (start = "top 85%", end = "bottom 60%", scrub = false) => {
    if (!elementRef.current) return;

    gsap.from(elementRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start,
        end,
        scrub,
        toggleActions: "play none none reverse",
      },
    });
  };

  // 🔥 Stagger Animation for Lists
  const stagger = (delay = 0.2, duration = 1.5) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  };

  // 🔥 Parallax Effect
  const parallax = (speed = 0.2) => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  // 🔥 GSAP Timeline for Sequencing Animations
  const timeline = (animations = []) => {
    if (!elementRef.current) return;

    const tl = gsap.timeline();
    animations.forEach(({ animation, params }) => {
      tl.to(elementRef.current, animation, params);
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      gsap.killTweensOf(elementRef.current);
    };
  }, []);

  return {
    elementRef,
    fade,
    slide,
    scale,
    rotate,
    scrollReveal,
    stagger,
    parallax,
    timeline,
  };
};

export default useGsapAnimations;
