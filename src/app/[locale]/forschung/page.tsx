import { getTranslations } from 'next-intl/server';
import { PageHeader, FactGrid, type Fact } from '@/components/Prose/Prose';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('forschungTitle'), description: t('forschungDescription') };
}

/** K5 – Forschung & Testverfahren */
export default async function ForschungPage() {
  const t = await getTranslations('Forschung');
  return (
    <main>
      <PageHeader
        category={5}
        label={t('label')}
        heading={t('heading')}
        intro={t.raw('intro') as string[]}
        image={{ src: '/images/documentation-research.png', alt: t('imageAlt') }}
      />
      <FactGrid
        columns={4}
        label={t('categoriesLabel')}
        heading={t('categoriesHeading')}
        items={t.raw('categories') as Fact[]}
      />
      <FactGrid
        tone="warm"
        columns={3}
        label={t('strandsLabel')}
        heading={t('strandsHeading')}
        intro={t('strandsIntro')}
        items={t.raw('strands') as Fact[]}
      />
      <Footer />
    </main>
  );
}
