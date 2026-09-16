import { getTranslations } from 'next-intl/server';
import LegalPage from '@/components/Prose/LegalPage';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('impressumTitle'), description: t('impressumDescription'), robots: { index: false } };
}

export default function ImpressumPage() {
  return <LegalPage kind="impressum" />;
}
