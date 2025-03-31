import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext'; // Import LanguageProvider

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Radhitya Guntoro Adhi | Portfolio',
  description: 'Personal portfolio website of Radhitya Guntoro Adhi, an Industrial Engineering student at ITB with skills in web development and data analysis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider> {/* Wrap children with LanguageProvider */}
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
