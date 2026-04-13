import Workshops from '@/components/Workshops/Workshops';
import Residence from '@/components/Residence/Residence';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'LocLab — Workshops & Residency',
  description: 'Partizipative Workshops, Reallabore und Designer in Residence Programme.',
};

export default function WorkshopsPage() {
  return (
    <main>
      <Workshops />
      <Residence />
      <Footer />
    </main>
  );
}
