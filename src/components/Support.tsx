import { Link } from "react-router-dom"
import { useLang } from "../context/LangContext.tsx"

interface SupportProps {
  tx: {
    supportTitle: string;
    supportSubtitle: string;
    supportCards: Array<{
      role: string;
      cta: string;
      desc: string;
      to: string;
    }>;
  };
}

const Support = ({ tx }: SupportProps) => {
  const { lang } = useLang()

  return (
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
                <h3 className="font-byzantium text-white text-3xl md:text-2xl">
                  {c.role}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[30ch]">
                  {c.desc}
                </p>
              </div>

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
  )
}

export default Support