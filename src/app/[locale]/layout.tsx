import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Instrument_Serif, Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import EuBadge from "@/components/EuBadge/EuBadge";
import LenisProvider from "@/components/LenisProvider";
import "../globals.css";

/* Google Fonts — primary web fonts (Canela & Maison Neue available via local @font-face when licensed) */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "LocLab — Local, Circular, Low-tech",
  description: "Real-world Lab for innovative building. An EU-funded laboratory redefining sustainable architecture.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${instrumentSerif.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body>
        <LenisProvider>
          <NextIntlClientProvider messages={messages}>
            {/* EU logo bar: fixed at top, always visible (above the fold) */}
            <EuBadge />
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
