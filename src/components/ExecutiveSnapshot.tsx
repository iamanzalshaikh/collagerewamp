"use client";

import { CountUp } from "@/components/CountUp";
import { Award, Building2, GraduationCap, TrendingUp } from "lucide-react";

const credentials = [
  "NAAC accredited ‘B’",
  "AICTE approved",
  "Affiliated to Shivaji University, Kolhapur",
];

const recruiters = ["ICICI Bank", "Axis Bank", "HDFC", "D-Mart", "E-Clerks"];

const metrics = [
  {
    label: "DES Sangli campus",
    end: 125,
    suffix: "acres",
    sup: "" as string,
    durationMs: 1500,
    icon: Building2,
  },
  {
    label: "University rank holders",
    end: 75,
    suffix: "",
    sup: "+",
    durationMs: 1600,
    icon: GraduationCap,
  },
  {
    label: "Avg. faculty experience",
    end: 11,
    suffix: "yrs",
    sup: "",
    durationMs: 1400,
    icon: Award,
  },
  {
    label: "Campus placement (indicative)",
    end: 80,
    suffix: "%",
    sup: "",
    durationMs: 1700,
    icon: TrendingUp,
  },
];

export default function ExecutiveSnapshot() {
  return (
    <section
      id="outcomes"
      className="scroll-mt-28 border-b border-[var(--line)] bg-gradient-to-b from-primary/[0.045] via-[#fafaf9] to-[#fafaf9] py-12 sm:py-16"
      aria-labelledby="executive-snapshot-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Recognized &amp; outcomes-driven</p>
          <h2
            id="executive-snapshot-heading"
            className="mt-3 font-[family-name:var(--font-jakarta)] text-3xl text-primary sm:text-4xl"
          >
            At a glance
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A quick snapshot of credibility, scale, and placement outcomes — as published on{" "}
            <a
              href="https://www.cimdr.ac.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/25 underline-offset-2 transition-colors hover:decoration-accent"
            >
              cimdr.ac.in
            </a>
            .
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {credentials.map((c, i) => (
            <span
              key={c}
              className="snapshot-reveal inline-flex rounded-full border border-primary/12 bg-white/90 px-4 py-2 text-[12px] font-medium text-primary shadow-sm shadow-primary/[0.04] backdrop-blur-sm"
              style={{ animationDelay: `${60 + i * 70}ms` }}
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="snapshot-reveal surface-card flex flex-col p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-primary/[0.06]"
                style={{ animationDelay: `${120 + i * 85}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                  <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-5 font-[family-name:var(--font-jakarta)] text-4xl font-semibold tabular-nums tracking-tight text-primary sm:text-[2.75rem]">
                  <CountUp end={m.end} durationMs={m.durationMs} />
                  {m.sup ? <span className="text-primary/90">{m.sup}</span> : null}
                  {m.suffix ? (
                    <span className="text-2xl font-semibold text-primary/85 sm:text-3xl">
                      {m.suffix === "acres" || m.suffix === "yrs" ? (
                        <span className="ml-0.5">{m.suffix}</span>
                      ) : (
                        m.suffix
                      )}
                    </span>
                  ) : null}
                </p>
                <p className="mt-3 text-[11px] font-medium leading-snug text-muted">{m.label}</p>
              </div>
            );
          })}
        </div>

        <div
          className="snapshot-reveal mt-12 border-t border-[var(--line)] pt-10"
          style={{ animationDelay: `${120 + metrics.length * 85 + 80}ms` }}
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Regular recruiters</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {recruiters.map((name) => (
              <span
                key={name}
                className="text-[13px] font-semibold tracking-wide text-primary/75 transition-colors duration-300 hover:text-primary"
              >
                {name}
              </span>
            ))}
            <span className="text-[12px] font-medium text-muted">&amp; more</span>
          </div>
        </div>

        <p className="snapshot-reveal mt-8 text-center text-[11px] text-muted" style={{ animationDelay: "480ms" }}>
          Verify current statistics with the office for official reporting.
        </p>
      </div>
    </section>
  );
}
