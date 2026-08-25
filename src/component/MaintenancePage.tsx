"use client";

import { useTranslations } from "next-intl";
import Hero from "./Hero";

interface MaintenancePageProps {
  title: string;
}

export default function MaintenancePage({ title }: MaintenancePageProps) {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen w-screen bg-black">
      <Hero
        title={title}
        description={t("underMaintenance")}
        showChevron={false}
        className="pb-16"
        titleClassName="text-5xl md:text-6xl lg:text-8xl"
        descriptionClassName="text-white/60 text-sm max-w-[50ch] leading-relaxed"
        groupClassName="gap-4"
      >
        <div />
      </Hero>
    </div>
  );
}