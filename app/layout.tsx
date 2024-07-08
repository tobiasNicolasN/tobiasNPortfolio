import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tobias Nuñez',
  description: 'My portfolio',
  icons: { icon: 'favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={inter.className}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
