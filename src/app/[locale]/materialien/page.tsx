import Materials from '@/components/Materials/Materials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'LocLab — Materialien',
  description: 'Kartierung lokaler, zirkulärer Baumaterialien in Südtirol.',
};

export default function MaterialienPage() {
  return (
    <main>
      <Materials />
      <Footer />
    </main>
  );
}
