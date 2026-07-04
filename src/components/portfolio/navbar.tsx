"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

const NAV_ITEMS = [
  { label: "Home", view: "home" },
  { label: "About", view: "about" },
  { label: "Projects", view: "projects" },
  { label: "Writing", view: "writing" },
  { label: "Experience", view: "experience" },
  { label: "Contact", view: "contact" },
];

export function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "home";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (view: string) => {
    // Close mobile menu synchronously when navigating — no useEffect needed.
    setMobileOpen(false);
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

  const headerClass = `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-brutal-paper border-b-2 border-brutal-black"
      : "bg-transparent"
  }`;

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <button
          onClick={() => goTo("home")}
          className="group flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-orange font-mono text-lg font-bold text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A] transition-all duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_0px_#0A0A0A]">
            MN
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="display-serif text-lg font-black leading-none">
              Moin Noorani
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
              BA · AI Solutions Lead
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => goTo(item.view)}
                className={`border-2 px-4 py-2 font-mono text-sm font-semibold no-underline transition-all duration-150 ${
                  active
                    ? "border-brutal-black bg-brutal-yellow-light text-brutal-black"
                    : "border-transparent text-brutal-black hover:border-brutal-black hover:bg-brutal-yellow-light"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border-2 border-brutal-black bg-brutal-orange px-4 py-2 font-mono text-sm font-bold text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#0A0A0A]"
          >
            Resume ↗
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="border-2 border-brutal-black bg-brutal-orange p-2 shadow-[3px_3px_0px_0px_#0A0A0A] md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t-2 border-brutal-black bg-brutal-paper md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => {
              const active = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => goTo(item.view)}
                  className={`border-2 px-4 py-3 text-left font-mono text-sm font-semibold transition-all ${
                    active
                      ? "border-brutal-black bg-brutal-yellow-light"
                      : "border-transparent hover:border-brutal-black hover:bg-brutal-yellow-light"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 border-2 border-brutal-black bg-brutal-orange px-4 py-3 text-center font-mono text-sm font-bold text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A]"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
