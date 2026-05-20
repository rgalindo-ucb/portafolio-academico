"use client";

import Link from "next/link";
import { Menu, GraduationCap, Mail, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Acerca de", href: "/#sobre-portafolio" },
  { label: "Materias", href: "/#materias" },
  { label: "Trabajos", href: "/#trabajos" },
  { label: "Aprendizajes", href: "/#aprendizajes" },
  { label: "Archivo", href: "/#archivo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  const mobileMenu = (
    <AnimatePresence>
      {mobileMenuOpen ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-[200] lg:hidden"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          onClick={closeMobileMenu}
        >
          <div className="absolute inset-0 bg-neutral-950/92 backdrop-blur-xl" />

          <div className="pointer-events-none fixed inset-x-0 top-0 z-10">
            <div className="container flex min-h-16 items-center justify-end px-4 py-3 sm:px-6">
              <Button
                aria-label="Cerrar menu de navegacion"
                className="pointer-events-auto h-10 w-10 shrink-0 rounded-xl border-white/15 bg-neutral-950 text-white shadow-lg shadow-black/40 hover:bg-neutral-900"
                size="icon"
                type="button"
                variant="outline"
                onClick={(event) => {
                  event.stopPropagation();
                  closeMobileMenu();
                }}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <motion.nav
            aria-label="Navegacion principal en mobile"
            className="fixed left-4 right-4 top-20 z-10 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-white/12 bg-neutral-950 text-white shadow-2xl shadow-black/50 outline-none backdrop-blur-xl sm:left-auto sm:right-6 sm:w-full sm:max-w-sm"
            data-lenis-prevent
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-white/10 bg-white/[0.05] px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                Navegacion
              </p>
              <p className="mt-1 text-sm text-white/72">
                Explora el portafolio y sus secciones principales.
              </p>
            </div>

            <div className="grid gap-2 p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base font-medium text-white shadow-sm shadow-black/10 transition-all hover:border-primary/30 hover:bg-primary/14 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contacto"
                className="mt-2 inline-flex items-center justify-center rounded-xl border border-primary/35 bg-primary/18 px-4 py-3 text-base font-medium text-white shadow-lg shadow-primary/10 transition-all hover:bg-primary/24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                onClick={closeMobileMenu}
              >
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contacto
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl transition-all duration-300",
          scrolled && "bg-background/86 shadow-2xl shadow-black/20",
        )}
      >
        <div className="container flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 shrink items-center gap-2 font-semibold"
            onClick={closeMobileMenu}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-editorial text-lg font-normal sm:hidden">RG</span>
            <span className="font-editorial hidden text-lg font-normal sm:inline sm:text-xl">
              Portafolio Universitario
            </span>
          </Link>

          <nav
            aria-label="Navegacion principal"
            className="site-nav hidden items-center gap-1 text-sm text-muted-foreground lg:flex lg:justify-end"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav__link shrink-0 rounded-md px-2.5 py-1.5 transition-colors hover:bg-white/10 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="site-nav__cta ml-1 shrink-0">
              <Link href="/#contacto">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Contacto
              </Link>
            </Button>
          </nav>

          <Button
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menu de navegacion" : "Abrir menu de navegacion"}
            className="relative z-[210] h-10 w-10 shrink-0 lg:hidden"
            size="icon"
            type="button"
            variant="outline"
            onClick={() => setMobileMenuOpen((currentState) => !currentState)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </header>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
