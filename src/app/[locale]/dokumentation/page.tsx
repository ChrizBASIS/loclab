import { getTranslations } from 'next-intl/server';
import Documentation from '@/components/Documentation/Documentation';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('dokumentationTitle'),
    description: t('dokumentationDescription'),
  };
}

export default function DokumentationPage() {
  return (
    <main>
      <Documentation />
      <Footer />
    </main>
  );
}
