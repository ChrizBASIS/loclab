'use client';

import Image from 'next/image';
import styles from './Partners.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PARTNERS } from '@/data/partners';

export default function Partners() {
  const t = useTranslations('Partners');

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
          {t('sectionLabel')}
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          {t('heading')}
        </motion.h2>

        <div className={styles.grid}>
          {PARTNERS.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target={partner.url !== '#' ? '_blank' : undefined}
              rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {/* Logo area */}
              <div className={styles.logoWrap}>
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={200}
                  height={partner.logoHeight}
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: `${partner.logoHeight}px`,
                    maxWidth: '180px',
                  }}
                />
              </div>

              {/* Info */}
              <span className={styles.role}>{t(partner.role === 'Lead Partner' ? 'leadPartner' : 'projektpartner')}</span>
              <h3 className={styles.name}>{partner.nameShort}</h3>
              <p className={styles.detail}>{partner.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
