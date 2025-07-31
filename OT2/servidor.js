
const http = require('http'); // 1. Importa o módulo HTTP nativo do Node.js

const porta = 3000;

const servidor = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // 5. Define o tipo de conteúdo
  res.end('Bem-vindo ao Node.js!'); // 6. Finaliza a resposta, enviando a mensagem
});

// 7. Inicia o servidor e o faz "escutar" na porta definida.
servidor.listen(porta, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${porta}/`);
  console.log('Pressione CTRL + C para derrubar o servidor.');
});