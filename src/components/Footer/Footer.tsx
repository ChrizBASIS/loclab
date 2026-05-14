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

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <footer className={styles.footer} id="contact" ref={containerRef}>
      {/* Top: contact info */}
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

      {/* Partner text links */}
      <div className={styles.partners}>
        <div className="wrapper">
          <div className={styles.partnersInner}>
            <span className={styles.partnersLabel}>Konsortium</span>
            <nav className={styles.partnersList} aria-label="Projektpartner">
              <a href="https://www.unibz.it" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                Freie Universität Bozen <span className={styles.partnerRole}>(Lead Partner)</span>
              </a>
              <a href="https://www.pfeiferpartners.com" target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                Pfeifer &amp; Partners
              </a>
              <a href="#" className={styles.partnerLink}>LokHaus+</a>
              <a href="#" className={styles.partnerLink}>Energytech</a>
              <a href="#" className={styles.partnerLink}>Elektro A. Haller</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Giant LOCLAB wordmark */}
      <div className={styles.bottom}>
        <motion.div style={{ scale, opacity }} className={styles.wordmark}>
          LOCLAB
        </motion.div>

        {/* EU Funding Logos – UNDER LOCLAB wordmark, in one line */}
        <div className={`wrapper ${styles.fundingInner}`}>
          <div className={styles.fundingLogos}>
            {/* 1. EU Emblem + FESR */}
            <a
              href="https://europa.provincia.bz.it/it/informazione-e-visibilita"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoItem}
              aria-label="EFRE FESR Programm 2021–2027"
            >
              <Image
                src="/logos/fesr-eu-logo.png"
                alt="Kofinanziert von der Europäischen Union – EFRE FESR 2021–2027"
                width={160}
                height={120}
                style={{ objectFit: 'contain', width: 'auto', height: '56px' }}
              />
            </a>
            {/* 2. Interreg VI-A Italia–Österreich */}
            <a
              href="https://www.interreg.net/it/2021-2027/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoItem}
              aria-label="Interreg VI-A Italia – Österreich 2021–2027"
            >
              <Image
                src="/logos/interreg-logo.png"
                alt="Interreg VI-A Italia – Österreich 2021–2027"
                width={220}
                height={80}
                style={{ objectFit: 'contain', width: 'auto', height: '56px' }}
              />
            </a>
          </div>

          {/* Mandatory co-funding text (IT + DE) */}
          <div className={styles.fundingText}>
            <p>Realizzato con il cofinanziamento dell&apos;Unione europea – EFRE-FESR 2021–2027</p>
            <p>Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027</p>
          </div>

          <div className={styles.fundingDivider} aria-hidden="true" />

          {/* 3. Unibz */}
          <a
            href="https://www.unibz.it"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoItem}
            aria-label="Freie Universität Bozen"
          >
            <Image
              src="/logos/unibz-logo.png"
              alt="Freie Universität Bozen – Libera Università di Bolzano"
              width={200}
              height={80}
              style={{ objectFit: 'contain', width: 'auto', height: '44px' }}
            />
          </a>
        </div>

        {/* Legal row */}
        <div className={`wrapper ${styles.legal}`}>
          <span>© 2026 — Alle Rechte vorbehalten</span>
          <span>Co-funded by the European Union · EFRE1088</span>
          <span>Datenschutz</span>
        </div>
      </div>
    </footer>
  );
}
