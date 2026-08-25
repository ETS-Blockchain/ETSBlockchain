"use client";

import { useTranslations } from "next-intl";
import { Link } from "../i18n/routing";
import { EXTERNAL_LINKS } from "../lib/constants";

export default function Support() {
  const t = useTranslations("support");

  return (
    <section className="max-w-5xl mx-auto px-6 py-32 text-center">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
        <h2 className="text-4xl font-byzantium mb-4">{t("title")}</h2>
        <p className="text-white/50 mb-12 mx-auto max-w-[70ch]">
          {t("description")}
        </p>
        
        <div className="grid sm:grid-cols-3">
          
          {/* Carte 1 : Étudiants */}
          <div className="flex flex-col text-left px-6 py-4 gap-6">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                {t("studentsTitle")}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                {t("studentsDesc")}
              </p>
            </div>
            <a 
              href="https://linktr.ee/etsblockchain"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              {t("studentsBtn")}
            </a>
          </div>

          {/* Carte 2 : Entreprises */}
          <div className="flex flex-col text-left px-6 py-4 gap-6 sm:border-l border-white/10">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                {t("companiesTitle")}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                {t("companiesDesc")}
              </p>
            </div>
            <Link 
              href="/contact"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              {t("companiesBtn")}
            </Link>
          </div>

          {/* Carte 3 : Philanthropie */}
          <div className="flex flex-col text-left px-6 py-4 gap-6 sm:border-l border-white/10">
            <div className="flex-1">
              <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                {t("philanthropyTitle")}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                {t("philanthropyDesc")}
              </p>
            </div>
            <a 
              href={EXTERNAL_LINKS.donation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-black bg-white py-2 px-4 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 text-center"
            >
              {t("philanthropyBtn")}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}