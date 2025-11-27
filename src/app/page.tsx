import VerticalCarousel from '../components/VerticalCarousel';

export default function Home() {
  const sections = [
    {
      id: 'hero',
      title: 'Bienvenue',
      backgroundColor: '#ef4444', // Rouge
      content: (
        <div>
          <p className="mb-6 text-white">Découvrez notre univers créatif</p>
          <p className="text-lg text-white">Défilez vers le bas pour explorer nos différentes sections</p>
          <div className="mt-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mx-auto animate-bounce">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'À Propos',
      backgroundColor: '#3b82f6', // Bleu
      content: (
        <div>
          <p className="mb-6 text-white">Nous sommes une équipe passionnée</p>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Nos Services',
      backgroundColor: '#10b981', // Vert
      content: (
        <div>
          <p className="mb-6 text-white">Des solutions sur mesure</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Design</h3>
              <p className="text-white">Création d'expériences uniques</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Développement</h3>
              <p className="text-white">Solutions technologiques modernes</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-white">Consulting</h3>
              <p className="text-white">Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      backgroundColor: '#f59e0b', // Orange
      content: (
        <div>
          <p className="mb-6 text-white">Nos réalisations</p>
          <p className="text-white">Découvrez nos projets les plus marquants et nos collaborations réussies.</p>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      backgroundColor: '#8b5cf6', // Violet
      content: (
        <div>
          <p className="mb-6 text-white">Prêt à travailler ensemble ?</p>
          <p className="text-white">Contactez-nous pour discuter de votre projet</p>
          <button className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
            Nous contacter
          </button>
        </div>
      )
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000', // Bordures noires épaisses
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent', // Laisser voir les couleurs des sections
        borderRadius: '24px',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 40px)'
      }}>
        <VerticalCarousel sections={sections} />
      </div>
    </div>
  );
}