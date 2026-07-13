"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { personal } from "@/lib/portfolio-data";
import { Linkedin, Mail, Phone, Globe, MapPin } from "lucide-react";

const FOOTER_NAV = [
  { label: "Home", view: "home" },
  { label: "About", view: "about" },
  { label: "Projects", view: "projects" },
  { label: "Writing", view: "writing" },
  { label: "Experience", view: "experience" },
  { label: "Contact", view: "contact" },
];

export function Footer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goTo = (view: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (view === "home") {
      params.delete("view");
      params.delete("id");
    } else {
      params.set("view", view);
      params.delete("id");
    }
    const qs = params.toString();
    router.push(qs ? `/?${qs}` : "/", { scroll: false });
  };

  return (
    <footer className="mt-auto border-t-4 border-brutal-orange bg-brutal-black text-white">
      {/* Top strip */}
      <div className="border-y-3 border-brutal-orange bg-brutal-orange py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[
                "AVAILABLE FOR OPPORTUNITIES",
                "BUSINESS ANALYST",
                "ERP · ANALYTICS · AUTOMATION",
                "SUPPLY CHAIN EXPERTISE",
                "LET'S BUILD TOGETHER",
              ].map((t) => (
                <span
                  key={t}
                  className="mx-6 font-mono text-sm font-bold uppercase tracking-widest text-brutal-black"
                >
                  ✦ {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center border-2 border-brutal-orange bg-brutal-orange font-mono text-xl font-bold text-brutal-black">
                MN
              </span>
              <div className="flex flex-col leading-none">
                <span className="display-serif text-2xl font-black">
                  Moin Noorani
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  BA · AI Solutions Lead
                </span>
              </div>
            </div>
            <p className="font-mono text-sm leading-relaxed text-neutral-300">
              Building data-driven ERP, automation, and analytics solutions
              across supply chain, procurement, inventory, and manufacturing.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border-2 border-neutral-700 text-neutral-300 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-brutal-orange hover:text-brutal-orange hover:shadow-[3px_3px_0px_0px_#FF6B35]"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border-2 border-neutral-700 text-neutral-300 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-brutal-orange hover:text-brutal-orange hover:shadow-[3px_3px_0px_0px_#FF6B35]"
              >
                <Mail size={16} />
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center border-2 border-neutral-700 text-neutral-300 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-brutal-orange hover:text-brutal-orange hover:shadow-[3px_3px_0px_0px_#FF6B35]"
              >
                <Phone size={16} />
              </a>
              <a
                href={personal.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="flex h-10 w-10 items-center justify-center border-2 border-neutral-700 text-neutral-300 transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-brutal-orange hover:text-brutal-orange hover:shadow-[3px_3px_0px_0px_#FF6B35]"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Quick menu */}
          <div className="flex flex-col gap-3">
            <h3 className="display-serif text-xl font-black text-brutal-orange">
              Quick Menu
            </h3>
            <nav className="flex flex-col gap-1">
              {FOOTER_NAV.map((item) => (
                <button
                  key={item.view}
                  onClick={() => goTo(item.view)}
                  className="w-fit py-1 font-mono text-sm text-neutral-400 no-underline transition-colors hover:text-brutal-orange md:py-1.5 md:text-base"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="display-serif text-xl font-black text-brutal-orange">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-neutral-300 transition-colors hover:text-brutal-orange"
              >
                <Mail size={14} className="shrink-0" />
                <span className="break-all">{personal.email}</span>
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-neutral-300 transition-colors hover:text-brutal-orange"
              >
                <Phone size={14} className="shrink-0" />
                <span>{personal.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-300">
                <MapPin size={14} className="shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>
            <a
              href={personal.resumePath}
              download={personal.resumeName}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-fit border-2 border-brutal-orange bg-brutal-orange px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black shadow-[3px_3px_0px_0px_#FF6B35] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#FF6B35]"
            >
              Download Resume ↗
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-neutral-800 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} Moin Noorani. All Rights Reserved.
          </p>
          <p className="font-mono text-xs text-neutral-500">
            Built with <span className="text-brutal-coral">❤</span> & Next.js ·
            Inspired by{" "}
            <a
              href="https://www.muaazshaikh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brutal-orange underline-offset-2 hover:underline"
            >
              muaazshaikh.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
