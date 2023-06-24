import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const timeline = gsap.timeline();
  timeline.to(position, {
    scrollTrigger: {
      trigger: ".sound-section",
    },
  });
};
