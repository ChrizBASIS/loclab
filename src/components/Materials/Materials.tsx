'use client';

import styles from './Materials.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Materialpass – Auszug der Materialsammlung.
 * Kennwerte (λ) und Bilder hier; Namen/Rollen/Beschreibungen in messages (Materials.items).
 * Die vollständige Sammlung (16 Materialien) liefert das unibz-Team im Projektverlauf.
 */
const MATERIALS = [
  { id: 'holz', lambda: '0.13', image: '/images/material-holz.png' },
  { id: 'lehm', lambda: '0.91', image: '/images/material-lehm.png' },
  { id: 'stroh', lambda: '0.045', image: '/images/material-stroh.png' },
  { id: 'hanf', lambda: '0.06', image: '/images/material-hanfkalk.png' },
  { id: 'stein', lambda: '2.3', image: '/images/material-naturstein.png' },
  { id: 'recycling', lambda: '1.65', image: '/images/material-recycling.png' },
] as const;

export default function Materials() {
  const t = useTranslations('Materials');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className={styles.section} id="materialpass">
      <div className="wrapper">
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {t('passLabel')}
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          {t('passHeading')}
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('passIntro')}
        </motion.p>

        <div className={styles.grid}>
          {MATERIALS.map((mat, index) => (
            <motion.div
              key={mat.id}
              className={`${styles.card} ${expandedId === mat.id ? styles.cardExpanded : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              onClick={() => setExpandedId(expandedId === mat.id ? null : mat.id)}
            >
              <div className={styles.cardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element -- Karten-Layout steuert die Größe per CSS */}
                <img src={mat.image} alt={t(`items.${mat.id}.name`)} className={styles.img} loading="lazy" />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardRole}>{t(`items.${mat.id}.role`)}</span>
                <h3 className={styles.cardName}>{t(`items.${mat.id}.name`)}</h3>
                <span className={styles.cardSubtitle}>{t(`items.${mat.id}.subtitle`)}</span>

                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>{t('statLambda')}</span>
                    <span className={styles.statValue}>{mat.lambda}</span>
                    <span className={styles.statUnit}>W/mK</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>{t('statCo2')}</span>
                    <span className={styles.statValue}>{t(`items.${mat.id}.co2Label`)}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>{t('statRecycle')}</span>
                    <span className={styles.statValue}>{t(`items.${mat.id}.recycle`)}</span>
                  </div>
                </div>

                <motion.p
                  className={styles.cardDesc}
                  initial={false}
                  animate={{
                    height: expandedId === mat.id ? 'auto' : 0,
                    opacity: expandedId === mat.id ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {t(`items.${mat.id}.description`)}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
