'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import styles from '@/components/MaterialMap/MaterialMap.module.css';
import {
  MATERIAL_COLORS,
  MATERIAL_LABELS,
  MATERIAL_ICONS,
  type MaterialType,
  type MaterialSource,
} from '@/components/MaterialMap/MaterialMap';

/* ===== DATA ===== */
const SOURCES: MaterialSource[] = [
  { id: 'h1',  material: 'holz',      name: 'Staatswald Vigiljoch',         location: 'Lana',         detail: 'Fichte & Lärche, zertifizierte Forstwirtschaft', lat: 46.62, lng: 11.16 },
  { id: 'h2',  material: 'holz',      name: 'Gsiesertal Forst',             location: 'Gsiesertal',   detail: 'Fichte, nachhaltige Forstwirtschaft',             lat: 46.83, lng: 12.13 },
  { id: 'h3',  material: 'holz',      name: 'Ultental Wald',                location: 'Ultental',     detail: 'Lärche & Tanne, lokale Sägerei',                  lat: 46.54, lng: 11.04 },
  { id: 'h4',  material: 'holz',      name: 'Ahrntal Forst',                location: 'Ahrntal',      detail: 'Fichte, Vollholz & CLT-Produktion',               lat: 47.02, lng: 11.98 },
  { id: 'l1',  material: 'lehm',      name: 'Lehmvorkommen Brixen',         location: 'Brixen',       detail: 'Stampflehm & Lehmputz',                           lat: 46.71, lng: 11.66 },
  { id: 'l2',  material: 'lehm',      name: 'Terlan Tonvorkommen',          location: 'Terlan',       detail: 'Hochwertiger Ton für Lehmputz',                   lat: 46.53, lng: 11.24 },
  { id: 'l3',  material: 'lehm',      name: 'Laaser Lehm',                  location: 'Laas',         detail: 'Lehm für Innenwände & Ausfachung',                lat: 46.62, lng: 10.68 },
  { id: 's1',  material: 'stroh',     name: 'Obstbauzone Vinschgau',        location: 'Vinschgau',    detail: 'Strohballen aus Getreidewirtschaft',              lat: 46.68, lng: 10.77 },
  { id: 's2',  material: 'stroh',     name: 'Getreideanbau Burggrafenamt',  location: 'Meran',        detail: 'Stroh als Dämmstoff, λ = 0.045 W/mK',            lat: 46.67, lng: 11.18 },
  { id: 's3',  material: 'stroh',     name: 'Etschtal Landwirtschaft',      location: 'Bozen Süd',    detail: 'Weizen- & Gerstenstroh',                          lat: 46.44, lng: 11.33 },
  { id: 'hk1', material: 'hanf',      name: 'Hanfanbau Vinschgau',          location: 'Schlanders',   detail: 'Hanfschäben für Hempcrete',                       lat: 46.63, lng: 10.74 },
  { id: 'hk2', material: 'hanf',      name: 'Hanffelder Pustertal',         location: 'Bruneck',      detail: 'CO₂-negative Hanf-Kalk-Mischung',                lat: 46.80, lng: 11.94 },
  { id: 'ns1', material: 'stein',     name: 'Laaser Marmor',                location: 'Laas',         detail: 'Weißer Marmor, λ = 2.3 W/mK',                   lat: 46.61, lng: 10.67 },
  { id: 'ns2', material: 'stein',     name: 'Villnoestal Porphyr',          location: 'Villanders',   detail: 'Roter Porphyr, Fundament & Sockel',               lat: 46.68, lng: 11.51 },
  { id: 'ns3', material: 'stein',     name: 'Deutschnofen Porphyr',         location: 'Deutschnofen', detail: 'Porphyr-Steinbruch, ∞ Wiederverwertbarkeit',      lat: 46.41, lng: 11.40 },
  { id: 'ns4', material: 'stein',     name: 'Dolomit-Bruch Klausen',        location: 'Klausen',      detail: 'Dolomit & Kalkstein',                             lat: 46.64, lng: 11.58 },
  { id: 'ns5', material: 'stein',     name: 'Gneis Passeiertal',            location: 'Passeiertal',  detail: 'Gneis, hohe Druckfestigkeit',                     lat: 46.81, lng: 11.21 },
  { id: 'r1',  material: 'recycling', name: 'Recyclinghof Bozen',           location: 'Bozen',        detail: 'RC-Beton, Altholz, Ziegel (PROSUST-Kartierung)', lat: 46.50, lng: 11.36 },
  { id: 'r2',  material: 'recycling', name: 'Wertstoffzentrum Meran',       location: 'Meran',        detail: 'Rückbaumaterial, GIS-kartiert',                   lat: 46.67, lng: 11.16 },
  { id: 'r3',  material: 'recycling', name: 'Recyclinghof Brixen',          location: 'Brixen',       detail: 'Altholz & RC-Zuschläge',                          lat: 46.72, lng: 11.65 },
  { id: 'r4',  material: 'recycling', name: 'Wertstoffhof Bruneck',         location: 'Bruneck',      detail: '-40% CO₂ vs. Primärmaterial',                     lat: 46.79, lng: 11.93 },
];

const ALL_TYPES: MaterialType[] = ['holz', 'lehm', 'stroh', 'hanf', 'stein', 'recycling'];

const LeafletMap = dynamic(() => import('@/components/MaterialMap/LeafletMap'), {
  ssr: false,
  loading: () => <div className={styles.mapLoading}>Karte wird geladen…</div>,
});

/* ===== CLIENT COMPONENT ===== */

export default function KarteClient() {
  const [activeFilter, setActiveFilter] = useState<MaterialType | 'all'>('all');

  const filtered = activeFilter === 'all'
    ? SOURCES
    : SOURCES.filter(s => s.material === activeFilter);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.pageHero}>
        <div className="wrapper">
          <motion.div
            className={styles.pageHeroLabel}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={styles.pageHeroLabelLine} />
            <span>WP2 · Materialkartierung</span>
          </motion.div>

          <motion.h1
            className={styles.pageHeroTitle}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Materialien<br />in Südtirol.
          </motion.h1>

          <motion.p
            className={styles.pageHeroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Interaktive Karte aller kartierten Materialquellen — Wälder,
            Steinbrüche, Landwirtschaftsflächen und Recyclinghöfe in Südtirol.
            Klick auf einen Marker für Details.
          </motion.p>

          {/* Stats */}
          <motion.div
            className={styles.statStrip}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              ['21', 'Standorte'],
              ['6', 'Materialien'],
              ['100%', 'Lokal'],
              ['100%', 'Zirkulär'],
            ].map(([v, l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statValue}>{v}</span>
                <span className={styles.statLabel}>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="wrapper">

          {/* Filter Bar */}
          <motion.div
            className={styles.filterBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button
              className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Alle
              <span className={styles.filterCount}>{SOURCES.length}</span>
            </button>

            {ALL_TYPES.map(type => (
              <button
                key={type}
                className={`${styles.filterBtn} ${activeFilter === type ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(activeFilter === type ? 'all' : type)}
                style={activeFilter === type ? {
                  background: MATERIAL_COLORS[type],
                  borderColor: MATERIAL_COLORS[type],
                  color: '#fff',
                } : {}}
              >
                <span>{MATERIAL_ICONS[type]}</span>
                {MATERIAL_LABELS[type]}
                <span className={styles.filterCount}>
                  {SOURCES.filter(s => s.material === type).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            className={styles.mapWrap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <LeafletMap sources={filtered} />
          </motion.div>

          {/* Legend */}
          <div className={styles.legend}>
            {ALL_TYPES.map(type => (
              <div key={type} className={styles.legendItem}>
                <div
                  className={styles.legendDot}
                  style={{ backgroundColor: MATERIAL_COLORS[type] }}
                />
                <span>{MATERIAL_ICONS[type]} {MATERIAL_LABELS[type]}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
