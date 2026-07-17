import Link from "next/link";

export default function Support() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32 text-center">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
        <h2 className="text-4xl font-byzantium mb-4">Nous soutenir</h2>
        {/* J'ai gardé max-w-[70ch] car le texte est en français */}
        <p className="text-white/50 mb-12 mx-auto max-w-[70ch]">
          Vous souhaitez contribuer à l'essor de l'écosystème Web3 au Québec ou rejoindre l'aventure ? Découvrez comment vous impliquer :
        </p>
        
        <div className="grid sm:grid-cols-3">
          
          {/* Carte 1 : Étudiants (Sans bordure à gauche) */}
          <div className="flex flex-col text-left px-6 py-4 gap-6">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                Étudiants
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                Rejoignez une communauté de passionnés et développez vos compétences.
              </p>
            </div>
            <Link 
              href="#"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              Nous rejoindre
            </Link>
          </div>

          {/* Carte 2 : Entreprises (Avec bordure sm:border-l) */}
          <div className="flex flex-col text-left px-6 py-4 gap-6 sm:border-l border-white/10">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                Entreprises
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                Devenez un partenaire stratégique et accédez à notre bassin de talents.
              </p>
            </div>
            <Link 
              href="/partenaires"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              Devenir partenaire
            </Link>
          </div>

          {/* Carte 3 : Philanthropie (Avec bordure sm:border-l) */}
          <div className="flex flex-col text-left px-6 py-4 gap-6 sm:border-l border-white/10">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                Philanthropie
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                Aidez-nous à financer nos projets de recherche et nos compétitions.
              </p>
            </div>
            <Link 
              href="#"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              Faire un don
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}