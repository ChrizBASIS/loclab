import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'LocLab — Das Projekt',
  description: 'Ein EU-gefördertes Reallabor für innovatives Bauen in Südtirol.',
};

export default function ProjektPage() {
  return (
    <main>
      <About />
      <Footer />
    </main>
  );
}
