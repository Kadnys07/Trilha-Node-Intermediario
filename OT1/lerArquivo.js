
const fs = require('fs');

// O caminho para o arquivo que queremos ler
const caminhoDoArquivo = 'texto.txt';

fs.readFile(caminhoDoArquivo, 'utf8', (erro, dados) => {
  if (erro) {
    console.error("Ocorreu um erro ao tentar ler o arquivo:", erro);
    return;
  }

  console.log("Conteúdo do arquivo:");
  console.log(dados);
});