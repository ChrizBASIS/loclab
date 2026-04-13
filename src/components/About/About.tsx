'use client';

import styles from './About.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

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
          Das Projekt
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Ein Reallabor für innovatives Bauen.
        </motion.h2>

        {/* Row 2: Image Left + Text Right */}
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <motion.img
                style={{ y: imgY }}
                src="/images/about-reallabor.png"
                alt="Modulare Bauweise in Südtirol"
                className={styles.image}
                loading="lazy"
              />
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
              LocLab ist ein EU-gefördertes Reallabor für lokales, zirkuläres und lowtech Bauen in Südtirol.
            </motion.p>
            <motion.p
              className={styles.bodySmall}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Im Mittelpunkt stehen zwei modulare Häuser, die als physische und digitale Testfelder dienen. 
              Durch transdisziplinäre Forschung konzentrieren wir uns auf Materiallebenszyklen, 
              Gemeinschaftsbeteiligung und strukturelle Sensorik — für eine neue Ära des nachhaltigen Bauens.
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
              Zwei modulare Häuser als physische und digitale Reallabore.
            </motion.blockquote>
          </div>
          <div className={styles.imageCol2}>
            <div className={styles.imageWrap2}>
              <motion.img
                style={{ y: useTransform(scrollYProgress, [0.3, 1], ["-5%", "5%"]) }}
                src="/images/about-interior.png"
                alt="Interieur eines modularen Hauses"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
