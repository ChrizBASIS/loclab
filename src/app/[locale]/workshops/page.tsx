import { getTranslations } from 'next-intl/server';
import { PageHeader, Steps, CalloutLink } from '@/components/Prose/Prose';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return { title: t('workshopsTitle'), description: t('workshopsDescription') };
}

/** K6 – Events & Workshops: Einleitung, Formate, Kalender (Programm folgt) */
export default async function WorkshopsPage() {
  const t = await getTranslations('Workshops');
  return (
    <main>
      <PageHeader
        category={6}
        label={t('label')}
        heading={t('heading')}
        intro={[t('intro')]}
        image={{ src: '/images/workshops-community.png', alt: t('imageAlt') }}
      />
      <Steps
        label={t('formatsLabel')}
        heading={t('formatsHeading')}
        items={t.raw('formats') as { title: string; text: string }[]}
        image={{ src: '/images/about-interior.png', alt: t('imageAlt') }}
      />
      <CalloutLink
        label={t('calendarLabel')}
        title={t('calendarHeading')}
        text={`${t('calendarText')} — ${t('calendarStatus')}.`}
        cta={t('calendarCta')}
        href={`mailto:${t('calendarMail')}`}
        external
      />
      <Footer />
    </main>
  );
}
