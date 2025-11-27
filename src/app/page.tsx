export default function Home() {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 40px)'
      }}>
        {/* Page vide avec bordures noires */}
      </div>
    </div>
  );
}