// Centralised icon map so the portfolio data file stays free of JSX.
// Each icon key used in portfolio-data.ts maps to a Lucide icon component.

import {
  Truck,
  Factory,
  Boxes,
  Workflow,
  FlaskConical,
  GitPullRequestArrow,
  ClipboardList,
  Wrench,
  BarChart3,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import type { ProjectIcon, SkillIcon, ExpertiseIcon } from "./portfolio-data";

export const projectIconMap: Record<ProjectIcon, LucideIcon> = {
  truck: Truck,
  factory: Factory,
  boxes: Boxes,
  workflow: Workflow,
  flask: FlaskConical,
  "code-review": GitPullRequestArrow,
};

export const skillIconMap: Record<SkillIcon, LucideIcon> = {
  clipboard: ClipboardList,
  truck: Truck,
  wrench: Wrench,
};

export const expertiseIconMap: Record<ExpertiseIcon, LucideIcon> = {
  chart: BarChart3,
  truck: Truck,
  "trending-up": TrendingUp,
  workflow: Workflow,
};

export function ProjectIconSvg({
  icon,
  className,
  size,
  strokeWidth,
}: {
  icon: ProjectIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = projectIconMap[icon];
  return (
    <Icon
      className={className}
      size={size}
      strokeWidth={strokeWidth ?? 2}
      aria-hidden="true"
    />
  );
}

export function SkillIconSvg({
  icon,
  className,
  size,
  strokeWidth,
}: {
  icon: SkillIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = skillIconMap[icon];
  return (
    <Icon
      className={className}
      size={size}
      strokeWidth={strokeWidth ?? 2}
      aria-hidden="true"
    />
  );
}

export function ExpertiseIconSvg({
  icon,
  className,
  size,
  strokeWidth,
}: {
  icon: ExpertiseIcon;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = expertiseIconMap[icon];
  return (
    <Icon
      className={className}
      size={size}
      strokeWidth={strokeWidth ?? 2}
      aria-hidden="true"
    />
  );
}
