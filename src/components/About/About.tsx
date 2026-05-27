'use client';

import Image from 'next/image';
import styles from './About.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const img2Y = useTransform(scrollYProgress, [0.3, 1], ["-5%", "5%"]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="wrapper">

        {/* Row 1: Section Label + Huge Title */}
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
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('heading')}
        </motion.h2>

        {/* Row 2: Image Left + Text Right */}
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <motion.div style={{ y: imgY }} className={styles.imageMotion}>
                <Image
                  src="/images/about-reallabor.png"
                  alt={t('heroAlt')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          <div className={styles.textCol}>
            <motion.p
              className={styles.bodyLarge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('bodyLarge')}
            </motion.p>
            <motion.p
              className={styles.bodySmall}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('bodySmall')}
            </motion.p>
          </div>
        </div>

        {/* Row 3: Quote + second image */}
        <div className={styles.gridReverse}>
          <div className={styles.quoteCol}>
            <motion.blockquote
              className={styles.quote}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('quote')}
            </motion.blockquote>
          </div>
          <div className={styles.imageCol2}>
            <div className={styles.imageWrap2}>
              <motion.div style={{ y: img2Y }} className={styles.imageMotion}>
                <Image
                  src="/images/about-interior.png"
                  alt={t('interiorAlt')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
