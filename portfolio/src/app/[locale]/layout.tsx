import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Radhitya Guntoro Adhi - Portfolio',
  description: 'Personal portfolio website of Radhitya Guntoro Adhi, an Industrial Engineering student at ITB with a passion for web development and data analysis.',
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
