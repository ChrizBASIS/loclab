'use client';

import styles from './HomeTeaser.module.css';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const SECTIONS = [
  {
    href: '/projekt',
    label: 'Das Projekt',
    title: 'Ein Reallabor für die Architektur von morgen.',
    description:
      'LOCLAB erforscht nachhaltiges Bauen mit lokalen Materialien in den Alpen. Als Living Lab verbinden wir Wissenschaft, Architektur und Handwerk – in einem realen Bauprojekt, das neue Standards setzt.',
    image: '/images/about-reallabor.png',
    imageRight: true,
  },
  {
    href: '/materialien',
    label: 'Materialien',
    title: 'Lokale Materialien, globale Wirkung.',
    description:
      'Holz, Lehm, Stroh, Hanfkalk und Naturstein – alles aus der Region. Wir analysieren und testen traditionelle Baustoffe mit modernen Methoden, um deren Potenzial für die Zukunft freizulegen.',
    image: '/images/materials-overview.png',
    imageRight: false,
  },
  {
    href: '/workshops',
    label: 'Workshops & Residency',
    title: 'Wissen teilen, gemeinsam bauen.',
    description:
      'In interdisziplinären Workshops und Residencies bringen wir Forscher, Architekten und Handwerker zusammen. Praxisnah, direkt auf der Baustelle – für einen echten Wissenstransfer.',
    image: '/images/workshops-community.png',
    imageRight: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeTeaser() {
  return (
    <section className={styles.section}>
      {SECTIONS.map((item, index) => (
        <motion.div
          key={item.href}
          className={styles.block}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          variants={fadeUp}
        >
          <div className="wrapper">
            <div className={`${styles.row} ${item.imageRight ? '' : styles.imageLeft}`}>
              <div className={styles.textCol}>
                <span className={styles.label}>{item.label}</span>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <Link href={item.href} className={styles.cta}>
                  Mehr erfahren
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </div>
              <div className={styles.imageCol}>
                <img
                  src={item.image}
                  alt={item.label}
                  className={styles.img}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom quick links */}
      <div className="wrapper">
        <div className={styles.quickLinks}>
          <Link href="/timeline" className={styles.quickLink}>
            <span className={styles.quickLabel}>Timeline</span>
            <span className={styles.quickTitle}>Phases &amp; Milestones über 36 Monate.</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
          <Link href="/konsortium" className={styles.quickLink}>
            <span className={styles.quickLabel}>Konsortium</span>
            <span className={styles.quickTitle}>Inter- und transdisziplinäre Zusammenarbeit.</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
          <Link href="/dokumentation" className={styles.quickLink}>
            <span className={styles.quickLabel}>Dokumentation</span>
            <span className={styles.quickTitle}>Forschung transparent machen.</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
