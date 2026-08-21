import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
  return (
    <div className={`border border-white/15 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}