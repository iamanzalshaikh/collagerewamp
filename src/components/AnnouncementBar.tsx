import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="border-b border-[var(--line)] bg-primary/[0.04]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-2.5 text-[11px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:px-8 lg:px-10">
        <p className="font-medium text-primary/90">
          <span className="text-accent">Ongoing:</span> Placements · FRA for all courses 2026–27 · English / मराठी resources on the{" "}
          <a
            href="https://www.cimdr.ac.in/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-primary/25 underline-offset-2 transition-colors hover:decoration-accent"
          >
            main site
          </a>
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-primary/70">
          <Link href="#courses" className="transition-colors hover:text-primary">
            FRA &amp; fee notices
          </Link>
          <span className="text-primary/30" aria-hidden>
            ·
          </span>
          <a
            href="https://www.cimdr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Student login
          </a>
        </div>
      </div>
    </div>
  );
}
