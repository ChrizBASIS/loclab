import { getTranslations } from 'next-intl/server';
import { PageHeader, FactGrid, CalloutLink, type Fact } from '@/components/Prose/Prose';
import Materials from '@/components/Materials/Materials';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('materialienTitle'), description: t('materialienDescription') };
}

/** K3 – Materialien: Einleitung, Materialpass (Sammlung), getestete Materialien, Karte */
export default async function MaterialienPage() {
  const t = await getTranslations('Materials');
  return (
    <main>
      <PageHeader
        category={3}
        label={t('label')}
        heading={t('heading')}
        intro={t.raw('intro') as string[]}
        image={{ src: '/images/materials-overview.png', alt: t('heading') }}
      />
      <Materials />
      <FactGrid
        id="getestet"
        tone="warm"
        columns={2}
        label={t('testedLabel')}
        heading={t('testedHeading')}
        intro={t('testedIntro')}
        items={t.raw('tested') as Fact[]}
      />
      <CalloutLink
        label={t('mapLabel')}
        title={t('mapTitle')}
        text={t('mapText')}
        cta={t('mapCta')}
        href="/karte"
      />
      <Footer />
    </main>
  );
}
