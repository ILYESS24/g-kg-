import { Metadata } from 'next';
import { SimpleCarousel } from "@/components/simple-carousel";

// Métadonnées SEO optimisées
export const metadata: Metadata = {
  title: 'Carousel Interactif - Next.js & shadcn/ui',
  description: 'Carousel d\'images moderne et accessible avec navigation clavier, indicateurs visuels et design responsive. Construit avec Next.js, TypeScript et shadcn/ui.',
  keywords: ['carousel', 'nextjs', 'react', 'typescript', 'shadcn', 'accessible', 'responsive'],
  authors: [{ name: 'Carousel Demo' }],
  creator: 'Next.js + shadcn/ui',
  publisher: 'Demo App',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Carousel Interactif Moderne',
    description: 'Découvrez un carousel d\'images entièrement accessible avec navigation intuitive.',
    url: '/',
    siteName: 'Carousel Demo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Carousel Demo - Misty Mountain Majesty',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carousel Interactif - Next.js & shadcn/ui',
    description: 'Carousel d\'images moderne et accessible avec navigation clavier et design responsive.',
    images: ['https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1200&auto=format&fit=crop'],
    creator: '@demo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header avec navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎠</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Carousel Interactif</h1>
                <p className="text-sm text-gray-500">Next.js + shadcn/ui</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>En ligne</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Hero section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            ✨ Version Finale Optimisée
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Carousel Moderne
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Découvrez un carousel d'images entièrement accessible avec navigation intuitive,
            animations fluides et design responsive. Construit avec les meilleures pratiques
            modernes de développement web.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-green-500">✅</span>
              <span className="text-sm font-medium">Accessibilité WCAG</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-blue-500">📱</span>
              <span className="text-sm font-medium">Responsive Design</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-purple-500">⚡</span>
              <span className="text-sm font-medium">Performance Optimisée</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-orange-500">🎯</span>
              <span className="text-sm font-medium">TypeScript Strict</span>
            </div>
          </div>
        </section>

        {/* Indicateur de statut */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              Application Chargée avec Succès !
            </h3>
            <p className="text-green-700 text-lg mb-6">
              Next.js fonctionne parfaitement. Le carousel entièrement optimisé
              apparaît ci-dessous avec toutes les améliorations appliquées.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-green-600 font-semibold">🎨 UI/UX</div>
                <div className="text-gray-600">Design moderne</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-blue-600 font-semibold">♿ Accessibilité</div>
                <div className="text-gray-600">Navigation complète</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-purple-600 font-semibold">📊 Performance</div>
                <div className="text-gray-600">Images optimisées</div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-orange-600 font-semibold">🔧 Code</div>
                <div className="text-gray-600">TypeScript strict</div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel principal */}
        <section className="mb-16">
          <SimpleCarousel />
        </section>

        {/* Section d'informations */}
        <section className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🚀 Fonctionnalités Implémentées
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez toutes les améliorations apportées pour une expérience utilisateur exceptionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">⌨️</div>
              <h3 className="font-bold text-lg mb-2">Navigation Clavier</h3>
              <p className="text-gray-600 text-sm">
                Utilisez les touches ← et → pour naviguer entre les images.
                Accessibilité complète avec focus visible.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold text-lg mb-2">Design Responsive</h3>
              <p className="text-gray-600 text-sm">
                Interface adaptative qui fonctionne parfaitement sur
                desktop, tablette et mobile.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">
                Images optimisées automatiquement, chargement lazy,
                et animations fluides sans impact sur les performances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Gestion d'Erreurs</h3>
              <p className="text-gray-600 text-sm">
                Détection et affichage élégant des erreurs de chargement
                d'images avec indicateurs visuels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">UI/UX Moderne</h3>
              <p className="text-gray-600 text-sm">
                Design moderne avec gradients, ombres portées,
                transitions fluides et micro-interactions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-bold text-lg mb-2">Code de Qualité</h3>
              <p className="text-gray-600 text-sm">
                TypeScript strict, composants réutilisables,
                bonnes pratiques et documentation complète.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">🎠</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Carousel Demo</h3>
              <p className="text-gray-400">Next.js + shadcn/ui</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Application de démonstration avec carousel interactif et accessible.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>⚡ Next.js 15</span>
            <span>🎨 Tailwind CSS</span>
            <span>🔧 TypeScript</span>
            <span>♿ Accessible</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
