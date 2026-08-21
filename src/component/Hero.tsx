import { ReactNode } from "react";
import Menu from "./Menu";
import { ChevronDownIcon } from "./icons";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  showChevron?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  groupClassName?: string;
  topContent?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

export default function Hero({
  eyebrow,
  title,
  description,
  showChevron = true,
  className = "",
  titleClassName = "text-5xl md:text-7xl lg:text-8xl",
  descriptionClassName = "text-white/70 text-xs max-w-[65ch] leading-relaxed",
  groupClassName = "gap-2",
  topContent,
  actions,
  children,
}: HeroProps) {
  return (
    <section
      className={`relative bg-linear-to-b from-red-600 to-transparent h-screen w-screen p-3 flex flex-col justify-between items-center overflow-hidden ${className}`}
    >
      <Menu />

      <div className="flex flex-col items-center text-center px-6 gap-6 z-10">
        {topContent}

        <div className={`flex flex-col items-center ${groupClassName}`}>
          {eyebrow && <p className="text-white/70 text-xs max-w-[65ch] leading-relaxed">{eyebrow}</p>}
          <h1 className={`font-byzantium text-white max-w-[20ch] leading-none ${titleClassName}`}>
            {title}
          </h1>
          {description && <p className={descriptionClassName}>{description}</p>}
        </div>

        {actions}
      </div>

      {children}
      {showChevron && <ChevronDownIcon className="mt-20 opacity-50" width={32} height={32} />}
    </section>
  );
}