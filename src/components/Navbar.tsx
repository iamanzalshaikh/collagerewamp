"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  comingSoon?: boolean;
};

const SITE = "https://www.cimdr.ac.in/";

const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Department", href: "#courses" },
  { name: "Faculty", href: SITE, external: true, comingSoon: true },
  { name: "IQAC", href: SITE, external: true, comingSoon: true },
  { name: "NIRF", href: SITE, external: true, comingSoon: true },
  { name: "Student", href: SITE, external: true, comingSoon: true },
  { name: "NSS", href: SITE, external: true, comingSoon: true },
  { name: "Facilities", href: SITE, external: true, comingSoon: true },
  { name: "Placement", href: "#placements" },
  { name: "FRA", href: SITE, external: true, comingSoon: true },
  { name: "Gallery", href: "#gallery" },
  { name: "Student Login", href: SITE, external: true, comingSoon: true },
];

const linkClass =
  "inline-flex h-9 shrink-0 items-center rounded-lg px-2 text-[11px] font-medium leading-none tracking-wide text-primary/85 antialiased transition-colors duration-200 hover:bg-primary/[0.07] hover:text-primary xl:h-10 xl:px-2.5 xl:text-[13px]";

const mobileDrawerLinkClass =
  "flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[14px] font-medium leading-snug tracking-wide text-primary/90 transition-colors hover:bg-primary/[0.06]";

function NavLink({
  link,
  onNavigate,
  onComingSoon,
  className,
}: {
  link: NavItem;
  onNavigate?: () => void;
  onComingSoon: (label: string) => void;
  /** Desktop nav vs mobile drawer */
  className?: string;
}) {
  const c = className ?? linkClass;

  if (link.comingSoon) {
    return (
      <button
        type="button"
        className={c}
        onClick={() => {
          onComingSoon(link.name);
          onNavigate?.();
        }}
      >
        {link.name}
      </button>
    );
  }

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={c}
        onClick={onNavigate}
      >
        {link.name}
      </a>
    );
  }

  return (
    <Link href={link.href} className={c} onClick={onNavigate}>
      {link.name}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const onComingSoon = useCallback((label: string) => {
    setToast(`${label} — coming soon`);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(t);
  }, [toast]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(250,250,249,0.96)] backdrop-blur-md">
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed left-1/2 top-[4.25rem] z-[110] max-w-[min(100vw-2rem,360px)] -translate-x-1/2 rounded-xl border border-[var(--line)] bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-xl sm:top-[4.5rem]"
        >
          {toast}
        </div>
      ) : null}

      <div className="border-b border-[var(--line)] bg-primary/[0.03]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-2 text-center text-[11px] font-medium leading-snug tracking-wide text-muted sm:justify-between sm:text-left sm:text-[12px] sm:px-6 lg:px-8 xl:px-10">
          <span className="text-primary/90">
            Deccan Education Society&apos;s Chintamanrao Institute of Management
            Development and Research, Sangli · Affiliated to Shivaji University,
            Kolhapur · NAAC &apos;B&apos;
          </span>
          <span className="text-primary/70">
            Vishrambag, Dist. Sangli — 416 415
          </span>
        </div>
      </div>

      {/* Left: brand + nav · Right: CTA — aligned to one clean row */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:min-h-[3.5rem] lg:px-8 xl:px-10">
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5 lg:gap-6">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-semibold tracking-tight text-primary-foreground shadow-sm shadow-primary/20">
              DES
            </div>
            <div className="min-w-0">
              <span className="block font-[family-name:var(--font-jakarta)] text-lg font-semibold tracking-tight text-primary sm:text-xl">
                CIMDR
              </span>
              <span className="mt-0.5 hidden max-w-[14rem] truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:block">
                Sangli · Institute code MB 6208
              </span>
            </div>
          </Link>

          <nav
            className="hidden min-h-0 min-w-0 flex-1 items-center border-l border-[var(--line)] pl-4 lg:flex lg:pl-5 xl:pl-6"
            aria-label="Primary"
          >
            <ul className="flex flex-nowrap items-center gap-x-0.5 overflow-x-auto overflow-y-visible [scrollbar-width:none] sm:gap-x-1 xl:gap-x-1.5 [&::-webkit-scrollbar]:hidden">
              {navLinks.map((link) => (
                <li key={link.name} className="flex shrink-0 items-center">
                  <NavLink link={link} onComingSoon={onComingSoon} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* <a
            href="https://forms.gle/7nYSVi2d17XRLJX7A"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden whitespace-nowrap px-4 py-2.5 text-[10px] font-semibold tracking-wide sm:inline-flex lg:text-[11px]"
          >
            MBA / MCA mock test
          </a> */}
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-white/80 text-primary shadow-sm lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[min(70vh,520px)] overflow-y-auto border-t border-[var(--line)] bg-[rgba(250,250,249,0.98)] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-0.5" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                className={mobileDrawerLinkClass}
                onComingSoon={onComingSoon}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <a
              href="https://forms.gle/7nYSVi2d17XRLJX7A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full py-3 text-xs font-semibold tracking-wide"
            >
              MBA / MCA mock test — register
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
