import { Inter } from 'next/font/google'
import "./globals.css";

import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Trinity Li",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
          <Header />
          
          <main className="w-full mx-auto pt-20 min-h-screen bg-gradient-pastel dark:bg-gradient-indigo"> 
            {children}
          </main>
          {/* <Footer /> */}
      </body>
    </html>
  );
}
