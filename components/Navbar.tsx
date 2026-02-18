"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/ywf-logo.png"
            alt="Young Waziri Foundation"
            width={40}
            height={40}
            className="h-9 w-auto rounded-md"
            priority
          />

          <div className="leading-tight">
            <p
              className="text-sm font-semibold text-slate-900"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Young Waziri
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
              Foundation
            </p>
            <p className="text-[0.6rem] text-slate-400 mt-[2px]">
              compassion. community. support.
            </p>
          </div>
        </div>

        {/* Desktop Menu + Donate */}
        <div className="hidden md:flex items-center gap-5 text-xs md:text-sm font-medium text-slate-700">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "pb-1 border-b-2 transition-colors " +
                  (active
                    ? "border-sky-600 text-sky-700"
                    : "border-transparent hover:border-sky-300 hover:text-sky-700")
                }
              >
                {link.label}
              </Link>
            );
          })}

          {/* DONATE BUTTON (Desktop) */}
          <Link
            href="/donate"
            className="ml-3 px-4 py-2 bg-sky-600 text-white rounded-md font-semibold hover:bg-sky-500 transition shadow"
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    "py-1 border-b last:border-b-0 " +
                    (active
                      ? "text-sky-700 border-sky-100"
                      : "text-slate-700 border-slate-100 hover:text-sky-700")
                  }
                >
                  {link.label}
                </Link>
              );
            })}

            {/* DONATE BUTTON (Mobile) */}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition shadow"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
