'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './EuBadge.module.css';
import Logo from '@/components/Navbar/Logo';
import { PARTNERS } from '@/data/partners';

/**
 * Logo-Leiste am unteren Rand (fixiert, immer sichtbar).
 *
 * EU-Verordnung 2021/1060: Emblem und Fonds-Hinweis sollen ohne Scrollen
 * sichtbar sein. Laut Anmerkungen (Gerda, Sept. 2026) enthält die Leiste
 * alle Logos – EU/EFRE-Block, unibz, LocLab und die vier Projektpartner –
 * und keinen Text mehr. Auf schmalen Screens ist die Leiste horizontal
 * scrollbar, der EU-Block steht immer vorne.
 */
export default function EuBadge() {
  const t = useTranslations('EuBadge');
  const partners = PARTNERS.filter((p) => p.key !== 'unibz');

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <a
          href="https://europa.provincia.bz.it/it/informazione-e-visibilita"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.logoLink}
          aria-label={t('ariaLabel')}
        >
          <Image
            src="/logos/fesr-eu-logo.png"
            alt="EU Emblem – EFRE FESR 2021–2027"
            width={1035}
            height={294}
            priority
            className={styles.euLogo}
          />
        </a>

        <span className={styles.divider} aria-hidden="true" />

        <a href="https://www.unibz.it" target="_blank" rel="noopener noreferrer" className={styles.logoLink} aria-label="Freie Universität Bozen">
          <Image src="/logos/unibz-logo.png" alt="unibz" width={240} height={96} className={styles.partnerLogo} />
        </a>

        <span className={styles.loclab} aria-label="LocLab">
          <Logo size={20} />
          <span className={styles.loclabText}>LOCLAB</span>
        </span>

        <span className={styles.divider} aria-hidden="true" />

        <div className={styles.partners} aria-label={t('partnersLabel')}>
          {partners.map((p) => (
            <a key={p.key} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.logoLink} aria-label={p.name}>
              <Image src={p.logo} alt={`Logo ${p.name}`} width={240} height={p.logoHeight} className={styles.partnerLogo} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
