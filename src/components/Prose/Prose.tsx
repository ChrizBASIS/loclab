'use client';

/**
 * Prose – Bausteine für die Textseiten (Projekt, Partner, Materialien,
 * Modular Houses, Forschung, Events). Alle Texte kommen als Props aus den
 * Server-Seiten (getTranslations / t.raw), damit die Inhalte in
 * messages/{de,it,en}.json bleiben.
 */

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import styles from './Prose.module.css';

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

/** Kategorie 1–6 → Akzentfarbe (siehe --cat-* in globals.css) */
export type Category = 1 | 2 | 3 | 4 | 5 | 6;

function accentStyle(category?: Category) {
  return category ? ({ '--accent': `var(--cat-${category})` } as React.CSSProperties) : undefined;
}

/* ------------------------------------------------------------------ */
/* Seitenkopf: Label, große Überschrift, Einleitung (+ optionales Bild) */
/* ------------------------------------------------------------------ */
export function PageHeader({
  label,
  heading,
  intro,
  image,
  category,
}: {
  label: string;
  heading: string;
  intro: string[];
  image?: { src: string; alt: string };
  category?: Category;
}) {
  const [lead, ...rest] = intro;
  return (
    <section className={styles.header} style={accentStyle(category)}>
      <div className="wrapper">
        <motion.div className={styles.label} {...reveal}>
          <span className={styles.labelDash} aria-hidden="true" />
          {label}
        </motion.div>
        <motion.h1 className={styles.heading} {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          {heading}
        </motion.h1>

        <div className={`${styles.introGrid} ${image ? '' : styles.introGridNoImage}`}>
          <div className={styles.introText}>
            {lead && (
              <motion.p className={styles.lead} {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
                {lead}
              </motion.p>
            )}
            {rest.map((p, i) => (
              <motion.p key={i} className={styles.body} {...reveal} transition={{ ...reveal.transition, delay: 0.25 + i * 0.05 }}>
                {p}
              </motion.p>
            ))}
          </div>
          {image && (
            <motion.div className={styles.introImage} {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Textabschnitte: Titel links (sticky), Absätze rechts                */
/* ------------------------------------------------------------------ */
export function ProseSections({ sections }: { sections: { title?: string; paragraphs: string[] }[] }) {
  return (
    <section className={styles.sections}>
      <div className="wrapper">
        {sections.map((s, i) => (
          <motion.div key={i} className={styles.sectionRow} {...reveal}>
            <div className={styles.sectionTitleCol}>
              {s.title && <h2 className={styles.sectionTitle}>{s.title}</h2>}
            </div>
            <div className={styles.sectionTextCol}>
              {s.paragraphs.map((p, j) => (
                <p key={j} className={styles.body}>{p}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Zwischenkopf für Unterabschnitte                                     */
/* ------------------------------------------------------------------ */
export function SubHeader({ label, heading, intro, id }: { label: string; heading: string; intro?: string; id?: string }) {
  return (
    <div className={styles.subHeader} id={id}>
      <motion.div className={styles.label} {...reveal}>
        <span className={styles.labelDash} aria-hidden="true" />
        {label}
      </motion.div>
      <motion.h2 className={styles.subHeading} {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
        {heading}
      </motion.h2>
      {intro && (
        <motion.p className={styles.subIntro} {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
          {intro}
        </motion.p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Faktenraster: Kacheln mit Label, Titel, Text, optionalem Status      */
/* ------------------------------------------------------------------ */
export type Fact = { label?: string; title: string; text?: string; status?: string };

export function FactGrid({
  label,
  heading,
  intro,
  items,
  columns = 3,
  tone = 'light',
  id,
}: {
  label?: string;
  heading?: string;
  intro?: string;
  items: Fact[];
  columns?: 2 | 3 | 4;
  tone?: 'light' | 'warm';
  id?: string;
}) {
  return (
    <section className={`${styles.factSection} ${tone === 'warm' ? styles.warm : ''}`} id={id}>
      <div className="wrapper">
        {label && heading && <SubHeader label={label} heading={heading} intro={intro} />}
        <div className={styles.factGrid} data-columns={columns}>
          {items.map((f, i) => (
            <motion.div
              key={i}
              className={styles.fact}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.06 }}
            >
              {f.label && <span className={styles.factLabel}>{f.label}</span>}
              <h3 className={styles.factTitle}>{f.title}</h3>
              {f.text && <p className={styles.factText}>{f.text}</p>}
              {f.status && <span className={styles.factStatus}>{f.status}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Nummerierte Schritte / Formate                                       */
/* ------------------------------------------------------------------ */
export function Steps({
  label,
  heading,
  intro,
  items,
  image,
}: {
  label: string;
  heading: string;
  intro?: string;
  items: { title: string; text: string }[];
  image?: { src: string; alt: string };
}) {
  return (
    <section className={styles.stepsSection}>
      <div className="wrapper">
        <SubHeader label={label} heading={heading} intro={intro} />
        <div className={`${styles.stepsGrid} ${image ? '' : styles.stepsGridNoImage}`}>
          {image && (
            <motion.div className={styles.stepsImage} {...reveal}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </motion.div>
          )}
          <div className={styles.stepsList}>
            {items.map((s, i) => (
              <motion.div key={i} className={styles.step} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Hinweisblock mit Link (z. B. zur Materialkarte)                      */
/* ------------------------------------------------------------------ */
export function CalloutLink({
  label,
  title,
  text,
  cta,
  href,
  external = false,
}: {
  label: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <div className={styles.calloutText}>
        <span className={styles.factLabel}>{label}</span>
        <h3 className={styles.calloutTitle}>{title}</h3>
        <p className={styles.factText}>{text}</p>
      </div>
      <span className={styles.calloutCta}>
        {cta} <span className={styles.calloutArrow}>→</span>
      </span>
    </>
  );
  return (
    <section className={styles.calloutSection}>
      <div className="wrapper">
        <motion.div {...reveal}>
          {external ? (
            <a href={href} className={styles.callout}>{inner}</a>
          ) : (
            // Interne Ziele sind Routen aus src/i18n/routing – Typ dort nicht abgeleitet, daher cast
            <Link href={href as '/'} className={styles.callout}>{inner}</Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
