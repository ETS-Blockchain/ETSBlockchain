"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";
import Hero from "../../../component/Hero";
import SocialLinks from "../../../component/SocialLinks";
import { EXTERNAL_LINKS } from "../../../lib/constants";

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  isTextArea?: boolean;
}

function FormField({ label, placeholder, value, onChange, type = "text", isTextArea = false }: FormFieldProps) {
  const baseclasses = "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors duration-150";

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/50 text-xs uppercase tracking-widest">{label}</label>
      {isTextArea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          placeholder={placeholder}
          className={`${baseclasses} resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeholder}
          className={baseclasses}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const t = useTranslations("contact");
  const tSupport = useTranslations("support");

  const [formdata, setformdata] = useState({ name: "", email: "", message: "" });
  const [status, setstatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const updatefield = (field: keyof typeof formdata) => (value: string) => {
    setformdata((prev) => ({ ...prev, [field]: value }));
    if (status !== "IDLE") {
      setstatus("IDLE");
      setFeedbackMessage("");
    }
  };

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setstatus("LOADING");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        setstatus("SUCCESS");
        setFeedbackMessage(t("successMessage"));
        setformdata({ name: "", email: "", message: "" });
      } else {
        setstatus("ERROR");
        setFeedbackMessage(t("errorMessage"));
      }
    } catch (error) {
      console.error("API Error:", error);
      setstatus("ERROR");
      setFeedbackMessage(t("errorMessage"));
    }
  };

  const isinvalid = !formdata.name || !formdata.email || !formdata.message || !formdata.email.includes("@");

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <main id="content" className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6 py-20 items-start">
        <section className="w-full flex flex-col gap-auto">
          <form onSubmit={handlesubmit} className="flex flex-col gap-6 w-full">
            <h2 className="font-byzantium text-3xl">{t("formTitle")}</h2>
            <div className="flex flex-col gap-4 w-full">
              <FormField label={t("nameLabel")} placeholder={t("namePlaceholder")} value={formdata.name} onChange={updatefield("name")} />
              <FormField label={t("emailLabel")} placeholder={t("emailPlaceholder")} type="email" value={formdata.email} onChange={updatefield("email")} />
              <FormField label={t("messageLabel")} placeholder={t("messagePlaceholder")} isTextArea value={formdata.message} onChange={updatefield("message")} />

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === "LOADING" || isinvalid}
                  className="text-sm text-black bg-white py-2 px-5 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150 self-start disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "LOADING" ? t("submitting") : t("submit")}
                </button>
              </div>
            </div>
          </form>

          <div className="pt-4 border-t border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{t("alternativeTitle")}</p>
            <a href="mailto:blockchain-ets@etsmtl.ca" className="text-white/60 hover:text-red-500 transition-colors duration-150 text-sm">
              blockchain-ets@etsmtl.ca
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <h2 className="font-byzantium text-3xl">{t("followTitle")}</h2>
            <div className="border border-white/15 rounded-xl p-4 flex items-center justify-around hover:border-white/30 hover:bg-white/5 transition-all duration-200">
              <SocialLinks size={24} className="text-white/40 hover:text-white transition-colors duration-150" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-byzantium text-3xl">{t("supportTitle")}</h2>
            <div className="border border-white/15 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 gap-4 hover:bg-white/5 transition-all duration-200">
                <div>
                  <h3 className="font-byzantium text-white text-xl">{tSupport("studentsTitle")}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{tSupport("studentsDesc")}</p>
                </div>
                <a href="https://linktr.ee/etsblockchain" className="shrink-0 text-xs text-black bg-white py-1.5 px-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
                  {tSupport("studentsBtn")}
                </a>
              </div>

              <div className="flex items-center justify-between px-6 py-4 gap-4 hover:bg-white/5 transition-all duration-200 border-t border-white/10">
                <div>
                  <h3 className="font-byzantium text-white text-xl">{tSupport("companiesTitle")}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{tSupport("companiesDesc")}</p>
                </div>
                <Link href="/partenaires" className="shrink-0 text-xs text-black bg-white py-1.5 px-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
                  {tSupport("companiesBtn")}
                </Link>
              </div>

              <div className="flex items-center justify-between px-6 py-4 gap-4 hover:bg-white/5 transition-all duration-200 border-t border-white/10">
                <div>
                  <h3 className="font-byzantium text-white text-xl">{tSupport("philanthropyTitle")}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{tSupport("philanthropyDesc")}</p>
                </div>
                <a href={EXTERNAL_LINKS.donation} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs text-black bg-white py-1.5 px-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
                  {tSupport("philanthropyBtn")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {status !== "IDLE" && feedbackMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`font-byzantium text-2xl font-semibold ${status === "SUCCESS" ? "text-emerald-400" : "text-rose-400"}`}>
                  {status === "SUCCESS" ? t("successTitle") : t("errorTitle")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{feedbackMessage}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setstatus("IDLE");
                  setFeedbackMessage("");
                }}
                className="cursor-pointer rounded-xl bg-white/10 px-3 py-2 text-xs uppercase text-white transition hover:bg-white/20"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-20" />
    </div>
  );
}

