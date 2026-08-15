import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Lang } from "@/lib/content";

const supported = ["pt", "es"];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  if (lang === "es") {
    return {
      title: "PRIMEVO | Consultoría Brasil–Paraguay",
      description:
        "Consultoría empresarial, tecnológica y jurídica para empresas brasileñas que desean instalarse, operar o expandirse en Paraguay.",
    };
  }

  return {
    title: "PRIMEVO | Consultoria Brasil–Paraguai",
    description:
      "Consultoria empresarial, tecnológica e jurídica para empresas brasileiras que desejam se instalar, operar ou expandir no Paraguai.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!supported.includes(lang)) notFound();

  return <div lang={lang as Lang}>{children}</div>;
}
