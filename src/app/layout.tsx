import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import Providers from '@/components/ui/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WToolkit',
  description:
    'WToolkit has significantly improved my contact management. The blurring feature ensures privacy, and the hover display is a neat touch and is handy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
