import Documentation from '@/components/Documentation/Documentation';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'LocLab — Dokumentation',
  description: 'Projektphasen, Meilensteine und wissenschaftliche Publikationen.',
};

export default function DokumentationPage() {
  return (
    <main>
      <Documentation />
      <Footer />
    </main>
  );
}
