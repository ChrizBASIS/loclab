'use client';

import Image from 'next/image';
import styles from './HomeTeaser.module.css';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeTeaser() {
  const t = useTranslations('HomeTeaser');

  const SECTIONS = [
    {
      href: '/projekt' as const,
      label: t('projektLabel'),
      title: t('projektTitle'),
      description: t('projektDescription'),
      image: '/images/about-reallabor.png',
      imageRight: true,
    },
    {
      href: '/materialien' as const,
      label: t('materialienLabel'),
      title: t('materialienTitle'),
      description: t('materialienDescription'),
      image: '/images/materials-overview.png',
      imageRight: false,
    },
    {
      href: '/workshops' as const,
      label: t('workshopsLabel'),
      title: t('workshopsTitle'),
      description: t('workshopsDescription'),
      image: '/images/workshops-community.png',
      imageRight: true,
    },
  ];

  return (
    <section className={styles.section}>
      {SECTIONS.map((item) => (
        <motion.div
          key={item.href}
          className={styles.block}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          variants={fadeUp}
        >
          <div className="wrapper">
            <div className={`${styles.row} ${item.imageRight ? '' : styles.imageLeft}`}>
              <div className={styles.textCol}>
                <span className={styles.label}>{item.label}</span>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <Link href={item.href} className={styles.cta}>
                  {t('cta')}
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </div>
              <div className={styles.imageCol}>
                <Image
                  src={item.image}
                  alt={item.label}
                  className={styles.img}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom quick links */}
      <div className="wrapper">
        <div className={styles.quickLinks}>
          <Link href="/timeline" className={styles.quickLink}>
            <span className={styles.quickLabel}>{t('timelineLabel')}</span>
            <span className={styles.quickTitle}>{t('timelineTitle')}</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
          <Link href="/konsortium" className={styles.quickLink}>
            <span className={styles.quickLabel}>{t('konsortiumLabel')}</span>
            <span className={styles.quickTitle}>{t('konsortiumTitle')}</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
          <Link href="/dokumentation" className={styles.quickLink}>
            <span className={styles.quickLabel}>{t('dokumentationLabel')}</span>
            <span className={styles.quickTitle}>{t('dokumentationTitle')}</span>
            <span className={styles.quickArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
