'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './EuBadge.module.css';

/**
 * EU funding logo bar — rendered statically in the header area (below navbar).
 *
 * EU Regulation 2021/1060, best practice:
 * "Es gilt als bewährtes Verfahren, das EU-Emblem und den Verweis
 *  auf die Fonds innerhalb der Anzeigefläche digitaler Geräte
 *  anzuzeigen, ohne dass der Nutzer auf der Seite nach unten
 *  scrollen muss."
 *
 * Implementation: Fixed bar at the top (below navbar), not scrolling with content.
 * Logo height set so visible emblems are ≥ 1cm (38px at 96dpi).
 */
export default function EuBadge() {
  const t = useTranslations('EuBadge');

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
            className={styles.logo}
          />
        </a>
        <span className={styles.divider} aria-hidden="true" />
        <span className={styles.text}>{t('text')}</span>
      </div>
    </div>
  );
}
