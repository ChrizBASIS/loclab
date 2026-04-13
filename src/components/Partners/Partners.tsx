'use client';

import styles from './Partners.module.css';
import { motion } from 'framer-motion';

const PARTNERS = [
  { 
    name: 'unibz', 
    role: 'Lead Partner',
    detail: 'Fakultät für Design und Fakultät für Ingenieurwesen',
  },
  { 
    name: 'Pfeifer & Partners', 
    role: 'Projektpartner',
    detail: 'Architektur und Planung',
  },
  { 
    name: 'LokHaus+', 
    role: 'Projektpartner',
    detail: 'Modularer Holzbau & Konstruktion',
  },
  { 
    name: 'Energytech', 
    role: 'Projektpartner',
    detail: 'Energieeffizienz & Anlagentechnik',
  },
  { 
    name: 'Elektro A. Haller', 
    role: 'Projektpartner',
    detail: 'Elektrotechnik & Gebäudeautomation',
  },
];

export default function Partners() {
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
          Konsortium
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Inter- und transdisziplinäre Zusammenarbeit.
        </motion.h2>

        <div className={styles.grid}>
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <span className={styles.role}>{partner.role}</span>
              <h3 className={styles.name}>{partner.name}</h3>
              <p className={styles.detail}>{partner.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
