"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "../i18n/routing";
import logo from "../assets/logo.svg";

export default function Menu() {
  const [open, setopen] = useState(false);
  const t = useTranslations("menu");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("menu_open") === "true") {
      sessionStorage.removeItem("menu_open");
      requestAnimationFrame(() => {
        setopen(true);
      });
    }
  }, []);

  const links = [
    { label: t("home"), href: "/" },
    { label: t("mission"), href: "/mission" },
    { label: t("projects"), href: "/projets" },
    { label: t("team"), href: "/equipe" },
    { label: t("partners"), href: "/partenaires" },
    { label: t("contact"), href: "/contact" },
  ];

  const toggleLocale = (keepMenuOpen = false) => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    if (keepMenuOpen && typeof window !== "undefined") {
      sessionStorage.setItem("menu_open", "true");
    }
    router.replace(pathname, { locale: nextLocale });
  };

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

        <div className="flex items-center gap-3">
          {/* Desktop Language Switch Button */}
          <button
            onClick={() => toggleLocale(false)}
            className="text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 py-1.5 px-3 rounded-lg hover:scale-105 transition-all duration-150 cursor-pointer"
            aria-label={t("toggleLang")}
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          <a
            href="https://linktr.ee/etsblockchain"
            className="hidden menu:block text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150"
          >
            {t("join")}
          </a>

          <button
            onClick={() => setopen(!open)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="menu:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`menu:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
          <img src={logo.src || logo} alt="logo" className="h-6 w-auto" />
          <div className="flex items-center gap-3">
            {/* Mobile Language Switch Button (keeps menu open) */}
            <button
              onClick={() => toggleLocale(true)}
              className="text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 py-1.5 px-3 rounded-lg transition-all duration-150 cursor-pointer"
              aria-label={t("toggleLang")}
            >
              {locale === "fr" ? "EN" : "FR"}
            </button>

            <button onClick={() => setopen(false)} aria-label={t("closeMenu")} className="flex justify-center items-center w-8 h-8 cursor-pointer">
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
            <a href="https://linktr.ee/etsblockchain" onClick={() => setopen(false)} className="block text-center text-sm text-black bg-white py-3 rounded-xl">
              {t("join")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}