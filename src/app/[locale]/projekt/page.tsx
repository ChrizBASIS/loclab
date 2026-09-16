import { getTranslations } from 'next-intl/server';
import { PageHeader, ProseSections } from '@/components/Prose/Prose';
import Milestones from '@/components/Milestones/Milestones';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('projektTitle'), description: t('projektDescription') };
}

/** K1 – Detaillierte Projektbeschreibung (Auszug Projektantrag) + Meilensteine */
export default async function ProjektPage() {
  const t = await getTranslations('Projekt');
  return (
    <main>
      <PageHeader
        category={1}
        label={t('label')}
        heading={t('heading')}
        intro={t.raw('intro') as string[]}
        image={{ src: '/images/hero-modular-house.png', alt: t('imageAlt') }}
      />
      <ProseSections sections={t.raw('sections') as { title: string; paragraphs: string[] }[]} />
      <Milestones />
      <Footer />
    </main>
  );
}
