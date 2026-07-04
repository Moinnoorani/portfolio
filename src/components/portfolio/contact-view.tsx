"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react";
import { useState, FormEvent } from "react";

import { personal, web3formsAccessKey } from "@/lib/portfolio-data";
import { Marquee } from "./marquee";
import { useViewNav } from "./use-view-nav";

// Whether the form is wired up with a real Web3Forms access key.
// When false, the form runs in demo mode (simulated success).
const isLiveMode =
  web3formsAccessKey &&
  web3formsAccessKey !== "YOUR_ACCESS_KEY_HERE" &&
  !web3formsAccessKey.startsWith("YOUR_");

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactView() {
  const { navigate } = useViewNav();
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ status: "submitting" });

    const formData = new FormData(e.currentTarget);
    const payload = {
      access_key: web3formsAccessKey,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      subject: `Portfolio contact — ${formData.get("name") || "someone"}`,
      from_name: "Moin Noorani Portfolio",
      message: String(formData.get("message") || ""),
    };

    // Demo mode fallback — simulates a successful submission.
    if (!isLiveMode) {
      await new Promise((r) => setTimeout(r, 700));
      setState({ status: "success" });
      return;
    }

    // Live mode — POST to Web3Forms, which emails the message to
    // moinnoorani85@gmail.com (the email used to sign up for the key).
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setState({ status: "success" });
      } else {
        setState({
          status: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setState({
        status: "error",
        message:
          "Network error — please check your connection and try again, or email me directly at " +
          personal.email,
      });
    }
  };

  const contactCards = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      accent: "bg-brutal-orange",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
      accent: "bg-brutal-yellow",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personal.location,
      href: undefined,
      accent: "bg-brutal-mint",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "in/moinnoorani",
      href: personal.linkedin,
      accent: "bg-brutal-coral",
    },
  ];

  return (
    <div className="view-in">
      {/* HERO */}
      <section className="relative overflow-hidden px-4 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
        <div className="absolute -left-6 top-32 hidden h-16 w-16 rotate-6 border-2 border-brutal-black bg-brutal-yellow md:block" />

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
              <Mail size={16} /> {"// get in touch"}
            </span>
            <h1 className="display-serif mt-3 text-5xl font-black leading-[0.95] md:text-7xl">
              Let&apos;s build something{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brutal-orange">incredible</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brutal-yellow md:h-4" />
              </span>{" "}
              together.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
              Open to Business Analyst, Senior BA, and Product Analyst roles —
              plus consulting on ERP rollouts, supply chain analytics, and AI
              workflow automation. Drop a note below.
            </p>
          </div>
        </div>
      </section>

      <Marquee variant="default" />

      {/* BODY */}
      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-12">
            {/* Left: form */}
            <div className="md:col-span-7">
              {state.status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="brutal-card border-2 border-brutal-black bg-brutal-mint p-8 text-center md:p-12"
                >
                  <CheckCircle2
                    size={64}
                    className="mx-auto text-brutal-orange"
                  />
                  <h2 className="display-serif mt-4 text-3xl font-black md:text-4xl">
                    Message sent!
                  </h2>
                  <p className="mt-3 text-base text-neutral-700 md:text-lg">
                    {isLiveMode
                      ? "Thanks for reaching out — your message is in my inbox. I'll get back to you within 1–2 business days."
                      : "Thanks for reaching out — this is a demo submission. To actually receive messages, see the note below the form."}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn bg-brutal-orange text-brutal-black"
                    >
                      <Linkedin size={16} /> Connect on LinkedIn
                    </a>
                    <button
                      onClick={() => setState({ status: "idle" })}
                      className="brutal-btn bg-white text-brutal-black"
                    >
                      Send another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="brutal-card flex flex-col gap-5 border-2 border-brutal-black bg-white p-6 md:p-8"
                >
                  <div>
                    <h2 className="display-serif text-2xl font-black md:text-3xl">
                      Send a message
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-neutral-600">
                      {"// fields marked * are required"}
                    </p>
                  </div>

                  {/* Demo-mode notice — only shown when no real access key is set */}
                  {!isLiveMode && (
                    <div className="flex items-start gap-2 border-2 border-brutal-black bg-brutal-yellow-light p-3 text-xs">
                      <Info size={14} className="mt-0.5 shrink-0 text-brutal-black" />
                      <p className="text-brutal-black">
                        <strong>Demo mode.</strong> The form is wired up but no
                        email access key is set yet. Submissions will simulate
                        success without actually sending. See the box below the
                        form to enable real email delivery in 2 minutes.
                      </p>
                    </div>
                  )}

                  {/* Error state */}
                  {state.status === "error" && (
                    <div className="flex items-start gap-2 border-2 border-brutal-black bg-brutal-coral p-3 text-xs text-white">
                      <AlertCircle size={14} className="mt-0.5 shrink-0" />
                      <p>{state.message}</p>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" required>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="brutal-input"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="brutal-input"
                      />
                    </Field>
                  </div>

                  <Field label="Company">
                    <input
                      type="text"
                      name="company"
                      placeholder="Where do you work?"
                      className="brutal-input"
                    />
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell me about the role, project, or problem you're trying to solve..."
                      className="brutal-input min-h-[180px] flex-1 resize-y text-base md:min-h-[240px]"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={state.status === "submitting"}
                    className="brutal-btn bg-brutal-orange text-brutal-black disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {state.status === "submitting"
                      ? "Sending..."
                      : "Send Message"}{" "}
                    {state.status !== "submitting" && <Send size={16} />}
                  </button>
                </form>
              )}

              {/* Setup instructions for enabling real email delivery */}
              {!isLiveMode && state.status !== "success" && (
                <div className="brutal-card mt-6 border-2 border-brutal-black bg-brutal-paper p-5">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-brutal-orange" />
                    <h3 className="display-serif text-lg font-black">
                      Enable real email delivery (2-minute setup)
                    </h3>
                  </div>
                  <ol className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
                    <li>
                      <strong>1.</strong> Go to{" "}
                      <a
                        href="https://web3forms.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brutal-orange underline"
                      >
                        web3forms.com
                      </a>{" "}
                      and enter{" "}
                      <code className="border border-brutal-black bg-white px-1">
                        {personal.email}
                      </code>
                      .
                    </li>
                    <li>
                      <strong>2.</strong> Check your inbox — they email you a
                      free access key (looks like{" "}
                      <code className="border border-brutal-black bg-white px-1">
                        a1b2c3d4-...
                      </code>
                      ).
                    </li>
                    <li>
                      <strong>3.</strong> In your Vercel project → Settings →
                      Environment Variables, add:
                      <pre className="mt-2 overflow-x-auto border-2 border-brutal-black bg-white p-2 font-mono text-xs">
                        {`NEXT_PUBLIC_WEB3FORMS_KEY = <your-key>`}
                      </pre>
                    </li>
                    <li>
                      <strong>4.</strong> Redeploy. The form will now actually
                      send emails to your inbox.
                    </li>
                  </ol>
                </div>
              )}
            </div>

            {/* Right: contact info */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-24 flex flex-col gap-4">
                <div className="brutal-card border-2 border-brutal-black bg-brutal-yellow-light p-6">
                  <h3 className="display-serif text-xl font-black">
                    Or reach out directly
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    Prefer email or a quick call? Use any of these channels.
                  </p>
                </div>

                <div className="grid gap-3">
                  {contactCards.map((c) => {
                    const Wrapper = c.href ? "a" : "div";
                    return (
                      <Wrapper
                        key={c.label}
                        {...(c.href
                          ? {
                              href: c.href,
                              target: c.href.startsWith("http")
                                ? "_blank"
                                : undefined,
                              rel: c.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined,
                            }
                          : {})}
                        className={`brutal-card brutal-card-hover flex items-center gap-4 border-2 border-brutal-black p-4 ${c.href ? "cursor-pointer" : "cursor-default"}`}
                      >
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center border-2 border-brutal-black ${c.accent} text-brutal-black`}
                        >
                          {c.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
                            {c.label}
                          </p>
                          <p className="truncate text-sm font-bold text-brutal-black">
                            {c.value}
                          </p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Resume CTA */}
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card brutal-card-hover flex items-center justify-between gap-3 border-2 border-brutal-black bg-brutal-orange p-5"
                >
                  <div>
                    <p className="display-serif text-lg font-black text-brutal-black">
                      Download Resume
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-brutal-black/70">
                      PDF · MoinNoorani_SU.pdf
                    </p>
                  </div>
                  <span className="text-2xl">↗</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-brutal-black">
        {label} {required && <span className="text-brutal-coral">*</span>}
      </span>
      {children}
    </label>
  );
}
