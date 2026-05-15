import { useState } from "react"
import Menu from "../components/Menu.tsx"
import { Link } from "react-router-dom"
import { useLang } from "../context/LangContext.tsx"

const t = {
  fr: {
    page: "Contact",
    title: "Contactez-nous!",
    subtitle: "Une question, une idée ou simplement envie de rejoindre l'aventure ? On vous répond rapidement.",
    formTitle: "Envoyer un message",
    formName: "Nom",
    formEmail: "Courriel",
    formMessage: "Message",
    formSend: "Envoyer",
    formSending: "Envoi...",
    formSuccess: "Message envoyé avec succès !",
    formError: "Une erreur est survenue. Réessayez.",
    formPlaceholderName: "Jean Tremblay",
    formPlaceholderEmail: "jean@example.com",
    formPlaceholderMessage: "Bonjour, je voudrais...",
    socialTitle: "Suivez-nous",
    supportTitle: "Soutenez-nous",
    supportCards: [
      { role: "Étudiants", cta: "Nous rejoindre", desc: "Rejoignez une communauté de passionnés et développez vos compétences.", to: "#" },
      { role: "Entreprises", cta: "Devenir partenaire", desc: "Devenez un partenaire stratégique et accédez à notre bassin de talents.", to: "/partenaires" },
      { role: "Philanthropie", cta: "Faire un don", desc: "Aidez-nous à financer nos projets de recherche et nos compétitions.", to: "#" },
    ],
    altTitle: "Besoin d'une alternative ?",
  },
  en: {
    page: "Contact",
    title: "Contact us!",
    subtitle: "A question, an idea, or just want to join the adventure? We'll get back to you quickly.",
    formTitle: "Send a message",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send",
    formSending: "Sending...",
    formSuccess: "Message sent successfully!",
    formError: "An error occurred. Please try again.",
    formPlaceholderName: "John Smith",
    formPlaceholderEmail: "john@example.com",
    formPlaceholderMessage: "Hello, I would like to...",
    socialTitle: "Follow us",
    supportTitle: "Support us",
    supportCards: [
      { role: "Students", cta: "Join us", desc: "Join a community of enthusiasts and develop your skills.", to: "#" },
      { role: "Companies", cta: "Become a partner", desc: "Become a strategic partner and gain access to our talent pool.", to: "/partenaires" },
      { role: "Philanthropy", cta: "Make a donation", desc: "Help us fund our research projects and competitions.", to: "#" },
    ],
    altTitle: "Need another way?",
  },
}

function FormField({ label, placeholder, name, type = "text", isTextArea = false, required = true }) {
  const baseClasses = "bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors duration-150"
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/50 text-xs uppercase tracking-widest">{label}</label>
      {isTextArea
        ? <textarea name={name} rows={5} placeholder={placeholder} required={required} className={`${baseClasses} resize-none`} />
        : <input name={name} type={type} placeholder={placeholder} required={required} className={baseClasses} />
      }
    </div>
  )
}

function Contact() {
  const { lang } = useLang()
  const tx = t[lang]
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("LOADING")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/xlgzqegn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus("SUCCESS")
        e.currentTarget.reset()
      } else {
        setStatus("ERROR")
      }
    } catch (error) {
      setStatus("ERROR")
    }
  }

  return (
    <div className="min-h-screen w-screen bg-black text-white selection:bg-red-500/30">
      <header className="relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden">
        <Menu />
        <div className="flex flex-col items-center text-center px-6 gap-4">
          <p className="text-white/50 text-xs uppercase tracking-widest">{tx.page}</p>
          <h1 className="font-byzantium text-white text-5xl md:text-7xl lg:text-8xl max-w-[20ch] leading-none">{tx.title}</h1>
          <p className="text-white/60 text-sm max-w-[52ch] leading-relaxed">{tx.subtitle}</p>
        </div>
        <svg className="mt-20" width="32" height="32" opacity="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L12 16L5 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </header>

      <main id="content" className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6 py-20 items-start">
        <section className="w-full flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <h2 className="font-byzantium text-3xl">{tx.formTitle}</h2>
            <div className="flex flex-col gap-4 w-full">
              <FormField name="name" label={tx.formName} placeholder={tx.formPlaceholderName} />
              <FormField name="email" label={tx.formEmail} placeholder={tx.formPlaceholderEmail} type="email" />
              <FormField name="message" label={tx.formMessage} placeholder={tx.formPlaceholderMessage} isTextArea />
              
              <div className="flex flex-col gap-3">
                <button 
                  type="submit"
                  disabled={status === "LOADING"}
                  className="text-sm text-black bg-white py-2 px-5 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-150 self-start disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "LOADING" ? tx.formSending : tx.formSend}
                </button>

                {status === "SUCCESS" && <p className="text-green-500 text-xs italic">{tx.formSuccess}</p>}
                {status === "ERROR" && <p className="text-red-500 text-xs italic">{tx.formError}</p>}
              </div>
            </div>
          </form>

          <div className="pt-4 border-t border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">{tx.altTitle}</p>
            <a href="mailto:Byzantium@etsmtl.ca" className="text-white/60 hover:text-red-500 transition-colors duration-150 text-sm">
              Byzantium@etsmtl.ca
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <h2 className="font-byzantium text-3xl">{tx.socialTitle}</h2>
            <div className="border border-white/15 rounded-xl p-4 flex items-center justify-around hover:border-white/30 hover:bg-white/5 transition-all duration-200">
              <a href="https://www.instagram.com/byzantium.ets/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/byzantiumets/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://x.com/byzantium_ets" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-150">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-byzantium text-3xl">{tx.supportTitle}</h2>
            <div className="border border-white/15 rounded-2xl overflow-hidden">
              {tx.supportCards.map((c, i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 gap-4 hover:bg-white/5 transition-all duration-200 ${i !== 0 ? "border-t border-white/10" : ""}`}>
                  <div>
                    <h3 className="font-byzantium text-white text-xl">{c.role}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                  <Link to={c.to} className="shrink-0 text-xs text-black bg-white py-1.5 px-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-150">
                    {c.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="h-20" />
    </div>
  )
}

export default Contact