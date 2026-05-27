import { getTranslations } from 'next-intl/server';
import Workshops from '@/components/Workshops/Workshops';
import Residence from '@/components/Residence/Residence';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('workshopsTitle'),
    description: t('workshopsDescription'),
  };
}

export default function WorkshopsPage() {
  return (
    <main>
      <Workshops />
      <Residence />
      <Footer />
    </main>
  );
}
