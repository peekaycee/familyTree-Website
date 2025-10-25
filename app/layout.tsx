// @ts-ignore
import './globals.css';
import Navbar from '../components/Navbar';
import { ReactNode } from 'react';
import PageTransition from './PageTransition';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <PageTransition>
            {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
