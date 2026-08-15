import type { Lang } from "@/lib/content";
import { content } from "@/lib/content";
import { Header } from "@/components/Header";

const supported: Lang[] = ["pt", "es"];

export default async function LocaleHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = supported.includes(rawLang as Lang) ? (rawLang as Lang) : "pt";
  const t = content[lang];

  return (
    <>
      <Header lang={lang} />
      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  {t.hero.primary}
                </a>
                <a className="button button-ghost" href="#solucoes">
                  {t.hero.secondary}
                </a>
              </div>
              <div className="hero-tags">
                {t.hero.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orb orb-blue" />
              <div className="orb orb-gold" />
              <div className="corridor-card">
                <span className="corridor-label">PRIMEVO-test</span>
                <strong>{t.hero.corridor}</strong>
                <p>{t.hero.corridorText}</p>
                <div className="corridor-line">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="primevo" className="section section-light">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2>{t.about.title}</h2>
            </div>
            <div>
              <p className="lead">{t.about.description}</p>
              <div className="metrics">
                {t.about.metrics.map(([number, label]) => (
                  <div className="metric" key={label}>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes" className="section section-navy">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="eyebrow eyebrow-light">{t.solutions.eyebrow}</p>
                <h2>{t.solutions.title}</h2>
              </div>
              <p className="section-note">PRIMEVO / BR–PY</p>
            </div>
            <div className="solutions-grid">
              {t.solutions.items.map((item) => (
                <article className="solution-card" key={item.index}>
                  <span className="solution-index">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="solution-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="section section-light">
          <div className="container method-grid">
            <div className="method-intro">
              <p className="eyebrow">{t.method.eyebrow}</p>
              <h2>{t.method.title}</h2>
            </div>
            <div className="method-list">
              {t.method.steps.map(([number, title, text]) => (
                <article className="method-step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="paraguai" className="section paraguay-section">
          <div className="container paraguay-grid">
            <div className="paraguay-copy">
              <p className="eyebrow eyebrow-light">{t.paraguay.eyebrow}</p>
              <h2>{t.paraguay.title}</h2>
              <p>{t.paraguay.description}</p>
            </div>
            <div className="paraguay-list">
              {t.paraguay.items.map((item, index) => (
                <div className="paraguay-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="eyebrow">{t.cta.eyebrow}</p>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.text}</p>
            </div>
            <a
              className="button button-primary button-large"
              href={`mailto:${t.footer.contact}?subject=${encodeURIComponent(
                lang === "pt" ? "Diagnóstico PRIMEVO" : "Diagnóstico PRIMEVO",
              )}`}
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong className="footer-brand">PRIMEVO</strong>
            <p>{t.footer.summary}</p>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${t.footer.contact}`}>{t.footer.contact}</a>
            <span>© {new Date().getFullYear()} PRIMEVO. {t.footer.rights}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
