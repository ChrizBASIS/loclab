'use client';

import styles from './Milestones.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type Phase = {
  phase: string;
  date: string;
  title: string;
  milestone: string;
  status: 'done' | 'active' | 'planned';
};

/**
 * Meilensteine – kompakte Phasenliste in der Projektbeschreibung
 * (ersetzt die Seiten Timeline und Dokumentation, vgl. Anmerkungen Gerda).
 */
export default function Milestones() {
  const t = useTranslations('Milestones');
  const phases = t.raw('phases') as Phase[];

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
          {t('label')}
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          {t('heading')}
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('intro')}
        </motion.p>

        <div className={styles.timeline}>
          {phases.map((p, index) => (
            <motion.div
              key={p.phase}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className={styles.itemMeta}>
                <span className={styles.phase}>{p.phase}</span>
                <span className={styles.date}>{p.date}</span>
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <p className={styles.milestone}>{p.milestone}</p>
              </div>
              <div className={styles.statusCol}>
                <span className={`${styles.status} ${styles[p.status]}`}>{t(`status.${p.status}`)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
