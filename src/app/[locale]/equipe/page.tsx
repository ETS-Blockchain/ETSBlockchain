"use client";

import { useTranslations } from "next-intl";
import Support from "../../../component/Support";
import Hero from "../../../component/Hero";
import Card from "../../../component/Card";
import { GithubIcon, LinkedinIcon } from "../../../component/icons";

export default function Equipe() {
  const t = useTranslations("team");

  const equipe = [
    {
      name: "Akhmad Sarymsakov",
      program: t("programs.software"),
      role: t("roles.president"),
      linkedin: "https://www.linkedin.com/in/akhmadsarymsakov/",
      github: "https://github.com/cherieakmad",
      image: "/Akhmad.png",
    },
    {
      name: "Ahmed El Moudden",
      program: t("programs.software"),
      role: t("roles.vp"),
      linkedin: "https://www.linkedin.com/in/ahmed-el-moudden-ba3a2b203/",
      github: "https://github.com/D3mh4",
      image: "/Ahmed.jpeg",
    },
    {
      name: "Victor Efrem",
      program: t("programs.electrical"),
      role: t("roles.comms"),
      linkedin: "https://www.linkedin.com/in/victor-efrem/",
      github: "https://github.com/Akurasama",
      image: "/Victor.jpeg",
    },
    {
      name: "Élea Charier",
      program: t("programs.software"),
      role: t("roles.tbd"),
      linkedin: "https://www.linkedin.com/in/éléa-charier-477b81328/",
      github: "https://github.com/elea-c",
      image: "/Elea.png",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      <Hero
        title={t("title")}
        description={t("description")}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipe.map((member, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-6 overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-byzantium text-2xl mb-1">{member.name}</h3>
              <p className="text-white/70 text-sm mb-1">{member.role}</p>
              <p className="text-red-400/80 text-xs mb-8">{member.program}</p>

              <div className="flex gap-4 mt-auto">
                {member.github && member.github !== "#" && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon width={24} height={24} />
                  </a>
                )}
                {member.linkedin && member.linkedin !== "#" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon width={24} height={24} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Support />
    </div>
  );
}

