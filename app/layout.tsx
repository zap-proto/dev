import './global.css';
import { Provider } from '@/components/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'ZAP — Developer Docs', template: '%s | ZAP Developer Docs' },
  description: 'Developer docs for ZAP, the Zero-copy Application Protocol. Quick start, schema language, language bindings, sub-protocols.',
  keywords: ['ZAP', 'zap-proto', 'docs', 'API', 'schema', 'protocol', 'zero-copy'],
  authors: [{ name: 'ZAP Protocol Authors' }],
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    title: 'ZAP — Developer Docs',
    description: 'Build with the Zero-copy Application Protocol.',
    url: 'https://zap-proto.dev',
    siteName: 'ZAP Developer Docs',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
