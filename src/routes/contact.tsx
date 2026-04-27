import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import building from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kikinga House" },
      { name: "description", content: "Contact Kikinga House on Kiambu Road, Kiambu. Call 0727 370 171 or send us a message." },
      { property: "og:title", content: "Contact Kikinga House" },
      { property: "og:description", content: "Get in touch with Kikinga House on Kiambu Road." },
      { property: "og:image", content: building },
      { name: "twitter:image", content: building },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-20 pb-12 gradient-soft">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Contact</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3 mb-6 max-w-3xl text-balance">
            Let's talk. We'd love to hear from you.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Whether you're enquiring about office space, services, or planning
            a visit — drop us a message or call us directly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Info */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full gradient-accent opacity-25 blur-3xl" />
            <div className="relative space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-2">Visit us</h2>
                <p className="text-primary-foreground/70 text-sm">Open Monday to Saturday.</p>
              </div>

              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: "Address", value: "Kiambu Road, Kiambu, Kenya" },
                  { Icon: Phone, label: "Phone", value: "0727 370 171" },
                  { Icon: Mail, label: "Email", value: "hello@kikingahouse.co.ke" },
                  { Icon: Clock, label: "Hours", value: "Mon – Sat · 8:00 AM – 8:00 PM" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-0.5">{label}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6">Send a message</h2>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Your name</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Wanjiru"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-smooth"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-smooth resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth shadow-soft"
              >
                {sent ? "Message sent ✓" : (<>Send message <Send className="w-4 h-4" /></>)}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
