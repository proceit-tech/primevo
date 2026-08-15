import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRIMEVO Consultoria",
  description:
    "Consultoria empresarial, tecnológica e jurídica para empresas brasileiras que desejam se instalar, operar ou expandir no Paraguai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
