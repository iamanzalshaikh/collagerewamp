"use client";

import { useSyncExternalStore } from "react";

const items = [
  {
    name: "Mr. Deepak Ambwani",
    role: "Price Water Cooper, Texas",
    quote:
      "CIMDR is my second home. I have built great relationships with my classmates, teachers, and staff. Being at CIMDR has been an amazing experience that has helped me grow personally and professionally.",
  },
  {
    name: "Mr. Mathew George",
    role: "Skillmap Training and Placements Pvt. Ltd., Dubai",
    quote:
      "I would recommend CIMDR and encourage students to study hard and explore the academic opportunities the institution offers.",
  },
  {
    name: "Anita Pujari",
    role: "HR Executive, Spring Computing Technologies Pvt. Ltd., Pune",
    quote:
      "I really like the instructors and advisors — they help whenever I have questions. We use a lot of technology in class.",
  },
  {
    name: "Kabeer Thacharayil",
    role: "Managing Director, Qatar Star Group, Dubai",
    quote:
      "A very good experience — the campus environment and class schedule are convenient, and the hands-on teaching style supports learning.",
  },
  {
    name: "Shrikrishna Tamhankar",
    role: "KIE Industries Ltd., Dubai",
    quote:
      "I am a proud student of CIMDR — the college helps you stand stronger for what is ahead. What you learn here is not only knowledge, but experience.",
  },
];

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Card({ t }: { t: (typeof items)[0] }) {
  return (
    <figure className="surface-card flex h-full w-[min(100vw-2.5rem,400px)] shrink-0 flex-col p-7 shadow-sm transition-colors duration-300 hover:border-primary/12 hover:shadow-md sm:w-[380px] sm:p-8">
      <blockquote className="flex-1 text-[15px] leading-relaxed text-primary">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 border-t border-[var(--line)] pt-5">
        <p className="text-sm font-semibold text-primary">{t.name}</p>
        <p className="mt-1 text-xs text-muted">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  const track = [...items, ...items];

  return (
    <section className="section-padding border-b border-[var(--line)] bg-[#f7f6f3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center sm:mx-auto sm:max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Testimonials</p>
          <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Voices from our community</h2>
          <p className="mt-3 text-sm text-muted">Alumni and students on learning at CIMDR.</p>
        </div>

        {reduceMotion ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((t) => (
              <Card key={t.name} t={t} />
            ))}
          </div>
        ) : (
          <div className="group relative mt-12">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f6f3] to-transparent sm:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f6f3] to-transparent sm:w-24"
              aria-hidden
            />
            <div className="overflow-hidden pb-2">
              <div className="testimonial-track flex w-max gap-6 py-1 group-hover:[animation-play-state:paused]">
                {track.map((t, i) => (
                  <Card key={`${t.name}-${i}`} t={t} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
