'use client';

import styles from './GanttChart.module.css';
import { motion } from 'framer-motion';

interface WP {
  _id: string;
  wpNumber: string;
  title: string;
  description?: string;
  startMonth: number;
  endMonth: number;
  phase: number;
}

interface Props {
  workPackages: WP[];
}

export default function GanttChart({ workPackages }: Props) {
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
          Timeline
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Phases &amp; Milestones
        </motion.h2>

        <div className={styles.timeline}>
          {workPackages.map((wp, index) => {
            const duration = wp.endMonth - wp.startMonth + 1;
            const widthPercent = (duration / 36) * 100;
            const leftOffset = ((wp.startMonth - 1) / 36) * 100;

            return (
              <motion.div
                key={wp._id}
                className={styles.item}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.meta}>
                  <span className={styles.metaLabel}>{wp.wpNumber}</span>
                  <span className={styles.metaLabel}>M{wp.startMonth}–M{wp.endMonth}</span>
                </div>

                <h3 className={styles.title}>{wp.title}</h3>

                <div className={styles.descCol}>
                  {wp.description && <p className={styles.desc}>{wp.description}</p>}

                  <div className={styles.barTrack}>
                    <motion.div
                      className={styles.barFill}
                      style={{ left: `${leftOffset}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${widthPercent}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3 + (index * 0.08), duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
