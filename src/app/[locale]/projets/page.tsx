"use client";

import { useTranslations } from "next-intl";
import MaintenancePage from "../../../component/MaintenancePage";

export default function Projets() {
  const t = useTranslations("projects");
  return <MaintenancePage title={t("title")} />;
}

