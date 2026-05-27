import { getLocale, getTranslations } from 'next-intl/server';
import GanttChart from '@/components/Gantt/GanttChart';
import Footer from '@/components/Footer/Footer';
import { client } from '@/sanity/lib/client';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('timelineTitle'),
    description: t('timelineDescription'),
  };
}

async function getWorkPackages() {
  try {
    return await client.fetch('*[_type == "workPackage"] | order(startMonth asc)');
  } catch (error) {
    return [];
  }
}

const MOCK_WPS = [
  { 
    _id: '1', wpNumber: 'WP 1', startMonth: 1, endMonth: 36, phase: 1, 
    title: 'Projektmanagement & Kommunikation', 
    description: 'Management, Koordination, Controlling, Kommunikationskampagne, Grafik-Design, Webseite und wissenschaftliche Verbreitung.' 
  },
  { 
    _id: '2', wpNumber: 'WP 2', startMonth: 1, endMonth: 12, phase: 1, 
    title: 'Planung Modular House', 
    description: 'Kartierung lokaler Materialien und Kompetenzen. Planung, Modellierung, BIM und digitale Modelle der zwei modularen Häuser.' 
  },
  { 
    _id: '3', wpNumber: 'WP 3', startMonth: 7, endMonth: 14, phase: 2, 
    title: 'Realisierung Modular Houses', 
    description: 'Aufbau der MH, Anlagencontainer und -technik, Montage/Abbau/Transport der Reallabore, End of Life Cycle und Modulrückgewinnung.' 
  },
  { 
    _id: '4', wpNumber: 'WP 4', startMonth: 15, endMonth: 30, phase: 3, 
    title: 'Messungen & LCA', 
    description: 'Physikalische Messungen MH, digitale und physische Versuche mit VR-Brillen, Tobi Glasses etc., Berechnung LCA und CE.' 
  },
  { 
    _id: '5', wpNumber: 'WP 5', startMonth: 12, endMonth: 36, phase: 4, 
    title: 'Real-world Lab & Partizipation', 
    description: 'RWL-Planung und -Organisation in ganz Südtirol, partizipative und bewusstseinsbildende Interventionen, transdisziplinäres Monitoring.' 
  },
];

export default async function TimelinePage() {
  const locale = await getLocale();
  const rawWorkPackages = await getWorkPackages();
  
  let workPackages = rawWorkPackages.map((wp: any) => ({
    _id: wp._id,
    wpNumber: wp.wpNumber,
    startMonth: wp.startMonth,
    endMonth: wp.endMonth,
    phase: wp.phase,
    title: wp.title?.[locale] || wp.title?.en || '',
    description: wp.description?.[locale] || wp.description?.en || ''
  }));

  if (workPackages.length === 0) {
    workPackages = MOCK_WPS;
  }

  return (
    <main>
      <GanttChart workPackages={workPackages} />
      <Footer />
    </main>
  );
}
