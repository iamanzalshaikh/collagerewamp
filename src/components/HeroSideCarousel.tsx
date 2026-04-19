"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/Hero/RND_5616.JPG.jpeg",
    alt: "Students at CIMDR Sangli — Chintamanrao Institute of Management Development and Research campus",
  },
  {
    src: "/Hero/RND_5634.JPG.jpeg",
    alt: "CIMDR students in front of the institute entrance, Deccan Education Society Sangli",
  },
] as const;

const INTERVAL_MS = 5500;

export default function HeroSideCarousel() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <div className="relative h-full min-h-0 w-full">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
            i === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center gap-2 bg-gradient-to-t from-black/50 via-black/15 to-transparent pb-3 pt-10 sm:pb-4 sm:pt-12">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-white shadow-sm" : "w-1.5 bg-white/45 hover:bg-white/75"
            }`}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
