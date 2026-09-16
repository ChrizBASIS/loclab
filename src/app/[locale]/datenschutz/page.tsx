import { getTranslations } from 'next-intl/server';
import LegalPage from '@/components/Prose/LegalPage';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('datenschutzTitle'), description: t('datenschutzDescription'), robots: { index: false } };
}

export default function DatenschutzPage() {
  return <LegalPage kind="datenschutz" />;
}
