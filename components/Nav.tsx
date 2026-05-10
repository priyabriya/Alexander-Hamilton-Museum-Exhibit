"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/timeline", label: "Timeline" },
  { href: "/audience", label: "Audience" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1b2a4a] border-b-2 border-[#b8860b]">
      <div className="flex items-center justify-between px-6 md:px-10 h-14">
        <Link
          href="/"
          className="font-display text-[0.72rem] tracking-widest text-[#d4a843] hover:text-white transition-colors"
        >
          Alexander Hamilton
        </Link>

        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-serif text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-[#e8d9b8] hover:text-[#d4a843] transition-colors no-underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#d4a843] bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1b2a4a] border-t border-[#b8860b]/40 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-[0.85rem] tracking-widest uppercase text-[#e8d9b8] hover:text-[#d4a843] transition-colors no-underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
