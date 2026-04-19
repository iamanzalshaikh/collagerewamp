import Image from "next/image";
import { siteImages } from "@/lib/site-images";

export default function Placements() {
  return (
    <section id="placements" className="scroll-mt-28 border-b border-[var(--line)]">
      {/* Full-bleed band — Placement2022-23.jpeg */}
      <div className="relative min-h-[280px] overflow-hidden bg-primary">
        <Image
          src={siteImages.placement2022_23}
          alt="Placements 2022–23"
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Placements</p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-jakarta)] text-3xl text-primary-foreground sm:text-4xl">
            Outcomes that reflect student effort and recruiter trust
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
            Recruiters such as ICICI, Axis, HDFC, D-Mart, and more visit the campus; a large share of students secure
            placements — many pursue entrepreneurship or family business too.
          </p>
        </div>
      </div>

      {/* Poster strip — Placements 2022.jpg */}
      <div className="bg-[#f5f3f0] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Snapshot</p>
              <h3 className="mt-3 text-2xl text-primary sm:text-3xl">Placement highlights</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Figures vary by year; refer to the official placement office for the latest reports and recruiter lists.
              </p>
            </div>
            <div className="surface-card overflow-hidden p-2">
              <div className="relative aspect-[4/5] max-h-[min(85vh,720px)] overflow-hidden rounded-xl sm:aspect-[16/11]">
                <Image
                  src="/Hero/cimdr-hero.png"
                  alt="CIMDR MBA campus placements — student success at Barclays, ICICI, Morningstar, Northern Trust, and more"
                  fill
                  unoptimized
                  className="object-contain object-center bg-white"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
