// processaStream.js
const fs = require('fs');
const path = require('path');

const caminhoArquivoGrande = path.join(__dirname, 'grande.txt');

console.log('Iniciando leitura do stream...');
let contadorDeChunks = 0;

// 1. Cria um stream de leitura para o arquivo.
const streamDeLeitura = fs.createReadStream(caminhoArquivoGrande, {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 2. Define o tamanho de cada "pedaço" para 64KB
});

// 3. Evento 'data': disparado sempre que um novo pedaço de dados chega.
streamDeLeitura.on('data', (chunk) => {
  contadorDeChunks++;
  console.log(`Recebido chunk #${contadorDeChunks}. Tamanho: ${chunk.length} bytes.`);
  // Aqui poderíamos processar o chunk (ex: contar palavras, enviar pela rede, etc.)
});

// 4. Evento 'end': disparado quando não há mais dados para ler.
streamDeLeitura.on('end', () => {
  console.log('\nLeitura do stream finalizada.');
  console.log(`Total de ${contadorDeChunks} chunks processados.`);
});

// 5. Evento 'error': disparado se ocorrer um erro durante a leitura.
streamDeLeitura.on('error', (erro) => {
  console.error('Ocorreu um erro no stream:', erro);
});