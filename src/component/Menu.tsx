"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.svg";

export default function Menu() {
  const [open, setopen] = useState(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Notre mission", href: "/mission" },
    { label: "Projets", href: "/projets" },
    { label: "Équipe", href: "/equipe" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-4/5 relative">
      <nav className="bg-black/20 backdrop-blur-md px-5 h-13 rounded-2xl flex items-center justify-between">
        <Link href="/">
          <img src={logo.src || logo} alt="logo" className="h-6 w-auto" />
        </Link>

        <ul className="hidden menu:flex gap-5 text-xs list-none absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/70 hover:text-white transition-colors duration-150">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/mission" className="hidden menu:block text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
            Rejoindre le club
          </Link>
          <button
            onClick={() => setopen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="menu:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`menu:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
          <img src={logo.src || logo} alt="logo" className="h-6 w-auto" />
          <div className="flex items-center gap-3">
            <button onClick={() => setopen(false)} aria-label="Fermer le menu" className="flex justify-center items-center w-8 h-8">
              <span className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 block w-5 h-px bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 block w-5 h-px bg-white -rotate-45" />
              </span>
            </button>
          </div>
        </div>
        <ul className="flex flex-col list-none px-6 pt-6 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setopen(false)} className="block py-4 text-xl text-white/60 hover:text-white border-b border-white/10 last:border-0 transition-colors duration-150">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link href="/mission" onClick={() => setopen(false)} className="block text-center text-sm text-black bg-white py-3 rounded-xl">
              Rejoindre le club
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}