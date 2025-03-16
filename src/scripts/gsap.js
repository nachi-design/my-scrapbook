import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".fade-in",
    {
        opacity: 0,
        y: 30,
    },
    {
        // x: 400,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".fade-in",
            start: "center center",
            // markers: true, // マーカーを表示させる
        },
    },
);