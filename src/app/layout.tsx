import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Nafian Wildana - Fullstack Engineer Portfolio",
  description: "Portfolio website of M Nafian Wildana, a Fullstack Engineer with 7+ years of experience in React, Flutter, Go, and modern web technologies.",
  keywords: [
    "M Nafian Wildana",
    "Fullstack Engineer", 
    "React Developer",
    "Flutter Developer",
    "Go Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Mobile App Developer",
    "Web Developer",
    "Portfolio"
  ],
  authors: [{ name: "M Nafian Wildana", url: "https://github.com/mnafian" }],
  creator: "M Nafian Wildana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nafianwildana.com",
    title: "M Nafian Wildana - Fullstack Engineer Portfolio",
    description: "Portfolio website of M Nafian Wildana, a Fullstack Engineer with 7+ years of experience in React, Flutter, Go, and modern web technologies.",
    siteName: "M Nafian Wildana Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M Nafian Wildana - Fullstack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Nafian Wildana - Fullstack Engineer Portfolio",
    description: "Portfolio website of M Nafian Wildana, a Fullstack Engineer with 7+ years of experience in React, Flutter, Go, and modern web technologies.",
    creator: "@mnafian_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1e1e" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="vscode-dark">
      <head>
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Nafian Portfolio" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-300`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "M Nafian Wildana",
              jobTitle: "Fullstack Engineer",
              url: "https://nafianwildana.com",
              email: "nafianwildana@gmail.com",
              telephone: "+62 8771 2585822",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "Indonesia",
              },
              sameAs: [
                "https://github.com/mnafian",
                "https://www.linkedin.com/in/mnafian/",
              ],
              knowsAbout: [
                "React",
                "Next.js", 
                "Flutter",
                "Go",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "AWS",
                "Mobile App Development",
                "Web Development",
                "Fullstack Development"
              ],
              alumniOf: "Universitas Islam Negeri Maulana Malik Ibrahim",
              workLocation: {
                "@type": "Place",
                name: "Jakarta, Indonesia"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}