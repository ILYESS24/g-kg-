import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Polices optimisées pour les performances
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

// Métadonnées globales optimisées pour le SEO
export const metadata: Metadata = {
  title: {
    default: "Carousel Interactif - Next.js & shadcn/ui",
    template: "%s | Carousel Demo",
  },
  description: "Application de démonstration avec carousel d'images moderne, accessible et performant. Construit avec Next.js 15, TypeScript et shadcn/ui.",
  keywords: [
    "carousel",
    "nextjs",
    "react",
    "typescript",
    "shadcn",
    "tailwind",
    "accessible",
    "responsive",
    "performance",
    "demo"
  ],
  authors: [
    {
      name: "Carousel Demo Team",
      url: "https://github.com/ILYESS24/g-kg-",
    },
  ],
  creator: "Next.js + shadcn/ui Demo",
  publisher: "Demo Application",
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "demo",
};

// Configuration du viewport optimisée
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}

        {/* Script pour améliorer les performances */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Préchargement des images critiques
              if ('loading' in HTMLImageElement.prototype) {
                // Native lazy loading support
              } else {
                // Fallback pour les navigateurs plus anciens
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                  img.src = img.dataset.src;
                });
              }

              // Amélioration de l'accessibilité du focus
              document.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                  document.body.classList.add('keyboard-navigation');
                }
              });

              document.addEventListener('mousedown', function() {
                document.body.classList.remove('keyboard-navigation');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
