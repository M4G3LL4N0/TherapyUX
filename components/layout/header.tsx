"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function IconMenu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = (
    <>
      <a href="#features" className="transition-colors hover:text-white" onClick={() => setOpen(false)}>
        Features
      </a>
      <a href="#how-it-works" className="transition-colors hover:text-white" onClick={() => setOpen(false)}>
        How It Works
      </a>
      <a href="#privacy" className="transition-colors hover:text-white" onClick={() => setOpen(false)}>
        Privacy
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          <span className="text-emerald-300">Therapy</span>UX
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">{links}</nav>
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 px-5 text-slate-950 shadow-[0_12px_40px_rgba(52,211,153,0.25)] hover:from-emerald-200 hover:to-teal-200"
          >
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-emerald-400/30 hover:bg-white/[0.1] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium text-white/75 sm:px-6">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-3">{links}</div>
            <Button
              asChild
              className="mt-3 w-full rounded-full bg-gradient-to-r from-emerald-300 to-teal-300 text-slate-950"
            >
              <a href="#waitlist" onClick={() => setOpen(false)}>
                Join Waitlist
              </a>
            </Button>
            <p className="px-1 pt-2 text-[11px] leading-relaxed text-white/45">
              UX planning tools only — not therapy, diagnosis, or crisis care. Seek licensed professionals for
              clinical needs.
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
