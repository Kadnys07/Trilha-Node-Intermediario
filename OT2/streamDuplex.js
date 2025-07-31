const { Duplex } = require('stream');

class StreamCaixaAlta extends Duplex {
  constructor(options) {
    super(options);
    this._dadosRecebidos = '';
  }

  
  _write(chunk, encoding, callback) {
    // Converte o chunk para string e adiciona ao nosso buffer interno
    this._dadosRecebidos += chunk.toString().toUpperCase();
    callback();
  }

  // 3. Método _read: lida com a leitura de dados DO stream.
  _read(size) {
    // Empurra os dados processados para quem estiver lendo
    this.push(this._dadosRecebidos);
    this.push(null); // Informa que não há mais dados para ler
  }
}

const meuStream = new StreamCaixaAlta();

// Evento para ler os dados que o stream PRODUZ
meuStream.on('data', (chunk) => {
  console.log('Dado lido do stream:', chunk.toString());
});

console.log('Escrevendo "Olá" no stream...');
meuStream.write('Olá'); // Escrevemos no stream

console.log('Escrevendo " Mundo" no stream...');
meuStream.write(' Mundo'); // Escrevemos mais dados

meuStream.end(); // Sinaliza que terminamos de escrever