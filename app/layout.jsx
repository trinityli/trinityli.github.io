import { Inter, Karla } from 'next/font/google'
import "./globals.css";

import Header from './components/Header';
import Footer from './components/Footer';

const inter_init = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter'
})

const karla_init = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-karla'
})
// const karla = Karla({

// })

export const metadata = {
  title: "Trinity Li",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${inter_init.variable} ${karla_init.variable} flex flex-col min-h-screen bg-gradient-pastel dark:bg-gradient-indigo`}>
          <Header />
          
          {/* <main className="w-full mx-auto pt-20 min-h-screen bg-gradient-pastel dark:bg-gradient-indigo">  */}
          <main className="w-full mx-auto pt-20"> 
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
