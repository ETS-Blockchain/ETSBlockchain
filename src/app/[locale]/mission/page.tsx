"use client";

import { useTranslations } from "next-intl";
import Support from "../../../component/Support";
import Hero from "../../../component/Hero";
import Card from "../../../component/Card";
import teamimg from "../../../assets/team.jpg";
import { imgSrc } from "../../../lib/utils";

export default function Mission() {
  const t = useTranslations("mission");

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      {/* Intro Section with Image */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20 h-full">
          <img src={imgSrc(teamimg)} alt="Byzantium Team" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-10">
          <div>
            <h2 className="font-byzantium text-3xl mb-4">{t("whoWeAreTitle")}</h2>
            <p className="text-white/60 text-xs leading-relaxed">
              {t("whoWeAreText")}
            </p>
          </div>
          <div>
            <h2 className="font-byzantium text-3xl mb-4">{t("ourVisionTitle")}</h2>
            <p className="text-white/60 text-xs leading-relaxed">
              {t("ourVisionText")}
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-6xl mx-auto px-6 py-15">
        <h2 className="text-center text-4xl font-byzantium mb-12">{t("pillarsTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">{t("learningTitle")}</h3>
            <p className="text-white/50 text-sm">{t("learningDesc")}</p>
          </Card>
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">{t("networkingTitle")}</h3>
            <p className="text-white/50 text-sm">{t("networkingDesc")}</p>
          </Card>
          <Card>
            <h3 className="font-byzantium text-2xl mb-3">{t("competitionsTitle")}</h3>
            <p className="text-white/50 text-sm">{t("competitionsDesc")}</p>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-center text-4xl font-byzantium mb-12">{t("achievementsTitle")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <span className="text-xs font-mono text-white/30 mb-2 block">2024</span>
            <h3 className="font-byzantium text-2xl mb-3">{t("achievements.zkHackTitle")}</h3>
            <p className="text-white/50 text-sm">{t("achievements.zkHackDesc")}</p>
          </Card>
          <Card>
            <span className="text-xs font-mono text-white/30 mb-2 block">2026</span>
            <h3 className="font-byzantium text-2xl mb-3">{t("achievements.ethGlobalTitle")}</h3>
            <p className="text-white/50 text-sm">{t("achievements.ethGlobalDesc")}</p>
          </Card>
          <div className="border border-dashed border-white/20 rounded-2xl p-8 flex items-center justify-center italic text-white/30">
            {t("achievements.comingSoon")}
          </div>
        </div>
      </section>

      <Support />
    </div>
  );
}

