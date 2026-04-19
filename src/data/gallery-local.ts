/** Local gallery files under `public/galllery/...` (WhatsApp exports). */
const subfolder = "WhatsApp Unknown 2026-04-19 at 4.07.32 PM";

const files = [
  "WhatsApp Image 2026-04-19 at 4.07.09 PM.jpeg",
  "WhatsApp Image 2026-04-19 at 4.07.10 PM.jpeg",
  "WhatsApp Image 2026-04-19 at 4.07.10 PM (1).jpeg",
  "WhatsApp Image 2026-04-19 at 4.07.10 PM (2).jpeg",
  "WhatsApp Image 2026-04-19 at 4.07.11 PM.jpeg",
  "WhatsApp Image 2026-04-19 at 4.07.11 PM (1).jpeg",
];

const captions = [
  "Campus & events",
  "Student activities",
  "Cultural event",
  "Industrial visit",
  "Guest lecture",
  "College life",
];

export const localGallery = files.map((file, i) => ({
  src: `/galllery/${encodeURIComponent(subfolder)}/${encodeURIComponent(file)}`,
  caption: captions[i] ?? `Photo ${i + 1}`,
}));
