"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Filter, Rocket } from "lucide-react";
import { useState } from "react";

import { projects } from "@/lib/portfolio-data";
import { accentBg, accentTag } from "@/lib/accents";
import { ProjectIconSvg } from "@/lib/icon-map";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

const DOMAINS = ["All", ...Array.from(new Set(projects.map((p) => p.domain)))];

export function ProjectsView() {
  const { navigate } = useViewNav();
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.domain === filter);

  return (
    <div className="view-in">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="absolute -left-6 top-32 hidden h-16 w-16 rotate-6 border-2 border-brutal-black bg-brutal-yellow md:block" />
        <div className="absolute right-12 top-40 hidden h-10 w-10 -rotate-12 border-2 border-brutal-black bg-brutal-coral md:block" />

        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("home")}
            className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black hover:text-brutal-orange"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </button>

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <Rocket size={16} /> {"// case studies"}
            </span>
            <h1 className="display-serif mt-3 text-5xl font-black leading-[0.95] md:text-7xl">
              Projects I&apos;ve{" "}
              <span className="relative inline-block">
                <span className="relative z-10">shipped</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-orange md:h-4" />
              </span>
              .
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
              Real ERP, automation, and analytics engagements — across
              logistics, manufacturing, distribution, and labs. Click any card
              to read the full case study.
            </p>
          </div>

          {/* Filter bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
              <Filter size={12} /> Filter:
            </span>
            {DOMAINS.map((d) => {
              const active = filter === d;
              return (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  className={`border-2 border-brutal-black px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-brutal-orange text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A]"
                      : "bg-white text-brutal-black hover:bg-brutal-yellow-light"
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee variant="default" />

      {/* GRID */}
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.button
                key={p.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => navigate("project", p.slug)}
                className="brutal-card brutal-card-hover group flex h-full flex-col overflow-hidden text-left"
              >
                <div
                  className={`relative flex h-36 items-center justify-center border-b-2 border-brutal-black ${accentBg[p.accent]}`}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-brutal-black bg-white/30 text-brutal-black transition-transform duration-300 group-hover:scale-110">
                    <ProjectIconSvg icon={p.icon} size={40} strokeWidth={2.2} />
                  </span>
                  <span className="absolute right-2 top-2 border-2 border-brutal-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {p.domain}
                  </span>
                  <span className="absolute left-2 bottom-2 border-2 border-brutal-black bg-brutal-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.client}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display-serif text-xl font-black leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {p.shortDesc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tools.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="border border-brutal-black bg-brutal-yellow-light px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <span className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brutal-black">
                      Read case study
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="brutal-card border-2 border-brutal-black bg-brutal-yellow-light p-10 text-center">
              <p className="display-serif text-2xl font-black">
                No projects in this domain yet.
              </p>
              <p className="mt-2 font-mono text-sm text-neutral-700">
                Try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card brutal-card-hover flex flex-col items-center gap-4 border-2 border-brutal-black bg-brutal-orange p-8 text-center md:p-12">
            <h2 className="display-serif text-3xl font-black leading-tight text-brutal-black md:text-4xl">
              Want to see how I work?
            </h2>
            <p className="max-w-xl text-base text-brutal-black/85 md:text-lg">
              Check out my full experience timeline — including the 10+ ERP
              rollouts and the team I lead today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate("experience")}
                className="brutal-btn bg-brutal-black text-white"
              >
                View Experience <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("contact")}
                className="brutal-btn bg-white text-brutal-black"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
