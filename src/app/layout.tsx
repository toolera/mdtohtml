import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
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
  title: "Markdown to HTML Converter | Free Online Tool",
  description: "Convert Markdown to HTML instantly with our free, fast, and responsive online converter. Perfect for developers, writers, and content creators. No registration required.",
  keywords: ["markdown", "html", "converter", "markdown to html", "online tool", "free", "responsive", "real-time"],
  authors: [{ name: "Markdown Converter" }],
  creator: "Markdown Converter",
  publisher: "Markdown Converter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mdtohtml.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Markdown to HTML Converter | Free Online Tool',
    description: 'Convert Markdown to HTML instantly with our free, fast, and responsive online converter.',
    siteName: 'Markdown to HTML Converter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown to HTML Converter | Free Online Tool',
    description: 'Convert Markdown to HTML instantly with our free, fast, and responsive online converter.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
