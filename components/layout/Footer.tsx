import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:rgalindomerida@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-editorial text-2xl">Portafolio Universitario</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Archivo academico, proceso y evidencias del semestre.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
