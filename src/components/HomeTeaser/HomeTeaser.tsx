'use client';

import Image from 'next/image';
import styles from './HomeTeaser.module.css';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/** Die sechs Kategorien (K1–K6) – Reihenfolge = Menü = Instagram-Kategorien */
const CATEGORIES = [
  { key: 'projekt', href: '/projekt', image: '/images/about-reallabor.png' },
  { key: 'partner', href: '/partner', image: '/images/workshops-community.png' },
  { key: 'materialien', href: '/materialien', image: '/images/materials-overview.png' },
  { key: 'modularHouses', href: '/modular-houses', image: '/images/timeline-construction.png' },
  { key: 'forschung', href: '/forschung', image: '/images/documentation-research.png' },
  { key: 'workshops', href: '/workshops', image: '/images/about-interior.png' },
] as const;

export default function HomeTeaser() {
  const t = useTranslations('Home');

  return (
    <>
      {/* Kurze Projektbeschreibung (Text Gerda, Sept. 2026) */}
      <section className={styles.intro}>
        <div className="wrapper">
          <motion.div
            className={styles.introLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {t('introLabel')}
          </motion.div>
          <motion.h2
            className={styles.introHeading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('introHeading')}
          </motion.h2>
          <div className={styles.introGrid}>
            <motion.p
              className={styles.introLead}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('introLead')}
            </motion.p>
            <motion.p
              className={styles.introBody}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              {t('introBody')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sechs Kategorien */}
      <section className={styles.section}>
        <div className="wrapper">
          <motion.div
            className={styles.gridLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {t('gridLabel')}
          </motion.div>

          <div className={styles.grid}>
            {CATEGORIES.map((item, index) => (
              <motion.div
                key={item.key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                variants={fadeUp}
                style={{ '--accent': `var(--cat-${index + 1})` } as React.CSSProperties}
              >
                <Link href={item.href} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={item.image}
                      alt={t(`cards.${item.key}.label`)}
                      className={styles.img}
                      width={800}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                      <span className={styles.label}>{t(`cards.${item.key}.label`)}</span>
                    </div>
                    <h3 className={styles.title}>{t(`cards.${item.key}.title`)}</h3>
                    <p className={styles.description}>{t(`cards.${item.key}.text`)}</p>
                    <span className={styles.cta}>
                      {t('cta')}
                      <span className={styles.ctaArrow}>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
