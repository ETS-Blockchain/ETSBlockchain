import { Routes, Route } from "react-router-dom"
import Hero from "./components/Hero.tsx"
import Mission from "./pages/Mission"
import Projets from "./pages/Projets"
import Partenaires from "./pages/Partenaires"
import Contact from "./pages/Contact"
import Equipe from "./pages/Equipe.tsx"


function App() {
  return (
    <div className="bg-gray-950">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
    </div>
  )
}

export default App