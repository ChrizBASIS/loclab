'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './EuBadge.module.css';

/**
 * Fixed EU funding badge – always visible without scrolling.
 *
 * EU Regulation 2021/1060, best practice:
 * "Es gilt als bewährtes Verfahren, das EU-Emblem und den Verweis
 *  auf die Fonds innerhalb der Anzeigefläche digitaler Geräte
 *  anzuzeigen, ohne dass der Nutzer auf der Seite nach unten
 *  scrollen muss."
 */
export default function EuBadge() {
  const t = useTranslations('EuBadge');

  return (
    <a
      href="https://europa.provincia.bz.it/it/informazione-e-visibilita"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.badge}
      aria-label={t('ariaLabel')}
    >
      <Image
        src="/logos/fesr-eu-logo.png"
        alt="EU Emblem – EFRE FESR"
        width={160}
        height={100}
        style={{ objectFit: 'contain', width: 'auto', height: '64px' }}
        className={styles.logo}
      />
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.text}>{t('text')}</span>
    </a>
  );
}
