'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './MaterialMap.module.css';
import { TreePine, BrickWall, Wheat, Sprout, Mountain, Recycle } from 'lucide-react';

/* ===== TYPES ===== */

export type MaterialType = 'holz' | 'lehm' | 'stroh' | 'hanf' | 'stein' | 'recycling';

export interface MaterialSource {
  id: string;
  material: MaterialType;
  name: string;
  location: string;
  detail: string;
  lat: number;
  lng: number;
}

/* ===== DATA ===== */

export const MATERIAL_COLORS: Record<MaterialType, string> = {
  holz:      '#5C4A1E',
  lehm:      '#B8855A',
  stroh:     '#C9A84C',
  hanf:      '#7A9E6E',
  stein:     '#8A8A8A',
  recycling: '#1B3A2D',
};

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  holz:      'Holz',
  lehm:      'Lehm',
  stroh:     'Stroh',
  hanf:      'Hanf-Kalk',
  stein:     'Naturstein',
  recycling: 'Recycling',
};

export const MATERIAL_ICONS: Record<MaterialType, React.ReactNode> = {
  holz:      <TreePine size={16} strokeWidth={1.5} />,
  lehm:      <BrickWall size={16} strokeWidth={1.5} />,
  stroh:     <Wheat size={16} strokeWidth={1.5} />,
  hanf:      <Sprout size={16} strokeWidth={1.5} />,
  stein:     <Mountain size={16} strokeWidth={1.5} />,
  recycling: <Recycle size={16} strokeWidth={1.5} />,
};

const SOURCES: MaterialSource[] = [
  // Holz
  { id: 'h1', material: 'holz', name: 'Staatswald Vigiljoch',    location: 'Lana',        detail: 'Fichte & Lärche, zertifizierte Forstwirtschaft', lat: 46.62, lng: 11.16 },
  { id: 'h2', material: 'holz', name: 'Gsiesertal Forst',        location: 'Gsiesertal',  detail: 'Fichte, nachhaltige Forstwirtschaft', lat: 46.83, lng: 12.13 },
  { id: 'h3', material: 'holz', name: 'Ultental Wald',           location: 'Ultental',    detail: 'Lärche & Tanne, lokale Sägerei', lat: 46.54, lng: 11.04 },
  { id: 'h4', material: 'holz', name: 'Ahrntal Forst',           location: 'Ahrntal',     detail: 'Fichte, Vollholz & CLT', lat: 47.02, lng: 11.98 },
  // Lehm
  { id: 'l1', material: 'lehm', name: 'Lehmvorkommen Brixen',    location: 'Brixen',      detail: 'Stampflehm & Lehmputz', lat: 46.71, lng: 11.66 },
  { id: 'l2', material: 'lehm', name: 'Terlan Tonvorkommen',     location: 'Terlan',      detail: 'Hochwertiger Ton für Lehmputz', lat: 46.53, lng: 11.24 },
  { id: 'l3', material: 'lehm', name: 'Laaser Lehm',             location: 'Laas',        detail: 'Lehm für Innenwände & Ausfachung', lat: 46.62, lng: 10.68 },
  // Stroh
  { id: 's1', material: 'stroh', name: 'Obstbauzone Vinschgau',  location: 'Vinschgau',   detail: 'Strohballen aus Getreidewirtschaft', lat: 46.68, lng: 10.77 },
  { id: 's2', material: 'stroh', name: 'Getreideanbau Burggrafenamt', location: 'Meran',  detail: 'Stroh als Dämmstoff, λ = 0.045 W/mK', lat: 46.67, lng: 11.18 },
  { id: 's3', material: 'stroh', name: 'Etschtal Landwirtschaft', location: 'Bozen Süd',  detail: 'Weizen- & Gerstenstroh', lat: 46.44, lng: 11.33 },
  // Hanf-Kalk
  { id: 'hk1', material: 'hanf', name: 'Hanfanbau Vinschgau',    location: 'Schlanders',  detail: 'Hanfschäben für Hempcrete', lat: 46.63, lng: 10.77 },
  { id: 'hk2', material: 'hanf', name: 'Hanffelder Pustertal',   location: 'Bruneck',     detail: 'CO₂-negative Hanf-Kalk-Mischung', lat: 46.80, lng: 11.94 },
  // Naturstein
  { id: 'ns1', material: 'stein', name: 'Laaser Marmor',         location: 'Laas',        detail: 'Weißer Marmor, λ = 2.3 W/mK', lat: 46.61, lng: 10.67 },
  { id: 'ns2', material: 'stein', name: 'Villnoestal Porphyr',   location: 'Villanders',  detail: 'Roter Porphyr, Fundament & Sockel', lat: 46.68, lng: 11.51 },
  { id: 'ns3', material: 'stein', name: 'Deutschnofen Porphyr',  location: 'Deutschnofen',detail: 'Porphyr-Steinbruch, unlimitierte Wiederverwertbarkeit', lat: 46.41, lng: 11.40 },
  { id: 'ns4', material: 'stein', name: 'Dolomit-Bruch Klausen', location: 'Klausen',     detail: 'Dolomit & Kalkstein', lat: 46.64, lng: 11.58 },
  { id: 'ns5', material: 'stein', name: 'Gneis Passeiertal',     location: 'Passeiertal', detail: 'Gneis, hohe Druckfestigkeit', lat: 46.81, lng: 11.21 },
  // Recycling
  { id: 'r1', material: 'recycling', name: 'Recyclinghof Bozen',    location: 'Bozen',    detail: 'RC-Beton, Altholz, Ziegel', lat: 46.50, lng: 11.36 },
  { id: 'r2', material: 'recycling', name: 'Wertstoffzentrum Meran', location: 'Meran',   detail: 'Rückbaumaterial kartiert (PROSUST)', lat: 46.67, lng: 11.16 },
  { id: 'r3', material: 'recycling', name: 'Recyclinghof Brixen',   location: 'Brixen',   detail: 'Altholz & RC-Zuschläge', lat: 46.72, lng: 11.65 },
  { id: 'r4', material: 'recycling', name: 'Wertstoffhof Bruneck',  location: 'Bruneck',  detail: '-40% CO₂ vs. Primärmaterial', lat: 46.79, lng: 11.93 },
];

/* ===== FILTER BAR ===== */

const ALL_TYPES: MaterialType[] = ['holz', 'lehm', 'stroh', 'hanf', 'stein', 'recycling'];

/* ===== DYNAMIC IMPORT (SSR disabled for Leaflet) ===== */

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Karte wird geladen…</div>,
});

/* ===== MAIN COMPONENT ===== */

export default function MaterialMap() {
  const [activeFilter, setActiveFilter] = useState<MaterialType | 'all'>('all');

  const filtered = activeFilter === 'all'
    ? SOURCES
    : SOURCES.filter(s => s.material === activeFilter);

  return (
    <div className={styles.root}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.label}>Materialkartierung · Südtirol</span>
        <h3 className={styles.heading}>Wo kommen die Materialien her?</h3>
        <p className={styles.intro}>
          {SOURCES.length} kartierte Standorte in Südtirol — Wälder, Steinbrüche,
          Landwirtschaftsflächen und Recyclinghöfe.
          Klick auf einen Marker für Details.
        </p>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <button
          className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterBtnActive : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          Alle <span className={styles.filterCount}>{SOURCES.length}</span>
        </button>
        {ALL_TYPES.map(type => (
          <button
            key={type}
            className={`${styles.filterBtn} ${activeFilter === type ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveFilter(type)}
            style={activeFilter === type ? {
              borderColor: MATERIAL_COLORS[type],
              color: MATERIAL_COLORS[type],
            } : {}}
          >
            <span>{MATERIAL_ICONS[type]}</span>
            {MATERIAL_LABELS[type]}
            <span className={styles.filterCount}>
              {SOURCES.filter(s => s.material === type).length}
            </span>
          </button>
        ))}
      </div>

      {/* Map */}
      <div className={styles.mapWrap}>
        <LeafletMap sources={filtered} />
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        {ALL_TYPES.map(type => (
          <div key={type} className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: MATERIAL_COLORS[type] }} />
            <span>{MATERIAL_LABELS[type]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
