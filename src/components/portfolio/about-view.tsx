"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Award,
  Sparkles,
  Mail,
  Linkedin,
  Phone,
  Globe,
  MapPin,
  Wrench,
  Trophy,
} from "lucide-react";

import {
  personal,
  skillGroups,
  education,
  certifications,
  stats,
  quickFacts,
} from "@/lib/portfolio-data";
import { accentBg, accentTag, accentBorderLeft } from "@/lib/accents";
import { SkillIconSvg } from "@/lib/icon-map";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";
import { useExperienceDuration } from "./use-experience";

export function AboutView() {
  const { navigate } = useViewNav();
  const { long: experienceLong, short: experienceShort } =
    useExperienceDuration();

  return (
    <div className="view-in">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="absolute -right-6 top-32 hidden h-16 w-16 rotate-12 border-2 border-brutal-black bg-brutal-mint md:block" />
        <div className="absolute left-12 top-44 hidden h-8 w-8 -rotate-12 border-2 border-brutal-black bg-brutal-coral md:block" />

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

          <div className="mt-8 grid gap-10 md:grid-cols-12">
            {/* Left: copy */}
            <div className="md:col-span-7">
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <Sparkles size={16} /> {"// about me"}
              </span>
              <h1 className="display-serif mt-3 text-5xl font-black leading-[0.95] md:text-7xl">
                The analyst behind the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">dashboards</span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-yellow md:h-4" />
                </span>
                .
              </h1>
              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
                I&apos;m a Business Analyst with{" "}
                <strong className="font-bold text-brutal-black">
                  {experienceLong || "—"}
                </strong>{" "}
                of hands-on delivery across ERP, automation, analytics, and AI
                workflows — focused on supply chain, procurement, inventory,
                and manufacturing domains. I sit between operations
                stakeholders and engineering teams, translating messy
                operational reality into BRDs, SRS, user stories, and
                dashboards that actually ship.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                So far I&apos;ve supported 10+ ERP rollouts spanning 200+ end
                users, reduced inventory reporting time by 40% with SQL and
                Power BI, and automated KPI pipelines that save operations
                teams 8+ hours every week. I also lead a 4-person team at
                Codes Technology, delivering for clients across India, USA,
                Canada, and the UAE.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
                Outside of work, I invest in continuous learning — recently
                recognised by the Aspire Institute / Harvard Business School
                (top 17% of 36,000+ global applicants) and McKinsey &amp;
                Company&apos;s Forward Program.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("contact")}
                  className="brutal-btn bg-brutal-orange text-brutal-black"
                >
                  Let&apos;s talk <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("projects")}
                  className="brutal-btn bg-brutal-yellow-light text-brutal-black"
                >
                  See my work
                </button>
              </div>
            </div>

            {/* Right: quick facts card */}
            <div className="md:col-span-5">
              <div className="brutal-card border-2 border-brutal-black bg-white p-6">
                <h3 className="display-serif text-2xl font-black">
                  Quick Facts
                </h3>
                <div className="mt-4 flex flex-col divide-y-2 divide-brutal-black/10">
                  {quickFacts.map((f) => (
                    <div
                      key={f.label}
                      className="flex flex-col gap-1 py-3"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-widest text-brutal-orange">
                        {f.label}
                      </span>
                      <span className="text-sm font-semibold text-brutal-black">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t-2 border-brutal-black pt-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-yellow-light transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#0A0A0A]"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-yellow-light transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#0A0A0A]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s/g, "")}`}
                    className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-yellow-light transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#0A0A0A]"
                    aria-label="Phone"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={personal.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border-2 border-brutal-black bg-brutal-yellow-light transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#0A0A0A]"
                    aria-label="Portfolio"
                  >
                    <Globe size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee variant="stripes" />

      {/* ============================ SKILLS ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <Wrench size={16} /> {"// core skills"}
            </span>
            <h2 className="display-serif mt-3 text-4xl font-black md:text-5xl">
              What&apos;s in my toolbox
            </h2>
            <p className="mt-3 text-base text-neutral-600 md:text-lg">
              Three pillars: requirements engineering, supply chain domain, and
              delivery tooling.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`brutal-card brutal-card-hover flex flex-col p-7 ${accentBorderLeft[g.accent]} border-l-[6px]`}
              >
                <span className="flex h-12 w-12 items-center justify-center border-2 border-brutal-black bg-white">
                  <SkillIconSvg icon={g.icon} size={26} />
                </span>
                <h3 className="display-serif mt-3 text-2xl font-black leading-tight">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm font-medium text-neutral-800"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-brutal-black" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ STATS STRIP ============================ */}
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

      {/* ============================ EDUCATION ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <GraduationCap size={16} /> {"// education"}
            </span>
            <h2 className="display-serif mt-3 text-4xl font-black md:text-5xl">
              Where it started
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="brutal-card brutal-card-hover relative overflow-hidden border-2 border-brutal-black bg-brutal-mint p-7 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-brutal-black bg-white">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="display-serif text-2xl font-black leading-tight md:text-3xl">
                      {education.degree}
                    </h3>
                    <p className="mt-1 font-mono text-sm uppercase tracking-wide text-brutal-black/80">
                      {education.field}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-brutal-black">
                      {education.school} · {education.location}
                    </p>
                    <p className="mt-1 font-mono text-xs text-brutal-black/70">
                      {education.period}
                    </p>
                  </div>
                </div>
                <div className="border-2 border-brutal-black bg-white p-4 text-center md:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    CGPA
                  </p>
                  <p className="display-serif text-4xl font-black leading-none text-brutal-orange">
                    {education.cgpa}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ CERTIFICATIONS ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-brutal-orange">
              <Trophy size={16} /> {"// certifications & honours"}
            </span>
            <h2 className="display-serif mt-3 text-4xl font-black md:text-5xl">
              Recognised by the best
            </h2>
            <p className="mt-3 text-base text-neutral-600 md:text-lg">
              From Harvard Business School to McKinsey to IIT Guwahati.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`brutal-card brutal-card-hover relative flex flex-col p-6 ${accentBg[c.accent]}`}
              >
                <Award size={28} className="text-brutal-black" />
                <span className="mt-3 font-mono text-xs font-bold uppercase tracking-widest text-brutal-black/70">
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
        </div>
      </section>

      {/* ============================ CONTACT CTA ============================ */}
      <section className="px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="brutal-card brutal-card-hover flex flex-col items-center gap-4 border-2 border-brutal-black bg-brutal-yellow-light p-8 text-center md:p-12">
            <Sparkles size={32} className="text-brutal-orange" />
            <h2 className="display-serif text-3xl font-black leading-tight md:text-4xl">
              Want the full picture?
            </h2>
            <p className="max-w-xl text-base text-neutral-700 md:text-lg">
              Browse my work, dig into my experience timeline, or just say hi —
              I&apos;m always open to a conversation.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => navigate("projects")}
                className="brutal-btn bg-brutal-orange text-brutal-black"
              >
                See Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("experience")}
                className="brutal-btn bg-white text-brutal-black"
              >
                View Experience
              </button>
              <button
                onClick={() => navigate("contact")}
                className="brutal-btn bg-brutal-black text-white"
              >
                <Mail size={16} /> Contact
              </button>
            </div>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-neutral-600">
              <MapPin size={12} /> {personal.location}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
