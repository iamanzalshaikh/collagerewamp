import Image from "next/image";
import Link from "next/link";
import HeroSideCarousel from "@/components/HeroSideCarousel";
import { ArrowRight, ExternalLink, GraduationCap, Landmark, Users, Award } from "lucide-react";

/** Campus photo — full-section background (carousel may use other slides). */
const HERO_BG = `/Hero/${encodeURIComponent("RND_5634.JPG (1).jpeg")}`;

const trustItems = [
  { label: "NAAC", sub: "‘B’" },
  { label: "AICTE", sub: "Approved" },
  { label: "Shivaji Univ.", sub: "Kolhapur" },
];

const highlights = [
  {
    title: "Accredited learning",
    desc: "NAAC & AICTE programmes.",
    icon: Award,
  },
  {
    title: "Placements",
    desc: "Campus drives & partners.",
    icon: Landmark,
  },
  {
    title: "Faculty",
    desc: "Experienced mentors.",
    icon: Users,
  },
  {
    title: "125-acre campus",
    desc: "DES Sangli.",
    icon: GraduationCap,
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[560px] flex-col overflow-hidden border-b border-[var(--line)] bg-[#fafaf9] lg:h-[calc(100svh-112px)] lg:min-h-[calc(100svh-112px)] lg:max-h-[min(100svh-112px,960px)]"
      aria-labelledby="hero-heading"
      suppressHydrationWarning
    >
      {/* z-0 — school / campus background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* z-[1] — readability scrim over photo */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#fafaf9]/92 via-[#fafaf9]/78 to-primary/[0.12]"
        aria-hidden
      />

      {/* z-10 — content above background */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
      {/* lg: items-stretch so the image column can be height:100% of the row */}
      <div className="mx-auto grid min-h-0 w-full max-w-7xl flex-1 grid-cols-1 gap-5 px-5 py-5 sm:gap-6 sm:px-8 sm:py-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,46%)] lg:items-stretch lg:gap-10 lg:px-10 lg:py-8 xl:gap-12">
        <div className="order-2 flex min-h-0 flex-col justify-center lg:order-1 lg:max-h-full">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 sm:text-[11px]">
            Deccan Education Society · Est. 1996
          </p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-xl text-balance font-[family-name:var(--font-jakarta)] text-[1.5rem] font-light leading-[1.15] tracking-tight text-primary sm:text-[1.75rem] md:text-[2rem] lg:text-[2.125rem] xl:text-[2.25rem]"
          >
            Start your{" "}
            <span className="font-semibold text-accent transition-colors duration-300">bright</span> future — management
            &amp; computing at CIMDR
          </h1>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted sm:mt-4 sm:text-[14px]">
            MBA, MCA, BBA &amp; BCA on the DES Sangli campus — aligned with Shivaji University, Kolhapur.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
            <Link href="#about" className="btn-primary px-5 py-2.5 text-[10px] sm:text-[11px]">
              About CIMDR
            </Link>
            <Link
              href="#courses"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-primary/20 bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-sm transition-colors duration-300 hover:border-primary/35 hover:bg-primary/[0.03] sm:text-[11px]"
            >
              Programmes <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </Link>
          </div>

          <p className="mt-4 text-[12px] text-primary/80 sm:mt-5">
            <a
              href="https://forms.gle/7nYSVi2d17XRLJX7A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline decoration-primary/25 underline-offset-2 transition-colors hover:decoration-accent"
            >
              Mock test &amp; CET coaching — register
              <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
            </a>
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2" aria-label="Accreditations">
            {trustItems.map((t) => (
              <li
                key={t.label}
                className="rounded-full border border-primary/12 bg-white px-3 py-1.5 text-center shadow-sm shadow-primary/[0.04]"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-wide text-primary">{t.label}</span>
                <span className="block text-[9px] text-muted">{t.sub}</span>
              </li>
            ))}
          </ul>

          {/* Compact highlights — same section, no overlapping card stack */}
          <div className="mt-5 grid min-h-0 grid-cols-2 gap-2 border-t border-[var(--line)] pt-4 sm:grid-cols-4 sm:gap-2.5 lg:mt-4 lg:pt-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="surface-card flex min-h-0 flex-col gap-1.5 rounded-xl p-2.5 sm:p-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.07] text-primary">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-[11px] font-semibold leading-tight text-primary sm:text-xs">{h.title}</h3>
                  <p className="line-clamp-2 text-[9px] leading-snug text-muted sm:text-[10px]">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image fills column height on lg (100%); taller min height on small screens */}
        <div className="relative order-1 mx-auto flex w-full max-w-lg min-h-[min(52vh,420px)] flex-col lg:order-2 lg:mx-0 lg:h-full lg:max-w-none lg:min-h-0 lg:justify-self-stretch">
          <div className="relative h-full min-h-[min(52vh,420px)] w-full flex-1 overflow-hidden rounded-2xl border border-[var(--line)] bg-primary/[0.08] shadow-lg shadow-primary/[0.08] lg:min-h-0">
            <HeroSideCarousel />
          </div>
        </div>
      </div>

      <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent" aria-hidden />
      </div>
    </section>
  );
}
