
const minhaString = 'Olá, Parceiro de Programação!';
const bufferDaString = Buffer.from(minhaString, 'utf-8');

console.log('String original:', minhaString);
console.log('Buffer (representação hexadecimal):', bufferDaString);
console.log('Buffer (representação em bytes):', bufferDaString.toString('hex'));

// 2. Tamanho do Buffer
console.log(`\nA string tem ${minhaString.length} caracteres.`);
console.log(`O buffer tem ${bufferDaString.length} bytes (UTF-8 usa 1 byte por caractere comum).`);

const stringDoBuffer = bufferDaString.toString('utf-8');
console.log('\nString convertida de volta do Buffer:', stringDoBuffer);


bufferDaString.write('Oi, ', 0); // Sobrescreve os primeiros 4 bytes
console.log('\nString após manipulação direta do Buffer:', bufferDaString.toString('utf-8'));