import Support from "../../component/Support";
import Hero from "../../component/Hero";
import Card from "../../component/Card";
import teamimg from "../../assets/team.jpg";
import { imgSrc } from "../../lib/utils";

export default function Mission() {
  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      <Hero
        eyebrow="Notre mission"
        title="Propulser l'innovation par la blockchain au sein de l'ÉTS."
        description="La technologie de la chaîne de blocs transforme rapidement notre façon d'interagir, de transiger et de concevoir des systèmes numériques. Pourtant, elle reste souvent entourée de complexité et de malentendus."
      />

      {/* Intro Section with Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 h-full">
          <img src={imgSrc(teamimg)} alt="Byzantium Team" className="w-full h-full object-cover" />
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
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">Apprentissage</h3>
            <p className="text-white/50 text-sm">Développer les expertises Web3 à travers des ateliers techniques, des conférences d'experts et le partage de ressources pour les futurs ingénieurs.</p>
          </Card>
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">Réseautage</h3>
            <p className="text-white/50 text-sm">Connecter la communauté étudiante avec les leaders de l'industrie, les protocoles majeurs et les fonds de VC pour favoriser l'insertion professionnelle.</p>
          </Card>
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">Compétitions</h3>
            <p className="text-white/50 text-sm">Participer aux plus grands Hackathons mondiaux (ETH Global, ZkHack) afin de concevoir des solutions décentralisées concrètes et innovantes.</p>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-center text-4xl font-byzantium mb-12">Nos Réalisations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <span className="text-xs font-mono text-white/30 mb-2 block">2024</span>
            <h3 className="font-byzantium text-2xl mb-3">ZkHack Montréal</h3>
            <p className="text-white/50 text-sm">Lauréats d'un prix d'excellence de Novanet. Une première entrée sur la scène de la cryptographie.</p>
          </Card>
          <Card>
            <span className="text-xs font-mono text-white/30 mb-2 block">2026</span>
            <h3 className="font-byzantium text-2xl mb-3">ETH Global New York</h3>
            <p className="text-white/50 text-sm">Participation à l'un des plus grands hackathons Ethereum au monde aux côtés des meilleurs développeurs.</p>
          </Card>
          <div className="border border-dashed border-white/20 rounded-2xl p-8 flex items-center justify-center italic text-white/30">
            À suivre...
          </div>
        </div>
      </section>

      <Support />
    </div>
  );
}