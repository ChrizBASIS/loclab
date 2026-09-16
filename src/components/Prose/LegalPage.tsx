import { getTranslations } from 'next-intl/server';
import { PageHeader, ProseSections } from '@/components/Prose/Prose';
import Footer from '@/components/Footer/Footer';

type Section = { title?: string; paragraphs: string[] };

/** Impressum / Datenschutz – Inhalte aus messages Legal.<kind> */
export default async function LegalPage({ kind }: { kind: 'impressum' | 'datenschutz' }) {
  const t = await getTranslations(`Legal.${kind}`);
  return (
    <main>
      <PageHeader label={t('label')} heading={t('heading')} intro={t.raw('intro') as string[]} />
      <ProseSections sections={t.raw('sections') as Section[]} />
      <Footer />
    </main>
  );
}
