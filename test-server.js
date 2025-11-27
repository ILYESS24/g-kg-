const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>Test Server</title></head>
    <body style="margin: 0; padding: 20px; font-family: Arial;">
      <h1>🚀 Serveur de Test Fonctionnel !</h1>
      <p>Le serveur HTTP Node.js fonctionne correctement sur le port 3000.</p>
      <div style="border: 8px solid black; border-radius: 24px; background: white; padding: 20px; margin: 20px 0;">
        <h2>Page avec Bordures Noires</h2>
        <p>Cette page blanche a des bordures épaisses et des coins arrondis.</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(3001, 'localhost', () => {
  console.log('✅ Serveur de test démarré sur http://localhost:3001');
});
