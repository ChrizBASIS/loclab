import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'LocLab — Konsortium',
  description: 'Die Projektpartner: unibz, Pfeifer & Partners, LokHaus+, Energytech, Elektro A. Haller.',
};

export default function KonsortiumPage() {
  return (
    <main>
      <Partners />
      <Footer />
    </main>
  );
}
