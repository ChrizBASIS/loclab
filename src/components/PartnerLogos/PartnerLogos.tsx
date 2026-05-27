'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import styles from './PartnerLogos.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PARTNERS } from '@/data/partners';

export default function PartnerLogos() {
  const t = useTranslations('PartnerLogos');

  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.inner}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            {t('label')}
          </motion.div>

          <motion.div
            className={styles.logos}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {PARTNERS.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target={partner.url !== '#' ? '_blank' : undefined}
                rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
                className={styles.logoItem}
                aria-label={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6 }}
              >
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={280}
                  height={partner.logoHeight}
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: `${partner.logoHeight}px`,
                    maxWidth: '200px',
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/konsortium" className={styles.ctaLink}>
              {t('cta')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
