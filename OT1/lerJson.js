// lerJson.js
const fs = require('fs');

fs.readFile('usuario.json', 'utf8', (erro, dados) => {
  if (erro) {
    console.log("Erro ao ler o arquivo JSON:", erro);
    return;
  }

  // Converte a string do arquivo para um objeto JavaScript
  const usuario = JSON.parse(dados);

  console.log("Informações do usuário:");
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Email: ${usuario.email}`);
  console.log(`Está ativo? ${usuario.ativo}`);
});