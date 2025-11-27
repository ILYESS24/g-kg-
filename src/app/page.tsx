import { FramerCarousel } from "@/components/framer-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            🎠 Framer Carousel Component
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Composant carousel avec animations fluides utilisant Framer Motion.
          </p>
        </div>

        {/* Test simple d'abord */}
        <div className="bg-white p-4 rounded-lg mb-8 text-center">
          <h3 className="text-lg font-semibold text-green-600">
            ✅ Page chargée avec succès !
          </h3>
          <p className="text-gray-600">Le carousel devrait apparaître ci-dessous :</p>
        </div>

        <FramerCarousel />
      </div>
    </div>
  );
}
