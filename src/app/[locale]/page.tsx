import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero/Hero';
import HomeTeaser from '@/components/HomeTeaser/HomeTeaser';
import PartnerLogos from '@/components/PartnerLogos/PartnerLogos';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomeTeaser />
      <PartnerLogos />
      <Footer />
    </main>
  );
}
