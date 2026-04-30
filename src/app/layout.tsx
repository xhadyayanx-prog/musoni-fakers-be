import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/globals.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'Home - Musoni Capital Limited',
  description: 'Empowering communities through digital microfinance in Kenya Financing Africa',
  icons: {
    icon: [
      { url: 'https://musoni.co.ke/wp-content/uploads/2025/03/cropped-Musoni-Favicon-3-32x32.png', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fmusoni5315back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body style={{ fontFamily: "'DM Sans', 'Open Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}