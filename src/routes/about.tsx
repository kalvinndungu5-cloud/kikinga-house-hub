import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Sparkles, Leaf } from "lucide-react";
import building from "@/assets/hero-building.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kikinga House" },
      { name: "description", content: "Located along Kiambu Road, Kikinga House is known for its clean environment, friendly staff, and trusted professional services." },
      { property: "og:title", content: "About Kikinga House" },
      { property: "og:description", content: "A clean, secure and welcoming business park along Kiambu Road." },
      { property: "og:image", content: building },
      { name: "twitter:image", content: building },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: ShieldCheck, title: "Safe & Secure", desc: "24/7 security, controlled access and well-lit premises for total peace of mind." },
  { Icon: Sparkles, title: "Clean & Cared-for", desc: "Spotless common areas, maintained gardens and a welcoming atmosphere all day." },
  { Icon: Users, title: "Friendly Community", desc: "A warm community of tenants, professionals and visitors who feel right at home." },
  { Icon: Leaf, title: "Easy to Reach", desc: "Right on Kiambu Road with ample parking and quick access to public transport." },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-20 pb-16 gradient-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">About us</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6 max-w-3xl text-balance">
            A trusted address for business and wellness in Kiambu.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            For over a decade, Kikinga House has served as a reliable, modern
            business park along Kiambu Road — bringing together offices, clinics,
            restaurants and dependable service providers under one roof.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10">
          <img
            src={building}
            alt="Kikinga House exterior"
            loading="lazy"
            width={1920}
            height={1280}
            className="rounded-2xl shadow-elegant object-cover w-full h-full max-h-[520px]"
          />
          <img
            src={interior}
            alt="Kikinga House interior lobby"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-2xl shadow-elegant object-cover w-full h-full max-h-[520px]"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">What we stand for</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-balance">
              Built on care, consistency and community.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl bg-card shadow-card hover:shadow-elegant transition-smooth">
                <div className="w-11 h-11 rounded-xl bg-secondary text-primary flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
