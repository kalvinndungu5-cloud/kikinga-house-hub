import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-building.jpg";
import interior from "@/assets/interior.jpg";
import building2 from "@/assets/building-2.jpg";
import offices from "@/assets/offices.jpg";
import clinic from "@/assets/clinic.jpg";
import restaurant from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kikinga House" },
      { name: "description", content: "Photos of Kikinga House — exteriors, interiors, offices, clinics and restaurants along Kiambu Road." },
      { property: "og:title", content: "Gallery — Kikinga House" },
      { property: "og:description", content: "A visual tour of our modern business park in Kiambu." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: hero, alt: "Building exterior at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: interior, alt: "Lobby interior" },
  { src: offices, alt: "Modern office space" },
  { src: clinic, alt: "Health clinic interior" },
  { src: restaurant, alt: "Restaurant dining area" },
  { src: building2, alt: "Building entrance facade" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-20 pb-12 gradient-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Gallery</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6 max-w-3xl text-balance">
            A visual tour of Kikinga House.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Take a closer look at our spaces — from the welcoming exterior to
            the bright interiors that make Kikinga House a great place to work,
            visit and dine.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
            {photos.map((p) => (
              <div
                key={p.alt}
                className={`relative overflow-hidden rounded-2xl shadow-card group ${p.span ?? ""}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                  <span className="text-primary-foreground text-sm font-medium">{p.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Find us</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 text-balance">
              Located along Kiambu Road.
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Map of Kikinga House on Kiambu Road"
              src="https://www.google.com/maps?q=Kiambu+Road+Kiambu+Kenya&output=embed"
              className="w-full h-[480px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
