"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/content";

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const target = lang === "pt" ? "es" : "pt";
  const nextPath = pathname.replace(/^\/(pt|es)/, `/${target}`);

  return (
    <Link className="language-switcher" href={nextPath} aria-label="Trocar idioma">
      <span className={lang === "pt" ? "active" : ""}>PT</span>
      <span className="separator">/</span>
      <span className={lang === "es" ? "active" : ""}>ES</span>
    </Link>
  );
}
