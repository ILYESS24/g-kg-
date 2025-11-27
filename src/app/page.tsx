export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#6b7280', // Gris moyen
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
        {/* Page vide avec bordures grises moins épaisses */}
      </div>
    </div>
  );
}