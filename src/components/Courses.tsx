"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/CountUp";

const courses = [
  {
    code: "M.B.A.",
    intake: 60,
    name: "Master of Business Administration",
    summary:
      "Prepare executives and managers for top and middle level management in all organisations — and for startups and self-employment.",
  },
  {
    code: "M.C.A.",
    intake: 60,
    name: "Master of Computer Applications",
    summary:
      "Develop software skills aligned with current IT industry trends together with business management, for a range of professional roles.",
  },
  {
    code: "B.B.A.",
    intake: 120,
    name: "Bachelor of Business Administration",
    summary:
      "A full-time three-year degree under the Faculty of Commerce — foundational management education for undergraduate learners.",
  },
  {
    code: "B.C.A.",
    intake: 120,
    name: "Bachelor of Computer Application",
    summary:
      "Application-oriented computing with management awareness to meet workforce needs in IT and related sectors.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding scroll-mt-28 border-b border-[var(--line)] bg-[#fafaf9]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Courses available</p>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Programmes &amp; intake</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              As summarised on{" "}
              <a
                href="https://www.cimdr.ac.in/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline decoration-primary/25 underline-offset-2 transition-colors hover:decoration-accent"
              >
                cimdr.ac.in
              </a>{" "}
              — verify current intake with the admission office.
            </p>
          </div>
        </div>

        <div id="admissions" className="mt-12 scroll-mt-32">
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((c, i) => (
              <article
                key={c.code}
                className="course-reveal surface-card relative overflow-hidden p-8"
                style={{ animationDelay: `${80 + i * 90}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-primary/[0.06] transition-colors duration-500" aria-hidden />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{c.code} — I Admission</p>
                    <h3 className="mt-2 font-[family-name:var(--font-jakarta)] text-xl font-semibold text-primary">{c.name}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary/35" aria-hidden />
                </div>

                <div className="mt-6 flex items-baseline gap-2 border-b border-[var(--line)] pb-6">
                  <span className="text-5xl font-semibold tabular-nums tracking-tight text-primary sm:text-6xl">
                    <CountUp end={c.intake} durationMs={1400 + i * 120} />
                  </span>
                  <span className="text-sm font-medium text-muted">seats (indicative)</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">{c.summary}</p>

                <a
                  href="https://forms.gle/7nYSVi2d17XRLJX7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent transition-colors duration-300 hover:text-primary"
                >
                  Register now
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--line)] bg-white/80 px-6 py-5 transition-colors duration-300">
          <p className="text-sm text-muted">
            <span className="font-semibold text-primary">Mock test &amp; CET coaching 2025–26:</span>{" "}
            <a
              href="https://forms.gle/7nYSVi2d17XRLJX7A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-primary/25 underline-offset-2 transition-colors hover:decoration-accent"
            >
              Click here to register
            </a>
            .
          </p>
          <span className="hidden h-4 w-px bg-[var(--line)] sm:inline" aria-hidden />
          <Link href="#contact" className="text-sm font-medium text-primary transition-colors hover:text-accent">
            Contact admission office
          </Link>
        </div>
      </div>
    </section>
  );
}
