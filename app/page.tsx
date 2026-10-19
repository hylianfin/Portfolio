import Preloader from "@/components/Preloader";
import Reveal from "@/components/Reveal";
import ProjectShowcase from "@/components/project-showcase";
import SiteFooter from "@/components/SiteFooter";
import { person, testimonials } from "@/lib/content";

function Hero() {
  return (
    <header data-section className="px-6 md:px-10 pt-[28vh] pb-24 md:pb-40">
      <Reveal delay={1600}>
        <h1 className="display text-[11.5vw] md:text-[7.5vw] max-w-[14ch]">
          {person.intro}
        </h1>
      </Reveal>

      <Reveal delay={1900}>
        <div className="hero-arrow mt-16 md:mt-28 flex flex-col items-center gap-0 w-fit">
          <div className="dash w-px h-16 md:h-24 bg-foreground" />
          <div
            className="w-3 h-3 border-r border-b border-foreground"
            style={{ transform: "rotate(45deg) translateY(-6px)" }}
          />
        </div>
      </Reveal>
    </header>
  );
}

function About() {
  return (
    <section data-section className="px-6 md:px-10 pb-32 md:pb-56">
      <div className="grid md:grid-cols-[7fr_4fr] gap-16 md:gap-10">
        <div>
          {person.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-xl md:text-3xl leading-snug max-w-[28ch] mb-8 md:mb-12 text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-14 md:pt-2">
          {person.aside.map((section, i) => (
            <Reveal key={section.title} delay={i * 80}>
              <article>
                <h2 className="label text-muted pb-2 border-b border-line mb-4">
                  {section.title}
                </h2>
                <div className="label leading-[1.9] text-muted">
                  {section.lines.map((line, j) => (
                    <p key={j} className="whitespace-pre-line">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section data-section className="px-6 md:px-10 pb-32 md:pb-56">
      <Reveal>
        <h2 className="display text-[13.5vw] md:text-[11vw]">
          Kind <span className="text-accent">Words</span>
        </h2>
      </Reveal>

      <div className="mt-16 md:mt-24">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80} className="border-t border-line">
            <figure className="grid gap-8 pt-10 pb-16 md:grid-cols-[3fr_5fr] md:gap-16 md:pt-14 md:pb-24">
              <figcaption>
                <p className="display text-2xl md:text-4xl">{t.name}</p>
                <p className="mt-4 text-sm md:text-base leading-snug max-w-[38ch] text-muted">
                  {t.title}
                </p>
                <p className="label mt-4 text-accent">{t.relation}</p>
              </figcaption>

              <blockquote>
                <span
                  aria-hidden
                  className="display block text-accent text-4xl md:text-6xl leading-none mb-4"
                >
                  &ldquo;
                </span>
                <p className="text-lg md:text-2xl leading-snug whitespace-pre-line text-pretty">
                  {t.quote}
                </p>
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section data-section className="px-6 md:px-10 pt-24 md:pt-40 pb-16 md:pb-24">
      <Reveal>
        <h2 className="display text-[12vw] md:text-[8vw]">
          Let&apos;s work <span className="text-accent">together</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <a
          href={`mailto:${person.email}`}
          className="link display text-2xl md:text-4xl inline-block mt-10"
        >
          {person.email}
        </a>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen">
        <Hero />
        <About />
        <ProjectShowcase />
        <Testimonials />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
