'use client';

import styles from './Materials.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MATERIALS = [
  {
    id: 'holz',
    name: 'Holz',
    subtitle: 'Fichte · Lärche · Tanne',
    role: 'Tragstruktur & Verschalung',
    lambda: '0.13',
    co2: '-1.6 kg CO₂/kg',
    co2Label: 'CO₂-Speicher',
    recycle: '100%',
    description: 'Südtirol verfügt über einen enorm hohen Waldanteil. Holz aus lokaler Forstwirtschaft ist der zentrale Baustoff — als Vollholz, CLT oder im innovativen leim- und folienfreien System von LokHaus+. Kurze Transportwege, hohe CO₂-Speicherung und vollständige Recyclierbarkeit machen es zum Rückgrat des Projekts.',
    image: '/images/material-holz.png',
  },
  {
    id: 'lehm',
    name: 'Lehm',
    subtitle: 'Stampflehm · Lehmputz',
    role: 'Innenwände & Raumklima',
    lambda: '0.91',
    co2: '≈ 0',
    co2Label: 'Klimaneutral',
    recycle: '100%',
    description: 'Lehm reguliert Raumfeuchtigkeit auf natürliche Weise, speichert Wärme und ist seit Jahrhunderten im alpinen Raum bewährt. Er benötigt keine energieintensiven Brennprozesse und kann am Lebensende vollständig zur Erde zurückgeführt werden — der Inbegriff zirkulären Bauens.',
    image: '/images/material-lehm.png',
  },
  {
    id: 'stroh',
    name: 'Stroh',
    subtitle: 'Strohballen-Dämmung',
    role: 'Hochleistungsdämmung',
    lambda: '0.045',
    co2: 'CO₂-negativ',
    co2Label: 'CO₂-Senke',
    recycle: '100%',
    description: 'Strohballen bieten eine exzellente Wärmedämmung (U-Wert bis 0.11 W/m²K bei 400mm). Als landwirtschaftliches Nebenprodukt ist Stroh lokal und reichlich verfügbar, bindet während des Wachstums CO₂ und ist am Ende vollständig kompostierbar.',
    image: '/images/material-stroh.png',
  },
  {
    id: 'hanf',
    name: 'Hanf-Kalk',
    subtitle: 'Hempcrete · Hanfschäben',
    role: 'Dämmung & Ausfachung',
    lambda: '0.06',
    co2: 'CO₂-negativ',
    co2Label: 'Netto-Senke',
    recycle: '100%',
    description: 'Hanf-Kalk vereint die Dämmleistung von Hanfschäben mit der thermischen Masse von Naturkalk. Das Material ist dampfdiffusionsoffen, schimmelresistent und wirkt als CO₂-Senke. Am Lebensende kann es gebrochen und als Zuschlag wiederverwendet oder kompostiert werden.',
    image: '/images/material-hanfkalk.png',
  },
  {
    id: 'stein',
    name: 'Naturstein',
    subtitle: 'Porphyr · Dolomit · Gneis',
    role: 'Fundament & Sockel',
    lambda: '2.3',
    co2: 'Sehr gering',
    co2Label: 'Lokaler Abbau',
    recycle: '∞',
    description: 'Lokaler Naturstein aus Südtiroler Steinbrüchen bietet enorme thermische Masse und unbegrenzte Lebensdauer. Porphyr, Dolomit und Gneis sind seit Jahrhunderten Bestandteil alpiner Architektur und können ohne Qualitätsverlust endlos wiederverwendet werden.',
    image: '/images/material-naturstein.png',
  },
  {
    id: 'recycling',
    name: 'Recycling-Zuschläge',
    subtitle: 'RC-Beton · Altholz · Ziegel',
    role: 'Fundament & Tragwerk',
    lambda: '1.65',
    co2: '-40% vs. Primär',
    co2Label: 'Kreislaufgeführt',
    recycle: 'Kreislauf',
    description: 'Rückbaumaterialien aus bestehenden Gebäuden werden kartiert, getestet und als Zuschläge in neuen Baustoffen eingesetzt. Das PROSUST-Projekt der Eurac Research kartiert aktuell Recyclingstandorte in ganz Südtirol mittels GIS-Daten.',
    image: '/images/material-recycling.png',
  },
];

export default function Materials() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className={styles.section} id="materials">
      <div className="wrapper">
        <motion.div
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Materialkartierung
        </motion.div>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 1 }}
        >
          Lokale Materialien, globale Wirkung.
        </motion.h2>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Im Rahmen von WP2 kartieren wir lokale Materialien und Kompetenzen in Südtirol. 
          Jedes Material wird auf seine bauphysikalischen Eigenschaften, CO₂-Bilanz und 
          Kreislauffähigkeit geprüft — für ein Bauen, das der Region und dem Planeten dient.
        </motion.p>

        <div className={styles.grid}>
          {MATERIALS.map((mat, index) => (
            <motion.div
              key={mat.id}
              className={`${styles.card} ${expandedId === mat.id ? styles.cardExpanded : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              onClick={() => setExpandedId(expandedId === mat.id ? null : mat.id)}
            >
              <div className={styles.cardImage}>
                <img src={mat.image} alt={mat.name} className={styles.img} loading="lazy" />
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardRole}>{mat.role}</span>
                <h3 className={styles.cardName}>{mat.name}</h3>
                <span className={styles.cardSubtitle}>{mat.subtitle}</span>

                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>λ-Wert</span>
                    <span className={styles.statValue}>{mat.lambda}</span>
                    <span className={styles.statUnit}>W/mK</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>CO₂</span>
                    <span className={styles.statValue}>{mat.co2Label}</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statLabel}>Recyclierbar</span>
                    <span className={styles.statValue}>{mat.recycle}</span>
                  </div>
                </div>

                <motion.p
                  className={styles.cardDesc}
                  initial={false}
                  animate={{ 
                    height: expandedId === mat.id ? 'auto' : 0, 
                    opacity: expandedId === mat.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {mat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
