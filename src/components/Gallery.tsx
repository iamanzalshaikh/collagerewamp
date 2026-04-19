import Image from "next/image";
import { localGallery } from "@/data/gallery-local";

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding scroll-mt-28 border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Gallery</p>
            <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Our gallery</h2>
          </div>
          <p className="max-w-md text-sm text-muted">Campus and event photographs (local album).</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {localGallery.map((item, i) => (
            <div
              key={item.src}
              className="gallery-tile surface-card overflow-hidden p-1.5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="mt-2 px-1 text-xs font-medium text-muted">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
