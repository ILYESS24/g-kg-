import VerticalCarousel from '../components/VerticalCarousel';

export default function Home() {
  const sections = [
    {
      id: 'hero',
      title: 'Bienvenue',
      backgroundColor: '#ffffff',
      content: (
        <div>
          <p className="mb-6">Découvrez notre univers créatif</p>
          <p className="text-lg">Défilez vers le bas pour explorer nos différentes sections</p>
          <div className="mt-8">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto animate-bounce">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'À Propos',
      backgroundColor: '#f8fafc',
      content: (
        <div>
          <p className="mb-6">Nous sommes une équipe passionnée</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Nos Services',
      backgroundColor: '#ffffff',
      content: (
        <div>
          <p className="mb-6">Des solutions sur mesure</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Design</h3>
              <p>Création d'expériences uniques</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Développement</h3>
              <p>Solutions technologiques modernes</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Consulting</h3>
              <p>Accompagnement personnalisé</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      backgroundColor: '#f8fafc',
      content: (
        <div>
          <p className="mb-6">Nos réalisations</p>
          <p>Découvrez nos projets les plus marquants et nos collaborations réussies.</p>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      backgroundColor: '#ffffff',
      content: (
        <div>
          <p className="mb-6">Prêt à travailler ensemble ?</p>
          <p>Contactez-nous pour discuter de votre projet</p>
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Nous contacter
          </button>
        </div>
      )
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000', // Noir complet
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 40px)'
      }}>
        <VerticalCarousel sections={sections} />
      </div>
    </div>
  );
}