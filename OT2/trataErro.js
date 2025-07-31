
const fs = require('fs/promises');

async function tentarLerArquivo() {
 
  try {
    console.log('Tentando ler o arquivo "arquivo-que-nao-existe.txt"...');
    const dados = await fs.readFile('arquivo-que-nao-existe.txt', 'utf8');
    // Esta linha abaixo nunca será executada se o arquivo não existir
    console.log('Arquivo lido com sucesso:', dados);

  // 2. O bloco 'catch' é executado APENAS SE ocorrer um erro no bloco 'try'.
  } catch (erro) {
    console.error('\n--- ERRO CAPTURADO ---');
    console.error('Não foi possível ler o arquivo. O programa não quebrou!');
    console.error('Detalhes do erro:', erro.message); 
    console.error('Código do Erro:', erro.code); 
  } finally {
    // 3. O bloco 'finally' é executado sempre, com ou sem erro.
    console.log('\nBloco de tentativa/captura finalizado.');
  }
}

tentarLerArquivo();