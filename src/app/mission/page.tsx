import Menu from "../../component/Menu";
import Support from "../../component/Support";
import teamimg from "../../assets/team.jpg";

export default function Mission() {
  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden">
        <Menu />
        <div className="flex flex-col items-center text-center px-6 mt-20 gap-2">
          <p className="text-white/70 text-xs max-w-[65ch] leading-relaxed">
            Notre mission
          </p>
          <h2 className="font-byzantium text-white text-5xl md:text-7xl lg:text-8xl max-w-[20ch]">
            Propulser l'innovation par la blockchain au sein de l'ÉTS.
          </h2>
          <p className="text-white/70 text-xs max-w-[65ch] leading-relaxed">
            La technologie de la chaîne de blocs transforme rapidement notre façon d'interagir, de transiger et de concevoir des systèmes numériques. Pourtant, elle reste souvent entourée de complexité et de malentendus.
          </p>
        </div>
        <svg className="mt-20" width="32" height="32" opacity="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </section>

      {/* Intro Section with Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 h-full">
          <img src={teamimg.src} alt="Byzantium Team" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="font-byzantium text-3xl mb-4">Qui sommes-nous</h2>
            <p className="text-white/60 text-xs leading-relaxed">
              ETS Blockchain est le seul club étudiant spécialisé dans les technologies Web3 et Blockchain au Québec. Fondé en 2023, il n'est pas seulement un club étudiant : c'est le pôle d'expertise en technologies décentralisées de l'École de technologie supérieure.
            </p>
          </div>
          <div>
            <h2 className="font-byzantium text-3xl mb-4">Notre vision</h2>
            <p className="text-white/60 text-xs leading-relaxed">
              Depuis l'émergence du Bitcoin en 2008, la blockchain a prouvé qu'elle pouvait redéfinir la confiance numérique à grande échelle. Notre objectif est de transformer la complexité de cette technologie en opportunités concrètes pour la communauté étudiante en génie.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-6xl mx-auto px-6 py-15">
        <h2 className="text-center text-4xl font-byzantium mb-12">Nos piliers fondamentaux</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
            <h3 className="font-byzantium text-2xl mb-3">Apprentissage</h3>
            <p className="text-white/50 text-sm">Développer les expertises Web3 à travers des ateliers techniques, des conférences d'experts et le partage de ressources pour les futurs ingénieurs.</p>
          </div>

          <div className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
            <h3 className="font-byzantium text-2xl mb-3">Réseautage</h3>
            <p className="text-white/50 text-sm">Connecter la communauté étudiante avec les leaders de l'industrie, les protocoles majeurs et les fonds de VC pour favoriser l'insertion professionnelle.</p>
          </div>

          <div className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
            <h3 className="font-byzantium text-2xl mb-3">Compétitions</h3>
            <p className="text-white/50 text-sm">Participer aux plus grands Hackathons mondiaux (ETH Global, ZkHack) afin de concevoir des solutions décentralisées concrètes et innovantes.</p>
          </div>

        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-center text-4xl font-byzantium mb-12">Nos Réalisations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
            <span className="text-xs font-mono text-white/30 mb-2 block">2024</span>
            <h3 className="font-byzantium text-2xl mb-3">ZkHack Montréal</h3>
            <p className="text-white/50 text-sm">Lauréats d'un prix d'excellence de Novanet. Une première entrée sur la scène de la cryptographie.</p>
          </div>

          <div className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
            <span className="text-xs font-mono text-white/30 mb-2 block">2026</span>
            <h3 className="font-byzantium text-2xl mb-3">ETH Global New York</h3>
            <p className="text-white/50 text-sm">Participation à l'un des plus grands hackathons Ethereum au monde aux côtés des meilleurs développeurs.</p>
          </div>

          <div className="border border-dashed border-white/20 rounded-2xl p-8 flex items-center justify-center italic text-white/30">
            À suivre...
          </div>
        </div>
      </section>

      <Support />
    </div>
  );
}