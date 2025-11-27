export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white border-8 border-black rounded-3xl p-12 shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Page avec Bordures
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Cette page a des bordures noires épaisses avec des coins arrondis.
          </p>
          <div className="bg-gray-100 border-4 border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Contenu Intérieur
            </h2>
            <p className="text-gray-600">
              Vous pouvez ajouter votre contenu ici. Les bordures sont épaisses et arrondies comme demandé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}