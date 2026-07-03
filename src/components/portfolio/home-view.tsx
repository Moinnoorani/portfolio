"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Briefcase,
  TrendingUp,
  Target,
  Rocket,
  Trophy,
  Map as MapIcon,
} from "lucide-react";

import {
  personal,
  expertise,
  projects,
  stats,
  roadmap,
  certifications,
} from "@/lib/portfolio-data";
import { accentBg, accentTag, accentBorderLeft } from "@/lib/accents";
import {
  ExpertiseIconSvg,
  ProjectIconSvg,
} from "@/lib/icon-map";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";
import { useExperienceDuration } from "./use-experience";

export function HomeView() {
  const { navigate } = useViewNav();
  const { inline: experienceInline, short: experienceShort } =
    useExperienceDuration();

  return (
    <div className="view-in">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
        {/* Decorative blobs */}
        <div className="absolute -left-6 top-24 hidden h-16 w-16 rotate-6 border-2 border-brutal-black bg-brutal-coral md:block" />
        <div className="absolute right-12 top-32 hidden h-10 w-10 -rotate-12 border-2 border-brutal-black bg-brutal-mint md:block" />
        <div className="absolute right-32 top-44 hidden h-6 w-6 rotate-45 border-2 border-brutal-black bg-brutal-yellow md:block" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-12">
            {/* Left: copy */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-flex items-center gap-2 border-2 border-brutal-black bg-brutal-mint px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black shadow-[3px_3px_0px_0px_#0A0A0A]">
                  <Sparkles size={14} /> Available for opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="display-serif mt-5 text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brutal-orange">Moin</span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-yellow md:h-4" />
                </span>{" "}
                Noorani{" "}
                <span className="text-brutal-coral">&lt;3</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="display-serif mt-5 text-2xl font-bold italic leading-tight text-brutal-black sm:text-3xl md:text-4xl"
              >
                I design &amp; ship{" "}
                <span className="border-2 border-brutal-black bg-brutal-orange px-2 py-0.5 italic">
                  data-driven ERP
                </span>{" "}
                , analytics &amp;{" "}
                <span className="border-2 border-brutal-black bg-brutal-lilac px-2 py-0.5 italic">
                  AI workflows
                </span>{" "}
                to production.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg"
              >
                Business Analyst specialising in supply chain, procurement,
                inventory, and manufacturing. I turn ambiguous operational
                needs into BRDs, SRS, and dashboards that ship to production —
                across India, USA, Canada, and UAE.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <button
                  onClick={() => navigate("projects")}
                  className="brutal-btn bg-brutal-orange text-brutal-black"
                >
                  View Projects <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("contact")}
                  className="brutal-btn bg-brutal-yellow-light text-brutal-black"
                >
                  Get in Touch <Mail size={16} />
                </button>
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-white text-brutal-black"
                >
                  Resume ↗
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-neutral-600"
              >
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {personal.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={12} /> Codes Technology Pvt. Ltd.
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp size={12} /> {experienceInline || "—"} experience
                </span>
              </motion.div>
            </div>

            {/* Right: profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Sticker badges */}
                <div className="absolute -left-4 -top-4 z-20 rotate-[-8deg] border-2 border-brutal-black bg-brutal-yellow px-3 py-1.5 font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_0px_#0A0A0A]">
                  Top 17% Aspire
                </div>
                <div className="absolute -right-4 top-1/3 z-20 rotate-[6deg] border-2 border-brutal-black bg-brutal-coral px-3 py-1.5 font-mono text-xs font-bold uppercase text-white shadow-[3px_3px_0px_0px_#0A0A0A]">
                  McKinsey Forward
                </div>

                {/* Main profile box */}
                <div className="brutal-card brutal-card-hover relative overflow-hidden bg-brutal-yellow-light p-1">
                  <div className="border-2 border-brutal-black bg-white p-5">
                    {/* Avatar block */}
                    <div className="flex aspect-square items-center justify-center border-2 border-brutal-black bg-brutal-orange">
                      <span className="display-serif text-[10rem] font-black leading-none text-brutal-black">
                        MN
                      </span>
                    </div>

                    {/* Name plate */}
                    <div className="mt-4 border-2 border-brutal-black bg-brutal-black p-3 text-white">
                      <p className="display-serif text-xl font-black leading-none">
                        Moin Noorani
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-brutal-orange">
                        BA · AI Solutions Lead
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {stats.slice(0, 4).map((s) => {
                        const value =
                          s.label === "Years Experience" && experienceShort
                            ? experienceShort
                            : s.value;
                        return (
                          <div
                            key={s.label}
                            className="border-2 border-brutal-black bg-brutal-mint p-2 text-center"
                          >
                            <p className="display-serif text-xl font-black leading-none text-brutal-black">
                              {value}
                            </p>
                            <p className="mt-1 font-mono text-[9px] uppercase tracking-wide text-neutral-700">
                              {s.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Floating mini card */}
                <div className="absolute -bottom-6 -right-6 z-20 hidden rotate-3 border-2 border-brutal-black bg-brutal-orange p-3 shadow-[4px_4px_0px_0px_#0A0A0A] md:block">
                  <p className="display-serif text-2xl font-black leading-none">
                    10+
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-brutal-black">
                    ERP Rollouts
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <Marquee variant="default" />

      {/* ============================ EXPERTISE ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="// what I do"
            title="Expertise"
            subtitle="What I deliver, end to end."
            icon={<Target size={16} />}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {expertise.map((e, i) => (
              <motion.button
                key={e.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => navigate("about")}
                className={`brutal-card brutal-card-hover group relative flex flex-col items-start p-7 text-left md:p-9 ${accentBorderLeft[e.accent]} border-l-[6px]`}
              >
                <span className="flex h-12 w-12 items-center justify-center border-2 border-brutal-black bg-white">
                  <ExpertiseIconSvg icon={e.icon} size={26} />
                </span>
                <h3 className="display-serif mt-4 text-2xl font-black leading-tight md:text-3xl">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
                  {e.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className={`brutal-tag ${accentTag[e.accent]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-4 flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brutal-black opacity-0 transition-opacity group-hover:opacity-100">
                  Read more <ArrowRight size={12} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card grid grid-cols-2 gap-px border-2 border-brutal-black bg-brutal-black p-2 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => {
              const value =
                s.label === "Years Experience" && experienceShort
                  ? experienceShort
                  : s.value;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center bg-white p-4 text-center"
                >
                  <p className="display-serif text-3xl font-black leading-none text-brutal-orange md:text-4xl">
                    {value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-neutral-600">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ FEATURED PROJECTS ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              kicker="// selected work"
              title="Featured Projects"
              subtitle="ERP, automation & analytics — shipped to production."
              icon={<Rocket size={16} />}
              align="left"
            />
            <button
              onClick={() => navigate("projects")}
              className="brutal-btn bg-white text-brutal-black"
            >
              View All <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard
                key={p.slug}
                project={p}
                onClick={() => navigate("project", p.slug)}
                delay={i * 0.05}
              />
            ))}

            {/* "View all" CTA card */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={() => navigate("projects")}
              className="brutal-card brutal-card-hover flex min-h-[260px] flex-col items-center justify-center gap-3 border-2 border-brutal-black bg-brutal-black p-7 text-center text-white"
            >
              <span className="display-serif text-3xl font-black text-brutal-orange">
                +{projects.length - 3} more
              </span>
              <p className="font-mono text-sm uppercase tracking-widest text-neutral-300">
                See all {projects.length} projects
              </p>
              <span className="mt-2 flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brutal-orange">
                Browse <ArrowRight size={14} />
              </span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Reverse marquee */}
      <Marquee variant="reverse" />

      {/* ============================ RECOGNITION ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="// recognised by"
            title="Honours & Certifications"
            subtitle="From Harvard to McKinsey to IIT Guwahati."
            icon={<Trophy size={16} />}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.slice(0, 3).map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`brutal-card brutal-card-hover flex flex-col p-6 ${accentBg[c.accent]}`}
              >
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brutal-black/70">
                  {c.date}
                </span>
                <h3 className="display-serif mt-2 text-xl font-black leading-tight text-brutal-black">
                  {c.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-brutal-black/80">
                  {c.issuer}
                </p>
                {c.note && (
                  <p className="mt-3 border-t-2 border-brutal-black/30 pt-3 text-sm font-semibold text-brutal-black">
                    {c.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("about")}
              className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange underline-offset-4 hover:underline"
            >
              See all honours on the About page →
            </button>
          </div>
        </div>
      </section>

      {/* ============================ ROADMAP ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="// my journey"
            title="My Roadmap"
            subtitle="From foundations to scale."
            icon={<MapIcon size={16} />}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {roadmap.map((phase, i) => {
              const statusBadge =
                phase.status === "completed"
                  ? "✓ Completed"
                  : phase.status === "current"
                    ? "● Current"
                    : "→ Next";
              const statusBg =
                phase.status === "completed"
                  ? "bg-brutal-mint"
                  : phase.status === "current"
                    ? "bg-brutal-orange"
                    : "bg-brutal-lilac";
              return (
                <motion.div
                  key={phase.index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`brutal-card brutal-card-hover relative flex flex-col p-7 ${accentBg[phase.accent]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="display-serif text-5xl font-black text-brutal-black/20">
                      #{phase.index}
                    </span>
                    <span
                      className={`border-2 border-brutal-black ${statusBg} px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brutal-black`}
                    >
                      {statusBadge}
                    </span>
                  </div>
                  <h3 className="display-serif mt-3 text-2xl font-black leading-tight text-brutal-black">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brutal-black/85">
                    {phase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card brutal-card-hover relative overflow-hidden border-2 border-brutal-black bg-brutal-orange p-8 md:p-14">
            {/* Decorative shapes */}
            <div className="absolute -right-6 -top-6 h-20 w-20 rotate-12 border-2 border-brutal-black bg-brutal-yellow" />
            <div className="absolute -bottom-4 right-12 h-12 w-12 -rotate-6 border-2 border-brutal-black bg-brutal-coral" />

            <div className="relative max-w-3xl">
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-black/70">
                {"// let's talk"}
              </p>
              <h2 className="display-serif mt-3 text-4xl font-black leading-[1.05] md:text-6xl">
                Got an ERP, analytics, or automation problem?
                <br />
                <span className="border-b-4 border-brutal-black">Let&apos;s ship it.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brutal-black/90 md:text-lg">
                I&apos;m open to Business Analyst, Senior BA, and Product
                Analyst roles — plus consulting engagements on ERP rollouts,
                supply chain analytics, and AI workflow automation.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("contact")}
                  className="brutal-btn bg-brutal-black text-white"
                >
                  Start a conversation <ArrowRight size={16} />
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  className="brutal-btn bg-white text-brutal-black"
                >
                  <Mail size={16} /> {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

function SectionHeading({
  kicker,
  title,
  subtitle,
  icon,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brutal-orange">
        {icon} {kicker}
      </span>
      <h2 className="display-serif mt-3 text-4xl font-black leading-[1.05] md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-neutral-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onClick,
  delay = 0,
}: {
  project: (typeof projects)[number];
  onClick: () => void;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className="brutal-card brutal-card-hover group flex h-full flex-col overflow-hidden text-left"
    >
      {/* Top banner */}
      <div
        className={`relative flex h-32 items-center justify-center border-b-2 border-brutal-black ${accentBg[project.accent]}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brutal-black bg-white/30 text-brutal-black transition-transform duration-300 group-hover:scale-110">
          <ProjectIconSvg icon={project.icon} size={32} strokeWidth={2.2} />
        </span>
        <span className="absolute right-2 top-2 border-2 border-brutal-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider">
          {project.domain}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="display-serif text-xl font-black leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          {project.client}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">
          {project.shortDesc}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((t) => (
            <span
              key={t}
              className="border border-brutal-black bg-brutal-yellow-light px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase"
            >
              {t}
            </span>
          ))}
          {project.tools.length > 3 && (
            <span className="border border-brutal-black bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase">
              +{project.tools.length - 3}
            </span>
          )}
        </div>
        <span className="mt-4 flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brutal-black">
          Read case study
          <ArrowRight
            size={12}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </motion.button>
  );
}
