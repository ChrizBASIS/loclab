'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <section className={styles.hero} ref={containerRef} data-section="hero">
      {/* Full-bleed hero image with parallax */}
      <div className={styles.imageContainer}>
        <motion.div style={{ y: imageY }} className={styles.imageMotion}>
          <Image
            src="/images/hero-modular-house.png"
            alt={t('sectionLabel')}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
        <div className={styles.imageOverlay} />
      </div>

      {/* Text content overlaying the image */}
      <motion.div style={{ opacity: textOpacity, y: textY }} className={`wrapper ${styles.content}`}>
        {/* Section label */}
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className={styles.labelLine} />
          <span>{t('sectionLabel')}</span>
        </motion.div>

        {/* Main headline — split layout for visual impact */}
        <motion.h1
          className={styles.title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.titleWord}>{t('local')}</span>
          <span className={styles.titleDot}>.</span>
          <br />
          <span className={styles.titleWord}>{t('circular')}</span>
          <span className={styles.titleDot}>.</span>
          <br />
          <span className={styles.titleWord}>{t('lowTech')}</span>
          <span className={styles.titleDot}>.</span>
        </motion.h1>

        {/* Bottom bar with tagline + scroll indicator */}
        <div className={styles.bottomBar}>
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {t('taglineLine1')}
            <br />
            {t('taglineLine2')}
          </motion.p>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className={styles.scrollLine} />
            <span>{t('scroll')}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
