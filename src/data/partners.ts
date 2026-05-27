/**
 * Zentrale Partner-Daten — Single Source of Truth
 *
 * Verwendet von:
 * - PartnerLogos (Homepage)
 * - Partners (Konsortium-Seite)
 * - Footer (Konsortium-Links)
 */

export interface Partner {
  /** Vollständiger Name */
  name: string;
  /** Kurzbezeichnung für Karten/Labels */
  nameShort: string;
  /** Rolle im Projekt */
  role: 'Lead Partner' | 'Projektpartner';
  /** Fachgebiet */
  detail: string;
  /** Pfad zum Logo in /public */
  logo: string;
  /** Website-URL (# wenn nicht vorhanden) */
  url: string;
  /** Logo-Höhe in px für optimale Darstellung */
  logoHeight: number;
}

export const PARTNERS: Partner[] = [
  {
    name: 'Freie Universität Bozen',
    nameShort: 'unibz',
    role: 'Lead Partner',
    detail: 'Fakultät für Design und Fakultät für Ingenieurwesen',
    logo: '/logos/partners/unibz.png',
    url: 'https://www.unibz.it',
    logoHeight: 72,
  },
  {
    name: 'Pfeifer & Partners',
    nameShort: 'Pfeifer & Partners',
    role: 'Projektpartner',
    detail: 'Architektur und Planung',
    logo: '/logos/partners/pfeifer-partners.png',
    url: 'https://www.pfeiferpartners.com',
    logoHeight: 72,
  },
  {
    name: 'LokHaus+',
    nameShort: 'LokHaus+',
    role: 'Projektpartner',
    detail: 'Nachhaltiges Bauen & Konstruktion',
    logo: '/logos/partners/lokhaus.jpg',
    url: '#',
    logoHeight: 80,
  },
  {
    name: 'Energytech',
    nameShort: 'Energytech',
    role: 'Projektpartner',
    detail: 'Energieeffizienz & Anlagentechnik',
    logo: '/logos/partners/energytech-1.jpg',
    url: '#',
    logoHeight: 72,
  },
  {
    name: 'Elektro A. Haller',
    nameShort: 'Elektro A. Haller',
    role: 'Projektpartner',
    detail: 'Elektrotechnik & Gebäudeautomation',
    logo: '/logos/partners/elektro-haller.png',
    url: '#',
    logoHeight: 72,
  },
];
