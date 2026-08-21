import Link from "next/link";
import Hero from "../component/Hero";
import SocialLinks from "../component/SocialLinks";
import ETS from "../assets/ETS.png";
import logo from "../assets/logo.svg";
import Bitcoin from "../assets/Bitcoin.png";
import Ethereum from "../assets/Ethereum.png";
import { imgSrc } from "../lib/utils";

const text = {
  title: "L'ingénierie au service de la blockchain",
  mission: "Notre mission",
  partner: "Devenir partenaire",
  projects: "Découvrez nos projets",
  contact: "Nous contacter",
};

const floatingcryptos = [
  // Bitcoin — grand, haut gauche
  { src: "bitcoin", alt: "Bitcoin", size: "w-28 sm:w-40 md:w-48 lg:w-60", position: "top-[16%] lg:top-[8%] left-[-5%]", animation: "animate-float-a", rotate: "-rotate-12", opacity: "opacity-100", z: "z-0" },
  // Bitcoin — petit, bas gauche
  { src: "ethereum", alt: "Ethereum", size: "w-16 md:w-20", position: "bottom-[26%] left-[15%]", animation: "animate-float-c", rotate: "rotate-6", opacity: "opacity-60", z: "z-0" },
  // Ethereum — grand, droite milieu
  { src: "ethereum", alt: "Ethereum", size: "w-20 sm:w-30 md:w-40 lg:w-50", position: "top-[38%] lg:top-[45%] right-[-7%]", animation: "animate-float-b", rotate: "rotate-12", opacity: "opacity-100", z: "z-0" },
  // Ethereum — petit, haut droite
  { src: "ethereum", alt: "Ethereum", size: "w-12 md:w-16", position: "top-[10%] right-[12%]", animation: "animate-float-d", rotate: "-rotate-6", opacity: "opacity-50", z: "z-0" },
  // Bitcoin — très petit, droite bas
  { src: "bitcoin", alt: "Bitcoin", size: "w-10 md:w-14", position: "sm:bottom-[18%] bottom-[32%] right-[5%] sm:right-[20%]", animation: "animate-float-a", rotate: "rotate-20", opacity: "opacity-40", z: "z-0" },
];

export default function Home() {
  return (
    <>
    <div className="min-h-screen w-screen bg-black">
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

        <Hero
          title={text.title}
          showChevron={false}
          titleClassName="text-6xl md:text-7xl lg:text-9xl max-w-[22ch]"
          topContent={
            <div className="flex gap-3 items-center">
              <img className="h-10" src={imgSrc(logo)} alt="Logo" />
              <div className="w-px h-6 bg-white/30" />
              <img className="h-10" src={imgSrc(ETS)} alt="ETS" />
            </div>
          }
          actions={
            <div className="flex flex-col w-4/5 sm:flex-row sm:w-auto gap-3">
              <Link href="/mission" className="text-sm text-black bg-white py-2 px-5 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
                {text.mission}
              </Link>
              <Link href="/contact" className="text-sm text-white bg-black py-2 px-5 rounded-lg hover:bg-gray-900 hover:scale-105 transition-all duration-150">
                {text.partner}
              </Link>
            </div>
          }
        >
          {floatingcryptos.map((crypto, i) => (
            <div
              key={i}
              className={`absolute pointer-events-none select-none ${crypto.position} ${crypto.animation} ${crypto.opacity} ${crypto.z}`}
            >
              <img
                src={crypto.src === "bitcoin" ? imgSrc(Bitcoin) : imgSrc(Ethereum)}
                alt={crypto.alt}
                className={`${crypto.size} drop-shadow-2xl`}
                draggable={false}
              />
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-center gap-3 pb-2 w-full max-w-3xl px-6 z-10">
            <Link href="/projets" className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex flex-row items-center justify-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-white/50 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 13.5h7.5M13.5 18h7.5" />
              </svg>
              <p className="text-white text-sm font-medium leading-tight">{text.projects}</p>
            </Link>

            <div className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex items-center justify-around gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
              <SocialLinks className="text-white/40 hover:text-white transition-colors duration-150" />
            </div>

            <Link href="/contact" className="flex-1 border border-white/15 rounded-xl p-2 sm:p-4 flex flex-row items-center justify-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-white/50 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <p className="text-white text-sm font-medium leading-tight">{text.contact}</p>
            </Link>
          </div>
        </Hero>
      </div>
    </>
  );
}