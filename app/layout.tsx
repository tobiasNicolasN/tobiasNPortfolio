import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/context/LanguageContext';
// import { ThemeProvider } from '@/context/ThemeContext';
// import { useTheme } from 'next-themes'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TobiasNicolasN',
  description: 'My portfolio',
  icons: { icon: 'favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { theme } = useTheme()
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className="bg-bg-light dark:bg-bg">
        {/* <ThemeProvider> */}
          <LangProvider>{children}</LangProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
