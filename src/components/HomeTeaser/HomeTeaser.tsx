'use client';

import styles from './HomeTeaser.module.css';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

const SECTIONS = [
  {
    href: '/projekt',
    label: 'Das Projekt',
    title: 'Ein Reallabor für die Architektur von morgen.',
    image: '/images/about-reallabor.png',
  },
  {
    href: '/materialien',
    label: 'Materialien',
    title: 'Lokale Materialien, globale Wirkung.',
    image: '/images/materials-overview.png',
  },
  {
    href: '/workshops',
    label: 'Workshops & Residency',
    title: 'Wissen teilen, gemeinsam bauen.',
    image: '/images/workshops-community.png',
  },
  {
    href: '/timeline',
    label: 'Timeline',
    title: 'Phases & Milestones über 36 Monate.',
    image: '/images/timeline-construction.png',
  },
  {
    href: '/konsortium',
    label: 'Konsortium',
    title: 'Inter- und transdisziplinäre Zusammenarbeit.',
    image: '/images/about-interior.png',
  },
  {
    href: '/dokumentation',
    label: 'Dokumentation',
    title: 'Forschung transparent machen.',
    image: '/images/documentation-research.png',
  },
];

export default function HomeTeaser() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.grid}>
          {SECTIONS.map((section, index) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={section.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={section.image} alt={section.label} className={styles.img} loading="lazy" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{section.label}</span>
                  <h3 className={styles.cardTitle}>{section.title}</h3>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
