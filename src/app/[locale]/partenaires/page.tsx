"use client";

import { useTranslations } from "next-intl";
import MaintenancePage from "../../../component/MaintenancePage";

export default function Partenaires() {
  const t = useTranslations("partners");
  return <MaintenancePage title={t("title")} />;
}

