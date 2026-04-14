'use client';

import styles from './marketing.module.css';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer/Footer';

/* ===== DATA ===== */

const AUDIENCES = [
  { icon: '📐', name: 'Architekten & Planer', priority: 'Primär', reach: 'LinkedIn, Fachpresse, Konferenzen', message: 'Konkrete Materialdaten, U-Werte, Baudetails' },
  { icon: '🏗', name: 'Bauherren & Entwickler', priority: 'Primär', reach: 'Website, LinkedIn, Google', message: 'Kostenvergleiche, Referenzobjekte, Zertifizierungen' },
  { icon: '🔬', name: 'Forschungs-Community', priority: 'Primär', reach: 'LinkedIn, Paper, Konferenzen', message: 'Publikationen, Open Data, Kollaboration' },
  { icon: '🏛', name: 'Politik & Verwaltung', priority: 'Sekundär', reach: 'Newsletter, Reports, Events', message: 'Impact-Reports, Policy Briefs, Best Practices' },
  { icon: '🔨', name: 'Handwerk & KMU', priority: 'Sekundär', reach: 'Instagram, Workshops, Lokal', message: 'Schulungen, Netzwerk, Aufträge' },
  { icon: '🌱', name: 'Öffentlichkeit', priority: 'Sekundär', reach: 'Instagram, Events, Medien', message: 'Verständliche Aufbereitung, Partizipation' },
];

const CHANNELS = [
  { name: 'Instagram', type: 'Owned', frequency: '3×/Woche', goal: 'Awareness & Community', color: '#E4405F' },
  { name: 'LinkedIn', type: 'Owned', frequency: '2×/Woche', goal: 'B2B & Forschung', color: '#0A66C2' },
  { name: 'Newsletter', type: 'Owned', frequency: '1×/Monat', goal: 'Lead Nurturing', color: '#1B3A2D' },
  { name: 'Website Blog', type: 'Owned', frequency: '2×/Monat', goal: 'SEO & Traffic', color: '#BCB5A3' },
  { name: 'Fachpresse', type: 'Earned', frequency: 'Bei Meilensteinen', goal: 'Credibility', color: '#111' },
  { name: 'Konferenzen', type: 'Earned', frequency: 'Quartalsweise', goal: 'Netzwerk & Sichtbarkeit', color: '#8A8A8A' },
];

const INSTAGRAM_POSTS = [
  {
    type: 'Material Monday',
    image: '/images/material-holz.png',
    caption: 'Lokal gewachsen, CO₂ gespeichert, 100% recyclierbar. Südtiroler Fichte ist das Rückgrat unserer modularen Häuser. λ-Wert: 0.13 W/mK.',
    hashtags: '#LocLab #NachhaltigesBauen #Holzbau #Südtirol',
    likes: '142',
  },
  {
    type: 'Behind the Scenes',
    image: '/images/timeline-construction.png',
    caption: 'Tag 47 am Reallabor. Heute: Strohballen rein, Zukunft rauf. 🌾',
    hashtags: '#Reallabor #Strohbau #BehindTheScenes',
    likes: '234',
  },
  {
    type: 'Fact Card',
    image: '/images/materials-overview.png',
    caption: '6 Materialien. Alle lokal. Alle zirkulär. Alle lowtech. Welches ist dein Favorit? 👇',
    hashtags: '#Lehmbau #Hanfkalk #Naturstein #CircularBuilding',
    likes: '198',
  },
  {
    type: 'Workshop',
    image: '/images/workshops-community.png',
    caption: '🔨 Nächster Material-Workshop: 12. Juli, Bozen. Lehm in der Hand, Zukunft im Kopf. Link in Bio.',
    hashtags: '#Workshop #HandsOn #Lehm #Südtirol',
    likes: '176',
  },
  {
    type: 'Architektur',
    image: '/images/hero-modular-house.png',
    caption: 'Lowtech heißt nicht Low-Design. Unser Modulhaus in den Alpen. ⛰️',
    hashtags: '#Architektur #Lowtech #ModularesBauen #Dolomiten',
    likes: '312',
  },
  {
    type: 'CO₂-Vergleich',
    image: '/images/material-stroh.png',
    caption: 'Stroh: CO₂-negativ. Hanf-Kalk: CO₂-negativ. Lehm: klimaneutral. Beton: 8% der globalen Emissionen. Die Wahl liegt auf der Hand.',
    hashtags: '#CO2 #Klimaschutz #Bauwende #Strohbau',
    likes: '267',
  },
];

const LINKEDIN_POSTS = [
  {
    author: 'LocLab Research',
    role: 'EU-gefördertes Reallabor · NOI Techpark',
    content: '📍 Meilenstein erreicht: Die Materialkartierung für WP2 ist abgeschlossen. 6 lokale Baustoffe — Holz, Lehm, Stroh, Hanf-Kalk, Naturstein und Recycling-Zuschläge — sind vollständig dokumentiert inkl. λ-Werte, CO₂-Bilanz und Kreislauffähigkeit.\n\nNächster Schritt: Integration in die modularen Reallabore.\n\n→ Alle Daten auf loclab-website.netlify.app/de/materialien',
    reactions: '87',
    comments: '12',
  },
  {
    author: 'LocLab Research',
    role: 'EU-gefördertes Reallabor · NOI Techpark',
    content: 'Die Frage ist nicht: Können wir nachhaltig bauen?\nDie Frage ist: Warum bauen wir es nicht längst?\n\nLocLab zeigt: Mit lokalen Materialien, ohne High-Tech-Abhängigkeit, erreicht man U-Werte die jeden KfW-Standard erfüllen.\n\nLowtech ≠ Low Performance.',
    reactions: '134',
    comments: '23',
  },
  {
    author: 'LocLab Research',
    role: 'EU-gefördertes Reallabor · NOI Techpark',
    content: '📢 Jetzt anmelden: Material-Workshop am 12. Juli in Bozen.\n\nLehm, Stroh, Hanf-Kalk — hands-on erleben.\nFür Architekten, Planer, Studierende und alle, die Bauen neu denken wollen.\n\n5 Plätze noch frei → Link im Kommentar',
    reactions: '56',
    comments: '8',
  },
];

const CALENDAR = [
  { week: 'KW 27', instagram: 'Material-Montag: Holz', linkedin: 'Meilenstein WP2', blog: '—', event: '—' },
  { week: 'KW 28', instagram: 'Behind the Scenes', linkedin: 'Paper: Lehmbau', blog: 'Stroh als Dämmstoff', event: '—' },
  { week: 'KW 29', instagram: 'Workshop-Teaser', linkedin: 'Partner: LokHaus+', blog: '—', event: 'Material-Workshop' },
  { week: 'KW 30', instagram: 'Workshop-Recap', linkedin: 'Forschung: λ-Werte', blog: 'Workshop-Recap', event: '—' },
  { week: 'KW 31', instagram: 'Fact Card: CO₂', linkedin: 'Thought Leadership', blog: '—', event: '—' },
  { week: 'KW 32', instagram: 'Team Spotlight', linkedin: 'Open Data Release', blog: 'Hanf-Kalk Analyse', event: 'Open House' },
];

/* ===== COMPONENT ===== */

export default function MarketingPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className="wrapper">
          <motion.div
            className={styles.heroLabel}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={styles.heroLabelLine} />
            <span>Kommunikation & Marketing</span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Marketing-<br />strategie
          </motion.h1>

          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Wen wollen wir erreichen? Wie? Und was kommunizieren wir?
            <br />Ein datengetriebener Plan für das LocLab-Projekt.
          </motion.p>

          {/* KPI Strip */}
          <motion.div
            className={styles.kpiStrip}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className={styles.kpi}>
              <span className={styles.kpiValue}>6</span>
              <span className={styles.kpiLabel}>Zielgruppen</span>
            </div>
            <div className={styles.kpi}>
              <span className={styles.kpiValue}>6</span>
              <span className={styles.kpiLabel}>Kanäle</span>
            </div>
            <div className={styles.kpi}>
              <span className={styles.kpiValue}>15+</span>
              <span className={styles.kpiLabel}>Posts geplant</span>
            </div>
            <div className={styles.kpi}>
              <span className={styles.kpiValue}>Q3</span>
              <span className={styles.kpiLabel}>Start 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== NARRATIVE ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Kernbotschaft</div>
          <h2 className={styles.sectionHeading}>
            Bauen, wie die Zukunft es braucht — mit dem Wissen von hier.
          </h2>

          <div className={styles.messageGrid}>
            <motion.div className={styles.messageCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className={styles.messageTag}>Vision</span>
              <p>Eine neue Ära des nachhaltigen Bauens. Lokal, zirkulär, lowtech.</p>
            </motion.div>
            <motion.div className={styles.messageCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }}>
              <span className={styles.messageTag}>Mission</span>
              <p>Wir erforschen, wie Südtirols natürliche Materialien und Handwerkstradition das Bauen der Zukunft prägen können.</p>
            </motion.div>
            <motion.div className={styles.messageCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className={styles.messageTag}>Proof Points</span>
              <p>6 lokale Materialien kartiert · 2 modulare Reallabore · 5 Konsortialpartner · EU-gefördert</p>
            </motion.div>
            <motion.div className={styles.messageCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}>
              <span className={styles.messageTag}>Call-to-Action</span>
              <p>Workshop besuchen · Forschung verfolgen · Partner werden</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ZIELGRUPPEN ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Zielgruppen</div>
          <h2 className={styles.sectionHeading}>Wen wollen wir erreichen?</h2>

          <div className={styles.audienceGrid}>
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a.name}
                className={styles.audienceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
              >
                <div className={styles.audienceHeader}>
                  <span className={styles.audienceIcon}>{a.icon}</span>
                  <span className={`${styles.audienceBadge} ${a.priority === 'Primär' ? styles.badgePrimary : styles.badgeSecondary}`}>
                    {a.priority}
                  </span>
                </div>
                <h3 className={styles.audienceName}>{a.name}</h3>
                <div className={styles.audienceMeta}>
                  <div><span className={styles.metaLabel}>Kanäle</span><span>{a.reach}</span></div>
                  <div><span className={styles.metaLabel}>Botschaft</span><span>{a.message}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KANÄLE ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Kanäle</div>
          <h2 className={styles.sectionHeading}>Wie erreichen wir sie?</h2>

          <div className={styles.channelGrid}>
            {CHANNELS.map((ch, i) => (
              <motion.div
                key={ch.name}
                className={styles.channelCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
              >
                <div className={styles.channelDot} style={{ backgroundColor: ch.color }} />
                <h3 className={styles.channelName}>{ch.name}</h3>
                <span className={styles.channelType}>{ch.type}</span>
                <div className={styles.channelMeta}>
                  <div><span className={styles.metaLabel}>Frequenz</span><span>{ch.frequency}</span></div>
                  <div><span className={styles.metaLabel}>Ziel</span><span>{ch.goal}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM MOCKUPS ===== */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="wrapper">
          <div className={styles.sectionLabelLight}>Instagram Feed</div>
          <h2 className={styles.sectionHeadingLight}>
            @loclab.research
          </h2>
          <p className={styles.sectionIntroLight}>
            Visuelle Stories: Materialien, Baustelle, Team, Workshops.
            3× pro Woche für Awareness & Community.
          </p>

          <div className={styles.igGrid}>
            {INSTAGRAM_POSTS.map((post, i) => (
              <motion.div
                key={i}
                className={styles.igCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                {/* Phone frame */}
                <div className={styles.igPhone}>
                  {/* Header */}
                  <div className={styles.igHeader}>
                    <div className={styles.igAvatar}>L</div>
                    <div className={styles.igUser}>
                      <span className={styles.igUsername}>loclab.research</span>
                      <span className={styles.igPostType}>{post.type}</span>
                    </div>
                    <span className={styles.igDots}>•••</span>
                  </div>
                  {/* Image */}
                  <div className={styles.igImageWrap}>
                    <img src={post.image} alt={post.type} className={styles.igImage} />
                  </div>
                  {/* Actions */}
                  <div className={styles.igActions}>
                    <div className={styles.igActionIcons}>
                      <span>♡</span>
                      <span>💬</span>
                      <span>↗</span>
                    </div>
                    <span>⊡</span>
                  </div>
                  {/* Likes */}
                  <div className={styles.igLikes}>{post.likes} Gefällt mir</div>
                  {/* Caption */}
                  <div className={styles.igCaption}>
                    <span className={styles.igCaptionUser}>loclab.research </span>
                    {post.caption}
                  </div>
                  {/* Hashtags */}
                  <div className={styles.igHashtags}>{post.hashtags}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LINKEDIN MOCKUPS ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>LinkedIn</div>
          <h2 className={styles.sectionHeading}>
            Thought Leadership & Meilensteine
          </h2>
          <p className={styles.sectionIntro}>
            2× pro Woche: Forschungsergebnisse, Partner-Spotlights, offene Stellen.
          </p>

          <div className={styles.liGrid}>
            {LINKEDIN_POSTS.map((post, i) => (
              <motion.div
                key={i}
                className={styles.liCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <div className={styles.liHeader}>
                  <div className={styles.liAvatar}>L</div>
                  <div className={styles.liUser}>
                    <span className={styles.liName}>{post.author}</span>
                    <span className={styles.liRole}>{post.role}</span>
                  </div>
                </div>
                <div className={styles.liContent}>
                  {post.content.split('\n').map((line, j) => (
                    <p key={j}>{line || <br />}</p>
                  ))}
                </div>
                <div className={styles.liFooter}>
                  <span>👍 {post.reactions}</span>
                  <span>{post.comments} Kommentare</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTENT KALENDER ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Content-Kalender</div>
          <h2 className={styles.sectionHeading}>Q3 2026 · Beispielplan</h2>

          <div className={styles.calendarWrap}>
            <table className={styles.calendar}>
              <thead>
                <tr>
                  <th>Woche</th>
                  <th>📸 Instagram</th>
                  <th>💼 LinkedIn</th>
                  <th>📝 Blog</th>
                  <th>📅 Event</th>
                </tr>
              </thead>
              <tbody>
                {CALENDAR.map((row) => (
                  <tr key={row.week}>
                    <td className={styles.calWeek}>{row.week}</td>
                    <td>{row.instagram}</td>
                    <td>{row.linkedin}</td>
                    <td>{row.blog}</td>
                    <td className={row.event !== '—' ? styles.calEvent : ''}>{row.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
