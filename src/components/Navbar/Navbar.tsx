'use client';

import { usePathname, useRouter, routing, Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Navbar.module.css';
import { useState, useEffect, useCallback } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  // Sechs Kategorien (K1–K6) – Reihenfolge wie auf der Startseite und bei Instagram
  const NAV_LINKS = [
    { href: '/projekt', label: t('projekt') },
    { href: '/partner', label: t('partner') },
    { href: '/materialien', label: t('materialien') },
    { href: '/modular-houses', label: t('modularHouses') },
    { href: '/forschung', label: t('forschung') },
    { href: '/workshops', label: t('workshops') },
  ] as const;

  // Detect if navbar is over a dark section (hero image)
  const checkBackground = useCallback(() => {
    const hero = document.querySelector('[data-section="hero"]');
    if (!hero) {
      setIsOverDark(false);
      return;
    }
    const heroRect = hero.getBoundingClientRect();
    // Navbar is "over dark" when the hero section covers the top of viewport
    setIsOverDark(heroRect.bottom > 60);
  }, []);

  useEffect(() => {
    // Initial check after paint (kein synchrones setState im Effect)
    const raf = requestAnimationFrame(checkBackground);
    window.addEventListener('scroll', checkBackground, { passive: true });
    window.addEventListener('resize', checkBackground, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, [checkBackground, pathname]);

  // Close menu on route change – State während des Renders anpassen
  // (React-Muster „adjusting state when a prop changes"), statt Effect + setState
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  // Determine color mode: dark bg = light text, light bg = dark text
  // When overlay is open, always use dark text (overlay has light bg)
  const navTheme = open ? '' : isOverDark ? styles.navLight : '';

  return (
    <>
      <nav className={`${styles.nav} ${navTheme}`}>
        <div className={`wrapper ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <Logo size={24} className={styles.logoIcon} />
            <span className={styles.logoText}>LOCLAB</span>
          </Link>

          <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={t('menuOpen')}
          >
            <span className={styles.line} />
            <span className={styles.line} />
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}>
        <div className={styles.overlayContent}>
          <div className={styles.menuLinks}>
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.menuLink} ${pathname === link.href ? styles.menuLinkActive : ''}`}
                style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
              >
                <span className={styles.menuNumber}>0{index + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.menuBottom}>
            <div className={styles.menuLangs}>
              {routing.locales.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLocaleChange(l)}
                  className={styles.lang}
                  data-active={locale === l}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className={styles.menuContact}>
              <span>{t('email')}</span>
              <span>{t('location')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
