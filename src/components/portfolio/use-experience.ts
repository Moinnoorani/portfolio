"use client";

import { useEffect, useState } from "react";
import { careerStartDate } from "@/lib/portfolio-data";

// ---------------------------------------------------------------------------
// Compute the elapsed time from careerStartDate to "now" in years + months.
// This is dynamic — the site will show the correct tenure without manual
// edits as time passes.
// ---------------------------------------------------------------------------

function computeParts(start: Date, end: Date) {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  // Round up the month if we're past the halfway mark of the current month.
  // (e.g. Oct 1 2024 → Jul 18 2026 ≈ 1y 9.5m → rounds to "1 year 10 months")
  if (end.getDate() >= 15) months += 1;

  if (months < 0) {
    years -= 1;
    months += 12;
  } else if (months === 12) {
    years += 1;
    months = 0;
  }

  return { years, months };
}

/** Long form, e.g. "1 year 9 months" or "2 years 1 month". */
export function formatDurationLong(start: Date, end: Date): string {
  const { years, months } = computeParts(start, end);
  const parts: string[] = [];
  if (years === 1) parts.push("1 year");
  else if (years > 1) parts.push(`${years} years`);
  if (months === 1) parts.push("1 month");
  else if (months > 0) parts.push(`${months} months`);
  if (parts.length === 0) return "Just started";
  return parts.join(" ");
}

/** Short form for stat boxes, e.g. "1y 9m" or "2y 1m". */
export function formatDurationShort(start: Date, end: Date): string {
  const { years, months } = computeParts(start, end);
  if (years === 0) return `${months}m`;
  if (months === 0) return `${years}y`;
  return `${years}y ${months}m`;
}

/** Compact form for inline text, e.g. "1 yr 9 mos". */
export function formatDurationInline(start: Date, end: Date): string {
  const { years, months } = computeParts(start, end);
  const parts: string[] = [];
  if (years === 1) parts.push("1 yr");
  else if (years > 1) parts.push(`${years} yrs`);
  if (months === 1) parts.push("1 mo");
  else if (months > 0) parts.push(`${months} mos`);
  if (parts.length === 0) return "New";
  return parts.join(" ");
}

/**
 * Hydration-safe hook that returns the dynamically-computed experience
 * duration since careerStartDate. Returns empty strings during SSR and
 * the first client render, then updates after mount — this prevents
 * React hydration mismatches when server and client clocks differ.
 *
 * The `setState` inside `useEffect` is the canonical React pattern for
 * rendering time-sensitive values on the client only (see React docs:
 * "You Might Not Need an Effect" → "When you DO need an effect").
 */
export function useExperienceDuration() {
  const [duration, setDuration] = useState({
    long: "",
    short: "",
    inline: "",
  });

  useEffect(() => {
    const now = new Date();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDuration({
      long: formatDurationLong(careerStartDate, now),
      short: formatDurationShort(careerStartDate, now),
      inline: formatDurationInline(careerStartDate, now),
    });
  }, []);

  return duration;
}
