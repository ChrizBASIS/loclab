'use client';

import Image from 'next/image';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PARTNERS } from '@/data/partners';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer} id="contact">
      {/* Top: contact info */}
      <div className={styles.top}>
        <div className="wrapper">
          <div className={styles.topGrid}>
            <div className={styles.ctaCol}>
              <p className={styles.ctaText}>
                {t('ctaText')}
              </p>
            </div>
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{t('contactLabel')}</span>
                <span className={styles.infoValue}>hello@loclab.eu</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{t('locationLabel')}</span>
                <span className={styles.infoValue}>{t('locationValue')}</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>{t('fundingLabel')}</span>
                <span className={styles.infoValue}>{t('fundingValue')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner text links */}
      <div className={styles.partners}>
        <div className="wrapper">
          <div className={styles.partnersInner}>
            <span className={styles.partnersLabel}>{t('consortiumLabel')}</span>
            <nav className={styles.partnersList} aria-label={t('consortiumLabel')}>
              {PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target={partner.url !== '#' ? '_blank' : undefined}
                  rel={partner.url !== '#' ? 'noopener noreferrer' : undefined}
                  className={styles.partnerLink}
                >
                  {partner.name}
                  {partner.role === 'Lead Partner' && (
                    <span className={styles.partnerRole}> ({t('leadPartner')})</span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Giant LOCLAB wordmark – uses whileInView for reliable fade-in */}
      <div className={styles.bottom}>
        <motion.div
          className={styles.wordmark}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          LOCLAB
        </motion.div>

        {/* EU Funding Logos – boxed under LOCLAB */}
        <div className="wrapper">
          <div className={styles.fundingInner}>
            <div className={styles.fundingLogos}>
              <a
                href="https://europa.provincia.bz.it/it/informazione-e-visibilita"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoItem}
                aria-label="EFRE FESR Programm 2021–2027"
              >
                <Image
                  src="/logos/fesr-eu-logo.png"
                  alt={t('fundingTextDe')}
                  width={200}
                  height={150}
                  style={{ objectFit: 'contain', width: 'auto', height: '72px' }}
                />
              </a>
              <a
                href="https://www.interreg.net/it/2021-2027/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoItem}
                aria-label="Interreg VI-A Italia – Österreich 2021–2027"
              >
                <Image
                  src="/logos/interreg-logo.png"
                  alt="Interreg VI-A Italia – Österreich 2021–2027"
                  width={280}
                  height={100}
                  style={{ objectFit: 'contain', width: 'auto', height: '72px' }}
                />
              </a>
            </div>

            <div className={styles.fundingText}>
              <p>{t('fundingTextIt')}</p>
              <p>{t('fundingTextDe')}</p>
            </div>

            <div className={styles.fundingDivider} aria-hidden="true" />

            <a
              href="https://www.unibz.it"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoItem}
              aria-label="Freie Universität Bozen"
            >
              <Image
                src="/logos/unibz-logo.png"
                alt="Freie Universität Bozen – Libera Università di Bolzano"
                width={240}
                height={96}
                style={{ objectFit: 'contain', width: 'auto', height: '56px' }}
              />
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="wrapper">
          <div className={styles.legal}>
            <span>{t('legalCopyright')}</span>
            <span>{t('legalFunding')}</span>
            <span>{t('legalPrivacy')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
