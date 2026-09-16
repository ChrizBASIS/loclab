/**
 * Zentrale Partner-Daten — Single Source of Truth
 *
 * Verwendet von:
 * - PartnerLogos (Homepage)
 * - Partners (Seite Projektpartner)
 * - Footer (Partner-Links)
 * - EuBadge (Logo-Leiste unten)
 *
 * Beschreibungstexte liegen dreisprachig in messages/*.json
 * unter Partners.descriptions.<key>.
 */

export interface Partner {
  /** Schlüssel für Übersetzungen (Partners.descriptions.<key>) */
  key: 'unibz' | 'lokhaus' | 'haller' | 'pfeifer' | 'energytech';
  /** Vollständiger Name */
  name: string;
  /** Kurzbezeichnung für Karten/Labels */
  nameShort: string;
  /** Rolle im Projekt */
  role: 'Lead Partner' | 'Projektpartner';
  /** Pfad zum Logo in /public */
  logo: string;
  /** Website-URL */
  url: string;
  /** Logo-Höhe in px für optimale Darstellung */
  logoHeight: number;
  /** Video-Interview (URL), sobald vorhanden – wird sonst nicht angezeigt */
  video?: string;
}

export const PARTNERS: Partner[] = [
  {
    key: 'unibz',
    name: 'Freie Universität Bozen',
    nameShort: 'unibz',
    role: 'Lead Partner',
    logo: '/logos/partners/unibz.png',
    url: 'https://www.unibz.it',
    logoHeight: 72,
  },
  {
    key: 'lokhaus',
    name: 'LokHaus+',
    nameShort: 'LokHaus+',
    role: 'Projektpartner',
    logo: '/logos/partners/lokhaus.jpg',
    url: 'https://www.lokhausplus.it',
    logoHeight: 80,
  },
  {
    key: 'haller',
    name: 'Elektro A. Haller',
    nameShort: 'Elektro A. Haller',
    role: 'Projektpartner',
    logo: '/logos/partners/elektro-haller.png',
    url: 'https://www.elektro-haller.com',
    logoHeight: 72,
  },
  {
    key: 'pfeifer',
    name: 'Pfeifer Partners',
    nameShort: 'Pfeifer Partners',
    role: 'Projektpartner',
    logo: '/logos/partners/pfeifer-partners.png',
    url: 'https://www.pfeiferpartners.com',
    logoHeight: 72,
  },
  {
    key: 'energytech',
    name: 'Energytech Ingenieure',
    nameShort: 'Energytech',
    role: 'Projektpartner',
    logo: '/logos/partners/energytech-1.jpg',
    url: 'https://www.energytech.it',
    logoHeight: 72,
  },
];
