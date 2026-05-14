'use client';

import Image from 'next/image';
import styles from './Partners.module.css';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    name: 'Freie Universität Bozen',
    nameShort: 'unibz',
    role: 'Lead Partner',
    detail: 'Fakultät für Design und Fakultät für Ingenieurwesen',
    logo: '/logos/partners/unibz.png',
    url: 'https://www.unibz.it',
    logoHeight: 48,
  },
  {
    name: 'Pfeifer & Partners',
    nameShort: 'Pfeifer & Partners',
    role: 'Projektpartner',
    detail: 'Architektur und Planung',
    logo: '/logos/partners/pfeifer-partners.png',
    url: 'https://www.pfeiferpartners.com',
    logoHeight: 48,
  },
  {
    name: "LokHaus+",
    nameShort: 'LokHaus+',
    role: 'Projektpartner',
    detail: 'Nachhaltiges Bauen & Konstruktion',
    logo: '/logos/partners/lokhaus.jpg',
    url: '#',
    logoHeight: 56,
  },
  {
    name: 'Energytech',
    nameShort: 'Energytech',
    role: 'Projektpartner',
    detail: 'Energieeffizienz & Anlagentechnik',
    logo: '/logos/partners/energytech-1.jpg',
    url: '#',
    logoHeight: 48,
  },
  {
    name: 'Elektro A. Haller',
    nameShort: 'Elektro A. Haller',
    role: 'Projektpartner',
    detail: 'Elektrotechnik & Gebäudeautomation',
    logo: '/logos/partners/elektro-haller.png',
    url: '#',
    logoHeight: 48,
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
            <motion.a
              key={partner.name}
              href={partner.url}
              target={partner.url !== '#' ? '_blank' : undefined}
              rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              {/* Logo area */}
              <div className={styles.logoWrap}>
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={200}
                  height={partner.logoHeight}
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: `${partner.logoHeight}px`,
                    maxWidth: '180px',
                  }}
                />
              </div>

              {/* Info */}
              <span className={styles.role}>{partner.role}</span>
              <h3 className={styles.name}>{partner.nameShort}</h3>
              <p className={styles.detail}>{partner.detail}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
