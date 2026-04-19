import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 bg-[#0e2a2d] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-sm font-semibold">
                DES
              </div>
              <div>
                <p className="font-[family-name:var(--font-jakarta)] text-xl font-semibold">CIMDR, Sangli</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground/55">
                  Deccan Education Society
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Chintamanrao Institute of Management Development and Research — management and computing programmes on the DES
              Sangli campus, affiliated to Shivaji University, Kolhapur.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Contact</h2>
              <ul className="mt-6 space-y-5 text-sm text-primary-foreground/75">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    Deccan Education Society&apos;s Chintamanrao Institute of Management Development and Research, DES
                    Campus, P.O. Willingdon College, Vishrambag, Sangli, Maharashtra, India
                  </span>
                </li>
                <li className="flex flex-wrap gap-x-2 gap-y-1">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span className="flex flex-wrap gap-x-2 gap-y-1">
                    <a href="tel:+912332601040" className="underline decoration-white/25 underline-offset-2 hover:text-primary-foreground">
                      0233-2601040
                    </a>
                    <span className="text-primary-foreground/45">·</span>
                    <a href="tel:+919270103056" className="underline decoration-white/25 underline-offset-2 hover:text-primary-foreground">
                      9270103056
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    <a
                      href="mailto:descimdr@gmail.com"
                      className="underline decoration-white/25 underline-offset-2 hover:text-primary-foreground"
                    >
                      descimdr@gmail.com
                    </a>
                    <span className="text-primary-foreground/45"> · </span>
                    <a
                      href="mailto:office.cimdr@despune.org"
                      className="underline decoration-white/25 underline-offset-2 hover:text-primary-foreground"
                    >
                      office.cimdr@despune.org
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">On this site</h2>
              <ul className="mt-6 space-y-3 text-sm font-medium text-primary-foreground/70">
                <li>
                  <Link href="#about" className="transition-colors hover:text-primary-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="transition-colors hover:text-primary-foreground">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="transition-colors hover:text-primary-foreground">
                    Gallery
                  </Link>
                </li>
                <li>
                  <a
                    href="https://forms.gle/7nYSVi2d17XRLJX7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Registration — mock test / CET
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-primary-foreground/45">
                Additional sections (IQAC, downloads, faculty pages) will be linked when those pages are published.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-xs leading-relaxed text-primary-foreground/65 sm:px-6">
          <p>
            <span className="font-semibold text-primary-foreground/85">Institute code:</span> MB 6208 ·{" "}
            <span className="font-semibold text-primary-foreground/85">GSTIN:</span> 27AAATD3141P1ZL · Phone: 0233-2601040,
            9270103056 · Email: office.cimdr@despune.org
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-primary-foreground/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Chintamanrao Institute of Management Development and Research, Sangli.</p>
          <p className="text-center sm:text-right">Designed by CIMDR Sangli · Affiliated to Shivaji University, Kolhapur</p>
        </div>
      </div>
    </footer>
  );
}
