import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Welcome to Home Page');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('About Page');
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
