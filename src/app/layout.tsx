import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    default: 'Your Brand Lookbook',
    template: '%s | Your Brand'
  },
  description: 'Discover our collections, stories, and craftsmanship.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yourdomain.com',
    siteName: 'Your Brand',
    title: 'Your Brand Lookbook',
    description: 'Discover our collections, stories, and craftsmanship.',
    images: [
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1/lookbook/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Brand Lookbook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Brand Lookbook',
    description: 'Discover our collections, stories, and craftsmanship.',
    creator: '@itsjohnuchendu',
    images: ['https://res.cloudinary.com/your-cloud-name/image/upload/v1/lookbook/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <br /><br />
        {children}
        <Footer/>
      </body>
    </html>
  );
}