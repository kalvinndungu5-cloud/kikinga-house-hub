import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Stethoscope, UtensilsCrossed, Briefcase, ArrowRight } from "lucide-react";
import offices from "@/assets/offices.jpg";
import clinic from "@/assets/clinic.jpg";
import restaurant from "@/assets/restaurant.jpg";
import building2 from "@/assets/building-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kikinga House" },
      { name: "description", content: "Discover the offices, health clinics, restaurants and professional services hosted at Kikinga House on Kiambu Road." },
      { property: "og:title", content: "Services at Kikinga House" },
      { property: "og:description", content: "Offices, clinics, restaurants and trusted service businesses in one location." },
      { property: "og:image", content: offices },
      { name: "twitter:image", content: offices },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Building2,
    title: "Modern Offices",
    img: offices,
    desc: "Flexible, light-filled office spaces designed for growing teams, professionals and creative studios.",
    points: ["Furnished & unfurnished options", "High-speed internet ready", "Meeting rooms available"],
  },
  {
    Icon: Stethoscope,
    title: "Health Clinics",
    img: clinic,
    desc: "Established medical and dental clinics providing accessible, quality healthcare for the Kiambu community.",
    points: ["General & specialist care", "Dental & wellness services", "Modern, clean facilities"],
  },
  {
    Icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    img: restaurant,
    desc: "Inviting dining options ranging from quick coffee stops to relaxed sit-down evenings.",
    points: ["Local & international cuisine", "Indoor & outdoor seating", "Catering on request"],
  },
  {
    Icon: Briefcase,
    title: "Professional Services",
    img: building2,
    desc: "Trusted businesses offering legal, financial, beauty and personal services — all under one roof.",
    points: ["Legal & consultancy firms", "Salons & wellness", "Financial services"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-12 gradient-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Services</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6 max-w-3xl text-balance">
            One destination. Many ways to do business.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From modern offices to clinics, restaurants and trusted professional
            services — Kikinga House brings everything you need together in one
            convenient Kiambu Road location.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-20">
          {services.map(({ Icon, title, img, desc, points }, i) => (
            <article
              key={title}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-elegant"
                />
                <div className="absolute -bottom-5 -left-5 w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center text-accent-foreground shadow-elegant">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  0{i + 1}
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4 text-balance">{title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4 text-balance">
            Looking for space or a service?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch and we'll connect you with the right tenant or share
            availability of office space.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth shadow-soft"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
