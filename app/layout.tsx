import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'SemiDeerGuards — Premium Deer Guards for Semi Trucks',
    template: '%s | SemiDeerGuards',
  },
  description: 'Heavy-duty deer guards engineered for Volvo, Kenworth, Freightliner, Peterbilt, and Mack semi trucks. CAS-compatible, Made in USA, 3-year warranty. Free freight shipping on orders over $500.',
  keywords: ['deer guard', 'semi truck deer guard', 'Volvo deer guard', 'Kenworth deer guard', 'Freightliner deer guard', 'front end protection', 'truck bumper guard'],
  openGraph: {
    type: 'website',
    siteName: 'SemiDeerGuards',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
