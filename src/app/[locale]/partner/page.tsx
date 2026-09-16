import { getTranslations } from 'next-intl/server';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('partnerTitle'), description: t('partnerDescription') };
}

/** K2 – Projektpartner */
export default function PartnerPage() {
  return (
    <main>
      <Partners />
      <Footer />
    </main>
  );
}
