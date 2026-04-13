'use client';

import styles from './Residence.module.css';
import { motion } from 'framer-motion';

const DETAILS = [
  { label: 'Dauer', value: '4–12 Wochen' },
  { label: 'Ort', value: 'Modular Houses, Südtirol' },
  { label: 'Für', value: 'Architekten, Designer, Forscher' },
  { label: 'Output', value: 'Ausstellung, Publikation oder Prototyp' },
];

export default function Residence() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.layout}>
          <div className={styles.textCol}>
            <motion.div
              className={styles.sectionLabel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              Open Call
            </motion.div>

            <motion.h2
              className={styles.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15, duration: 1 }}
            >
              Designer in Residence
            </motion.h2>

            <motion.p
              className={styles.body}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              LocLab lädt Architekten, Designer und Forscher ein, an der Schnittstelle 
              von nachhaltigen Materialien, modularem Bau und partizipativem Design zu arbeiten. 
              Residents erhalten Studio-Space, Zugang zu Material-Werkstätten und den zwei 
              modularen Häusern, sowie Austausch mit dem unibz-Forschungsteam.
            </motion.p>
          </div>

          <div className={styles.infoCol}>
            {DETAILS.map((detail, index) => (
              <motion.div
                key={detail.label}
                className={styles.infoItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              >
                <span className={styles.infoLabel}>{detail.label}</span>
                <span className={styles.infoValue}>{detail.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
