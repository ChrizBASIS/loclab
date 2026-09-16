import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** Alte Routen (Struktur vor Sept. 2026) → neue Kategorien */
const LEGACY: [string, string][] = [
  ['konsortium', 'partner'],
  ['timeline', 'projekt'],
  ['dokumentation', 'forschung'],
];

const nextConfig: NextConfig = {
  // Es liegen weitere package-lock.json-Dateien oberhalb (~/Desktop);
  // ohne expliziten Root rät Turbopack den Workspace falsch und findet
  // dann next-intl / @swc/helpers nicht mehr.
  turbopack: { root: path.resolve(process.cwd()) },
  async redirects() {
    return LEGACY.flatMap(([from, to]) => [
      { source: `/${from}`, destination: `/${to}`, permanent: true },
      { source: `/:locale(de|it|en)/${from}`, destination: `/:locale/${to}`, permanent: true },
    ]);
  },
};

export default withNextIntl(nextConfig);
