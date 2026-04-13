'use client';

import styles from './brand.module.css';
import Logo from '@/components/Navbar/Logo';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer/Footer';

const COLORS = [
  { name: 'Forêt', hex: '#1B3A2D', role: 'Primary / Accent', usage: 'Headlines, CTAs, active states' },
  { name: 'Erde', hex: '#BCB5A3', role: 'Warm Neutral', usage: 'Backgrounds, cards, hover states' },
  { name: 'Kalk', hex: '#F2F2F2', role: 'Canvas', usage: 'Page background, light sections' },
  { name: 'Kohle', hex: '#111111', role: 'Text Primary', usage: 'Body text, icons, navbar' },
  { name: 'Nebel', hex: '#8A8A8A', role: 'Text Secondary', usage: 'Captions, meta text, labels' },
  { name: 'Schnee', hex: '#FFFFFF', role: 'Inverse', usage: 'Text on dark backgrounds, hero overlay' },
];

const TYPOGRAPHY = [
  { name: 'Canela', weight: 'Light 300', role: 'Headlines', sample: 'Local, Circular, Low‑Tech.', cssVar: '--font-serif' },
  { name: 'Maison Neue', weight: 'Book 400 / Medium 500', role: 'Body & Navigation', sample: 'Ein Reallabor für innovatives Bauen in Südtirol.', cssVar: '--font-sans' },
  { name: 'Space Mono', weight: 'Regular 400', role: 'Mono / Labels', sample: 'PHASE 01 · M1–M6 · λ 0.13', cssVar: '--font-mono' },
];

export default function BrandPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="wrapper">
          <motion.div
            className={styles.heroLabel}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={styles.heroLabelLine} />
            <span>Corporate Design</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Brand Guidelines
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Visuelle Identität, Farbsystem und Typografie des LocLab-Projekts.
          </motion.p>
        </div>
      </section>

      {/* ===== LOGO SECTION ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Logo</div>
          <h2 className={styles.sectionHeading}>Logomark & Wordmark</h2>

          <div className={styles.logoShowcase}>
            {/* Dark on light */}
            <motion.div
              className={styles.logoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.logoPreview}>
                <Logo size={56} color="#111111" />
                <span className={styles.logoWordmark}>LOCLAB</span>
              </div>
              <span className={styles.logoVariant}>Primary — Dark on Light</span>
            </motion.div>

            {/* Light on dark */}
            <motion.div
              className={`${styles.logoCard} ${styles.logoDark}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <div className={styles.logoPreview}>
                <Logo size={56} color="#FFFFFF" />
                <span className={styles.logoWordmark} style={{ color: '#fff' }}>LOCLAB</span>
              </div>
              <span className={styles.logoVariant} style={{ color: 'rgba(255,255,255,0.5)' }}>Inverse — Light on Dark</span>
            </motion.div>

            {/* Accent on warm */}
            <motion.div
              className={`${styles.logoCard} ${styles.logoWarm}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className={styles.logoPreview}>
                <Logo size={56} color="#1B3A2D" />
                <span className={styles.logoWordmark} style={{ color: '#1B3A2D' }}>LOCLAB</span>
              </div>
              <span className={styles.logoVariant}>Accent — Forêt on Neutral</span>
            </motion.div>
          </div>

          {/* Logo icon only */}
          <div className={styles.logoIconGrid}>
            <h3 className={styles.subHeading}>Logomark Only</h3>
            <div className={styles.iconSizes}>
              {[16, 24, 32, 48, 64].map((s) => (
                <div key={s} className={styles.iconSizeItem}>
                  <Logo size={s} color="#111111" />
                  <span className={styles.iconSizeLabel}>{s}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLOR SECTION ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Farben</div>
          <h2 className={styles.sectionHeading}>Farbsystem</h2>
          <p className={styles.sectionIntro}>
            Erdige, natürliche Töne, die die Materialität des Projekts widerspiegeln — Holz, Lehm, Stein. Reduziert, warm und zeitlos.
          </p>

          <div className={styles.colorGrid}>
            {COLORS.map((color, index) => (
              <motion.div
                key={color.hex}
                className={styles.colorCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.8 }}
              >
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color.hex }}
                >
                  {(color.hex === '#F2F2F2' || color.hex === '#FFFFFF') && (
                    <div className={styles.swatchBorder} />
                  )}
                </div>
                <div className={styles.colorInfo}>
                  <span className={styles.colorName}>{color.name}</span>
                  <span className={styles.colorHex}>{color.hex}</span>
                  <span className={styles.colorRole}>{color.role}</span>
                  <span className={styles.colorUsage}>{color.usage}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TYPOGRAPHY SECTION ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Typografie</div>
          <h2 className={styles.sectionHeading}>Schriftsystem</h2>
          <p className={styles.sectionIntro}>
            Drei Schriftfamilien bilden die typografische Hierarchie — eine klassische Serif für Überschriften, eine moderne Sans für den Fließtext und eine Monospace für technische Angaben.
          </p>

          <div className={styles.typeList}>
            {TYPOGRAPHY.map((font, index) => (
              <motion.div
                key={font.name}
                className={styles.typeCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className={styles.typeMeta}>
                  <span className={styles.typeName}>{font.name}</span>
                  <span className={styles.typeWeight}>{font.weight}</span>
                  <span className={styles.typeRole}>{font.role}</span>
                  <code className={styles.typeVar}>{font.cssVar}</code>
                </div>
                <div
                  className={styles.typeSample}
                  style={{ fontFamily: `var(${font.cssVar})` }}
                >
                  {font.sample}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Type scale */}
          <div className={styles.typeScale}>
            <h3 className={styles.subHeading}>Type Scale</h3>
            <div className={styles.scaleItems}>
              <div className={styles.scaleItem}>
                <span className={styles.scaleLabel}>Hero H1</span>
                <span className={styles.scalePreview} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300 }}>Aa</span>
                <span className={styles.scaleSpec}>clamp(3.5rem, 5.9vw, 5.9rem)</span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleLabel}>Section H2</span>
                <span className={styles.scalePreview} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 300 }}>Aa</span>
                <span className={styles.scaleSpec}>clamp(2rem, 3.5vw, 3.5rem)</span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleLabel}>Body Large</span>
                <span className={styles.scalePreview} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 1.3vw, 1.3rem)', fontWeight: 400 }}>Aa</span>
                <span className={styles.scaleSpec}>clamp(1.2rem, 1.66vw, 1.66rem)</span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleLabel}>Nav</span>
                <span className={styles.scalePreview} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Aa</span>
                <span className={styles.scaleSpec}>clamp(0.9rem, 1.1vw, 1.1rem)</span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleLabel}>Mono</span>
                <span className={styles.scalePreview} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Aa</span>
                <span className={styles.scaleSpec}>0.74rem (11.78px)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPACING & GRID SECTION ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Layout</div>
          <h2 className={styles.sectionHeading}>Spacing & Grid</h2>

          <div className={styles.gridInfo}>
            <div className={styles.gridItem}>
              <span className={styles.gridLabel}>Max Width</span>
              <span className={styles.gridValue}>1600px</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.gridLabel}>Side Padding</span>
              <span className={styles.gridValue}>max(1.5rem, 3.75vw)</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.gridLabel}>Section Gap</span>
              <span className={styles.gridValue}>12vw</span>
            </div>
            <div className={styles.gridItem}>
              <span className={styles.gridLabel}>Heading Indent</span>
              <span className={styles.gridValue}>8.2vw</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
