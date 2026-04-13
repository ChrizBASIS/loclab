'use client';

import styles from './Hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
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
        <motion.img
          style={{ y: imageY }}
          src="/images/hero-modular-house.png"
          alt="Modulares Haus in alpiner Landschaft"
          className={styles.image}
        />
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
          <span>Reallabor Südtirol</span>
        </motion.div>

        {/* Main headline — split layout for visual impact */}
        <motion.h1
          className={styles.title}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.titleWord}>Local</span>
          <span className={styles.titleDot}>.</span>
          <br />
          <span className={styles.titleWord}>Circular</span>
          <span className={styles.titleDot}>.</span>
          <br />
          <span className={styles.titleWord}>Low‑Tech</span>
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
            Ein EU-gefördertes Forschungsprojekt für
            <br />
            innovatives und nachhaltiges Bauen.
          </motion.p>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className={styles.scrollLine} />
            <span>Scroll</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
