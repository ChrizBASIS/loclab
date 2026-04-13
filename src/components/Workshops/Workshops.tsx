'use client';

import styles from './Workshops.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WORKSHOP_TYPES = [
  {
    number: '01',
    title: 'Material-Workshops',
    description: 'Hands-on Erfahrung mit Lehm, Stroh, Holz und Hanf-Kalk. Teilnehmer lernen traditionelle und innovative Verarbeitungstechniken unter Anleitung lokaler Handwerker.',
  },
  {
    number: '02',
    title: 'Szenarien-Workshops',
    description: 'Gemeinsam mit Bürgerinnen, Architekten und Forschenden entwickeln wir Zukunftsszenarien für nachhaltiges Bauen in Südtirol — partizipativ und spekulativ.',
  },
  {
    number: '03',
    title: 'Messkampagnen',
    description: 'Physikalische und umwelttechnische Messungen an den modularen Häusern. Erfahrungen mit VR-Brillen, Tobi Glasses und anderen digitalen Werkzeugen für Wahrnehmungsstudien.',
  },
  {
    number: '04',
    title: 'Partizipative Interventionen',
    description: 'Bewusstseinsbildende Aktionen in Bozen und Schlanders — die Reallabore öffnen ihre Türen für die Öffentlichkeit, Schulen und lokale Gemeinschaften.',
  },
];

export default function Workshops() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="wrapper">
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Workshops & Reallabore
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Wissen teilen, gemeinsam bauen.
        </motion.h2>

        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <motion.img
                style={{ y: imgY }}
                src="/images/workshops-community.png"
                alt="Partizipative Workshops in Südtirol"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.listCol}>
            {WORKSHOP_TYPES.map((ws, index) => (
              <motion.div
                key={ws.number}
                className={styles.item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <span className={styles.itemNumber}>{ws.number}</span>
                <div className={styles.itemText}>
                  <h3 className={styles.itemTitle}>{ws.title}</h3>
                  <p className={styles.itemDesc}>{ws.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
