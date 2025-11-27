export default function TestPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fef3c7 100%)',
      padding: '20px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Test Next.js de base */}
        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px'
          }}>
            🎯 NEXT.JS TEST PAGE
          </h1>

          <div style={{
            background: '#10b981',
            color: 'white',
            padding: '20px',
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '20px 0',
            boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)'
          }}>
            ✅ NEXT.JS FONCTIONNE PARFAITEMENT !
          </div>

          <p style={{ fontSize: '1.2rem', color: '#4b5563', margin: '20px 0' }}>
            Cette page de test confirme que <strong>Next.js fonctionne</strong> !
            <br>
            Le problème vient probablement du composant carousel sur la page principale.
          </p>
        </div>

        {/* Test du composant simple */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#1f2937'
          }}>
            🧪 TEST COMPOSANT REACT
          </h2>

          <TestComponent />
        </div>

        {/* Informations de debug */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px', color: '#1f2937' }}>
            🔧 DIAGNOSTIC TECHNIQUE
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
            <div style={{ textAlign: 'center', padding: '10px', background: '#f0f9ff', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🌐</div>
              <div style={{ fontWeight: 'bold', color: '#0369a1' }}>Navigateur</div>
              <div style={{ fontSize: '0.8rem', color: '#0369a1' }}>✅ OK</div>
            </div>
            <div style={{ textAlign: 'center', padding: '10px', background: '#f0fdf4', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>⚛️</div>
              <div style={{ fontWeight: 'bold', color: '#166534' }}>Next.js</div>
              <div style={{ fontSize: '0.8rem', color: '#166534' }}>✅ OK</div>
            </div>
            <div style={{ textAlign: 'center', padding: '10px', background: '#f0fdf4', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🎨</div>
              <div style={{ fontWeight: 'bold', color: '#166534' }}>React</div>
              <div style={{ fontSize: '0.8rem', color: '#166534' }}>✅ OK</div>
            </div>
            <div style={{ textAlign: 'center', padding: '10px', background: '#fee2e2', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🎠</div>
              <div style={{ fontWeight: 'bold', color: '#dc2626' }}>Carousel</div>
              <div style={{ fontSize: '0.8rem', color: '#dc2626' }}>❌ Problème</div>
            </div>
          </div>

          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: '#fef3c7',
            border: '2px solid #f59e0b',
            borderRadius: '10px'
          }}>
            <h4 style={{ color: '#92400e', fontWeight: 'bold', marginBottom: '10px' }}>
              🎯 PROCHAINES ÉTAPES :
            </h4>
            <ul style={{ color: '#92400e', paddingLeft: '20px' }}>
              <li>• Testez maintenant <strong>http://localhost:3000/test</strong></li>
              <li>• Comparez avec <strong>http://localhost:3000</strong> (page principale)</li>
              <li>• Si cette page fonctionne mais pas la principale → problème dans le composant carousel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant de test simple
function TestComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ marginBottom: '15px', color: '#6b7280' }}>
        Si vous voyez ce compteur et pouvez cliquer, React fonctionne parfaitement !
      </p>

      <div style={{ marginBottom: '15px' }}>
        <span style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#3b82f6',
          margin: '0 20px'
        }}>
          {count}
        </span>
      </div>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        📈 Incrémenter ({count})
      </button>
    </div>
  );
}
