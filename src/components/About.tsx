import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutMedia } from "@/data/about-media";

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-28 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Overlapping navy callout — EdmunHigh-style */}
        <div className="relative z-[1] -mt-6 mb-12 max-w-2xl rounded-2xl bg-primary px-8 py-8 text-primary-foreground shadow-xl sm:-mt-8 sm:px-10 sm:py-10 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70">About</p>
          <p className="mt-3 font-[family-name:var(--font-jakarta)] text-2xl leading-snug sm:text-3xl">
            Unleash your potential with us — management education rooted in ethics and practice.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-3">
            <div className="surface-card overflow-hidden p-1.5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={aboutMedia.columnTall}
                  alt="CIMDR institute building and campus, Sangli"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-4">
            <div className="surface-card overflow-hidden p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={aboutMedia.columnWide}
                  alt="CIMDR campus grounds and learning environment"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Institute profile</p>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Rooted in legacy. Built for today&apos;s careers.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Chintamanrao Institute of Management Development and Research, Sangli (CIMDR) was established in{" "}
              <strong className="font-medium text-foreground">1996</strong> as a constituent unit of the Deccan Education
              Society. It took over the MBA programme started in <strong className="font-medium text-foreground">1984</strong>{" "}
              at Chintamanrao College of Commerce, Sangli. The M.B.A. programme of Shivaji University, Kolhapur has run from
              June <strong className="font-medium text-foreground">1984</strong>; the institute is approved by AICTE, New
              Delhi since <strong className="font-medium text-foreground">1994</strong> and accredited by NAAC (2018–19).
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              CIMDR is a community of students, staff and faculty striving for vibrant learning. The DES Sangli campus spans{" "}
              <strong className="font-medium text-foreground">125 acres</strong>; the institute sits in Vishrambag — an
              educational, administrative and commercial hub — near leading colleges, with MBA, DBM, BBA and BCA programmes.
            </p>

            <Link
              href="#courses"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              Learn more <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>

            <div className="surface-card mt-6 overflow-hidden p-1.5">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl sm:aspect-[2/1]">
                <Image
                  src={aboutMedia.learnMoreHighlight}
                  alt="CIMDR students and campus life at DES Sangli"
                  fill
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
