import { getTranslations } from 'next-intl/server';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('projektTitle'),
    description: t('projektDescription'),
  };
}

export default function ProjektPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
