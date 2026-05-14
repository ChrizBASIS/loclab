'use client';

import styles from './marketing.module.css';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer/Footer';
import { PencilRuler, Building, Microscope, Landmark, Hammer, Users } from 'lucide-react';

/* ===== DATA ===== */

const AUDIENCES = [
  { icon: <PencilRuler size={24} strokeWidth={1.5} />, name: 'Architekten & Planer', priority: 'Primär', reach: 'LinkedIn · Fachpresse · Konferenzen', message: 'Materialdaten, U-Werte, Baudetails' },
  { icon: <Building size={24} strokeWidth={1.5} />, name: 'Bauherren & Entwickler', priority: 'Primär', reach: 'Website · LinkedIn · Google', message: 'Referenzobjekte, Zertifizierungen' },
  { icon: <Microscope size={24} strokeWidth={1.5} />, name: 'Forschungs-Community', priority: 'Primär', reach: 'LinkedIn · Paper · Konferenzen', message: 'Publikationen, Open Data, Kollaboration' },
  { icon: <Landmark size={24} strokeWidth={1.5} />, name: 'Politik & Verwaltung', priority: 'Sekundär', reach: 'Newsletter · Reports · Events', message: 'Impact-Reports, Policy Briefs' },
  { icon: <Hammer size={24} strokeWidth={1.5} />, name: 'Handwerk & lokale KMU', priority: 'Sekundär', reach: 'Instagram · Workshops · Lokal', message: 'Schulungen, Netzwerk, Aufträge' },
  { icon: <Users size={24} strokeWidth={1.5} />, name: 'Interessierte Öffentlichkeit', priority: 'Sekundär', reach: 'Instagram · Events · Medien', message: 'Partizipation, Workshops' },
];

const CHANNELS = [
  { name: 'Instagram', type: 'Owned', frequency: '3× / Woche', goal: 'Awareness & Community', color: '#111111' },
  { name: 'LinkedIn', type: 'Owned', frequency: '2× / Woche', goal: 'B2B & Forschung', color: '#111111' },
  { name: 'Newsletter', type: 'Owned', frequency: '1× / Monat', goal: 'Lead Nurturing', color: '#BCB5A3' },
  { name: 'Website Blog', type: 'Owned', frequency: '2× / Monat', goal: 'SEO & Traffic', color: '#BCB5A3' },
  { name: 'Fachpresse', type: 'Earned', frequency: 'Bei Meilensteinen', goal: 'Credibility', color: 'rgba(17,17,17,0.2)' },
  { name: 'Konferenzen', type: 'Earned', frequency: 'Quartalsweise', goal: 'Netzwerk & Sichtbarkeit', color: 'rgba(17,17,17,0.2)' },
];

const INSTAGRAM_POSTS = [
  { type: 'Material Monday', image: '/images/material-holz.png', caption: 'Lokal gewachsen, CO₂ gespeichert, 100% recyclierbar. Südtiroler Fichte ist das Rückgrat unserer Häuser. λ-Wert: 0.13 W/mK.\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#LocLab #NachhaltigesBauen #Holzbau #Südtirol #euinmyregion #eufunds @europedirect_southtyrol', likes: '142' },
  { type: 'Behind the Scenes', image: '/images/timeline-construction.png', caption: 'Tag 47 am Reallabor. Heute: Strohballen rein, Zukunft rauf. 🌾\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#Reallabor #Strohbau #BehindTheScenes #euinmyregion #eufunds @europedirect_southtyrol', likes: '234' },
  { type: 'Materialien', image: '/images/materials-overview.png', caption: '6 Materialien. Alle lokal. Alle zirkulär. Alle lowtech. Welches ist dein Favorit? 👇\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#Lehmbau #Hanfkalk #Naturstein #CircularBuilding #euinmyregion #eufunds @europedirect_southtyrol', likes: '198' },
  { type: 'Workshop', image: '/images/workshops-community.png', caption: '🔨 Nächster Material-Workshop: 12. Juli, Bozen. Lehm in der Hand, Zukunft im Kopf.\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#Workshop #HandsOn #Lehm #Südtirol #euinmyregion #eufunds @europedirect_southtyrol', likes: '176' },
  { type: 'Architektur', image: '/images/hero-modular-house.png', caption: 'Lowtech heißt nicht Low-Design. Unser Modulhaus in den Alpen. ⛰️\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#Architektur #Lowtech #ModularesBauen #euinmyregion #eufunds @europedirect_southtyrol', likes: '312' },
  { type: 'Forschung', image: '/images/material-stroh.png', caption: 'Stroh: CO₂-negativ. Hanf-Kalk: CO₂-negativ. Lehm: klimaneutral. Beton: 8% der globalen Emissionen.\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027', hashtags: '#CO2 #Klimaschutz #Bauwende #euinmyregion #eufunds @europedirect_southtyrol', likes: '267' },
];

const LINKEDIN_POSTS = [
  { author: 'LocLab Research', role: 'Kofinanziert von der EU · EFRE-FESR 2021–2027 · NOI Techpark', content: '📍 Meilenstein erreicht: Materialkartierung WP2 abgeschlossen. 6 lokale Baustoffe — Holz, Lehm, Stroh, Hanf-Kalk, Naturstein und Recycling-Zuschläge — dokumentiert inkl. λ-Werte, CO₂-Bilanz und Kreislauffähigkeit.\n\nNächster Schritt: Integration in die modularen Reallabore.\n\n🇪🇺 Kofinanziert von der Europäischen Union im Rahmen des Programms EFRE-FESR 2021–2027\n\n→ loclab-website.netlify.app/de/materialien\n\n#euinmyregion #eufunds #LocLab #NachhaltigesBauen', reactions: '87', comments: '12' },
  { author: 'LocLab Research', role: 'Kofinanziert von der EU · EFRE-FESR 2021–2027 · NOI Techpark', content: 'Die Frage ist nicht: Können wir nachhaltig bauen?\nDie Frage ist: Warum bauen wir es nicht längst?\n\nLocLab zeigt: Mit lokalen Materialien ohne High-Tech-Abhängigkeit erreicht man U-Werte, die jeden KfW-Standard erfüllen.\n\nLowtech ≠ Low Performance.\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027\n\n#euinmyregion #eufunds #Bauwende', reactions: '134', comments: '23' },
  { author: 'LocLab Research', role: 'Kofinanziert von der EU · EFRE-FESR 2021–2027 · NOI Techpark', content: '📢 Jetzt anmelden: Material-Workshop am 12. Juli in Bozen.\n\nLehm, Stroh, Hanf-Kalk — hands-on erleben. Für Architekten, Planer, Studierende und alle, die Bauen neu denken wollen.\n\n🇪🇺 Kofinanziert von der Europäischen Union – EFRE-FESR 2021–2027\n\n5 Plätze frei → Link im Kommentar\n\n#euinmyregion #eufunds #Workshop', reactions: '56', comments: '8' },
];

const CALENDAR = [
  { week: 'KW 27', instagram: 'Material-Montag: Holz', linkedin: 'Meilenstein WP2', blog: '—', event: '—' },
  { week: 'KW 28', instagram: 'Behind the Scenes', linkedin: 'Paper: Lehmbau', blog: 'Stroh als Dämmstoff', event: '—' },
  { week: 'KW 29', instagram: 'Workshop-Teaser', linkedin: 'Partner: LokHaus+', blog: '—', event: 'Material-Workshop' },
  { week: 'KW 30', instagram: 'Workshop-Recap', linkedin: 'λ-Werte Ergebnisse', blog: 'Workshop-Recap', event: '—' },
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
          <motion.div className={styles.heroLabel} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <span className={styles.heroLabelLine} />
            <span>Kommunikation & Marketing</span>
          </motion.div>

          <motion.h1 className={styles.heroTitle} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
            Marketing-<br />strategie.
          </motion.h1>

          <motion.p className={styles.heroSubtitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Wen wollen wir erreichen? Wie? Und was kommunizieren wir?
            Ein strukturierter Plan für die Außenkommunikation von LocLab.
          </motion.p>

          <motion.div className={styles.kpiStrip} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            {[['6', 'Zielgruppen'], ['6', 'Kanäle'], ['15+', 'Posts geplant'], ['Q3', 'Start 2026']].map(([v, l]) => (
              <div key={l} className={styles.kpi}>
                <span className={styles.kpiValue}>{v}</span>
                <span className={styles.kpiLabel}>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== KERNBOTSCHAFT ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Kernbotschaft</div>
          <h2 className={styles.sectionHeading}>
            Bauen, wie die Zukunft es braucht —<br />mit dem Wissen von hier.
          </h2>

          <div className={styles.messageGrid}>
            {[
              { tag: 'Vision', text: 'Eine neue Ära des nachhaltigen Bauens. Lokal, zirkulär, lowtech.' },
              { tag: 'Mission', text: 'Wir erforschen, wie Südtirols natürliche Materialien und Handwerkstradition das Bauen der Zukunft prägen.' },
              { tag: 'Proof Points', text: '6 lokale Materialien kartiert · 2 modulare Reallabore · 5 Konsortialpartner · EU-gefördert' },
              { tag: 'Call-to-Action', text: 'Workshop besuchen · Forschung verfolgen · Partner werden' },
            ].map((m, i) => (
              <motion.div key={m.tag} className={styles.messageCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.8 }}>
                <span className={styles.messageTag}>{m.tag}</span>
                <p>{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ZIELGRUPPEN ===== */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Zielgruppen</div>
          <h2 className={styles.sectionHeading}>Wen wollen wir erreichen?</h2>

          <div className={styles.audienceList}>
            {AUDIENCES.map((a, i) => (
              <motion.div key={a.name} className={styles.audienceRow} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.8 }}>
                <span className={styles.audienceIcon}>{a.icon}</span>
                <span className={styles.audienceName}>{a.name}</span>
                <span className={`${styles.audienceBadge} ${a.priority === 'Primär' ? styles.badgePrimary : styles.badgeSecondary}`}>{a.priority}</span>
                <div className={styles.audienceMeta}>
                  <span className={styles.metaLabel}>Kanäle</span>
                  <span>{a.reach}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KANÄLE ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>Kanalstrategie</div>
          <h2 className={styles.sectionHeading}>Wie erreichen wir sie?</h2>
          <p className={styles.sectionIntro}>
            Sechs Kanäle, klar priorisiert. Owned Media baut die Community auf,
            Earned Media schafft Credibility.
          </p>

          <div className={styles.channelGrid}>
            {CHANNELS.map((ch, i) => (
              <motion.div key={ch.name} className={styles.channelCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.8 }}>
                <div className={styles.channelAccent} style={{ backgroundColor: ch.color }} />
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

      {/* ===== INSTAGRAM ===== */}
      <section className={styles.igSection}>
        <div className="wrapper">
          <div className={styles.igSectionLabel}>Instagram · @loclab.research</div>
          <h2 className={styles.igSectionHeading}>Geplante Posts</h2>
          <p className={styles.igSectionIntro}>
            Visuelle Stories: Materialien, Baustelle, Team, Workshops. 3× pro Woche.
          </p>
          <div className={styles.complianceNote}>
            <span className={styles.complianceTag}>EU-Richtlinie</span>
            <p>Jeder Post enthält den Pflichthinweis zur EU-Kofinanzierung im Caption und die empfohlenen Hashtags <strong>#euinmyregion #eufunds</strong>. Tagging: <strong>@europedirect_southtyrol</strong>. Die Profilbeschreibung muss ebenfalls die EU-Unterstützung erwähnen (Kap. 4.1, Richtlinien v2.0).</p>
          </div>

          <div className={styles.igGrid}>
            {INSTAGRAM_POSTS.map((post, i) => (
              <motion.div key={i} className={styles.igPhone} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}>
                <div className={styles.igHeader}>
                  <div className={styles.igAvatar}>L</div>
                  <div className={styles.igUser}>
                    <span className={styles.igUsername}>loclab.research</span>
                    <span className={styles.igPostType}>{post.type}</span>
                  </div>
                  <span className={styles.igDots}>···</span>
                </div>
                <div className={styles.igImageWrap}>
                  <img src={post.image} alt={post.type} className={styles.igImage} />
                </div>
                <div className={styles.igActions}>
                  <div className={styles.igActionIcons}><span>♡</span><span>💬</span><span>↗</span></div>
                  <span>⊡</span>
                </div>
                <div className={styles.igLikes}>{post.likes} Gefällt mir</div>
                <div className={styles.igCaption}><span className={styles.igCaptionUser}>loclab.research </span>{post.caption}</div>
                <div className={styles.igHashtags}>{post.hashtags}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LINKEDIN ===== */}
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.sectionLabel}>LinkedIn · Thought Leadership</div>
          <h2 className={styles.sectionHeading}>Fachbeiträge & Meilensteine</h2>
          <p className={styles.sectionIntro}>
            2× pro Woche: Forschungsergebnisse, Partner-Spotlights, Einladungen.
          </p>
          <div className={styles.complianceNote}>
            <span className={styles.complianceTag}>EU-Richtlinie</span>
            <p>Jeder LinkedIn-Post enthält den Pflichthinweis zur EU-Kofinanzierung. Die Profilbeschreibung zeigt: <strong>„Kofinanziert von der EU · EFRE-FESR 2021–2027"</strong>. Hashtags <strong>#euinmyregion #eufunds</strong> werden in jedem Post verwendet. Tagging: <strong>@edsouthtyrol</strong> (Facebook-Pendant).</p>
          </div>

          <div className={styles.liGrid}>
            {LINKEDIN_POSTS.map((post, i) => (
              <motion.div key={i} className={styles.liCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}>
                <div className={styles.liHeader}>
                  <div className={styles.liAvatar}>L</div>
                  <div className={styles.liUser}>
                    <span className={styles.liName}>{post.author}</span>
                    <span className={styles.liRole}>{post.role}</span>
                  </div>
                </div>
                <div className={styles.liContent}>
                  {post.content.split('\n').map((line, j) => (
                    <p key={j}>{line || <>&nbsp;</>}</p>
                  ))}
                </div>
                <div className={styles.liFooter}>
                  <span>👍 {post.reactions} Reaktionen</span>
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
                {CALENDAR.map((row, i) => (
                  <motion.tr key={row.week} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }}>
                    <td className={styles.calWeek}>{row.week}</td>
                    <td>{row.instagram}</td>
                    <td>{row.linkedin}</td>
                    <td>{row.blog}</td>
                    <td className={row.event !== '—' ? styles.calEvent : ''}>{row.event}</td>
                  </motion.tr>
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
