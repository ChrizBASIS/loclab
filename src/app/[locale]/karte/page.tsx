import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';
import KarteClient from './KarteClient';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('karteTitle'),
    description: t('karteDescription'),
  };
}

export default function KartePage() {
  return (
    <main>
      <KarteClient />
      <Footer />
    </main>
  );
}
