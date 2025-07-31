
const fs = require('fs/promises'); 
const path = require('path'); // Módulo para lidar com caminhos de arquivos

const caminhoDoArquivo = path.join(__dirname, 'meu-arquivo.txt');

async function principal() {
  try {
    console.log('Escrevendo no arquivo...');
    // O método writeFile cria o arquivo se ele não existir, ou sobrescreve se já existir.
    await fs.writeFile(caminhoDoArquivo, 'Olá, mundo! Este conteúdo foi escrito pelo Node.js.');
    console.log('Arquivo escrito com sucesso!');

    // --- ETAPA 2: LER O ARQUIVO ---
    console.log('\nLendo o arquivo...');
    const conteudoDoArquivo = await fs.readFile(caminhoDoArquivo, 'utf8');
    console.log('Conteúdo lido:');
    console.log(conteudoDoArquivo);

  } catch (erro) {
    console.error('Ocorreu um erro:', erro);
  }
}

principal();