import { SimpleCarousel } from "@/components/simple-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            🎯 TEST CAROUSEL SIMPLIFIÉ
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
            Version de test sans animations pour vérifier que tout fonctionne !
          </p>
        </div>

        {/* Indicateur de succès */}
        <div className="bg-green-100 border-2 border-green-300 rounded-lg p-6 mb-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            ✅ PAGE CHARGÉE AVEC SUCCÈS !
          </h3>
          <p className="text-green-700 text-lg">
            Si vous voyez ce message vert, Next.js fonctionne parfaitement.
            Le carousel simplifié devrait apparaître ci-dessous.
          </p>
        </div>

        <SimpleCarousel />
      </div>
    </div>
  );
}
