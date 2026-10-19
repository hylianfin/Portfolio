import { SocialIcon } from "@/components/Nav";
import { person } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="label text-muted px-6 md:px-10 pb-10 print:hidden">
      <div className="border-t border-line pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p>
          © {person.year} · {person.domain}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a href="/projects" className="link text-foreground">
              projects
            </a>
          </li>
          <li>
            <a href="/resume" className="link text-foreground">
              resume
            </a>
          </li>
          {person.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-foreground flex items-center gap-1.5"
              >
                <SocialIcon label={s.label} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
