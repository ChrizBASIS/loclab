import { getTranslations } from 'next-intl/server';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('konsortiumTitle'),
    description: t('konsortiumDescription'),
  };
}

export default function KonsortiumPage() {
  return (
    <main>
      <Partners />
      <Footer />
    </main>
  );
}
