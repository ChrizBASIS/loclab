import { getTranslations } from 'next-intl/server';
import { PageHeader, FactGrid, Steps, type Fact } from '@/components/Prose/Prose';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('modularHousesTitle'), description: t('modularHousesDescription') };
}

/** K4 – Realisierung der Modular Houses */
export default async function ModularHousesPage() {
  const t = await getTranslations('ModularHouses');
  return (
    <main>
      <PageHeader
        category={4}
        label={t('label')}
        heading={t('heading')}
        intro={t.raw('intro') as string[]}
        image={{ src: '/images/timeline-construction.png', alt: t('imageAlt') }}
      />
      <FactGrid
        tone="warm"
        columns={3}
        label={t('factsLabel')}
        heading={t('factsHeading')}
        items={t.raw('facts') as Fact[]}
      />
      <Steps
        label={t('stepsLabel')}
        heading={t('stepsHeading')}
        intro={t('stepsIntro')}
        items={t.raw('steps') as { title: string; text: string }[]}
        image={{ src: '/images/hero-modular-house.png', alt: t('imageAlt') }}
      />
      <Footer />
    </main>
  );
}
