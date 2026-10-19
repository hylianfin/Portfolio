import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { projects, person, type Project } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ruhan Pacolli · Projects",
  description:
    "Selected projects by Ruhan Pacolli: open-source firmware, mobile apps for Kosovo's tech community, community platforms, and client work.",
};

function index2(i: number) {
  return String(i + 1).padStart(2, "0");
}

function ProjectShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const type = project.meta[0]?.value ?? "";
  const flip = index % 2 === 1;

  return (
    <article
      id={project.id}
      className="scroll-mt-28 border-t border-line pt-8 md:pt-10 mt-12 md:mt-16"
    >
      {/* title row */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className={flip ? "md:text-right" : undefined}>
            <p className="label text-accent">{index2(index)}</p>
            <h2 className="display text-[13vw] md:text-[7.5vw] leading-[0.95] mt-3">
              {project.name}
              <span className="text-muted"> {project.subtitle}</span>
            </h2>
            <p className="label text-muted mt-4">
              {project.subtitle.toUpperCase()} · {type}
            </p>
          </div>
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label link shrink-0 inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors print:hidden"
            >
              {project.link.label}
              <span aria-hidden>+</span>
            </a>
          )}
        </div>
      </Reveal>

      {/* body */}
      <Reveal delay={80}>
        <div
          className={`grid gap-10 md:gap-16 mt-10 ${
            flip ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"
          }`}
        >
          <p
            className={`text-base md:text-lg leading-relaxed text-pretty ${
              flip ? "md:order-2" : ""
            }`}
          >
            {project.description}
          </p>

          {project.media.length > 0 && (
            <div
              className={`group space-y-4 ${flip ? "md:order-1" : ""}`}
            >
              {project.media.map((m, i) =>
                m.kind === "image" ? (
                  <ProjectShot key={i} src={m.src} alt={m.alt} />
                ) : null
              )}
            </div>
          )}
        </div>
      </Reveal>

      {/* footer row */}
      <p className="label text-muted mt-10 pt-4 border-t border-line">
        {project.credits}
      </p>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen px-6 md:px-10 py-16 md:py-20">
      <header className="mb-16 md:mb-20">
        <Reveal>
          <p className="label text-muted border-b border-line pb-2 flex justify-between">
            <span>{person.domain}</span>
            <span>{String(projects.length).padStart(2, "0")} ENTRIES</span>
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="display text-[15vw] md:text-[10vw] mt-6">Projects</h1>
        </Reveal>
        <Reveal delay={120}>
          <nav
            aria-label="Project index"
            className="label flex flex-wrap gap-x-8 gap-y-2 mt-8"
          >
            {projects.map((p, i) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="link text-foreground"
              >
                <span className="text-accent">{index2(i)}</span> {p.name}
              </a>
            ))}
          </nav>
        </Reveal>
      </header>

      <section>
        {projects.map((p, i) => (
          <ProjectEntry key={p.id} project={p} index={i} />
        ))}
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
