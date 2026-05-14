'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './PartnerLogos.module.css';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    name: 'Freie Universität Bozen',
    logo: '/logos/partners/unibz.png',
    url: 'https://www.unibz.it',
    logoHeight: 72,
  },
  {
    name: 'Pfeifer & Partners',
    logo: '/logos/partners/pfeifer-partners.png',
    url: 'https://www.pfeiferpartners.com',
    logoHeight: 72,
  },
  {
    name: "LokHaus+",
    logo: '/logos/partners/lokhaus.jpg',
    url: '#',
    logoHeight: 80,
  },
  {
    name: 'Energytech',
    logo: '/logos/partners/energytech-1.jpg',
    url: '#',
    logoHeight: 72,
  },
  {
    name: 'Elektro A. Haller',
    logo: '/logos/partners/elektro-haller.png',
    url: '#',
    logoHeight: 72,
  },
];

export default function PartnerLogos() {
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <div className={styles.inner}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            Projektpartner
          </motion.div>

          <motion.div
            className={styles.logos}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {PARTNERS.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target={partner.url !== '#' ? '_blank' : undefined}
                rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
                className={styles.logoItem}
                aria-label={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6 }}
              >
                <Image
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  width={280}
                  height={partner.logoHeight}
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: `${partner.logoHeight}px`,
                    maxWidth: '200px',
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/konsortium" className={styles.ctaLink}>
              Alle Partner ansehen →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
