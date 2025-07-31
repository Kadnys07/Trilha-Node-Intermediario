// servidorComRotas.js
const http = require('http');

const porta = 3000;

const servidor = http.createServer((req, res) => {
  const url = req.url; // 1. Captura a URL da requisição
  console.log('Requisição recebida em:', url);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 2. Sistema de Rotas
  if (url === '/') {
    res.statusCode = 200;
    res.end('<h1>Página Inicial</h1><p>Bem-vindo ao nosso site!</p>');
  } else if (url === '/sobre') {
    res.statusCode = 200;
    res.end('<h1>Sobre Nós</h1><p>Somos uma empresa de soluções em Node.js.</p>');
  } else if (url === '/contato') {
    res.statusCode = 200;
    res.end('<h1>Contato</h1><p>Email: contato@nosso-site.com</p>');
  } else {
    // 3. Rota para "Não Encontrado"
    res.statusCode = 404;
    res.end('<h1>404 - Página Não Encontrada</h1>');
  }
});

servidor.listen(porta, () => {
  console.log(`🚀 Servidor com rotas rodando em http://localhost:${porta}/`);
});