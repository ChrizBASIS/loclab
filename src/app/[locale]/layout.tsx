import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Instrument_Serif, Inter, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import LenisProvider from "@/components/LenisProvider";
import "../globals.css";

/* Google Fonts as FALLBACKS only — Canela & Maison Neue load via @font-face */
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
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
