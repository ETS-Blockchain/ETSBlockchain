import Link from "next/link";
import Menu from "../component/Menu";
import ETS from "../assets/ETS.png";
import logo from "../assets/logo.svg";
import Bitcoin from "../assets/Bitcoin.png";
import Ethereum from "../assets/Ethereum.png";

const text = {
  title: "L'ingénierie au service de la blockchain",
  mission: "Notre mission",
  partner: "Devenir partenaire",
  projects: "Découvrez nos projets",
  contact: "Nous contacter",
};

const floatingcryptos = [
  // Bitcoin — grand, haut gauche
  { src: "bitcoin", alt: "Bitcoin", size: "w-28 sm:w-40 md:w-48 lg:w-60", position: "top-[16%] lg:top-[8%] left-[-5%]", animation: "animate-float-a", rotate: "-rotate-12", opacity: "opacity-100", z:"z-50" },
  // Bitcoin — petit, bas gauche
  { src: "ethereum", alt: "Ethereum", size: "w-16 md:w-20", position: "bottom-[28%] left-[15%]", animation: "animate-float-c", rotate: "rotate-6", opacity: "opacity-60", z:"z-0" },
  // Ethereum — grand, droite milieu
  { src: "ethereum", alt: "Ethereum", size: "w-20 sm:w-30 md:w-40 lg:w-50", position: "top-[38%] lg:top-[45%] right-[-7%]", animation: "animate-float-b", rotate: "rotate-12", opacity: "opacity-100", z:"z-50" },
  // Ethereum — petit, haut droite
  { src: "ethereum", alt: "Ethereum", size: "w-12 md:w-16", position: "top-[8%] right-[12%]", animation: "animate-float-d", rotate: "-rotate-6", opacity: "opacity-50", z:"z-0" },
  // Bitcoin — très petit, droite bas
  { src: "bitcoin", alt: "Bitcoin", size: "w-10 md:w-14", position: "sm:bottom-[18%] bottom-[32%] right-[5%] sm:right-[20%]", animation: "animate-float-a", rotate: "rotate-20", opacity: "opacity-40", z:"z-0" },
];

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-18px) rotate(-8deg); }
        }
        @keyframes float-b {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-22px) rotate(16deg); }
        }
        @keyframes float-c {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes float-d {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          33% { transform: translateY(-10px) rotate(-10deg); }
          66% { transform: translateY(-4px) rotate(-3deg); }
        }
        .animate-float-a { animation: float-a 6s ease-in-out infinite; }
        .animate-float-b { animation: float-b 7.5s ease-in-out infinite; }
        .animate-float-c { animation: float-c 5.5s ease-in-out infinite 1s; }
        .animate-float-d { animation: float-d 8s ease-in-out infinite 0.5s; }
      `}</style>

      <header className="relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden">

        {/* Floating cryptos */}
        {floatingcryptos.map((crypto, i) => (
          <div
            key={i}
            className={`absolute pointer-events-none select-none ${crypto.position} ${crypto.animation} ${crypto.opacity} ${crypto.z}`}
          >
            <img
              src={crypto.src === "bitcoin" ? Bitcoin.src : Ethereum.src}
              alt={crypto.alt}
              className={`${crypto.size} drop-shadow-2xl`}
              draggable={false}
            />
          </div>
        ))}

        <Menu />

        <div className="flex flex-col items-center text-center px-6 gap-6 z-10">
          <div className="flex gap-3 items-center">
            <img className="h-10" src={typeof logo === 'string' ? logo : logo.src} alt="Logo" />
            <div className="w-px h-6 bg-white/30" />
            <img className="h-10" src={typeof ETS === 'string' ? ETS : ETS.src} alt="ETS" />
          </div>

          <h1 className="font-byzantium text-white text-6xl md:text-7xl lg:text-9xl max-w-[22ch] leading-none">
            {text.title}
          </h1>

          <div className="flex flex-col w-4/5 sm:flex-row sm:w-auto gap-3">
            <Link href="/mission" className="text-sm text-black bg-white py-2 px-5 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
              {text.mission}
            </Link>
            <Link href="/partenaires" className="text-sm text-white bg-black py-2 px-5 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all duration-150">
              {text.partner}
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pb-2 w-full max-w-3xl px-6 z-10">
          <Link href="/projets" className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex flex-row items-center justify-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-white/50 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 13.5h7.5M13.5 18h7.5" />
            </svg>
            <p className="text-white text-sm font-medium leading-tight">{text.projects}</p>
          </Link>

          <div className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex items-center justify-around gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
            <a href="https://www.instagram.com/byzantium.ets/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/byzantiumets/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/byzantium_ets" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <Link href="/contact" className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex flex-row items-center justify-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-white/50 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p className="text-white text-sm font-medium leading-tight">{text.contact}</p>
          </Link>
        </div>

      </header>
    </>
  );
}