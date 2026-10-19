import type { Metadata } from "next";
import {
  person,
  experience,
  skills,
  languages,
  community,
  certifications,
  education,
  projects,
  testimonials,
} from "@/lib/content";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Ruhan Pacolli · Résumé",
  description:
    "Résumé of Ruhan Pacolli, Full-Stack Software Engineer, founder of EliteDev Agency.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="label text-muted border-b border-line pb-2 mb-6">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <>
      <main className="min-h-screen px-6 md:px-10 py-16 md:py-20 print:p-0 print:py-6">
      <div className="mx-auto max-w-5xl">
        {/* header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display text-5xl md:text-7xl">{person.name}</h1>
            <p className="label mt-4 text-accent">
              Full-Stack Software Engineer · {person.location}
            </p>
            <p
              className="mt-4 text-sm md:text-base leading-relaxed max-w-2xl text-muted"
            >
              {person.resumeSummary}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 print:items-end">
            <PrintButton />
          </div>
        </header>

        {/* contact strip */}
        <p className="label mt-8 border-y border-line py-3 flex flex-wrap gap-x-6 gap-y-2">
          <a href={`mailto:${person.email}`} className="link text-foreground">
            {person.email}
          </a>
          <span>{person.phone}</span>
          <a href={`https://${person.domain}`} className="link text-foreground">
            {person.domain}
          </a>
          <a href="https://github.com/Ruhanpaco" className="link text-foreground">
            github.com/Ruhanpaco
          </a>
          <a
            href="https://www.linkedin.com/in/ruhan-pacolli/"
            className="link text-foreground"
          >
            linkedin.com/in/ruhan-pacolli
          </a>
        </p>

        {/* body */}
        <div className="grid mt-12 md:grid-cols-[7fr_3fr] gap-12 md:gap-16">
          <div>
            {/* Experience */}
            <section className="mb-12 break-inside-avoid">
              <SectionTitle>Experience</SectionTitle>
              {experience.map((e) => (
                <article key={e.company} className="mb-8 break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="display text-xl md:text-2xl">{e.company}</h3>
                    <p className="label text-muted">{e.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium">
                    {e.role} <span className="text-muted">· {e.location}</span>
                  </p>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span aria-hidden className="text-accent shrink-0">
                          •
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            {/* Projects */}
            <section className="mb-12 break-inside-avoid">
              <SectionTitle>Selected Projects</SectionTitle>
              {projects.map((p) => (
                <article key={p.id} className="mb-8 break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="display text-xl md:text-2xl">
                      {p.name}{" "}
                      <span className="text-muted">{p.subtitle}</span>
                    </h3>
                    {p.link && (
                      <a
                        href={p.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label link text-accent"
                      >
                        {p.link.label}
                      </a>
                    )}
                  </div>
                  <p className="label mt-1 text-muted">
                    {p.meta.map((m) => m.value).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </article>
              ))}
            </section>

            {/* Community & Leadership */}
            <section className="mb-12 break-inside-avoid">
              <SectionTitle>Community &amp; Leadership</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-x-10">
                {community.map((c) => (
                  <div key={c.org} className="mb-4 break-inside-avoid">
                    <p className="text-sm font-medium">{c.org}</p>
                    <p className="label mt-1 text-muted">
                      {c.role} · {c.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section className="break-inside-avoid">
              <SectionTitle>References</SectionTitle>
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="mb-6 border-l-2 border-accent pl-5 break-inside-avoid"
                >
                  <p className="text-sm md:text-base leading-relaxed italic">
                    &ldquo;{t.pull}&rdquo;
                  </p>
                  <footer className="label mt-3 text-muted">
                    {t.name} · {t.relation} ·{" "}
                    <a
                      href="https://www.linkedin.com/in/ruhan-pacolli/"
                      className="link text-foreground"
                    >
                      Verified on LinkedIn
                    </a>
                  </footer>
                </blockquote>
              ))}
            </section>
          </div>

          {/* sidebar */}
          <aside className="space-y-10">
            <section className="break-inside-avoid">
              <SectionTitle>Skills</SectionTitle>
              {skills.map((s) => (
                <div key={s.group} className="mb-4 break-inside-avoid">
                  <p className="label text-foreground">{s.group}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {s.items.join(", ")}
                  </p>
                </div>
              ))}
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Certifications</SectionTitle>
              {certifications.map((c) => (
                <p key={c.name} className="text-sm mb-3 leading-relaxed break-inside-avoid">
                  {c.name}{" "}
                  <span className="text-muted">· {c.org}, {c.year}</span>
                </p>
              ))}
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Education</SectionTitle>
              {education.map((e) => (
                <div key={e.school} className="break-inside-avoid">
                  <p className="text-sm font-medium">{e.school}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {e.degree} · {e.location}
                  </p>
                  <p className="label mt-1 text-muted">{e.period}</p>
                </div>
              ))}
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Languages</SectionTitle>
              {languages.map((l) => (
                <p key={l.name} className="text-sm mb-2 break-inside-avoid">
                  {l.name}{" "}
                  <span className="text-muted">· {l.level}</span>
                </p>
              ))}
            </section>
          </aside>
        </div>

        {/* footer note */}
        <p className="label mt-16 pt-4 border-t border-line text-muted">
          References and full testimonials available at{" "}
          <a href="/" className="link text-foreground">
            {person.domain}
          </a>
          {" "}· © {person.year} {person.name}
        </p>
      </div>
      </main>
    </>
  );
}
