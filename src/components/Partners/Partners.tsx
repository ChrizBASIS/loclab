'use client';

import Image from 'next/image';
import styles from './Partners.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PARTNERS } from '@/data/partners';

/**
 * Seite Projektpartner: Einleitung + eine Zeile pro Partner
 * (Logo | Rolle, Name, Beschreibung, Links). Beschreibungen aus messages.
 */
export default function Partners() {
  const t = useTranslations('Partners');

  return (
    <section className={styles.section}>
      <div className="wrapper">
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.labelDash} aria-hidden="true" />
          {t('label')}
        </motion.div>

        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          {t('heading')}
        </motion.h1>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('intro')}
        </motion.p>

        <div className={styles.list}>
          {PARTNERS.map((partner, index) => (
            <motion.article
              key={partner.key}
              className={styles.row}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
            >
              <div className={styles.logoCol}>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className={styles.logoLink} aria-label={partner.name}>
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={240}
                    height={partner.logoHeight}
                    style={{
                      objectFit: 'contain',
                      width: 'auto',
                      height: `${partner.logoHeight}px`,
                      maxWidth: 'min(200px, 100%)',
                    }}
                  />
                </a>
              </div>

              <div className={styles.textCol}>
                <span className={styles.role}>
                  {t(partner.role === 'Lead Partner' ? 'leadPartner' : 'projektpartner')}
                </span>
                <h2 className={styles.name}>{partner.name}</h2>
                <p className={styles.description}>{t(`descriptions.${partner.key}`)}</p>
                <div className={styles.links}>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {t('website')} <span aria-hidden="true">↗</span>
                  </a>
                  {partner.video && (
                    <a href={partner.video} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {t('video')} <span aria-hidden="true">▶</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
