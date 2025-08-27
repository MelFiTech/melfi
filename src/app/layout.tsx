import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Header from "@/components/navigation/Header";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melfi Tech - Software Agency",
  description: "Crafting Digital Excellence Through Innovation",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' }
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Melfi Tech - Software Agency',
    description: 'Crafting Digital Excellence Through Innovation',
    url: 'https://melfi.tech',
    siteName: 'Melfi Tech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Melfi Tech'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melfi Tech - Software Agency',
    description: 'Crafting Digital Excellence Through Innovation',
    images: ['/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
        style={{ fontFamily: 'var(--font-sora), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
