const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Get port from environment variable or use 3000 as default
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Initialize Next.js app - don't specify hostname to bind to all interfaces
const app = next({ dev });
const handle = app.getRequestHandler();

console.log('Starting Next.js server...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', port);

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  })
    .once('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    })
    .listen(port, '0.0.0.0', () => {
      console.log(`> Server ready on http://0.0.0.0:${port}`);
      console.log(`> Environment: ${dev ? 'development' : 'production'}`);
    });
}).catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
