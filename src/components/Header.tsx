"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Offices", href: "#offices" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header className="mx-auto max-w-[1400px] bg-white rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-black/5">
        <nav className="flex items-center justify-between h-[60px] px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/AlsenaLogo.png"
              alt="Alsena Group"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-xl font-black tracking-tight">ALSENA</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <a
            href="mailto:USAoffice@alsena-group.eu"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
          >
            Contact
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden px-6 pb-6 border-t border-border mt-1">
            <ul className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="mailto:USAoffice@alsena-group.eu"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
