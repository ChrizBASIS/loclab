'use client';

import Image from 'next/image';
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

      {/* EU Funding Logos – required by FESR/Interreg communication guidelines */}
      <div className={styles.funding}>
        <div className="wrapper">
          <div className={styles.fundingInner}>
            {/* Left: EU funding logos group */}
            <div className={styles.fundingLogos}>
              {/* 1. EU Emblem + FESR – always first per guidelines */}
              <div className={styles.logoItem}>
                <Image
                  src="/logos/fesr-eu-logo.png"
                  alt="Kofinanziert von der Europäischen Union – EFRE FESR 2021–2027"
                  width={160}
                  height={120}
                  style={{ objectFit: 'contain', width: 'auto', height: '80px' }}
                />
              </div>
              {/* 2. Interreg VI-A Italia–Österreich */}
              <div className={styles.logoItem}>
                <Image
                  src="/logos/interreg-logo.png"
                  alt="Interreg VI-A Italia – Österreich 2021–2027"
                  width={220}
                  height={80}
                  style={{ objectFit: 'contain', width: 'auto', height: '80px' }}
                />
              </div>
            </div>

            {/* Mandatory co-funding text (IT + DE) */}
            <div className={styles.fundingText}>
              <p>
                Realizzato con il cofinanziamento dell&apos;Unione europea nell&apos;ambito del programma EFRE-FESR 2021–2027
              </p>
              <p>
                Kofinanziert von der Europäischen Union im Rahmen des Programms EFRE-FESR 2021–2027
              </p>
            </div>

            {/* Vertical divider */}
            <div className={styles.fundingDivider} aria-hidden="true" />

            {/* 3. Unibz – institutional partner logo (after EU logos per guidelines) */}
            <div className={styles.logoItem}>
              <Image
                src="/logos/unibz-logo.png"
                alt="Freie Universität Bozen – Libera Università di Bolzano – Free University of Bozen-Bolzano"
                width={200}
                height={80}
                style={{ objectFit: 'contain', width: 'auto', height: '56px' }}
              />
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
