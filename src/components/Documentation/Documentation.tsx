'use client';

import styles from './Documentation.module.css';
import { motion } from 'framer-motion';

const PUBLICATIONS = [
  {
    phase: 'Phase 1',
    date: 'M1–M6',
    title: 'Kick-Off & Arbeitsplan',
    status: 'abgeschlossen',
    milestone: 'M1 Kick-Off · M2 Finaler Zeitplan',
  },
  {
    phase: 'Phase 2',
    date: 'M7–M14',
    title: 'Realisierung & Bau der Modular Houses',
    status: 'in Arbeit',
    milestone: 'M3 MH fertiggestellt · M4 Reallabor-Standorte betriebsbereit',
  },
  {
    phase: 'Phase 3',
    date: 'M15–M24',
    title: 'Messungen, LCA & Workshops',
    status: 'geplant',
    milestone: 'M5 Abschluss Messungen · M6 Abschluss Reallabore Bozen & Schlanders',
  },
  {
    phase: 'Phase 4',
    date: 'M25–M36',
    title: 'Auswertung, Synthese & Publikation',
    status: 'geplant',
    milestone: 'M7 Abschlussbericht · M8 Öffentliche Abschlussveranstaltung',
  },
];

export default function Documentation() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Dokumentation
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Forschung transparent machen.
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Über 36 Monate dokumentieren wir alle Ergebnisse — von der LCA- und CE-Auswertung 
          der modularen Häuser bis hin zu wissenschaftlichen Publikationen und Konferenzbeiträgen. 
          Projektlaufzeit: 36 Monate. CUP EFRE: I53C25001610009.
        </motion.p>

        <div className={styles.timeline}>
          {PUBLICATIONS.map((pub, index) => (
            <motion.div
              key={pub.phase}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className={styles.itemMeta}>
                <span className={styles.phase}>{pub.phase}</span>
                <span className={styles.date}>{pub.date}</span>
              </div>

              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{pub.title}</h3>
                <p className={styles.milestone}>{pub.milestone}</p>
              </div>

              <div className={styles.statusCol}>
                <span className={`${styles.status} ${styles[pub.status.replace(/\s/g, '')]}`}>
                  {pub.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
