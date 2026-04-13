'use client';

import styles from './Footer.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <footer className={styles.footer} id="contact" ref={containerRef}>
      {/* Warm background section */}
      <div className={styles.top}>
        <div className="wrapper">
          <div className={styles.topGrid}>
            <div className={styles.ctaCol}>
              <p className={styles.ctaText}>
                Sprechen wir über Ihr Projekt
              </p>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Kontakt</span>
                <span className={styles.infoValue}>hello@loclab.eu</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Standort</span>
                <span className={styles.infoValue}>NOI Techpark, Bozen / Südtirol</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Förderung</span>
                <span className={styles.infoValue}>EFRE 2021–2027 · Projekt EFRE1088</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant LOCLAB wordmark */}
      <div className={styles.bottom}>
        <motion.div style={{ scale, opacity }} className={styles.wordmark}>
          LOCLAB
        </motion.div>
        <div className={`wrapper ${styles.legal}`}>
          <span>© 2026 — Alle Rechte vorbehalten</span>
          <span>Co-funded by the European Union</span>
          <span>Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
