"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Target,
  Wrench,
  FileText,
  Layers,
} from "lucide-react";

import { projects, personal } from "@/lib/portfolio-data";
import { accentBg, accentTag } from "@/lib/accents";
import { ProjectIconSvg } from "@/lib/icon-map";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

export function ProjectDetailView({ projectId }: { projectId: string | null }) {
  const { navigate } = useViewNav();
  const project = projects.find((p) => p.slug === projectId);

  // Fallback: invalid id — show "not found"
  if (!project) {
    return (
      <div className="view-in px-4 pt-32 pb-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="brutal-card border-2 border-brutal-black bg-brutal-yellow-light p-10 text-center">
            <h1 className="display-serif text-4xl font-black">Project not found</h1>
            <p className="mt-3 font-mono text-sm text-neutral-700">
              We couldn&apos;t find that case study. Browse all projects below.
            </p>
            <button
              onClick={() => navigate("projects")}
              className="brutal-btn mt-5 bg-brutal-orange text-brutal-black"
            >
              <ArrowLeft size={14} /> All Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Find next project (for "next case study" CTA)
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(idx + 1) % projects.length];

  return (
    <div className="view-in">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("projects")}
            className="group flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black hover:text-brutal-orange"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Projects
          </button>

          <div className="mt-8 grid gap-10 md:grid-cols-12">
            {/* Left: title block */}
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="border-2 border-brutal-black bg-brutal-yellow-light px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {project.domain}
                </span>
                <span className="border-2 border-brutal-black bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {project.client}
                </span>
              </div>
              <h1 className="display-serif mt-4 text-5xl font-black leading-[0.95] md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                {project.shortDesc}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("contact")}
                  className="brutal-btn bg-brutal-orange text-brutal-black"
                >
                  Discuss similar work <ArrowRight size={14} />
                </button>
                <a
                  href={personal.resumePath}
                  download={personal.resumeName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-white text-brutal-black"
                >
                  View Resume ↗
                </a>
              </div>
            </div>

            {/* Right: hero icon block */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`brutal-card flex aspect-square items-center justify-center border-2 border-brutal-black p-8 ${accentBg[project.accent]}`}
              >
                <span className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-brutal-black bg-white/30 text-brutal-black md:h-56 md:w-56">
                  <ProjectIconSvg icon={project.icon} size={96} strokeWidth={2} />
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats strip */}
      <section className="px-4 pb-12 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-px border-2 border-brutal-black bg-brutal-black sm:grid-cols-3">
            {project.impact.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center bg-white p-6 text-center"
              >
                <p className="display-serif text-3xl font-black leading-none text-brutal-orange md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-neutral-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee variant="reverse" />

      {/* BODY */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Left: Overview */}
            <div className="md:col-span-7">
              <BlockHeading
                icon={<Target size={18} />}
                kicker="// overview"
                title="The Engagement"
              />
              <p className="mt-4 text-base leading-relaxed text-neutral-800 md:text-lg">
                {project.longDesc}
              </p>

              <div className="mt-10">
                <BlockHeading
                  icon={<CheckCircle2 size={18} />}
                  kicker="// highlights"
                  title="What I delivered"
                />
                <ul className="mt-4 flex flex-col gap-3">
                  {project.highlights.map((h) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 border-l-4 border-brutal-orange bg-brutal-yellow-light p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-brutal-orange"
                      />
                      <span className="text-sm font-medium leading-relaxed text-brutal-black md:text-base">
                        {h}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="mt-10">
                <BlockHeading
                  icon={<FileText size={18} />}
                  kicker="// deliverables"
                  title="Artefacts produced"
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-2 border-2 border-brutal-black bg-white p-3 shadow-[3px_3px_0px_0px_#0A0A0A]"
                    >
                      <FileText
                        size={16}
                        className="mt-0.5 shrink-0 text-brutal-orange"
                      />
                      <span className="text-sm font-medium text-brutal-black">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sticky sidebar */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-24 flex flex-col gap-6">
                {/* Tools */}
                <div className="brutal-card border-2 border-brutal-black bg-white p-6">
                  <div className="flex items-center gap-2">
                    <Wrench size={18} className="text-brutal-orange" />
                    <h3 className="display-serif text-xl font-black">
                      Tools &amp; Methods
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span
                        key={t}
                        className={`brutal-tag ${accentTag[project.accent]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* At a glance */}
                <div className="brutal-card border-2 border-brutal-black bg-brutal-yellow-light p-6">
                  <div className="flex items-center gap-2">
                    <Layers size={18} className="text-brutal-black" />
                    <h3 className="display-serif text-xl font-black">
                      At a glance
                    </h3>
                  </div>
                  <dl className="mt-4 flex flex-col divide-y-2 divide-brutal-black/15">
                    <div className="flex justify-between py-2">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-brutal-black/70">
                        Project
                      </dt>
                      <dd className="text-sm font-bold text-brutal-black">
                        {project.title}
                      </dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-brutal-black/70">
                        Domain
                      </dt>
                      <dd className="text-sm font-bold text-brutal-black">
                        {project.domain}
                      </dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-brutal-black/70">
                        Client
                      </dt>
                      <dd className="text-sm font-bold text-brutal-black">
                        {project.client}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Contact CTA */}
                <div className="brutal-card border-2 border-brutal-black bg-brutal-orange p-6">
                  <h3 className="display-serif text-xl font-black text-brutal-black">
                    Working on something similar?
                  </h3>
                  <p className="mt-2 text-sm text-brutal-black/85">
                    I&apos;m open to BA, ERP, and analytics engagements. Let&apos;s
                    talk.
                  </p>
                  <button
                    onClick={() => navigate("contact")}
                    className="brutal-btn mt-4 bg-brutal-black text-white"
                  >
                    Start a conversation <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <button
            onClick={() => navigate("project", nextProject.slug)}
            className="brutal-card brutal-card-hover flex w-full flex-col gap-3 border-2 border-brutal-black bg-brutal-black p-7 text-left md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brutal-orange bg-brutal-orange text-brutal-black">
                <ProjectIconSvg icon={nextProject.icon} size={28} strokeWidth={2.2} />
              </span>
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brutal-orange">
                  → Next case study
                </span>
                <h3 className="display-serif mt-2 text-3xl font-black text-white md:text-4xl">
                  {nextProject.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  {nextProject.shortDesc}
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              Read <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

function BlockHeading({
  icon,
  kicker,
  title,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center border-2 border-brutal-black bg-brutal-orange text-brutal-black">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brutal-orange">
          {kicker}
        </p>
        <h2 className="display-serif text-2xl font-black leading-none md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
