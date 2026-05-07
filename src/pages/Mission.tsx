import { Link } from "react-router-dom"
import Menu from "../components/Menu.tsx"
import { useLang } from "../context/LangContext.tsx"
import TeamImg from "../assets/team.jpg"

const t = {
  fr: {
    heroTitle: "Propulser l'innovation par la blockchain au sein de l'ÉTS.",
    page: "Notre mission",
    heroSubtitle: "La technologie de la chaîne de blocs transforme rapidement notre façon d'interagir, de transiger et de concevoir des systèmes numériques. Pourtant, elle reste souvent entourée de complexité et de malentendus.",
    whoTitle: "Qui sommes-nous",
    whoText: "ETS Blockchain est le seul club étudiant spécialisé dans les technologies Web3 et Blockchain au Québec. Fondé en 2023, il n'est pas seulement un club étudiant : c'est le pôle d'expertise en technologies décentralisées de l'École de technologie supérieure.",
    visionTitle: "Notre vision",
    visionText: "Depuis l'émergence du Bitcoin en 2008, la blockchain a prouvé qu'elle pouvait redéfinir la confiance numérique à grande échelle. Notre objectif est de transformer la complexité de cette technologie en opportunités concrètes pour la communauté étudiante en génie.",
    pillarsTitle: "Nos piliers fondamentaux",
    pillars: [
      { title: "Apprentissage", desc: "Développer les expertises Web3 à travers des ateliers techniques, des conférences d'experts et le partage de ressources pour les futurs ingénieurs." },
      { title: "Réseautage", desc: "Connecter la communauté étudiante avec les leaders de l'industrie, les protocoles majeurs et les fonds de VC pour favoriser l'insertion professionnelle." },
      { title: "Compétitions", desc: "Participer aux plus grands Hackathons mondiaux (ETH Global, ZkHack) afin de concevoir des solutions décentralisées concrètes et innovantes." }
    ],
    achievementsTitle: "Nos Réalisations",
    achievements: [
      { date: "2024", title: "ZkHack Montréal", desc: "Lauréats d'un prix d'excellence de Novanet. Une première entrée sur la scène de la cryptographie." },
      { date: "2026", title: "ETH Global New York", desc: "Participation à l'un des plus grands hackathons Ethereum au monde aux côtés des meilleurs développeurs." }
    ],
    supportTitle: "Nous soutenir",
    supportSubtitle: "Vous souhaitez contribuer à l'essor de l'écosystème Web3 au Québec ou rejoindre l'aventure ? Découvrez comment vous impliquer :",
    supportCards: [
      { role: "Étudiants", cta: "Nous rejoindre", desc:"Rejoignez une communauté de passionnés et développez vos compétences.", to:"#"  },
      { role: "Entreprises", cta: "Devenir partenaire", desc:"Devenez un partenaire stratégique et accédez à notre bassin de talents.", to:"/partenaires"  },
      { role: "Philanthropie", cta: "Faire un don", desc:"Aidez-nous à financer nos projets de recherche et nos compétitions.", to:"#"  }
    ]
  },
  en: {
    heroTitle: "Propelling innovation through blockchain within ÉTS.",
    heroSubtitle: "Blockchain technology is rapidly transforming how we interact, transact, and design digital systems. Yet, it often remains surrounded by complexity and misunderstandings.",
    page: "Our mission",
    whoTitle: "Who we are",
    whoText: "ETS Blockchain is the only student club specialized in Web3 and Blockchain technologies in Quebec. Founded in 2023, it's not just a student club: it's the decentralized technology expertise hub of the École de technologie supérieure.",
    visionTitle: "Our Vision",
    visionText: "Since the emergence of Bitcoin in 2008, blockchain has proven it can redefine digital trust at scale. Our goal is to transform the complexity of this technology into concrete opportunities for the engineering student community.",
    pillarsTitle: "Our Fundamental Pillars",
    pillars: [
      { title: "Learning", desc: "Developing Web3 expertise through technical workshops, expert-led conferences, and resource sharing for future engineers." },
      { title: "Networking", desc: "Connecting the student community with industry leaders, major protocols, and VC funds to foster professional integration." },
      { title: "Competitions", desc: "Participating in the world's largest Hackathons (ETH Global, ZkHack) to design concrete and innovative decentralized solutions." }
    ],
    achievementsTitle: "Our Achievements",
    achievements: [
      { date: "2024", title: "ZkHack Montreal", desc: "Winners of an excellence award from Novanet. A first entry into the cryptography scene." },
      { date: "2026", title: "ETH Global New York", desc: "Participation in one of the world's largest Ethereum hackathons alongside top developers." }
    ],
    supportTitle: "Support Us",
    supportSubtitle: "Would you like to help grow the Web3 ecosystem in Quebec or join the adventure? Find out how you can get involved :",
    supportCards: [
      { role: "Students", cta: "Join us", desc:"Join a community of enthusiasts and develop your skills.", to:"#" },
      { role: "Companies", cta: "Become a partner", desc:"Become a strategic partner and gain access to our talent pool.", to:"/partenaires" },
      { role: "Philanthropy", cta: "Make a donation", desc:"Help us fund our research projects and competitions.", to:"#" }
    ]
  }
}


function Mission() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden">
        <Menu />
        <div className="flex flex-col items-center text-center px-6 mt-20 gap-2">
          <p className="text-white/70 text-s max-w-[65ch] leading-relaxed">
            {tx.page}
          </p>
          <h2 className="font-byzantium text-white text-5xl md:text-7xl lg:text-8xl max-w-[20ch]">
            {tx.heroTitle}
          </h2>
          <p className="text-white/70 text-s max-w-[65ch] leading-relaxed">
            {tx.heroSubtitle}
          </p>
        </div>
        <svg className="mt-20" width="32" height="32" opacity="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </section>

      {/* Intro Section with Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 h-full">
          <img src={TeamImg} alt="Byzantium Team" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="font-byzantium text-3xl mb-4">{tx.whoTitle}</h2>
            <p className="text-white/60 text-s leading-relaxed">{tx.whoText}</p>
          </div>
          <div>
            <h2 className="font-byzantium text-3xl mb-4">{tx.visionTitle}</h2>
            <p className="text-white/60 text-s leading-relaxed">{tx.visionText}</p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-6xl mx-auto px-6 py-15">
        <h2 className="text-center text-4xl font-byzantium mb-12">{tx.pillarsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tx.pillars.map((p, i) => (
            <div key={i} className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
              <h3 className="font-byzantium text-2xl mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-center text-4xl font-byzantium mb-12">{tx.achievementsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tx.achievements.map((a, i) => (
            <div key={i} className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300">
              <span className="text-xs font-mono text-white/30 mb-2 block">{a.date}</span>
              <h3 className="font-byzantium text-2xl mb-3">{a.title}</h3>
              <p className="text-white/50 text-sm">{a.desc}</p>
            </div>
          ))}
          <div className="border border-dashed border-white/20 rounded-2xl p-8 flex items-center justify-center italic text-white/30">
            {lang === 'fr' ? 'À suivre...' : 'To be continued...'}
          </div>
        </div>
      </section>

      {/* Support / CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl font-byzantium mb-4">{tx.supportTitle}</h2>
          <p className={`text-white/50 mb-12 mx-auto ${lang === "fr" ? "max-w-[70ch]" : "max-w-[60ch]"}`}>
             {tx.supportSubtitle}
          </p>
          <div className="grid sm:grid-cols-3">
            {tx.supportCards.map((c, i) => (
              <div 
                key={i} 
                className={`flex flex-col text-left px-6 py-4 gap-6 ${
                  i !== 0 ? "sm:border-l border-white/10" : ""
                }`}
              >
                <div className="flex-1">
                  {/* Titre avec ta font custom */}
                  <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                    {c.role}
                  </h3>
                  
                  {/* Description (à ajouter dans ton objet de traduction t) */}
                  <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                    {c.desc}
                  </p>
                </div>

                {/* Bouton aligné en bas grâce à flex-1 au-dessus */}
                <Link 
                  to={c.to}
                  className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
                >
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mission