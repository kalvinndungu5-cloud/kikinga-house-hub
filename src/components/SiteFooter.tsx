import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center font-display font-semibold">
              K
            </div>
            <span className="font-display text-xl font-semibold">Kikinga House</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            A modern business park along Kiambu Road — home to offices, clinics,
            restaurants and service businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary-foreground transition-smooth">About</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground transition-smooth">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary-foreground transition-smooth">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/90">
            Visit & Contact
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Kiambu Road, Kiambu, Kenya</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> 0745 594 652</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> hello@kikingahouse.co.ke</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Kikinga House. All rights reserved.</p>
          <p>Crafted in Kiambu, Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
