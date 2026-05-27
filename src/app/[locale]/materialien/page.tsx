import { getTranslations } from 'next-intl/server';
import Materials from '@/components/Materials/Materials';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('materialienTitle'),
    description: t('materialienDescription'),
  };
}

export default function MaterialienPage() {
  return (
    <main>
      <Materials />
      <Footer />
    </main>
  );
}
