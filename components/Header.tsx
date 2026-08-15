"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Lang } from "@/lib/content";
import { content } from "@/lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = content[lang];

  const links = [
    ["#inicio", t.nav.home],
    ["#primevo", t.nav.about],
    ["#solucoes", t.nav.solutions],
    ["#metodo", t.nav.method],
    ["#paraguai", t.nav.paraguay],
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="brand" aria-label="PRIMEVO Consultoria">
          <Image
            src="/primevo-logo-cropped.png"
            alt="PRIMEVO Consultoria"
            width={625}
            height={395}
            priority
            className="brand-image"
          />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>
            {t.nav.contact}
          </a>
          <LanguageSwitcher lang={lang} />
        </nav>
      </div>
    </header>
  );
}
