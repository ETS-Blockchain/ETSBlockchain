import { createContext, useContext, useState } from "react"

type Lang = "fr" | "en"

const LangContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
}>({ lang: "fr", setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  function detectLang(): Lang {
    const browser = navigator.language.toLowerCase()
    return browser.startsWith("fr") ? "fr" : "en"
    }   

    const [lang, setLang] = useState<Lang>(detectLang)
    
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)