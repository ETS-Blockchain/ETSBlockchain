import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { useLang } from "../context/LangContext.tsx"

function Menu() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()

  const links = [
    { label: { fr: "Accueil", en: "Home" }, to: "/" },
    { label: { fr: "Notre mission", en: "Our mission" }, to: "/mission" },
    { label: { fr: "Projets", en: "Projects" }, to: "/projets" },
    { label: { fr: "Équipe", en: "Team" }, to: "/equipe" },
    { label: { fr: "Partenaires", en: "Partners" }, to: "/partenaires" },
    { label: { fr: "Contact", en: "Contact" }, to: "/contact" },
  ]

  const LangToggle = ({ className = "" }) => (
    <button
      onClick={() => setLang(lang === "fr" ? "en" : "fr")}
      className={`flex items-center gap-1.5 text-xs text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-lg py-1.5 px-2.5 transition-all duration-150 ${className}`}
    >
      <span className="text-sm leading-none">
        {lang === "fr" ? "⚜️" : "🇺🇸"}
      </span>
      <span className="font-medium">{lang === "fr" ? "FR" : "EN"}</span>
    </button>
  )

  return (
    <div className="w-4/5 relative">
     <nav className="bg-black/20 backdrop-blur-md px-5 h-13 rounded-2xl flex items-center justify-between">
        <Link to="/"><img src={logo} alt="logo" className="h-6" /></Link>

        <ul className="hidden md:flex gap-5 text-xs list-none absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
            <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-white transition-colors duration-150">
                {l.label[lang]}
                </Link>
            </li>
            ))}
        </ul>

        <div className="flex items-center gap-2">
            <LangToggle className="hidden md:flex" />
            <Link to="/mission" className="hidden md:block text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
            {lang === "fr" ? "Rejoindre le club" : "Join the club"}
            </Link>
            <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
        </div>
    </nav>

      <div className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex justify-between items-center px-6 h-16 border-b border-white/10">
          <img src={logo} alt="logo" className="h-6" />
          <div className="flex items-center gap-3">
            <LangToggle />
            <button onClick={() => setOpen(false)} aria-label="Fermer le menu" className="flex justify-center items-center w-8 h-8">
              <span className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 block w-5 h-px bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 block w-5 h-px bg-white -rotate-45" />
              </span>
            </button>
          </div>
        </div>
        <ul className="flex flex-col list-none px-6 pt-6 gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="block py-4 text-xl text-white/60 hover:text-white border-b border-white/10 last:border-0 transition-colors duration-150">
                {l.label[lang]}
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link to="/mission" className="block text-center text-sm text-black bg-white py-3 rounded-xl">
              {lang === "fr" ? "Rejoindre le club" : "Join the club"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu