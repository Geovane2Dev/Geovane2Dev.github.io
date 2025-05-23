import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: true
});

export const metadata: Metadata = {
  title: "Geovane2Dev - Web Developer | Open-Source Projects",
  description: "Professional portfolio of Geovane, a web developer specialized in self-hosted and open-source projects. Explore my projects and experience in secure web development.",
  keywords: "web developer, self-hosted, open-source, portfolio, programming, development, security, full-stack, frontend, backend, DevOps, cybersecurity",
  authors: [{ name: "Geovane2Dev", url: "https://github.com/Geovane2Dev" }],
  creator: "Geovane2Dev",
  publisher: "Geovane2Dev",
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
  alternates: {
    canonical: 'https://g2dev.me',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://g2dev.me",
    title: "Geovane2Dev - Web Developer | Self-Hosted & Open-Source Projects",
    description: "Professional portfolio of Geovane, a web developer specialized in self-hosted and open-source projects. Discover my technical skills, projects, and experience in secure web development.",
    siteName: "Geovane2Dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "Geovane2Dev",
    creator: "Geovane2Dev",
    title: "Geovane2Dev - Web Developer | Self-Hosted & Open-Source Projects",
    description: "Professional portfolio of Geovane, a web developer specialized in self-hosted and open-source projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${firaCode.className} bg-[#0a0a0a] text-[#e0e0e0] min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}