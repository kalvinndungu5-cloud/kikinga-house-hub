import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Stethoscope, UtensilsCrossed, MapPin, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import officesImg from "@/assets/offices.jpg";
import clinicImg from "@/assets/clinic.jpg";
import restaurantImg from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kikinga House — Modern Business Park on Kiambu Road" },
      { name: "description", content: "A clean, professional business park in Kiambu hosting offices, health clinics, restaurants and trusted service providers." },
      { property: "og:title", content: "Kikinga House — Modern Business Park on Kiambu Road" },
      { property: "og:description", content: "Offices, clinics, restaurants and service businesses under one welcoming roof in Kiambu." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Kikinga House modern business park exterior at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-xs font-medium tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Established business park
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 text-balance">
              A welcoming home for modern business in <span className="italic text-accent">Kiambu</span>.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10 leading-relaxed">
              Kikinga House brings together offices, clinics, restaurants and trusted
              service providers along Kiambu Road — in one clean, secure and easy-to-find location.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-smooth shadow-elegant"
              >
                Explore services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-smooth border border-primary-foreground/20"
              >
                Visit us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">About the park</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-balance">
              A modern destination for work, wellness and dining.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Kikinga House is a thoughtfully designed business park located along
              Kiambu Road, just minutes from the town centre. We offer flexible
              office spaces, established health clinics and inviting restaurants —
              all in a clean environment with friendly staff and ample parking.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              More about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { n: "20+", l: "Tenants & businesses" },
              { n: "12yr", l: "Serving Kiambu" },
              { n: "100%", l: "Secured premises" },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-2xl bg-card shadow-card">
                <div className="font-display text-3xl md:text-4xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">What's inside</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
                Everything you need, in one place.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Building2, title: "Modern Offices", img: officesImg, desc: "Bright, fitted office spaces ideal for growing teams and professionals." },
              { Icon: Stethoscope, title: "Health Clinics", img: clinicImg, desc: "Trusted medical practitioners offering quality, accessible care." },
              { Icon: UtensilsCrossed, title: "Restaurants & Cafés", img: restaurantImg, desc: "Inviting dining spots for a quick lunch or a relaxed evening." },
            ].map(({ Icon, title, img, desc }) => (
              <article key={title} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/95 backdrop-blur flex items-center justify-center text-primary shadow-soft">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full gradient-accent opacity-30 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <MapPin className="w-6 h-6 text-accent mb-4" />
                <h2 className="font-display text-3xl md:text-4xl mb-3 text-balance">
                  Come find us along Kiambu Road.
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Whether you're looking for office space, a clinic, or a great
                  meal — we'd love to welcome you.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-smooth shadow-soft whitespace-nowrap"
              >
                Plan your visit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
