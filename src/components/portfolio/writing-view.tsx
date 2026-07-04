"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  PenLine,
  Clock,
  Filter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

import { posts, personal, type PostCategory } from "@/lib/portfolio-data";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

// Map each post category to a brutal accent color
const categoryAccent: Record<PostCategory, string> = {
  "Business Analysis": "bg-brutal-orange text-brutal-black",
  "AI Industry": "bg-brutal-lilac text-brutal-black",
  Agents: "bg-brutal-mint text-brutal-black",
  Engineering: "bg-brutal-yellow text-brutal-black",
  Tools: "bg-brutal-coral text-white",
  Process: "bg-brutal-yellow-light text-brutal-black",
};

// Sort posts by date (newest first)
const sortedPosts = [...posts].sort((a, b) =>
  b.dateSort.localeCompare(a.dateSort)
);

const CATEGORIES: (PostCategory | "All")[] = [
  "All",
  "Business Analysis",
  "AI Industry",
  "Agents",
  "Engineering",
  "Process",
];

export function WritingView() {
  const { navigate } = useViewNav();
  const [filter, setFilter] = useState<PostCategory | "All">("All");

  const filtered =
    filter === "All"
      ? sortedPosts
      : sortedPosts.filter((p) => p.category === filter);

  return (
    <div className="view-in">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="absolute -left-6 top-32 hidden h-16 w-16 rotate-6 border-2 border-brutal-black bg-brutal-coral md:block" />
        <div className="absolute right-12 top-40 hidden h-10 w-10 -rotate-12 border-2 border-brutal-black bg-brutal-lilac md:block" />

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
              <PenLine size={16} /> {"// writing & insights"}
            </span>
            <h1 className="display-serif mt-3 text-5xl font-black leading-[0.95] md:text-7xl">
              Thoughts on{" "}
              <span className="relative inline-block">
                <span className="relative z-10">building</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-orange md:h-4" />
              </span>{" "}
              with AI &amp; data.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
              Curated posts from my LinkedIn — only the technical writing
              (Business Analysis, AI, Engineering, Process). Hiring updates,
              personal posts, and non-tech content live elsewhere. New posts
              are added here as they ship.
            </p>
          </div>

          {/* Filter bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
              <Filter size={12} /> Filter:
            </span>
            {CATEGORIES.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`border-2 border-brutal-black px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                    active
                      ? "bg-brutal-orange text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A]"
                      : "bg-white text-brutal-black hover:bg-brutal-yellow-light"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Marquee variant="reverse" />

      {/* POSTS GRID */}
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="brutal-card brutal-card-hover group flex h-full flex-col overflow-hidden"
              >
                {/* Top banner with category */}
                <div className="flex items-center justify-between border-b-2 border-brutal-black bg-brutal-paper px-4 py-2">
                  <span
                    className={`brutal-tag ${categoryAccent[p.category]}`}
                  >
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {p.dateLabel}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="display-serif text-xl font-black leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-700">
                    {p.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t-2 border-brutal-black/10 pt-3">
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                      {p.readTime && (
                        <>
                          <Clock size={10} /> {p.readTime}
                        </>
                      )}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brutal-black">
                      Read on LinkedIn
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="brutal-card border-2 border-brutal-black bg-brutal-yellow-light p-10 text-center">
              <p className="display-serif text-2xl font-black">
                No posts in this category yet.
              </p>
              <p className="mt-2 font-mono text-sm text-neutral-700">
                Try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card brutal-card-hover flex flex-col items-center gap-4 border-2 border-brutal-black bg-brutal-orange p-8 text-center md:p-12">
            <Linkedin size={32} className="text-brutal-black" />
            <h2 className="display-serif text-3xl font-black leading-tight text-brutal-black md:text-4xl">
              Follow along on LinkedIn
            </h2>
            <p className="max-w-xl text-base text-brutal-black/85 md:text-lg">
              I post regularly about Business Analysis, AI tooling, ERP
              delivery, and the occasional engineering deep-dive. Connect with
              me to keep the conversation going.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-brutal-black text-white"
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
              <button
                onClick={() => navigate("contact")}
                className="brutal-btn bg-white text-brutal-black"
              >
                Get in Touch <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
