import Menu from "../../component/Menu";

export default function Projets() {
  return (
    <div className="bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col items-center justify-between pb-16">
      <Menu />

      <div className="flex flex-col items-center text-center px-6 gap-4">
        <h1 className="font-byzantium text-white text-5xl md:text-6xl lg:text-8xl max-w-[20ch] leading-none">
          Nos projets
        </h1>
        <p className="text-white/60 text-sm max-w-[50ch] leading-relaxed">
          En maintenance...
        </p>
      </div>

      <div />
    </div>
  );
}