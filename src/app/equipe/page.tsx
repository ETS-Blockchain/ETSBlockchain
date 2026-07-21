import Menu from "../../component/Menu";
import Support from "../../component/Support";

export default function Equipe() {
  const equipe = [
    {
      name: "Akhmad Sarymsakov",
      program: "Génie Logiciel",
      role: "Président",
      linkedin: "https://www.linkedin.com/in/akhmadsarymsakov/",
      github: "https://github.com/cherieakmad",
      image : "Akhmad.png"
    },
    {
      name: "Ahmed El Moudden",
      program: "Génie Logiciel",
      role: "Vice-président",
      linkedin: "https://www.linkedin.com/in/ahmed-el-moudden-ba3a2b203/",
      github: "https://github.com/D3mh4",
      image: "Ahmed.jpeg",
    },
    {
      name: "Victor Efrem",
      program: "Génie Électrique",
      role: "Chargé des communications",
      linkedin: "https://www.linkedin.com/in/victor-efrem/",
      github: "https://github.com/Akurasama",
      image: "Victor.jpeg",
    },
    {
      name: "Élea Charier",
      program: "Génie Logiciel",
      role: "À determiner",
      linkedin: "https://www.linkedin.com/in/éléa-charier-477b81328/",
      github: "https://github.com/elea-c",
      image: "Elea.png",
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden">
        <Menu />
        
        <div className="flex flex-col items-center text-center px-6 mt-20 gap-2">
          <h1 className="font-byzantium text-white text-5xl md:text-7xl lg:text-8xl max-w-[20ch]">
            Notre équipe
          </h1>
          <p className="text-white/70 text-xs max-w-[65ch] leading-relaxed">
            Rencontrez les étudiants passionnés qui dirigent le pôle d'expertise en technologies décentralisées de l'École de technologie supérieure.
          </p>
        </div>

        <svg className="mt-20" width="32" height="32" opacity="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </section>
      {/* Team Grid Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipe.map((member, index) => (
            <div 
              key={index} 
              className="border border-white/15 rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Profile Image / Placeholder */}
              <div className="w-32 h-32 rounded-full mb-6 overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <h3 className="font-byzantium text-2xl mb-1">{member.name}</h3>
              <p className="text-white/70 text-sm mb-1">{member.role}</p>
              <p className="text-red-400/80 text-xs mb-8">{member.program}</p>

              {/* Social Links */}
              <div className="flex gap-4 mt-auto">
                {member.github && member.github !== "#" && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {member.linkedin && member.linkedin !== "#" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Support />
    </div>
  );
}