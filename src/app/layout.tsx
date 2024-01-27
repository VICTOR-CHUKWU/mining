import type { Metadata } from 'next'
import { Poppins, Andada_Pro } from 'next/font/google'
import '@/styles/app.scss'
import { LayoutProvider } from './LayoutProvider'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({ subsets: ['latin'] })
// const popins = Poppins({ subsets: ['latin'], weight: ['100', '200', '400', '600', '700', '800'] })
const andada = Andada_Pro({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Albarika Mining App',
  description: 'Pioneering Excellence in Responsible Resource Extraction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={andada.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
