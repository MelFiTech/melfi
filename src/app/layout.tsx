import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Melfi - We build digital products that drive growth',
  description:
    'A global design & development studio helping startups and brands create stunning, user-focused websites and apps.',
  keywords: ['design', 'development', 'UI/UX', 'web development', 'mobile apps', 'branding'],
  authors: [{ name: 'Melfi' }],
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: 'Melfi - We build digital products that drive growth',
    description:
      'A global design & development studio helping startups and brands create stunning, user-focused websites and apps.',
    type: 'website',
    url: 'https://melfi.agency',
    siteName: 'Melfi',
    images: [
      {
        url: '/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Melfi- We build digital products that drive growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melfi - We build digital products that drive growth',
    description:
      'A global design & development studio helping startups and brands create stunning, user-focused websites and apps.',
    images: ['/thumbnail.png'],
    creator: '@melfiagency',
    site: '@melfiagency',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon_io/favicon.ico' sizes='any' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&family=Outfit:wght@800&family=Inter:wght@400&family=Source+Code+Pro:wght@400&display=swap'
          rel='stylesheet'
        />
        {/* Preload critical images */}
        <link rel='preload' as='image' href='/images/Hero-bg.png' />
        <link rel='preload' as='image' href='/MELFI-LOGO.png' />
        <link rel='preload' as='image' href='/MELFI-LOGO-BLACK.png' />
        <link rel='preload' as='image' href='/icons/figma.png' />
      </head>
      <body className={sora.className}>{children}</body>
    </html>
  );
}
