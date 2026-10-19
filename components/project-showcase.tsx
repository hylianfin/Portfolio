"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { projects, type Media, type Project } from "@/lib/content";

/**
 * Project showcase built on the Aceternity UI "apple-cards-carousel"
 * component, wired to the portfolio's project data (lib/content.ts).
 * Click a card to expand the full project details.
 */

// Same palettes as the .ph-0..5 gradient placeholders in globals.css
const PALETTES: Record<number, { stops: [string, string, string]; light?: boolean }> = {
  0: { stops: ["#141311", "#3c3831", "#141311"] },
  1: { stops: ["#ff4d00", "#7a2400", "#141311"] },
  2: { stops: ["#1f2a6b", "#141311", "#ff4d00"] },
  3: { stops: ["#e8e4da", "#b7b1a3", "#7a756b"], light: true },
  4: { stops: ["#141311", "#8a3500", "#ff4d00"] },
  5: { stops: ["#101c14", "#2f4a37", "#141311"] },
};

function placeholderSrc(palette: number, label: string): string {
  const { stops, light } = PALETTES[palette] ?? PALETTES[0];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='960' height='720'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${stops[0]}'/><stop offset='0.55' stop-color='${stops[1]}'/><stop offset='1' stop-color='${stops[2]}'/></linearGradient></defs><rect width='960' height='720' fill='url(#g)'/><text x='50%' y='51%' fill='${light ? "#14131199" : "#f1efe999"}' font-family='monospace' font-size='30' letter-spacing='6' text-anchor='middle'>${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function cardImage(project: Project): string {
  const media: Media | undefined = project.media.find((m) => m.kind === "image");
  if (media && media.kind === "image") return media.src;
  const first = project.media[0];
  const label = first && first.kind === "placeholder" ? first.label : "SCREENSHOT";
  const palette = first && first.kind === "placeholder" ? first.palette : 0;
  return placeholderSrc(palette, label.replace(/\s+/g, "\u00A0"));
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {project.meta.map((m) => (
          <div
            key={m.label}
            className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800"
          >
            <p className="label text-muted">{m.label}</p>
            <p className="label mt-3 leading-[1.8] text-foreground">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 md:p-10 dark:bg-neutral-800">
        <p className="font-sans text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The short version.
          </span>{" "}
          {project.description}
        </p>
      </div>

      <div className="mb-4 flex flex-col items-start justify-between gap-4 rounded-3xl bg-[#F5F5F7] p-8 md:flex-row md:items-center dark:bg-neutral-800">
        <p className="label text-muted">{project.credits}</p>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="label link text-accent"
          >
            {project.link.label}
          </a>
        )}
      </div>
    </>
  );
}

export default function ProjectShowcase() {
  const cards = projects.map((project) => {
    const cardTitle = `${project.name} ${project.subtitle}`;
    return (
      <Card
        key={project.id}
        card={{
          src: cardImage(project),
          title: cardTitle,
          category: project.meta[0]?.value ?? "PROJECT",
          content: <ProjectContent project={project} />,
        }}
        index={projects.indexOf(project)}
      />
    );
  });

  return (
    <section id="work" className="w-full py-20 md:py-32">
      <h2 className="display px-6 text-[13vw] md:px-10 md:text-[9vw]">
        Selected <span className="text-accent">Work</span>
      </h2>
      <Carousel items={cards} />
    </section>
  );
}
