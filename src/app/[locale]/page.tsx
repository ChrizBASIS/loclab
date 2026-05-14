import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import HomeTeaser from '@/components/HomeTeaser/HomeTeaser';
import PartnerLogos from '@/components/PartnerLogos/PartnerLogos';

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
